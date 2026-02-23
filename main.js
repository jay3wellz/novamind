// ============================================
//   NovaMind — Main JavaScript v4
//   Clean, minimal, enterprise
// ============================================

// ── Navbar Scroll ──
var navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ── Mobile Menu ──
function openMobileMenu() {
  var menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.add('open');
}
function closeMobileMenu() {
  var menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.remove('open');
}

// ── Scroll Reveal ──
(function () {
  var reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('vis');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(function (el) { observer.observe(el); });
})();

// ── Initialize Lucide Icons ──
document.addEventListener('DOMContentLoaded', function () {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});
