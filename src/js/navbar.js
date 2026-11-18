/* ==========================================================================
   SHARED NAVBAR — HERBS & SPICES
   Spice & Condiments Store
   ========================================================================== */
(function (window, document) {
  'use strict';

  var body = document.body;
  var BASE = body ? (body.getAttribute('data-base') || './') : './';
  var PAGE = body ? (body.getAttribute('data-page') || '') : '';

  var LINKS = [
    { key: 'home',      label: 'Home',      href: BASE + 'index.html' },
    { key: 'products',  label: 'Products',  href: BASE + 'pages/services.html' },
    { key: 'recipes',   label: 'Recipes',   href: BASE + 'pages/blog.html' },
    { key: 'about',     label: 'Our Story', href: BASE + 'pages/about.html' },
    { key: 'pricing',   label: 'Pricing',   href: BASE + 'pages/pricing.html' },
    { key: 'contact',   label: 'Contact',   href: BASE + 'pages/contact.html' }
  ];

  /* Secondary destinations shown inside the mobile drawer */
  var SECONDARY = [];

  var ICON_SUN =
    '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true">' +
      '<circle cx="12" cy="12" r="4.2"></circle>' +
      '<path d="M12 1.8v2.4M12 19.8v2.4M4.4 4.4l1.7 1.7M17.9 17.9l1.7 1.7M1.8 12h2.4M19.8 12h2.4M4.4 19.6l1.7-1.7M17.9 6.1l1.7-1.7"></path>' +
    '</svg>';
  var ICON_MOON =
    '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path>' +
    '</svg>';
  var ICON_LTR =
    '<svg class="icon-ltr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M10 5h4a4 4 0 0 1 0 8h-4"></path>' +
      '<path d="M10 5v14"></path>' +
      '<path d="M6 5v14"></path>' +
      '<path d="M18 19l3-3-3-3"></path>' +
      '<path d="M21 16h-7"></path>' +
    '</svg>';
  var ICON_RTL =
    '<svg class="icon-rtl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M14 5h-4a4 4 0 0 0 0 8h4"></path>' +
      '<path d="M14 5v14"></path>' +
      '<path d="M18 5v14"></path>' +
      '<path d="M6 19l-3-3 3-3"></path>' +
      '<path d="M3 16h7"></path>' +
    '</svg>';

  function toolsMarkup() {
    return (
      '<div class="nav-tools">' +
        '<button type="button" class="tool-btn" data-tool="theme" aria-pressed="false" aria-label="Switch appearance" title="Toggle dark / light appearance">' +
          ICON_SUN + ICON_MOON +
        '</button>' +
        '<button type="button" class="tool-btn" data-tool="dir" aria-pressed="false" aria-label="Switch text direction" title="Switch text direction (LTR / RTL)">' +
          ICON_LTR + ICON_RTL +
        '</button>' +
      '</div>'
    );
  }

  function navItem(item) {
    var active = PAGE === item.key ||
      (item.key === 'home' && PAGE === 'home-2') ||
      (item.key === 'products' && (PAGE === 'services' || PAGE === 'service-details' || PAGE === 'products')) ||
      (item.key === 'recipes' && (PAGE === 'blog' || PAGE === 'blog-details' || PAGE === 'recipes'));
    return (
      '<li><a href="' + item.href + '" class="nav-link' + (active ? ' active' : '') + '"' +
      (active ? ' aria-current="page"' : '') + '>' + item.label + '</a></li>'
    );
  }

  function secondaryItem(item) {
    var active = PAGE === item.key ||
      (item.key === 'home' && PAGE === 'home-2') ||
      (item.key === 'products' && (PAGE === 'services' || PAGE === 'service-details' || PAGE === 'products')) ||
      (item.key === 'recipes' && (PAGE === 'blog' || PAGE === 'blog-details' || PAGE === 'recipes'));
    return (
      '<li><a href="' + item.href + '" class="mobile-nav-link"' +
      (active ? ' aria-current="page" style="color:var(--color-soft-gold);"' : '') + '>' +
      item.label + '</a></li>'
    );
  }

  function desktopCtaMarkup() {
    if (document.getElementById('custom-blend-modal')) {
      return '<a href="#custom-blends" class="nav-cta-btn open-custom-blend-btn">Signature Blends</a>';
    }
    return '<a href="' + BASE + 'pages/contact.html?topic=custom-blend" class="nav-cta-btn">Enquiry / Blends</a>';
  }

  function mobileCtaMarkup() {
    if (document.getElementById('custom-blend-modal')) {
      return '<button type="button" class="btn btn-primary open-custom-blend-btn" style="width:100%;">Signature Blends</button>';
    }
    return '<a href="' + BASE + 'pages/contact.html?topic=custom-blend" class="btn btn-primary" style="width:100%;text-align:center;">Spice &amp; Blend Enquiry</a>';
  }

  function injectNavbarStyles() {
    if (document.getElementById('amritha-navbar-core-css')) return;
    var style = document.createElement('style');
    style.id = 'amritha-navbar-core-css';
    style.textContent = [
      '.sticky-header { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background-color: var(--color-warm-bg, #FAF3EA); border-bottom: 1px solid var(--color-gold-border, rgba(227, 135, 65, 0.35)); transition: background-color 0.3s ease, box-shadow 0.3s ease; }',
      '.sticky-header.scrolled { background-color: rgba(250, 243, 234, 0.98); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); box-shadow: 0 4px 20px rgba(44, 21, 13, 0.10); }',
      '[data-theme="dark"] .sticky-header { background-color: var(--color-primary-dark, #200802); border-bottom-color: rgba(227, 135, 65, 0.28); }',
      '[data-theme="dark"] .sticky-header.scrolled { background-color: rgba(32, 8, 2, 0.98); }',
      '.navbar { display: flex !important; align-items: center !important; justify-content: space-between !important; height: 80px; position: relative; width: 100%; gap: clamp(16px, 2vw, 32px); }',
      '.nav-brand { display: inline-flex !important; align-items: center !important; gap: 12px !important; text-decoration: none !important; flex-shrink: 0 !important; cursor: pointer; }',
      '.nav-brand-logo { width: 46px; height: 46px; border-radius: 50%; object-fit: contain; background-color: var(--color-primary, #691E06); border: 1.5px solid var(--color-soft-gold, #FBBA72); box-shadow: 0 3px 10px rgba(105, 30, 6, 0.22); flex-shrink: 0; display: block; }',
      '.nav-brand-copy { display: flex !important; flex-direction: column !important; line-height: 1.15; }',
      '.nav-brand-title { font-family: var(--font-serif, "Playfair Display", Georgia, serif); font-size: 1.18rem; font-weight: 700; color: var(--color-primary, #691E06); letter-spacing: 0.01em; white-space: nowrap; }',
      '[data-theme="dark"] .nav-brand-title { color: #FFF7ED !important; }',
      '.nav-brand-tagline { font-size: 0.62rem; letter-spacing: 0.13em; color: var(--color-accent-rust, #CA5310); font-weight: 700; text-transform: uppercase; margin-top: 2px; white-space: nowrap; }',
      '.nav-menu { display: flex !important; align-items: center !important; justify-content: center !important; gap: clamp(8px, 1.4vw, 20px) !important; list-style: none !important; margin: 0 !important; padding: 0 !important; flex: 1 1 auto; }',
      '.nav-link { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-dark-text, #2C150D); position: relative; padding: 8px 0; white-space: nowrap; text-decoration: none; transition: color 0.2s ease; }',
      '[data-theme="dark"] .nav-link { color: #FFF7ED !important; }',
      '.nav-link:hover, .nav-link.active { color: var(--color-primary-light, #8F250C) !important; }',
      '.nav-link::after { content: ""; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background-color: var(--color-accent-rust, #CA5310); transition: width 0.25s ease; }',
      '.nav-link:hover::after, .nav-link.active::after { width: 100%; }',
      '.nav-actions { display: flex !important; align-items: center !important; gap: 10px !important; flex-shrink: 0 !important; position: static !important; transform: none !important; }',
      '.nav-tools { display: flex !important; align-items: center !important; gap: 8px !important; }',
      '.tool-btn { width: 40px !important; height: 40px !important; border-radius: 8px !important; border: 1px solid var(--color-gold-border, rgba(227, 135, 65, 0.35)) !important; background: var(--color-warm-surface, #FFF8F0) !important; color: var(--color-primary, #691E06) !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; transition: all 0.2s ease; flex-shrink: 0; cursor: pointer; padding: 0 !important; }',
      '[data-theme="dark"] .tool-btn { background: rgba(255, 255, 255, 0.08) !important; border-color: rgba(227, 135, 65, 0.35) !important; color: #FFF7ED !important; }',
      '.tool-btn:hover { background: var(--color-soft-gold, #FBBA72) !important; color: #200802 !important; border-color: var(--color-soft-gold, #FBBA72) !important; transform: translateY(-1px); }',
      '.tool-btn svg { width: 19px; height: 19px; }',
      '.nav-cta-btn { height: 40px !important; padding: 0 18px !important; border-radius: 8px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; font-size: 0.8rem !important; font-weight: 700 !important; letter-spacing: 0.08em !important; text-transform: uppercase !important; background-color: var(--color-primary, #691E06) !important; color: var(--color-primary-text, #FFF7ED) !important; border: 1px solid var(--color-primary, #691E06) !important; text-decoration: none !important; white-space: nowrap !important; box-shadow: 0 3px 10px rgba(105, 30, 6, 0.16); transition: all 0.2s ease; }',
      '[data-theme="dark"] .nav-cta-btn { background-color: var(--color-soft-gold, #FBBA72) !important; color: var(--color-primary-dark, #200802) !important; border-color: var(--color-soft-gold, #FBBA72) !important; }',
      '.nav-cta-btn:hover { background-color: var(--color-primary-light, #8F250C) !important; color: #fff !important; transform: translateY(-1px); }',
      '[data-theme="dark"] .nav-cta-btn:hover { background-color: var(--color-accent-amber, #E38741) !important; }',
      '.mobile-toggle { display: none !important; background: none; color: var(--color-primary, #691E06); font-size: 26px; cursor: pointer; padding: 6px; line-height: 1; border: none; }',
      '[data-theme="dark"] .mobile-toggle { color: #FFF7ED !important; }',
      '@media (max-width: 1024px) { .nav-menu { display: none !important; } .nav-cta-btn { display: none !important; } .navbar .nav-tools { display: none !important; } .mobile-toggle { display: inline-flex !important; align-items: center; justify-content: center; } }'
    ].join('\n');
    document.head.appendChild(style);
  }

  function render() {
    injectNavbarStyles();
    var mount = document.getElementById('site-navbar');
    if (!mount) {
      mount = document.createElement('div');
      mount.id = 'site-navbar';
      document.body.insertBefore(mount, document.body.firstChild);
    }

    var navLinks = LINKS.map(navItem).join('');

    mount.innerHTML =
      '<header class="sticky-header" id="header">' +
        '<div class="container">' +
          '<nav class="navbar" aria-label="Main Navigation">' +
            '<a href="' + BASE + 'index.html" class="nav-brand" aria-label="Herbs &amp; Spices — home">' +
              '<img src="' + BASE + 'assets/logo.png" alt="Herbs &amp; Spices" class="nav-brand-logo" width="46" height="46">' +
              '<div class="nav-brand-copy">' +
                '<span class="nav-brand-title">Herbs &amp; Spices</span>' +
                '<span class="nav-brand-tagline">Spice &amp; Condiments Store</span>' +
              '</div>' +
            '</a>' +

            '<ul class="nav-menu">' + navLinks + '</ul>' +

            '<div class="nav-actions">' +
              toolsMarkup() +
              desktopCtaMarkup() +
              '<button type="button" class="mobile-toggle" id="mobile-toggle-btn" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-nav">&#9776;</button>' +
            '</div>' +
          '</nav>' +
        '</div>' +
      '</header>' +

      '<div class="mobile-nav" id="mobile-nav" aria-hidden="true">' +
        '<div class="mobile-nav-header">' +
          '<div style="display:flex;align-items:center;gap:12px;">' +
            '<img src="' + BASE + 'assets/logo.png" alt="Herbs &amp; Spices" style="width:40px;height:40px;border-radius:50%;object-fit:contain;box-shadow:0 2px 8px rgba(0,0,0,0.2);">' +
            '<div class="brand-title" style="font-family:var(--font-serif);font-size:1.35rem;color:var(--color-primary);font-weight:700;">Herbs &amp; Spices</div>' +
          '</div>' +
          '<button type="button" class="mobile-nav-close" style="font-size:28px;background:none;color:var(--color-primary);cursor:pointer;" aria-label="Close navigation menu">&times;</button>' +
        '</div>' +
        '<ul class="mobile-nav-links">' +
          LINKS.map(secondaryItem).join('') + SECONDARY.map(secondaryItem).join('') +
        '</ul>' +
        toolsMarkup() +
        '<div style="height:24px;"></div>' +
        mobileCtaMarkup() +
      '</div>';
  }

  function setupHeaderBehaviour() {
    var header = document.querySelector('.sticky-header');
    if (header) {
      var onScroll = function () {
        if (window.scrollY > 40) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    var drawer = document.getElementById('mobile-nav');
    var openBtn = document.getElementById('mobile-toggle-btn');
    var closeBtn = document.querySelector('.mobile-nav-close');

    function setDrawer(open) {
      if (!drawer) return;
      drawer.classList.toggle('open', open);
      drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
      if (openBtn) openBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    }

    if (openBtn) openBtn.addEventListener('click', function () { setDrawer(true); });
    if (closeBtn) closeBtn.addEventListener('click', function () { setDrawer(false); });

    if (drawer) {
      drawer.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () { setDrawer(false); });
      });
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setDrawer(false);
    });
  }

  function boot() {
    render();
    setupHeaderBehaviour();
    if (window.ThemeController) window.ThemeController.apply(window.ThemeController.get());
    if (window.DirectionController) window.DirectionController.apply(window.DirectionController.get());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})(window, document);
