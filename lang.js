// ============================================
//   NovaMind — Language Toggle v4
//   EN/FR bilingual system
// ============================================

var T = {
  // Shared Nav
  nav_home: { en: 'Home', fr: 'Accueil' },
  nav_industries: { en: 'Industries', fr: 'Industries' },
  nav_pricing: { en: 'Pricing', fr: 'Tarifs' },
  nav_modules: { en: 'Modules', fr: 'Modules' },
  nav_how: { en: 'How It Works', fr: 'Comment \u00e7a marche' },
  nav_cta: { en: 'Book Free Audit', fr: 'Audit gratuit' },

  // Footer
  footer_company: { en: 'Company', fr: 'Entreprise' },
  footer_modules: { en: 'Modules', fr: 'Modules' },
  footer_contact: { en: 'Contact', fr: 'Contact' },
  footer_privacy: { en: 'Privacy Policy', fr: 'Politique de confidentialit\u00e9' },
  footer_terms: { en: 'Terms of Service', fr: 'Conditions d\u2019utilisation' },
  footer_rights: { en: '\u00a9 2025 NovaMind. All rights reserved.', fr: '\u00a9 2025 NovaMind. Tous droits r\u00e9serv\u00e9s.' },
  footer_desc: { en: 'AI automation infrastructure for service-based businesses. Reduce labor dependency, increase scalability.', fr: 'Infrastructure d\u2019automatisation IA pour entreprises de services. R\u00e9duisez la d\u00e9pendance, augmentez la scalabilit\u00e9.' },
  cta_book: { en: 'Book Your Free Audit', fr: 'R\u00e9servez votre audit gratuit' },

  // Homepage
  home_label: { en: 'AI Automation Infrastructure', fr: 'Infrastructure d\u2019automatisation IA' },
  home_h1_1: { en: 'Automate Your', fr: 'Automatisez vos' },
  home_h1_2: { en: 'Business Operations.', fr: 'op\u00e9rations d\u2019affaires.' },
  home_desc: { en: 'Cut 20\u201340% of manual work using AI-powered automation systems. Built for service-based businesses with repetitive operations and cashflow.', fr: 'R\u00e9duisez 20 \u00e0 40% du travail manuel avec des syst\u00e8mes d\u2019automatisation IA. Con\u00e7u pour les entreprises de services.' },
  home_cta1: { en: 'Book Free Automation Audit', fr: 'R\u00e9server un audit gratuit' },
  home_cta2: { en: 'See Industry Examples', fr: 'Voir les exemples par industrie' },
  home_m1_label: { en: 'Manual work reduced', fr: 'Travail manuel r\u00e9duit' },
  home_m2_label: { en: 'Hours saved / month', fr: 'Heures \u00e9conomis\u00e9es / mois' },
  home_m3_label: { en: 'Industries served', fr: 'Industries desservies' },
  final_cta_title: { en: 'Scale your business without scaling your payroll.', fr: '\u00c9voluez votre entreprise sans augmenter votre masse salariale.' },
  final_cta_desc: { en: 'Book a free automation audit. We\u2019ll map your operations and show you exactly where AI saves time and money.', fr: 'R\u00e9servez un audit gratuit. Nous vous montrerons exactement o\u00f9 l\u2019IA fait \u00e9conomiser.' },
  final_cta_industries: { en: 'Explore Industries', fr: 'Explorer les industries' },

  // Industries Page
  ind_page_title_1: { en: 'Operations Automation', fr: 'Automatisation des op\u00e9rations' },
  ind_page_title_2: { en: 'By Industry', fr: 'par industrie' },
  ind_page_sub: { en: 'We deploy the same proven AI systems, customized for the operational patterns of each sector.', fr: 'Nous d\u00e9ployons les m\u00eames syst\u00e8mes IA, adapt\u00e9s aux mod\u00e8les op\u00e9rationnels de chaque secteur.' },
  ind_auto_deploy: { en: 'Automations We Deploy', fr: 'Automatisations d\u00e9ploy\u00e9es' },
  ind_systems: { en: 'Systems We Connect', fr: 'Syst\u00e8mes connect\u00e9s' },
  ind_intel: { en: 'Owner Intelligence', fr: 'Intelligence propri\u00e9taire' },
  ind_dont_see: { en: 'Don\u2019t see your industry?', fr: 'Vous ne voyez pas votre industrie ?' },
  ind_dont_see_p: { en: 'If your business has repetitive operations, we can automate them. Book a free audit.', fr: 'Si votre entreprise a des op\u00e9rations r\u00e9p\u00e9titives, nous pouvons les automatiser. R\u00e9servez un audit gratuit.' },

  // Pricing Page
  price_page_title_1: { en: 'Transparent', fr: 'Investissement' },
  price_page_title_2: { en: 'Investment', fr: 'transparent' },
  price_page_sub: { en: 'Setup packages to build your systems. Monthly subscriptions to run and optimize them.', fr: 'Forfaits pour construire vos syst\u00e8mes. Abonnements mensuels pour les op\u00e9rer.' },
  price_ready: { en: 'Ready to automate?', fr: 'Pr\u00eat \u00e0 automatiser ?' },
  price_ready_p: { en: 'Book a free audit. We\u2019ll map your operations and recommend the right package.', fr: 'R\u00e9servez un audit gratuit. Nous recommanderons le bon forfait.' },

  // Modules Page
  mod_title: { en: 'What We', fr: 'Ce que nous' },
  mod_title_2: { en: 'Build', fr: 'construisons' },
  mod_sub: { en: 'Infrastructure modules that plug into your business and run autonomously.', fr: 'Des modules d\u2019infrastructure qui se branchent et fonctionnent de mani\u00e8re autonome.' },
  mod_cta_title: { en: 'See which modules fit your business.', fr: 'Voyez quels modules conviennent \u00e0 votre entreprise.' },
  mod_cta_p: { en: 'Book a free audit. We\u2019ll recommend the exact modules you need.', fr: 'R\u00e9servez un audit. Nous recommanderons les modules dont vous avez besoin.' },

  // How It Works Page
  hiw_title_1: { en: 'A Standardized', fr: 'Un syst\u00e8me de' },
  hiw_title_2: { en: 'Delivery System', fr: 'livraison standardis\u00e9' },
  hiw_sub: { en: 'Every engagement follows a proven, repeatable process. Systemized and founder-independent.', fr: 'Chaque mandat suit un processus \u00e9prouv\u00e9 et reproductible.' },
  hiw_cta_title: { en: 'Start with a free audit.', fr: 'Commencez par un audit gratuit.' },
  hiw_cta_p: { en: 'We\u2019ll map your operations and deliver a blueprint showing where automation fits.', fr: 'Nous cartographierons vos op\u00e9rations et livrerons un blueprint.' }
};

var currentLang = localStorage.getItem('nm-lang') || 'en';

function toggleLangMenu() {
  var dd = document.getElementById('langDropdown');
  if (dd) dd.classList.toggle('open');
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('nm-lang', lang);
  var btn = document.getElementById('langBtn');
  if (btn) btn.textContent = lang.toUpperCase();
  var dd = document.getElementById('langDropdown');
  if (dd) dd.classList.remove('open');
  applyTranslations(lang);
}

function applyTranslations(lang) {
  var path = window.location.pathname.toLowerCase();

  // Nav
  var navLinks = document.querySelectorAll('.nav-links a');
  var navTexts = [T.nav_home, T.nav_industries, T.nav_pricing, T.nav_modules, T.nav_how];
  navLinks.forEach(function (a, i) { if (navTexts[i]) a.textContent = navTexts[i][lang]; });

  var mobileLinks = document.querySelectorAll('.mobile-menu a:not(.mobile-close)');
  mobileLinks.forEach(function (a, i) { if (navTexts[i]) a.textContent = navTexts[i][lang]; });

  var navCta = document.querySelector('.nav-cta');
  if (navCta) navCta.textContent = T.nav_cta[lang];

  // Footer
  var footerCols = document.querySelectorAll('.footer-col h4');
  if (footerCols[0]) footerCols[0].textContent = T.footer_company[lang];
  if (footerCols[1]) footerCols[1].textContent = T.footer_modules[lang];
  if (footerCols[2]) footerCols[2].textContent = T.footer_contact[lang];
  var footerBrand = document.querySelector('.footer-brand p');
  if (footerBrand) footerBrand.textContent = T.footer_desc[lang];
  var footerBottom = document.querySelector('.footer-bottom > span');
  if (footerBottom) footerBottom.textContent = T.footer_rights[lang];
  var bottomLinks = document.querySelectorAll('.footer-bottom-links a');
  if (bottomLinks[0]) bottomLinks[0].textContent = T.footer_privacy[lang];
  if (bottomLinks[1]) bottomLinks[1].textContent = T.footer_terms[lang];

  // CTA section (shared across pages)
  var ctaBtns = document.querySelectorAll('.section-cta .btn span');
  if (ctaBtns[0]) ctaBtns[0].textContent = T.cta_book[lang];

  // Page-specific
  if (path.indexOf('industries') !== -1) {
    applyPage('.page-hero h1', T.ind_page_title_1, T.ind_page_title_2, lang);
    applyText('.page-hero p', T.ind_page_sub, lang);
    document.querySelectorAll('.industry-col h4').forEach(function (h4) {
      var t = h4.textContent.trim();
      if (t.indexOf('Automations') !== -1 || t.indexOf('Automatisations') !== -1) h4.textContent = T.ind_auto_deploy[lang];
      else if (t.indexOf('Systems') !== -1 || t.indexOf('Syst') !== -1) h4.textContent = T.ind_systems[lang];
      else if (t.indexOf('Owner') !== -1 || t.indexOf('Intelligence') !== -1) h4.textContent = T.ind_intel[lang];
    });
    applyText('.cta-title', T.ind_dont_see, lang);
    applyText('.cta-desc', T.ind_dont_see_p, lang);
  } else if (path.indexOf('pricing') !== -1) {
    applyPage('.page-hero h1', T.price_page_title_1, T.price_page_title_2, lang);
    applyText('.page-hero p', T.price_page_sub, lang);
    applyText('.cta-title', T.price_ready, lang);
    applyText('.cta-desc', T.price_ready_p, lang);
  } else if (path.indexOf('products') !== -1) {
    var h1 = document.querySelector('.page-hero h1');
    if (h1) h1.innerHTML = T.mod_title[lang] + ' <span class="gradient-text">' + T.mod_title_2[lang] + '</span>';
    applyText('.page-hero p', T.mod_sub, lang);
    applyText('.cta-title', T.mod_cta_title, lang);
    applyText('.cta-desc', T.mod_cta_p, lang);
  } else if (path.indexOf('how-it-works') !== -1) {
    applyPage('.page-hero h1', T.hiw_title_1, T.hiw_title_2, lang);
    applyText('.page-hero p', T.hiw_sub, lang);
    applyText('.cta-title', T.hiw_cta_title, lang);
    applyText('.cta-desc', T.hiw_cta_p, lang);
  } else {
    // Homepage
    var hl = document.querySelector('.hero-label');
    if (hl) hl.textContent = T.home_label[lang];
    var h1 = document.querySelector('.hero h1');
    if (h1) h1.innerHTML = T.home_h1_1[lang] + '<br/><span class="gradient-text">' + T.home_h1_2[lang] + '</span>';
    applyText('.hero-desc', T.home_desc, lang);
    var heroBtns = document.querySelectorAll('.hero-actions .btn span');
    if (heroBtns[0]) heroBtns[0].textContent = T.home_cta1[lang];
    if (heroBtns[1]) heroBtns[1].textContent = T.home_cta2[lang];
    var metrics = document.querySelectorAll('.hero-metric .metric-label');
    if (metrics[0]) metrics[0].textContent = T.home_m1_label[lang];
    if (metrics[1]) metrics[1].textContent = T.home_m2_label[lang];
    if (metrics[2]) metrics[2].textContent = T.home_m3_label[lang];
    var ctaTitle = document.querySelector('.cta-title');
    if (ctaTitle) ctaTitle.textContent = T.final_cta_title[lang];
    applyText('.cta-desc', T.final_cta_desc, lang);
    var ctaBtns2 = document.querySelectorAll('.cta-actions .btn span');
    if (ctaBtns2[0]) ctaBtns2[0].textContent = T.cta_book[lang];
    if (ctaBtns2[1]) ctaBtns2[1].textContent = T.final_cta_industries[lang];
  }
}

function applyText(sel, obj, lang) {
  var el = document.querySelector(sel);
  if (el && obj) el.textContent = obj[lang];
}

function applyPage(sel, t1, t2, lang) {
  var el = document.querySelector(sel);
  if (el) el.innerHTML = t1[lang] + '<br/><span class="gradient-text">' + t2[lang] + '</span>';
}

// Init
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('langBtn');
  if (btn) btn.textContent = currentLang.toUpperCase();
  if (currentLang !== 'en') applyTranslations(currentLang);
});

document.addEventListener('click', function (e) {
  var dd = document.getElementById('langDropdown');
  var btn = document.getElementById('langBtn');
  if (dd && btn && !dd.contains(e.target) && e.target !== btn) dd.classList.remove('open');
});
