// ============================================
//   NovaMind — Operations Review Request Modal
//   Multi-step: Info → Industry → Success
// ============================================

(function () {
  const INDUSTRIES = [
    { id: 'garage', name: 'Auto Repair / Garage', icon: 'wrench' },
    { id: 'restaurant', name: 'Restaurant / Food Service', icon: 'utensils' },
    { id: 'gym', name: 'Gym / Fitness Studio', icon: 'dumbbell' },
    { id: 'realestate', name: 'Real Estate', icon: 'building' },
    { id: 'lawfirm', name: 'Law Firm', icon: 'scale' },
    { id: 'construction', name: 'Construction', icon: 'hard-hat' },
    { id: 'importexport', name: 'Import / Export', icon: 'ship' },
    { id: 'other', name: 'Other', icon: 'briefcase' },
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

        <!-- Step 1: Business Info -->
        <div class="signup-step" id="signupStep1">
          <div class="signup-step-indicator">
            <div class="step-dot active"></div>
            <div class="step-line"></div>
            <div class="step-dot"></div>
            <div class="step-line"></div>
            <div class="step-dot"></div>
          </div>
          <div class="signup-step-label">Step 1 of 3</div>
          <h2 class="signup-title">Get a Free Operations Review</h2>
          <p class="signup-desc">Tell us about your business. We'll identify your top automation opportunities.</p>
          <div class="signup-form">
            <div class="signup-field">
              <label for="signupName">Your Name</label>
              <input type="text" id="signupName" placeholder="Full name" autocomplete="name" />
            </div>
            <div class="signup-field">
              <label for="signupEmail">Business Email</label>
              <input type="email" id="signupEmail" placeholder="you@company.com" autocomplete="email" />
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

        <!-- Step 2: Select Industry -->
        <div class="signup-step" id="signupStep2" style="display:none">
          <div class="signup-step-indicator">
            <div class="step-dot completed"></div>
            <div class="step-line filled"></div>
            <div class="step-dot active"></div>
            <div class="step-line"></div>
            <div class="step-dot"></div>
          </div>
          <div class="signup-step-label">Step 2 of 3</div>
          <h2 class="signup-title">What's Your Industry?</h2>
          <p class="signup-desc">This helps us tailor the review to your specific operations.</p>
          <div class="signup-plans" id="signupPlans"></div>
          <div class="signup-nav-row">
            <button class="btn btn-glass signup-back" onclick="signupBack(2)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              <span>Back</span>
            </button>
            <button class="btn btn-primary signup-next" id="signupPlanNext" onclick="signupNext(2)" disabled>
              <span>Submit Request</span>
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
          <h2 class="signup-title">Request Received</h2>
          <p class="signup-desc" id="signupSuccessMsg">We'll review your operations and get back to you within 24 hours with your automation opportunities.</p>
          <button class="btn btn-primary btn-glow signup-next" onclick="closeSignup()">
            <span>Done</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    // Build industry cards
    const plansContainer = document.getElementById('signupPlans');
    INDUSTRIES.forEach(ind => {
      const card = document.createElement('div');
      card.className = 'signup-plan-card';
      card.dataset.plan = ind.id;
      card.innerHTML = `
        <div class="signup-plan-header">
          <div class="signup-plan-name">${ind.name}</div>
        </div>
      `;
      card.addEventListener('click', () => selectIndustry(ind.id));
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

  let selectedIndustry = null;

  function selectIndustry(id) {
    selectedIndustry = id;
    document.querySelectorAll('.signup-plan-card').forEach(c => c.classList.remove('selected'));
    document.querySelector(`.signup-plan-card[data-plan="${id}"]`).classList.add('selected');
    document.getElementById('signupPlanNext').disabled = false;
  }

  window.signupNext = function (step) {
    if (step === 1) {
      const name = document.getElementById('signupName').value.trim();
      const email = document.getElementById('signupEmail').value.trim();
      const biz = document.getElementById('signupBusiness').value.trim();

      if (!name || !email || !biz) {
        [document.getElementById('signupName'), document.getElementById('signupEmail'), document.getElementById('signupBusiness')].forEach(f => {
          if (!f.value.trim()) {
            f.style.borderColor = 'rgba(255,255,255,0.5)';
            f.addEventListener('input', () => { f.style.borderColor = ''; }, { once: true });
          }
        });
        return;
      }

      document.getElementById('signupStep1').style.display = 'none';
      document.getElementById('signupStep2').style.display = 'block';
    }

    if (step === 2) {
      if (!selectedIndustry) return;

      const request = {
        name: document.getElementById('signupName').value.trim(),
        email: document.getElementById('signupEmail').value.trim(),
        business: document.getElementById('signupBusiness').value.trim(),
        industry: selectedIndustry,
        submitted: new Date().toISOString(),
      };
      localStorage.setItem('novamind_review_request', JSON.stringify(request));

      // Open mailto with pre-filled info
      var subject = encodeURIComponent('Operations Review Request — ' + request.business);
      var body = encodeURIComponent(
        'Name: ' + request.name + '\n' +
        'Email: ' + request.email + '\n' +
        'Business: ' + request.business + '\n' +
        'Industry: ' + selectedIndustry + '\n\n' +
        'Requesting a free operations review.'
      );
      window.open('mailto:contact@novamindai.com?subject=' + subject + '&body=' + body, '_blank');

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
    document.getElementById('signupStep1').style.display = 'block';
    document.getElementById('signupStep2').style.display = 'none';
    document.getElementById('signupStep3').style.display = 'none';
    selectedIndustry = null;
    document.querySelectorAll('.signup-plan-card').forEach(c => c.classList.remove('selected'));
    if (document.getElementById('signupPlanNext')) document.getElementById('signupPlanNext').disabled = true;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('signupName')?.focus(), 300);
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
