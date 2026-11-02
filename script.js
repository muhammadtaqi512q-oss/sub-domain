(function () {
  'use strict';

  var head = document.head;

  /* =====================================================
     1) META TAGS
     ===================================================== */
  var metas = [
    // Core
    { name: 'google-site-verification', content: 'PMoR4Hsf1SVtUtcoxIb2JnbJM9e4ra6c2xZ8GsanLfY' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { name: 'language', content: 'English' },
    { name: 'author', content: 'Muhammad Taqi' },
    { name: 'owner', content: 'Muhammad Taqi' },
    { name: 'creator', content: 'Muhammad Taqi' },
    { name: 'publisher', content: 'AVELIA' },
    { name: 'designer', content: 'Muhammad Taqi' },
    { name: 'developer', content: 'Muhammad Taqi' },

    // Title & Description
    { name: 'title', content: 'AVELIA — Create Your Own AI Like ChatGPT & Publish In Seconds' },
    { name: 'description', content: 'AVELIA by Muhammad Taqi — build your own AI like ChatGPT, create websites and games, compare software and publish to the cloud in seconds. Free no-code platform.' },
    { name: 'subject', content: 'AI Builder, Web Builder, Game Builder, Cloud Publishing' },
    { name: 'topic', content: 'Artificial Intelligence, No-Code Development, Website Builder' },
    { name: 'summary', content: 'AVELIA is a no-code platform to create AI chatbots, websites and games, then publish them online in seconds.' },
    { name: 'abstract', content: 'Create your own AI like ChatGPT and publish it in seconds with AVELIA.' },
    { name: 'classification', content: 'Technology, Software, AI Tools' },
    { name: 'category', content: 'AI Tools, Web Development, No-Code Platform' },
    { name: 'coverage', content: 'Worldwide' },
    { name: 'distribution', content: 'Global' },

    // Keywords
    { name: 'keywords', content: 'AVELIA, Muhammad Taqi, AI builder, create your own AI, ChatGPT alternative, build AI chatbot, no code AI, web builder, game builder, cloud publish, compare softwares, free AI tools, AI website builder, no-code platform, publish AI online, custom chatbot builder' },
    { name: 'news_keywords', content: 'AI Builder, No-Code, ChatGPT, Web Builder, AVELIA' },
    { name: 'rating', content: 'general' },
    { name: 'audience', content: 'all' },
    { name: 'target', content: 'developers, students, startups, creators, businesses' },
    { name: 'geo.region', content: 'PK' },
    { name: 'geo.placename', content: 'Pakistan' },
    { name: 'geo.position', content: '30.3753;69.3451' },
    { name: 'ICBM', content: '30.3753, 69.3451' },

    // Robots
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
    { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
    { name: 'bingbot', content: 'index, follow' },
    { name: 'yandex', content: 'index, follow' },
    { name: 'baiduspider', content: 'index, follow' },
    { name: 'slurp', content: 'index, follow' },
    { name: 'duckduckbot', content: 'index, follow' },
    { name: 'revisit-after', content: '1 day' },
    { name: 'referrer', content: 'no-referrer-when-downgrade' },
    { name: 'google', content: 'notranslate' },

    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'AVELIA' },
    { property: 'og:title', content: 'AVELIA — Create Your Own AI Like ChatGPT & Publish In Seconds' },
    { property: 'og:description', content: 'Build your own AI, websites and games in seconds. Created by Muhammad Taqi.' },
    { property: 'og:url', content: 'https://avelia.oneapp.dev/' },
    { property: 'og:image', content: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8OAzLeR4wS5ll-h2KN-9fkLZKvOqwFgELTXv94qL9A&s=10' },
    { property: 'og:image:secure_url', content: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8OAzLeR4wS5ll-h2KN-9fkLZKvOqwFgELTXv94qL9A&s=10' },
    { property: 'og:image:alt', content: 'AVELIA logo by Muhammad Taqi' },
    { property: 'og:image:width', content: '512' },
    { property: 'og:image:height', content: '512' },
    { property: 'og:image:type', content: 'image/png' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@avelia' },
    { name: 'twitter:creator', content: '@muhammadtaqi' },
    { name: 'twitter:title', content: 'AVELIA — Create Your Own AI Like ChatGPT' },
    { name: 'twitter:description', content: 'Build AI, websites and games in seconds. Publish to the cloud instantly. By Muhammad Taqi.' },
    { name: 'twitter:image', content: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8OAzLeR4wS5ll-h2KN-9fkLZKvOqwFgELTXv94qL9A&s=10' },
    { name: 'twitter:image:alt', content: 'AVELIA' },
    { name: 'twitter:url', content: 'https://avelia.oneapp.dev/' },
    { name: 'twitter:domain', content: 'avelia.oneapp.dev' },
    { name: 'twitter:label1', content: 'Created by' },
    { name: 'twitter:data1', content: 'Muhammad Taqi' },

    // App / PWA
    { name: 'theme-color', content: '#7c3aed' },
    { name: 'msapplication-TileColor', content: '#7c3aed' },
    { name: 'msapplication-TileImage', content: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8OAzLeR4wS5ll-h2KN-9fkLZKvOqwFgELTXv94qL9A&s=10' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    { name: 'apple-mobile-web-app-title', content: 'AVELIA' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'application-name', content: 'AVELIA' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'HandheldFriendly', content: 'True' },

    // Legal
    { name: 'copyright', content: '© 2025 Muhammad Taqi — AVELIA. All rights reserved.' },
    { name: 'rights', content: 'All rights reserved by Muhammad Taqi' },
    { name: 'license', content: 'https://avelia.oneapp.dev/owner.html' },
    { name: 'legal', content: '© Muhammad Taqi' },
    { name: 'dc.title', content: 'AVELIA — Create Your Own AI Like ChatGPT' },
    { name: 'dc.creator', content: 'Muhammad Taqi' },
    { name: 'dc.subject', content: 'AI, No-Code, Web Builder' },
    { name: 'dc.description', content: 'Create your own AI, websites and games and publish in seconds.' },
    { name: 'dc.publisher', content: 'AVELIA' },
    { name: 'dc.rights', content: '© Muhammad Taqi' },

    // Misc
    { name: 'url', content: 'https://avelia.oneapp.dev/' },
    { name: 'identifier-URL', content: 'https://avelia.oneapp.dev/' },
    { name: 'dc.language', content: 'en' },
    { name: 'dc.coverage', content: 'Worldwide' },
    { name: 'dc.type', content: 'Text' },
    { name: 'dc.format', content: 'text/html' },
    { name: 'dc.identifier', content: 'https://avelia.oneapp.dev/' },
    { name: 'generator', content: 'AVELIA' },
    { name: 'web_author', content: 'Muhammad Taqi' }
  ];

  metas.forEach(function (attrs) {
    var el = document.createElement('meta');
    Object.keys(attrs).forEach(function (k) { el.setAttribute(k, attrs[k]); });
    head.appendChild(el);
  });

  /* =====================================================
     2) LINK TAGS
     ===================================================== */
  var links = [
    { rel: 'canonical', href: 'https://avelia.oneapp.dev/' },
    { rel: 'alternate', hreflang: 'en', href: 'https://avelia.oneapp.dev/' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://avelia.oneapp.dev/' },
    { rel: 'author', href: 'https://avelia.oneapp.dev/owner.html' },
    { rel: 'publisher', href: 'https://avelia.oneapp.dev/' },
    { rel: 'icon', type: 'image/png', href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8OAzLeR4wS5ll-h2KN-9fkLZKvOqwFgELTXv94qL9A&s=10' },
    { rel: 'apple-touch-icon', href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8OAzLeR4wS5ll-h2KN-9fkLZKvOqwFgELTXv94qL9A&s=10' },
    { rel: 'manifest', href: '/manifest.json' },
    { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' },
    { rel: 'alternate', type: 'application/xml', href: '/all.xml' }
  ];

  links.forEach(function (attrs) {
    var el = document.createElement('link');
    Object.keys(attrs).forEach(function (k) { el.setAttribute(k, attrs[k]); });
    head.appendChild(el);
  });

  /* =====================================================
     3) STYLES
     ===================================================== */
  var style = document.createElement('style');
  style.textContent = `
  /* ============ BASE ============ */
  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --bg:        #06060c;
    --bg-2:      #0b0b16;
    --card:      #10101f;
    --card-2:    #15152a;
    --stroke:    rgba(255,255,255,.09);
    --txt:       #ffffff;
    --muted:     #9a9ab5;
    --p1:        #7c3aed;
    --p2:        #06b6d4;
    --p3:        #ec4899;
    --radius:    18px;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: "Inter", "Segoe UI", system-ui, -apple-system, sans-serif;
    background: var(--bg);
    color: var(--txt);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  .glow {
    position: fixed;
    border-radius: 50%;
    filter: blur(120px);
    opacity: .38;
    pointer-events: none;
    z-index: 0;
    animation: float 14s ease-in-out infinite;
  }
  .glow.g1 { width: 480px; height: 480px; background: var(--p1); top: -160px; left: -140px; }
  .glow.g2 { width: 420px; height: 420px; background: var(--p2); top: 180px; right: -160px; animation-delay: -5s; }
  .glow.g3 { width: 380px; height: 380px; background: var(--p3); bottom: -180px; left: 30%; animation-delay: -9s; opacity:.22; }

  @keyframes float {
    0%,100% { transform: translate(0,0) scale(1); }
    50%     { transform: translate(30px,-40px) scale(1.12); }
  }

  .wrap { position: relative; z-index: 1; max-width: 1180px; margin: 0 auto; padding: 0 22px; }

  header {
    position: sticky; top: 0; z-index: 50;
    backdrop-filter: blur(18px);
    background: rgba(6,6,12,.72);
    border-bottom: 1px solid var(--stroke);
  }
  .nav {
    display: flex; align-items: center; justify-content: space-between;
    padding: 14px 0;
  }
  .brand { display: flex; align-items: center; gap: 12px; text-decoration: none; }
  .brand img {
    width: 42px; height: 42px; border-radius: 12px;
    object-fit: cover;
    border: 1px solid var(--stroke);
    box-shadow: 0 0 22px rgba(124,58,237,.55);
  }
  .brand-name {
    font-size: 1.35rem; font-weight: 800; letter-spacing: 3px;
    background: linear-gradient(90deg, #fff, #b9a6ff 45%, #6ee7f9);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .brand small { display: block; font-size: .62rem; letter-spacing: 2px; color: var(--muted); font-weight: 600; }

  .nav-links { display: flex; gap: 26px; align-items: center; }
  .nav-links a {
    color: var(--muted); text-decoration: none; font-size: .9rem; font-weight: 500;
    transition: color .25s;
  }
  .nav-links a:hover { color: #fff; }

  .nav-cta {
    padding: 10px 20px; border-radius: 999px; font-size: .85rem; font-weight: 700;
    background: linear-gradient(90deg, var(--p1), var(--p2));
    color: #fff !important; text-decoration: none;
    box-shadow: 0 6px 24px rgba(124,58,237,.45);
    transition: transform .25s, box-shadow .25s;
  }
  .nav-cta:hover { transform: translateY(-2px); box-shadow: 0 10px 32px rgba(6,182,212,.5); }

  .hero { padding: 90px 0 70px; text-align: center; }

  .badge {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 7px 16px; border-radius: 999px;
    border: 1px solid var(--stroke);
    background: rgba(124,58,237,.12);
    font-size: .76rem; font-weight: 600; letter-spacing: 1.2px;
    color: #c8bcff; text-transform: uppercase;
    margin-bottom: 26px;
  }
  .dot {
    width: 7px; height: 7px; border-radius: 50%; background: #34d399;
    box-shadow: 0 0 10px #34d399;
    animation: pulse 1.8s infinite;
  }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.35} }

  h1 {
    font-size: clamp(2.1rem, 6vw, 4.3rem);
    line-height: 1.08;
    font-weight: 900;
    letter-spacing: -1.5px;
    max-width: 940px;
    margin: 0 auto 22px;
  }
  h1 .grad {
    background: linear-gradient(100deg, #a78bfa, #22d3ee 50%, #f472b6);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }

  .sub {
    color: var(--muted);
    font-size: clamp(.98rem, 2.2vw, 1.15rem);
    max-width: 680px; margin: 0 auto 38px; line-height: 1.7;
  }

  .cta-main {
    display: inline-flex; align-items: center; justify-content: center; gap: 12px;
    padding: 19px 46px;
    font-size: 1.02rem; font-weight: 800; letter-spacing: .6px;
    color: #fff; text-decoration: none;
    border-radius: 999px;
    background: linear-gradient(95deg, var(--p1), #4f46e5 40%, var(--p2));
    background-size: 200% auto;
    box-shadow: 0 14px 44px rgba(124,58,237,.5), inset 0 1px 0 rgba(255,255,255,.25);
    transition: background-position .6s, transform .25s, box-shadow .25s;
    position: relative; overflow: hidden;
  }
  .cta-main:hover {
    background-position: right center;
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 20px 60px rgba(6,182,212,.55);
  }
  .cta-main::after {
    content: ""; position: absolute; inset: 0;
    background: linear-gradient(110deg, transparent 25%, rgba(255,255,255,.35) 50%, transparent 75%);
    transform: translateX(-120%);
    animation: shine 3.4s infinite;
  }
  @keyframes shine { 0%{transform:translateX(-120%)} 55%,100%{transform:translateX(120%)} }

  .cta-note { display:block; margin-top: 16px; font-size: .8rem; color: var(--muted); letter-spacing: .4px; }

  .sec-head { text-align: center; margin-bottom: 46px; }
  .sec-head h2 {
    font-size: clamp(1.5rem, 3.6vw, 2.3rem);
    font-weight: 800; letter-spacing: -.6px; margin-bottom: 10px;
  }
  .sec-head p { color: var(--muted); font-size: .95rem; }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    padding-bottom: 90px;
  }

  .card {
    display: block;
    text-decoration: none;
    color: inherit;
    background: linear-gradient(160deg, var(--card), var(--card-2));
    border: 1px solid var(--stroke);
    border-radius: var(--radius);
    padding: 28px 26px 26px;
    position: relative;
    overflow: hidden;
    transition: transform .3s cubic-bezier(.2,.8,.3,1), border-color .3s, box-shadow .3s;
  }
  .card::before {
    content: "";
    position: absolute; inset: 0;
    background: radial-gradient(600px circle at var(--x,50%) var(--y,0%), rgba(124,58,237,.22), transparent 45%);
    opacity: 0; transition: opacity .35s;
    pointer-events: none;
  }
  .card:hover { transform: translateY(-7px); border-color: rgba(124,58,237,.55); box-shadow: 0 22px 54px rgba(0,0,0,.6); }
  .card:hover::before { opacity: 1; }

  .card-icon {
    width: 52px; height: 52px; border-radius: 14px;
    display: grid; place-items: center;
    font-size: 1.45rem;
    margin-bottom: 18px;
    border: 1px solid var(--stroke);
    background: rgba(124,58,237,.14);
    transition: transform .3s;
  }
  .card:hover .card-icon { transform: scale(1.1) rotate(-6deg); }

  .card h3 {
    font-size: 1.06rem; font-weight: 750; line-height: 1.35;
    margin-bottom: 9px; letter-spacing: -.2px;
  }
  .card p { font-size: .875rem; color: var(--muted); line-height: 1.62; }

  .card-link {
    display: inline-flex; align-items: center; gap: 7px;
    margin-top: 18px; font-size: .82rem; font-weight: 700;
    color: #a78bfa; letter-spacing: .3px;
    transition: gap .25s, color .25s;
  }
  .card:hover .card-link { gap: 12px; color: #22d3ee; }

  .card.c-iris   .card-icon { background: rgba(236,72,153,.14); }
  .card.c-iris   .card-link { color: #f472b6; }
  .card.c-game   .card-icon { background: rgba(34,211,238,.14); }
  .card.c-game   .card-link { color: #22d3ee; }
  .card.c-ai     .card-icon { background: rgba(124,58,237,.18); }
  .card.c-web    .card-icon { background: rgba(52,211,153,.14); }
  .card.c-web    .card-link { color: #34d399; }
  .card.c-cloud  .card-icon { background: rgba(96,165,250,.14); }
  .card.c-cloud  .card-link { color: #60a5fa; }
  .card.c-owner  .card-icon { background: rgba(251,191,36,.14); }
  .card.c-owner  .card-link { color: #fbbf24; }

  .owner-strip {
    display: flex; align-items: center; justify-content: space-between;
    gap: 26px; flex-wrap: wrap;
    padding: 32px 34px;
    border-radius: 22px;
    border: 1px solid var(--stroke);
    background: linear-gradient(120deg, rgba(124,58,237,.16), rgba(6,182,212,.10));
    margin-bottom: 80px;
  }
  .owner-strip .os-left { display: flex; align-items: center; gap: 18px; }
  .owner-strip img {
    width: 58px; height: 58px; border-radius: 16px; object-fit: cover;
    border: 1px solid var(--stroke);
    box-shadow: 0 0 26px rgba(124,58,237,.5);
  }
  .owner-strip .os-label { font-size: .72rem; letter-spacing: 2.4px; color: var(--muted); font-weight: 700; text-transform: uppercase; }
  .owner-strip .os-name { font-size: 1.3rem; font-weight: 800; letter-spacing: .5px; }
  .os-btn {
    padding: 13px 28px; border-radius: 999px; text-decoration: none;
    font-size: .88rem; font-weight: 700; color: #fff;
    border: 1px solid rgba(255,255,255,.22);
    background: rgba(255,255,255,.07);
    transition: background .25s, transform .25s;
  }
  .os-btn:hover { background: rgba(255,255,255,.16); transform: translateY(-2px); }

  footer {
    border-top: 1px solid var(--stroke);
    padding: 34px 0 42px;
    text-align: center;
    position: relative; z-index: 1;
  }
  footer p { color: var(--muted); font-size: .84rem; line-height: 1.9; }
  footer strong { color: #fff; letter-spacing: 1.5px; }
  footer .f-brand {
    font-weight: 900; letter-spacing: 4px; font-size: 1rem; margin-bottom: 8px;
    background: linear-gradient(90deg,#fff,#a78bfa,#22d3ee);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }

  @media (max-width: 760px) {
    .nav-links a:not(.nav-cta) { display: none; }
    .hero { padding: 60px 0 50px; }
    .cta-main { padding: 17px 30px; font-size: .94rem; width: 100%; max-width: 380px; }
    .owner-strip { padding: 26px 22px; }
    .owner-strip .os-btn { width: 100%; text-align: center; }
  }
  `;
  head.appendChild(style);

  /* =====================================================
     4) BODY CONTENT
     ===================================================== */
  var bodyHTML = `
    <!-- background glows -->
    <div class="glow g1"></div>
    <div class="glow g2"></div>
    <div class="glow g3"></div>

    <!-- HEADER -->
    <header>
      <div class="wrap nav">
        <a href="#" class="brand">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8OAzLeR4wS5ll-h2KN-9fkLZKvOqwFgELTXv94qL9A&s=10" alt="AVELIA Logo" />
          <span>
            <span class="brand-name">AVELIA</span>
            <small>BY MUHAMMAD TAQI</small>
          </span>
        </a>
        <nav class="nav-links">
          <a href="#tools">Tools</a>
          <a href="#tools">AI Builder</a>
          <a href="owner.html">Owner</a>
          <a class="nav-cta" href="https://muhammadtaqi512q-oss.github.io/we/" target="_blank" rel="noopener">Launch App</a>
          <a class="nav-cta" href="https://avelia.duckdns.org/donate" target="_blank" rel="noopener">DONATE</a>
        </nav>
      </div>
    </header>

    <!-- HERO -->
    <section class="hero">
      <div class="wrap">
        <span class="badge"><span class="dot"></span> Live Platform · No Coding Required</span>
        <h1>Create Your Own AI <span class="grad">Like ChatGPT</span><br />And Publish In Seconds</h1>
        <p class="sub">
          AVELIA gives you everything in one place — build AI assistants, generate websites,
          create games and publish to the cloud instantly. Powered by a simple, fast, no-code workspace.
        </p>
        <a class="cta-main" href="https://muhammadtaqi512q-oss.github.io/we/" target="_blank" rel="noopener">
          🚀 Start Building Now
        </a>
        <span class="cta-note">Free to try · No sign-up required · Created by Muhammad Taqi</span>
      </div>
    </section>

    <!-- TOOLS GRID -->
    <section id="tools">
      <div class="wrap">
        <div class="sec-head">
          <h2>Everything You Need, In One Place</h2>
          <p>Tap any card to open that tool instantly.</p>
        </div>

        <div class="grid">
          <a class="card c-iris" href="https://avelia.duckdns.org/iris">
            <div class="card-icon">🔍</div>
            <h3>Compare Softwares</h3>
            <p>Compare top AI and software tools side by side — features, speed, pricing and more in one clean view.</p>
            <span class="card-link">Open Iris →</span>
          </a>

          <a class="card c-game" href="https://avelia.duckdns.org/gamebuilder">
            <div class="card-icon">🎮</div>
            <h3>Game Builder</h3>
            <p>Create your own browser games in minutes. Drag, drop, customise and play — no coding needed.</p>
            <span class="card-link">Open Game Builder →</span>
          </a>

          <a class="card c-ai" href="https://avelia.duckdns.org/aibuilder">
            <div class="card-icon">🤖</div>
            <h3>AI Builder — Download Your AI In Seconds</h3>
            <p>Design your own ChatGPT-style assistant, train it on your content and download it ready to use.</p>
            <span class="card-link">Open AI Builder →</span>
          </a>

          <a class="card c-web" href="https://avelia.duckdns.org/webbuilder">
            <div class="card-icon">🌐</div>
            <h3>Web Builder — Create Your Own Web In Seconds</h3>
            <p>Build a professional website from scratch with ready-made sections and instant live preview.</p>
            <span class="card-link">Open Web Builder →</span>
          </a>

          <a class="card c-cloud" href="https://avelia.duckdns.org/cloud">
            <div class="card-icon">☁️</div>
            <h3>Cloud — Publish Your Web In Seconds</h3>
            <p>Deploy your AI and websites to the cloud with one click and get a live shareable link instantly.</p>
            <span class="card-link">Open Cloud →</span>
          </a>

          <a class="card c-owner" href="https://avelia.duckdns.org/owner">
            <div class="card-icon">👑</div>
            <h3>Owner &amp; Creator — Muhammad Taqi</h3>
            <p>Meet the mind behind AVELIA. Learn about the creator, the vision and how to get in touch.</p>
            <span class="card-link">View Owner →</span>
          </a>

          <a class="card c-owner" href="https://avelia.duckdns.org/detail">
            <div class="card-icon">👑</div>
            <h3>DETAILS OF AVELIA &amp; Creator — Muhammad Taqi</h3>
            <p>Meet the mind behind AVELIA. Learn about the creator, the vision and how to get in touch.</p>
            <span class="card-link">View DETAIL →</span>
          </a>
          <a class="card c-owner" href="https://avelia.duckdns.org/death">
            <div class="card-icon">👑</div>
            <h3>DEATH LANGUAGE Creator — Muhammad Taqi</h3>
            <p>DEATH LANGUAGE CREATED BY MUHAMMAD TAQI VERY SIMPLE AND MODREN</p>
            <span class="card-link">View DETAIL →</span>
          </a>
          <a class="card c-owner" href="https://avelia.duckdns.org/nova">
            <div class="card-icon">👑</div>
            <h3>NOVA LANGUAGE Creator — Muhammad Taqi</h3>
            <p>NOVA LANGUAGE CREATED BY MUHAMMAD TAQI VERY SIMPLE AND MODREN</p>
            <span class="card-link">View DETAIL →</span>
          </a>

           <a class="card c-owner" href="https://muhammadtaqi512q-oss.github.io/we/lyra">
            <div class="card-icon">🦁</div>
            <h3>LYRA SOFTWARE BUILDER Creator — Muhammad Taqi</h3>
            <p>CREATE YOUR OWN WEB BUILDER IN SECOND USING LYRA SOFTWARE BUILDER</p>
            <span class="card-link">View DETAIL →</span>
          </a>
          
        </div>
      </div>
    </section>

    <!-- OWNER STRIP -->
    <div class="wrap">
      <div class="owner-strip">
        <div class="os-left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8OAzLeR4wS5ll-h2KN-9fkLZKvOqwFgELTXv94qL9A&s=10" alt="Muhammad Taqi" />
          <div>
            <div class="os-label">Owner &amp; Creator</div>
            <div class="os-name">MUHAMMAD TAQI</div>
          </div>
        </div>
        <a class="os-btn" href="owner.html">About the Creator →</a>
      </div>
    </div>

    <!-- FOOTER -->
    <footer>
      <div class="wrap">
        <div class="f-brand">AVELIA</div>
        <p>
          Owner &amp; Creator: <strong>MUHAMMAD TAQI</strong><br />
          Build AI · Build Websites · Build Games · Publish To The Cloud<br />
          © <span id="year"></span> AVELIA. All rights reserved.
        </p>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('afterbegin', bodyHTML);

  /* =====================================================
     5) INTERACTIVE SCRIPT
     ===================================================== */
  document.getElementById('year').textContent = new Date().getFullYear();

  document.querySelectorAll('.card').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty('--x', (e.clientX - r.left) + 'px');
      card.style.setProperty('--y', (e.clientY - r.top) + 'px');
    });
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.style.opacity = 1;
        en.target.style.transform = 'translateY(0)';
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.card, .owner-strip').forEach(function (el, i) {
    el.style.opacity = 0;
    el.style.transform = 'translateY(26px)';
    el.style.transition = 'opacity .6s ease ' + (i * 0.06) + 's, transform .6s ease ' + (i * 0.06) + 's';
    io.observe(el);
  });

})();
