/* ────────────────────────────────────────────────────────────────
   Recapture the project screenshots in assets/shots/.

   Run from a folder that has playwright installed, e.g.
     cd C:/Users/ibrahim/Desktop/Jiradashboardpehr/pw-session
     node ../portfolio/tools/capture-shots.js

   Only the projects with a .jpg shot are here. The four internal
   projects use hand drawn SVG diagrams instead and are not captured:
   surescripts, calling-agent, gitlab-pipeline, kpi-bot.

   Loading a bare URL is not enough for the Practice EHR prototypes.
   They are one big index.html with JS view switching and no hash
   routing, so they always land on the Home dashboard. The `drive`
   functions below run in the page to reach the actual feature.
   ──────────────────────────────────────────────────────────────── */

const { chromium } = require('playwright');
const path = require('path');

const OUT = path.resolve(__dirname, '..', 'assets', 'shots');
const sleep = ms => new Promise(r => setTimeout(r, ms));

const DESKTOP = { width: 1440, height: 900 };
const TABLET  = { width: 1194, height: 834 };

const JOBS = [
  {
    slug: 'ai-scribe',
    url: 'https://ai-scribe-pehr.vercel.app',
    viewport: DESKTOP,
    settle: 5000,
    drive: () => {
      window.__pehrShowView('patients');
      window.__pehrShowPatientSub('openvisit');
      if (window.__pehrScribe) window.__pehrScribe.open();
    }
  },
  {
    slug: 'ai-assistant',
    url: 'https://pehr-documents.vercel.app',
    viewport: DESKTOP,
    settle: 5000,
    drive: () => {
      window.__pehrShowView('patients');
      window.__pehrShowPatientSub('documents');
      if (window.__pehrAIAssist) window.__pehrAIAssist.open();
    }
  },
  { slug: 'claim-ivr',      url: 'https://claim-ivr-dashboard.vercel.app', viewport: DESKTOP },
  { slug: 'bodymap',        url: 'https://pehr-bodymap.vercel.app',        viewport: DESKTOP, settle: 5000 },
  { slug: 'pitstop',        url: 'https://pitstoprecord.vercel.app',       viewport: DESKTOP },
  { slug: 'botcro',         url: 'https://www.botcro.com',                 viewport: DESKTOP, settle: 4000 },

  /* Stops at the team picker on purpose. Step two of this app signs in to
     real company Jira, so going further would put internal ticket data on
     a public portfolio. */
  { slug: 'jira-dashboard', url: 'https://jiradashboardpehr.vercel.app',   viewport: DESKTOP, settle: 4000 },

  /* The kiosk gates on provider + location before it will start. Its
     dropdown options are plain divs inside a .fadeUp panel, not <li>, and
     the open panel swallows pointer events, hence getByText + force. */
  {
    slug: 'kiosk',
    url: 'https://kiosk-checkin-ipad.vercel.app',
    viewport: TABLET,
    mobile: true,
    settle: 6000,
    interact: async (page) => {
      await page.getByRole('button', { name: /Select a provider/i }).first().click();
      await sleep(900);
      await page.locator('.fadeUp').getByText('Dr. Anika Patel', { exact: true }).first().click();
      await sleep(1100);
      await page.getByRole('button', { name: /Select a location/i }).first().click({ force: true });
      await sleep(900);
      await page.locator('.fadeUp').getByText('River North Clinic — 410 W. Erie', { exact: true })
        .first().click().catch(async () => {
          const first = (await page.locator('.fadeUp').first().innerText())
            .split('\n').map(s => s.trim()).filter(s => s && !/select a/i.test(s))[0];
          if (first) await page.locator('.fadeUp').getByText(first, { exact: true }).first().click();
        });
      await sleep(1100);
      await page.getByRole('button', { name: /Start Check-In/i }).first().click({ force: true });
    }
  }
];

(async () => {
  const browser = await chromium.launch();
  let failed = 0;

  for (const job of JOBS) {
    const ctx = await browser.newContext({
      viewport: job.viewport,
      deviceScaleFactor: 2,
      isMobile: !!job.mobile,
      hasTouch: !!job.mobile
    });
    const page = await ctx.newPage();
    try {
      await page.goto(job.url, { waitUntil: 'networkidle', timeout: 60000 });
      await sleep(2000);
      if (job.drive) await page.evaluate(job.drive);
      if (job.interact) await job.interact(page);
      await sleep(job.settle || 3000);
      await page.screenshot({
        path: path.join(OUT, job.slug + '.jpg'),
        type: 'jpeg',
        quality: 84
      });
      console.log('OK  ', job.slug.padEnd(16), await page.title());
    } catch (err) {
      failed++;
      console.log('FAIL', job.slug.padEnd(16), String(err).split('\n')[0].slice(0, 120));
    }
    await ctx.close();
  }

  await browser.close();
  console.log(failed ? `\n${failed} of ${JOBS.length} failed` : `\nAll ${JOBS.length} captured`);
})();
