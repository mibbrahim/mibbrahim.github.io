const { chromium } = require('playwright');
const OUT = 'C:/Users/ibrahim/Desktop/Jiradashboardpehr/portfolio/assets/shots';

const TARGETS = [
  { slug:'ai-scribe',        url:'https://ai-scribe-pehr.vercel.app',       w:1440, h:900 },
  { slug:'ai-scribe-mobile', url:'https://ai-scribe-mobile.vercel.app',     w:430,  h:900 },
  { slug:'ai-visit-summary', url:'https://ai-visit-summary.vercel.app',     w:1440, h:900 },
  { slug:'ai-assistant',     url:'https://pehr-documents.vercel.app',       w:1440, h:900 },
  { slug:'patient-portal',   url:'https://pehr-patient-portal.vercel.app',  w:1440, h:900 },
  { slug:'claim-ivr',        url:'https://claim-ivr-dashboard.vercel.app',  w:1440, h:900 },
  { slug:'jira-dashboard',   url:'https://jiradashboardpehr.vercel.app',    w:1440, h:900 },
  { slug:'demographics',     url:'https://demographics-configure.vercel.app',w:1440,h:900 },
  { slug:'kiosk',            url:'https://kiosk-checkin-ipad.vercel.app',   w:1194, h:834 },
  { slug:'ai-noshow',        url:'https://pehr-ai-noshow.vercel.app',       w:1440, h:900 },
  { slug:'bodymap',          url:'https://pehr-bodymap.vercel.app',         w:1440, h:900 },
  { slug:'pitstop',          url:'https://pitstoprecord.vercel.app',        w:430,  h:900 },
];

(async () => {
  const browser = await chromium.launch();
  for (const t of TARGETS) {
    const ctx = await browser.newContext({
      viewport:{ width:t.w, height:t.h },
      deviceScaleFactor: 2,
      isMobile: t.w < 600,
      hasTouch: t.w < 600,
    });
    const page = await ctx.newPage();
    try {
      await page.goto(t.url, { waitUntil:'networkidle', timeout:60000 });
      await page.waitForTimeout(4500);
      await page.screenshot({ path:`${OUT}/${t.slug}.jpg`, type:'jpeg', quality:84 });
      const title = await page.title();
      console.log('OK   ', t.slug, '|', title);
    } catch (e) {
      console.log('FAIL ', t.slug, '|', String(e).split('\n')[0].slice(0,110));
      try { await page.screenshot({ path:`${OUT}/${t.slug}.jpg`, type:'jpeg', quality:84 }); console.log('     (partial shot saved)'); } catch(_){}
    }
    await ctx.close();
  }
  await browser.close();
  console.log('DONE');
})();
