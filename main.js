// ============================================
//   NovaMind AI — Main JavaScript  v2
// ============================================

// ---- Navbar scroll effect ----
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ---- Mobile menu ----
function openMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) { menu.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) { menu.classList.remove('open'); document.body.style.overflow = ''; }
}
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMobileMenu(); });

// ---- Scroll reveal ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const siblings = entry.target.parentElement
      ? Array.from(entry.target.parentElement.querySelectorAll('.reveal'))
      : [];
    const idx = siblings.indexOf(entry.target);
    setTimeout(() => entry.target.classList.add('visible'), idx * 80);
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---- Animated counter ----
function animateCounter(el, target, duration = 1800) {
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const isDecimal = target.toString().includes('.');
  let start = 0;
  const inc = target / (duration / 16);
  const t = setInterval(() => {
    start += inc;
    if (start >= target) { start = target; clearInterval(t); }
    el.textContent = prefix + (isDecimal ? start.toFixed(1) : Math.floor(start)) + suffix;
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const val = parseFloat(entry.target.dataset.target);
    if (!isNaN(val)) animateCounter(entry.target, val);
    counterObserver.unobserve(entry.target);
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

// ---- Contact form ----
function handleFormSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form || !success) return;
  let valid = true;
  form.querySelectorAll('[required]').forEach((f) => {
    if (!f.value.trim()) {
      valid = false;
      f.style.borderColor = '#ef4444';
      f.addEventListener('input', () => { f.style.borderColor = ''; }, { once: true });
    }
  });
  if (!valid) return;
  const btn = form.querySelector('.form-submit');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => { form.style.display = 'none'; success.style.display = 'block'; }, 1200);
}

// ---- Hero card rotating responses ----
(function () {
  const responses = [
    'Analyzing your workflows… I\'ve identified <strong style="color:var(--accent)">3 automation opportunities</strong> that could cut operational costs by up to 42%.',
    'For your industry, an AI chatbot could handle <strong style="color:var(--accent)">60% of inquiries</strong> automatically — 24/7, zero wait time.',
    'Automated booking reminders alone could save your team <strong style="color:var(--accent)">2+ hours every day</strong> on manual follow-ups.',
  ];
  const el = document.querySelector('.ai-response');
  if (!el) return;
  let i = 0;
  setInterval(() => {
    i = (i + 1) % responses.length;
    el.style.opacity = '0';
    setTimeout(() => { el.innerHTML = responses[i]; el.style.opacity = '1'; }, 350);
  }, 4000);
})();

// ---- Subtle hero orbs ----
(function () {
  const grid = document.querySelector('.hero-grid');
  if (!grid) return;
  for (let i = 0; i < 3; i++) {
    const orb = document.createElement('div');
    const sz = 200 + i * 150;
    orb.style.cssText = `
      position:absolute; border-radius:50%; opacity:0.04; pointer-events:none;
      width:${sz}px; height:${sz}px;
      left:${20 + i * 28}%; top:${10 + i * 18}%;
      background:radial-gradient(circle,${i % 2 ? '#06b6d4' : '#6366f1'},transparent);
      animation:orbFloat ${6 + i * 2}s ease-in-out infinite;
      animation-delay:${i * 1.5}s;
    `;
    grid.appendChild(orb);
  }
  const s = document.createElement('style');
  s.textContent = `@keyframes orbFloat{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(30px,-20px) scale(1.05)}66%{transform:translate(-20px,30px) scale(.95)}}`;
  document.head.appendChild(s);
})();

// ---- Init Lucide icons ----
// Called after DOM is ready; chatbot.js also calls createIcons for dynamic nodes.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => { if (window.lucide) window.lucide.createIcons(); });
} else {
  if (window.lucide) window.lucide.createIcons();
}
