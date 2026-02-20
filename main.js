// ============================================
//   NovaMind AI — Next-Gen JavaScript v3
//   GSAP Animations, Particle System, Custom Cursor
// ============================================

// ---- Glow Follow Effect on Glass Cards ----
(function () {
  if (window.innerWidth < 769) return;
  document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--glow-x', x + 'px');
      card.style.setProperty('--glow-y', y + 'px');
      card.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.03), transparent 60%), var(--glass-bg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.background = '';
    });
  });
})();

// ---- Magnetic Buttons ----
(function () {
  if (window.innerWidth < 769) return;
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
})();

// ---- Navbar Scroll ----
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ---- Mobile Menu ----
function openMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) { menu.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) { menu.classList.remove('open'); document.body.style.overflow = ''; }
}
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMobileMenu(); });

// ---- Particle Canvas ----
(function () {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles = [], mouse = { x: -1000, y: -1000 };

  function resize() {
    w = canvas.width = canvas.parentElement.offsetWidth;
    h = canvas.height = canvas.parentElement.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  canvas.addEventListener('mouseleave', () => { mouse.x = -1000; mouse.y = -1000; });

  const PARTICLE_COUNT = Math.min(80, Math.floor(window.innerWidth / 16));
  const CONNECTION_DIST = 150;
  const MOUSE_DIST = 200;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
      color: Math.random() > 0.5 ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.5)'
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DIST) {
          const alpha = (1 - dist / CONNECTION_DIST) * 0.15;
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw particles
    particles.forEach(p => {
      // Mouse interaction
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_DIST) {
        const force = (1 - dist / MOUSE_DIST) * 0.8;
        p.vx -= (dx / dist) * force;
        p.vy -= (dy / dist) * force;
      }

      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.99;
      p.vy *= 0.99;

      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.6;
      ctx.fill();
      ctx.globalAlpha = 1;

      // Glow
      const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
      grd.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
      grd.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }
  draw();
})();

// ---- GSAP Animations ----
(function () {
  function initGSAP() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      setTimeout(initGSAP, 100);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Parallax effects on orbs
    gsap.to('.hero-orb-1', {
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 },
      y: -100,
      ease: 'none',
    });
    gsap.to('.hero-orb-2', {
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 },
      y: -60,
      ease: 'none',
    });

    // Animated counter on big stat
    const bigStat = document.querySelector('.big-stat-number[data-count]');
    if (bigStat) {
      const target = parseInt(bigStat.dataset.count);
      gsap.to(bigStat, {
        scrollTrigger: { trigger: bigStat, start: 'top 80%', once: true },
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
        ease: 'power2.out',
      });
    }

    // Process line draw
    const processLine = document.querySelector('.process-line');
    if (processLine) {
      gsap.from(processLine, {
        scrollTrigger: {
          trigger: '.process-timeline',
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: 1,
        },
        scaleY: 0,
        transformOrigin: 'top center',
        ease: 'none',
      });
    }

    // Marquee speed control
    const marquee = document.querySelector('.marquee-content');
    if (marquee) {
      gsap.to(marquee, {
        scrollTrigger: {
          trigger: '.marquee-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        x: -100,
        ease: 'none',
      });
    }
  }
  initGSAP();
})();

// ---- Hero Card Rotating Responses ----
(function () {
  const responses = [
    'Analyzing your workflows... I\'ve identified <strong>3 automation opportunities</strong> that could cut operational costs by up to <strong>42%</strong>.',
    'For your industry, an AI chatbot could handle <strong>60% of inquiries</strong> automatically, 24/7 with zero wait time.',
    'Automated booking reminders alone could save your team <strong>2+ hours every day</strong> on manual follow-ups.',
  ];
  const el = document.getElementById('aiResponse');
  if (!el) return;
  let i = 0;
  setInterval(() => {
    i = (i + 1) % responses.length;
    el.style.opacity = '0';
    setTimeout(() => { el.innerHTML = responses[i]; el.style.opacity = '1'; }, 350);
  }, 4000);
})();

// ---- Counter Animation for Hero Metrics ----
(function () {
  const countEls = document.querySelectorAll('.metric-value[data-count]');
  if (!countEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      const duration = 2000;
      const start = performance.now();

      function animate(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(animate);
        else el.textContent = target;
      }
      requestAnimationFrame(animate);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  countEls.forEach(el => observer.observe(el));
})();

// ---- Tilt Effect on Glass Cards ----
(function () {
  if (window.innerWidth < 769) return;
  document.querySelectorAll('.service-card, .testimonial-card, .hero-card-main').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();

// ---- Contact Form ----
function handleFormSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form || !success) return;
  let valid = true;
  form.querySelectorAll('[required]').forEach((f) => {
    if (!f.value.trim()) {
      valid = false;
      f.style.borderColor = '#ffffff';
      f.addEventListener('input', () => { f.style.borderColor = ''; }, { once: true });
    }
  });
  if (!valid) return;
  const btn = form.querySelector('.form-submit');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => { form.style.display = 'none'; success.style.display = 'block'; }, 1200);
}

// ---- Scroll Rocket ----
(function () {
  const rocket = document.getElementById('scrollRocket');
  const trail = document.getElementById('rocketTrail');
  if (!rocket || !trail) return;

  const trailInner = trail.querySelector('.rocket-trail-inner');
  let launched = false;
  let resting = true;

  // Rocket sits at the bottom, ready on the launchpad
  rocket.style.transform = 'translateY(0px)';
  rocket.style.bottom = '40px';
  rocket.style.opacity = '0.4';
  rocket.style.transition = 'none';
  trail.style.opacity = '0';

  function updateRocket() {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = maxScroll > 0 ? scrollY / maxScroll : 0;

    // Slowly become more visible as user scrolls
    if (scrollPercent < 0.85) {
      // Rocket sits at bottom, gently idling
      if (launched) {
        // Reset after launch
        launched = false;
        rocket.style.transition = 'opacity 0.5s ease';
        rocket.style.opacity = '0.4';
        rocket.classList.remove('launched');
        trail.style.opacity = '0';
        trail.classList.remove('visible');
        setTimeout(() => {
          rocket.style.transition = 'none';
          rocket.style.transform = 'translateY(0px)';
        }, 500);
      }
      // Idle: slowly increase opacity as user scrolls down
      const idleOpacity = 0.3 + scrollPercent * 0.5;
      rocket.style.opacity = String(Math.min(idleOpacity, 0.8));
      rocket.classList.add('visible');
      resting = true;
    }

    // LAUNCH when near bottom (85%+)
    if (scrollPercent >= 0.85 && !launched) {
      launched = true;
      resting = false;

      // Show trail
      trail.classList.add('visible');
      trail.style.opacity = '1';

      // Dramatic launch animation
      rocket.style.transition = 'transform 1.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease';
      rocket.style.opacity = '1';
      rocket.classList.add('launched');

      // Fly the rocket off screen upward
      rocket.style.transform = `translateY(-${window.innerHeight + 100}px)`;

      // Grow the trail
      if (trailInner) {
        trailInner.style.transition = 'height 1.5s cubic-bezier(0.16, 1, 0.3, 1)';
        trailInner.style.height = window.innerHeight + 'px';
      }

      // Fade trail after rocket exits
      setTimeout(() => {
        trail.style.transition = 'opacity 1s ease';
        trail.style.opacity = '0';
      }, 2000);
    }
  }

  window.addEventListener('scroll', updateRocket, { passive: true });
})();

// ---- Shooting Stars ----
(function () {
  function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.top = Math.random() * 60 + '%';
    star.style.left = Math.random() * 80 + '%';
    star.style.width = (60 + Math.random() * 80) + 'px';
    const angle = -15 - Math.random() * 30;
    star.style.transform = `rotate(${angle}deg)`;
    document.body.appendChild(star);

    const duration = 600 + Math.random() * 400;
    star.animate([
      { opacity: 0, transform: `rotate(${angle}deg) translateX(0)` },
      { opacity: 1, transform: `rotate(${angle}deg) translateX(100px)`, offset: 0.1 },
      { opacity: 1, transform: `rotate(${angle}deg) translateX(200px)`, offset: 0.6 },
      { opacity: 0, transform: `rotate(${angle}deg) translateX(400px)` }
    ], { duration, easing: 'ease-out' }).onfinish = () => star.remove();
  }

  // Random shooting stars
  function scheduleNext() {
    const delay = 3000 + Math.random() * 8000;
    setTimeout(() => {
      createShootingStar();
      scheduleNext();
    }, delay);
  }
  scheduleNext();
})();

// ---- Init Lucide Icons ----
function initLucide() {
  if (window.lucide) window.lucide.createIcons();
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLucide);
} else {
  initLucide();
}
