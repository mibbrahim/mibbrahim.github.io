/* ═══════════════════════════════════════════════════════════════
   Shared behaviour for index.html and project.html
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var P = window.PROJECTS || [];

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function byId(id) { return document.getElementById(id); }

  var GROUPS = [
    { key: 'all',    label: 'All' },
    { key: 'ai',     label: 'AI & Product' },
    { key: 'ops',    label: 'Delivery & Ops' },
    { key: 'design', label: 'Design' },
    { key: 'data',   label: 'Data & Automation' },
    { key: 'personal', label: 'Personal' }
  ];

  var ARROW = '<span class="box-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M7 17L17 7"/><path d="M9 7h8v8"/></svg></span>';

  /* ── Reveal on scroll ──────────────────────────────────────── */
  function initReveal() {
    var items = [].slice.call(document.querySelectorAll('.reveal'));
    if (!items.length) return;
    if (!('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ── Header: mobile menu + stuck shadow ────────────────────── */
  function initHeader() {
    var t = byId('navToggle'), nav = byId('nav'), hdr = byId('hdr');

    if (t && nav) {
      t.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        t.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      nav.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
          nav.classList.remove('is-open');
          t.setAttribute('aria-expanded', 'false');
        }
      });
    }

    if (hdr) {
      var onScroll = function () {
        hdr.classList.toggle('is-stuck', window.scrollY > 12);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  }

  /* ── Active nav link while scrolling ───────────────────────── */
  function initActiveNav() {
    var nav = byId('nav');
    if (!nav || !('IntersectionObserver' in window)) return;
    var links = [].slice.call(nav.querySelectorAll('a[href^="#"]'));
    var map = {};
    links.forEach(function (a) {
      var el = document.querySelector(a.getAttribute('href'));
      if (el) map[el.id] = a;
    });
    var ids = Object.keys(map);
    if (!ids.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove('is-active'); });
        if (map[e.target.id]) map[e.target.id].classList.add('is-active');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ids.forEach(function (id) { io.observe(document.getElementById(id)); });
  }

  /* ── Portrait: only reveal if the file is actually there ───── */
  function initPortrait() {
    var img = byId('portrait'), fb = byId('portraitFallback');
    if (!img || !fb) return;
    var show = function () {
      if (!img.naturalWidth) return;
      img.style.display = 'block';
      fb.style.display = 'none';
    };
    if (img.complete) show();
    img.addEventListener('load', show);
  }

  /* ── Project grid ──────────────────────────────────────────── */
  function boxHtml(p) {
    var status = p.link
      ? '<span class="live">Live</span>'
      : '<span>' + esc(p.status || 'Internal') + '</span>';

    return '' +
      '<a class="box" href="project.html?id=' + encodeURIComponent(p.slug) + '" ' +
        'aria-label="' + esc(p.title + ', ' + p.org) + '">' +
        '<div class="box-top">' +
          '<span class="box-cat">' + esc(p.category) + '</span>' + ARROW +
        '</div>' +
        '<h3>' + esc(p.title) + '</h3>' +
        '<div class="box-org">' + esc(p.org) + '</div>' +
        '<p class="box-tag">' + esc(p.tagline) + '</p>' +
        '<div class="box-foot">' +
          '<span>' + esc(p.year) + '</span><span class="dot"></span>' + status +
        '</div>' +
      '</a>';
  }

  function initGrid() {
    var grid = byId('grid'), filters = byId('filters');
    if (!grid) return;

    var render = function (key) {
      var list = key === 'all' ? P : P.filter(function (p) { return p.group === key; });
      grid.innerHTML = list.length
        ? list.map(boxHtml).join('')
        : '<p class="grid-empty">Nothing here yet.</p>';
    };

    if (filters) {
      var used = GROUPS.filter(function (g) {
        return g.key === 'all' || P.some(function (p) { return p.group === g.key; });
      });
      filters.innerHTML = used.map(function (g, i) {
        return '<button type="button" data-k="' + g.key + '"' +
               (i === 0 ? ' class="is-on" aria-pressed="true"' : ' aria-pressed="false"') +
               '>' + esc(g.label) + '</button>';
      }).join('');

      filters.addEventListener('click', function (e) {
        var b = e.target.closest('button[data-k]');
        if (!b) return;
        [].slice.call(filters.children).forEach(function (x) {
          x.classList.remove('is-on');
          x.setAttribute('aria-pressed', 'false');
        });
        b.classList.add('is-on');
        b.setAttribute('aria-pressed', 'true');
        render(b.getAttribute('data-k'));
      });
    }

    render('all');
  }

  /* ── Project detail page ───────────────────────────────────── */
  function initDetail() {
    var host = byId('detail');
    if (!host) return;

    var id = new URLSearchParams(location.search).get('id');
    var i = P.findIndex(function (p) { return p.slug === id; });

    if (i < 0) {
      host.innerHTML =
        '<div class="wrap p-hero">' +
          '<a class="back" href="index.html#work">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" ' +
            'stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>' +
            'Back to work</a>' +
          '<h1>Project not found</h1>' +
          '<p class="lede">That link does not match a project. Head back to the work grid and pick ' +
          'one from there.</p>' +
        '</div>';
      document.title = 'Not found, Muhammad Ibrahim';
      return;
    }

    var p = P[i], prev = P[i - 1], next = P[i + 1];

    document.title = p.title + ', Muhammad Ibrahim';
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', p.tagline);

    var shotSrc = 'assets/shots/' + p.shot;
    var isDiagram = /\.svg$/i.test(p.shot);
    var caption = isDiagram
      ? 'Diagram. Internal project, no public deployment.'
      : 'Live screen, captured from ' + (p.link || '').replace(/^https?:\/\//, '') + '.';

    var meta = [
      ['Role', p.role], ['Timeline', p.timeline],
      ['Focus', p.focus], ['Status', p.link ? 'Live' : (p.status || 'Internal')]
    ];

    host.innerHTML = '' +
      '<div class="wrap p-hero">' +
        '<a class="back" href="index.html#work">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" ' +
          'stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>' +
          'Back to work</a>' +
        '<div class="eyebrow" style="margin-top:26px">' +
          esc(p.category) + ' &nbsp;·&nbsp; ' + esc(p.org) +
        '</div>' +
        '<h1>' + esc(p.title) + '</h1>' +
        '<p class="lede">' + esc(p.tagline) + '</p>' +
        '<dl class="p-meta">' +
          meta.map(function (m) {
            return '<div><dt>' + esc(m[0]) + '</dt><dd>' + esc(m[1]) + '</dd></div>';
          }).join('') +
        '</dl>' +
        '<figure class="p-shot' + (p.fit === 'contain' ? ' contain' : '') + '" style="margin-inline:0">' +
          '<img src="' + esc(shotSrc) + '" alt="' + esc(p.title + ' interface') + '" loading="lazy">' +
          '<figcaption>' + esc(caption) + '</figcaption>' +
        '</figure>' +
      '</div>' +

      '<div class="wrap prose">' +
        '<h2>Overview</h2>' +
        (p.overview || []).map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') +

        '<h2>What I did</h2>' +
        '<ul>' + (p.contributions || []).map(function (t) {
          return '<li>' + esc(t) + '</li>';
        }).join('') + '</ul>' +

        '<h2>Stack &amp; methods</h2>' +
        '<div class="chips">' + (p.stack || []).map(function (s) {
          return '<span class="chip">' + esc(s) + '</span>';
        }).join('') + '</div>' +

        '<div class="p-cta">' +
          (p.link
            ? '<a class="btn btn-primary" href="' + esc(p.link) + '" target="_blank" rel="noopener">' +
              'Visit project ↗</a>'
            : '<span class="p-note">This one is internal to ' + esc(p.org) +
              ', so there is no public link. Happy to walk through it on a call.</span>') +
          '<a class="btn btn-ghost" href="index.html#work">All work</a>' +
        '</div>' +

        '<nav class="p-nav">' +
          (prev
            ? '<a class="prev" href="project.html?id=' + encodeURIComponent(prev.slug) + '">' +
              '<span class="dir">Previous</span><span class="name">' + esc(prev.title) + '</span></a>'
            : '<span class="is-off"></span>') +
          (next
            ? '<a class="next" href="project.html?id=' + encodeURIComponent(next.slug) + '">' +
              '<span class="dir">Next</span><span class="name">' + esc(next.title) + '</span></a>'
            : '<span class="is-off"></span>') +
        '</nav>' +

        '<div class="p-foot">' +
          '<small>Muhammad Ibrahim, Product Manager</small>' +
          '<span class="foot-links" style="color:var(--faint)">' +
            '<a href="mailto:ibrahim921007@gmail.com">Email</a>' +
            '<span class="sep">/</span>' +
            '<a href="https://www.linkedin.com/in/mouhammaddibrahimm" target="_blank" rel="noopener">LinkedIn</a>' +
            '<span class="sep">/</span>' +
            '<a href="index.html">Home</a>' +
          '</span>' +
        '</div>' +
      '</div>';
  }

  /* ── Boot ──────────────────────────────────────────────────── */
  function boot() {
    initDetail();
    initGrid();
    initHeader();
    initActiveNav();
    initPortrait();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else { boot(); }
})();
