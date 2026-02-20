// ============================================
//   NovaMind — Account Creation Modal
//   Multi-step signup: Info → Plan → Success
// ============================================

(function () {
  const PLANS = [
    { id: 'free', name: 'Free', price: '$0', period: '/month', products: 1, ai: false, desc: 'Try one product, no commitment' },
    { id: 'startup', name: 'Start Up', price: '$29', period: '/month', products: 3, ai: true, desc: '3 products + AI agent' },
    { id: 'max', name: 'Max', price: '$79', period: '/month', products: 5, ai: true, desc: '5 products + AI agent', popular: true },
    { id: 'custom', name: 'Custom', price: 'Custom', period: '', products: '∞', ai: true, desc: 'Tailored for enterprise' },
  ];

  function buildModal() {
    const overlay = document.createElement('div');
    overlay.id = 'signupOverlay';
    overlay.className = 'signup-overlay';
    overlay.innerHTML = `
      <div class="signup-modal">
        <button class="signup-close" onclick="closeSignup()" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <!-- Step 1: Account Info -->
        <div class="signup-step" id="signupStep1">
          <div class="signup-step-indicator">
            <div class="step-dot active"></div>
            <div class="step-line"></div>
            <div class="step-dot"></div>
            <div class="step-line"></div>
            <div class="step-dot"></div>
          </div>
          <div class="signup-step-label">Step 1 of 3</div>
          <h2 class="signup-title">Create Your Account</h2>
          <p class="signup-desc">Start building in under 60 seconds. No credit card required.</p>
          <div class="signup-form">
            <div class="signup-field">
              <label for="signupEmail">Business Email</label>
              <input type="email" id="signupEmail" placeholder="you@company.com" autocomplete="email" />
            </div>
            <div class="signup-field">
              <label for="signupPassword">Password</label>
              <input type="password" id="signupPassword" placeholder="Min. 8 characters" autocomplete="new-password" />
            </div>
            <div class="signup-field">
              <label for="signupBusiness">Business Name</label>
              <input type="text" id="signupBusiness" placeholder="Your Business Name" />
            </div>
            <button class="btn btn-primary signup-next" onclick="signupNext(1)">
              <span>Continue</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>

        <!-- Step 2: Select Plan -->
        <div class="signup-step" id="signupStep2" style="display:none">
          <div class="signup-step-indicator">
            <div class="step-dot completed"></div>
            <div class="step-line filled"></div>
            <div class="step-dot active"></div>
            <div class="step-line"></div>
            <div class="step-dot"></div>
          </div>
          <div class="signup-step-label">Step 2 of 3</div>
          <h2 class="signup-title">Select Your Plan</h2>
          <p class="signup-desc">Pick the plan that fits your business. Upgrade or downgrade anytime.</p>
          <div class="signup-plans" id="signupPlans"></div>
          <div class="signup-nav-row">
            <button class="btn btn-glass signup-back" onclick="signupBack(2)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              <span>Back</span>
            </button>
            <button class="btn btn-primary signup-next" id="signupPlanNext" onclick="signupNext(2)" disabled>
              <span>Continue</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>

        <!-- Step 3: Success -->
        <div class="signup-step" id="signupStep3" style="display:none">
          <div class="signup-step-indicator">
            <div class="step-dot completed"></div>
            <div class="step-line filled"></div>
            <div class="step-dot completed"></div>
            <div class="step-line filled"></div>
            <div class="step-dot active"></div>
          </div>
          <div class="signup-step-label">Complete</div>
          <div class="signup-success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="40" height="40"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <h2 class="signup-title">Welcome to NovaMind</h2>
          <p class="signup-desc" id="signupSuccessMsg">Your account is ready. Start exploring your products.</p>
          <button class="btn btn-primary btn-glow signup-next" onclick="closeSignup()">
            <span>Go to Dashboard</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    // Build plan cards
    const plansContainer = document.getElementById('signupPlans');
    PLANS.forEach(plan => {
      const card = document.createElement('div');
      card.className = 'signup-plan-card' + (plan.popular ? ' popular' : '');
      card.dataset.plan = plan.id;
      card.innerHTML = `
        ${plan.popular ? '<div class="signup-plan-badge">Most Popular</div>' : ''}
        <div class="signup-plan-header">
          <div class="signup-plan-name">${plan.name}</div>
          <div class="signup-plan-price">${plan.price}<span>${plan.period}</span></div>
        </div>
        <div class="signup-plan-meta">
          <div class="signup-plan-detail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            ${plan.products} product${plan.products !== 1 ? 's' : ''} included
          </div>
          <div class="signup-plan-detail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M12 8V4H8"/><rect x="4" y="4" width="16" height="16" rx="2"/></svg>
            ${plan.ai ? 'AI Agent included' : 'No AI Agent'}
          </div>
        </div>
        <div class="signup-plan-desc">${plan.desc}</div>
      `;
      card.addEventListener('click', () => selectPlan(plan.id));
      plansContainer.appendChild(card);
    });

    // Close on overlay click
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeSignup();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeSignup();
    });
  }

  let selectedPlan = null;

  function selectPlan(planId) {
    selectedPlan = planId;
    document.querySelectorAll('.signup-plan-card').forEach(c => c.classList.remove('selected'));
    document.querySelector(`.signup-plan-card[data-plan="${planId}"]`).classList.add('selected');
    document.getElementById('signupPlanNext').disabled = false;
  }

  window.signupNext = function (step) {
    if (step === 1) {
      const email = document.getElementById('signupEmail').value.trim();
      const pass = document.getElementById('signupPassword').value;
      const biz = document.getElementById('signupBusiness').value.trim();

      // Validate
      if (!email || !pass || !biz) {
        [document.getElementById('signupEmail'), document.getElementById('signupPassword'), document.getElementById('signupBusiness')].forEach(f => {
          if (!f.value.trim()) {
            f.style.borderColor = 'rgba(255,255,255,0.5)';
            f.addEventListener('input', () => { f.style.borderColor = ''; }, { once: true });
          }
        });
        return;
      }
      if (pass.length < 8) {
        document.getElementById('signupPassword').style.borderColor = 'rgba(255,255,255,0.5)';
        document.getElementById('signupPassword').addEventListener('input', () => {
          document.getElementById('signupPassword').style.borderColor = '';
        }, { once: true });
        return;
      }

      document.getElementById('signupStep1').style.display = 'none';
      document.getElementById('signupStep2').style.display = 'block';
    }

    if (step === 2) {
      if (!selectedPlan) return;

      // Save to localStorage
      const account = {
        email: document.getElementById('signupEmail').value.trim(),
        business: document.getElementById('signupBusiness').value.trim(),
        plan: selectedPlan,
        created: new Date().toISOString(),
      };
      localStorage.setItem('novamind_account', JSON.stringify(account));

      const planData = PLANS.find(p => p.id === selectedPlan);
      document.getElementById('signupSuccessMsg').textContent =
        `You're on the ${planData.name} plan with ${planData.products} product${planData.products !== 1 ? 's' : ''}. Start exploring your products.`;

      document.getElementById('signupStep2').style.display = 'none';
      document.getElementById('signupStep3').style.display = 'block';
    }
  };

  window.signupBack = function (step) {
    if (step === 2) {
      document.getElementById('signupStep2').style.display = 'none';
      document.getElementById('signupStep1').style.display = 'block';
    }
  };

  window.openSignup = function () {
    const overlay = document.getElementById('signupOverlay');
    if (!overlay) return;
    // Reset to step 1
    document.getElementById('signupStep1').style.display = 'block';
    document.getElementById('signupStep2').style.display = 'none';
    document.getElementById('signupStep3').style.display = 'none';
    selectedPlan = null;
    document.querySelectorAll('.signup-plan-card').forEach(c => c.classList.remove('selected'));
    if (document.getElementById('signupPlanNext')) document.getElementById('signupPlanNext').disabled = true;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('signupEmail')?.focus(), 300);
  };

  window.closeSignup = function () {
    const overlay = document.getElementById('signupOverlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  // Init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildModal);
  } else {
    buildModal();
  }
})();
