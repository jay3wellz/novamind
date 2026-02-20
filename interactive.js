/* interactive.js — Industry Modals + Quote Wizard
   NovaMind AI — loaded on index.html, about.html, services.html */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     INDUSTRY DATA
  ───────────────────────────────────────────── */
  const INDUSTRY_DATA = {
    restaurant: {
      label: 'Restaurants & Food Service',
      icon: 'utensils',
      tagline: 'Fill seats, cut phone calls, and serve more customers with less chaos.',
      examples: [
        {
          icon: 'calendar-check',
          title: 'Automated Booking & Confirmations',
          desc: 'Customers book online 24/7. Your system auto-confirms, sends reminders 24h and 2h before the reservation, and flags no-shows for follow-up.',
          saving: 'Saves ~2 hrs/day on phone calls'
        },
        {
          icon: 'bell-off',
          title: 'No-Show Reduction System',
          desc: 'Automated SMS/email sequences reduce no-shows by up to 35%. If a guest cancels, the slot opens for a waitlist customer automatically.',
          saving: '-35% no-shows on average'
        },
        {
          icon: 'message-circle',
          title: 'AI Customer Chat (Reservations & FAQs)',
          desc: 'A trained AI widget answers "Do you have gluten-free options?", "Is the patio open?", and takes reservations — all without you lifting a finger.',
          saving: 'Handles 80% of routine inquiries'
        },
        {
          icon: 'star',
          title: 'Post-Visit Review Automation',
          desc: 'After each visit, guests receive an automated message asking for a Google/Yelp review. Happy guests leave reviews; unhappy ones reach you privately first.',
          saving: '3–5× more reviews per month'
        }
      ]
    },
    clinic: {
      label: 'Clinics & Healthcare',
      icon: 'stethoscope',
      tagline: 'Reduce admin burden, cut no-shows, and keep patients engaged.',
      examples: [
        {
          icon: 'calendar-clock',
          title: 'Automated Appointment Reminders',
          desc: 'Multi-step reminder sequences via SMS and email (72h, 24h, 2h before) dramatically reduce last-minute cancellations and no-shows.',
          saving: '-40% no-show rate'
        },
        {
          icon: 'clipboard-list',
          title: 'Digital Patient Intake Forms',
          desc: 'New patients fill out forms online before they arrive. Data flows directly into your system — no paper, no re-entry, no waiting room delays.',
          saving: 'Saves 15 min per new patient'
        },
        {
          icon: 'rotate-ccw',
          title: 'Recall & Re-engagement Automation',
          desc: 'Patients who haven't returned in 6–12 months get a personalized outreach sequence. Automated re-booking keeps your calendar full.',
          saving: '20–30% of lapsed patients return'
        },
        {
          icon: 'shield-check',
          title: 'Compliance-Ready Communication',
          desc: 'All patient communications are structured to comply with data protection standards. Secure, logged, and audit-ready out of the box.',
          saving: 'Zero compliance risk on outreach'
        }
      ]
    },
    salon: {
      label: 'Salons, Spas & Beauty',
      icon: 'scissors',
      tagline: 'Keep your chair full and your clients coming back — automatically.',
      examples: [
        {
          icon: 'calendar-check',
          title: '24/7 Online Booking System',
          desc: 'Clients book their preferred stylist and service anytime from their phone. The system manages availability, sends confirmations, and prevents double-booking.',
          saving: 'Fills 15–20% more appointment slots'
        },
        {
          icon: 'repeat',
          title: 'Rebooking Reminder Sequences',
          desc: 'After each visit, clients get a personalized reminder to rebook (e.g., "It\'s been 5 weeks — ready for your next cut?"). Keeps regulars on a consistent schedule.',
          saving: '+25% rebooking rate'
        },
        {
          icon: 'gift',
          title: 'Loyalty & Promotions Automation',
          desc: 'Automatically reward clients after their 5th visit, send birthday discount vouchers, and promote seasonal offers — all triggered without manual work.',
          saving: '+30% repeat visit frequency'
        },
        {
          icon: 'star',
          title: 'Review & Referral System',
          desc: 'After each appointment, satisfied clients are prompted to leave a review or refer a friend. Referral links are tracked and rewarded automatically.',
          saving: '2–4 new clients per month from referrals'
        }
      ]
    },
    gym: {
      label: 'Gyms & Fitness Studios',
      icon: 'dumbbell',
      tagline: 'Automate memberships, reduce churn, and fill every class.',
      examples: [
        {
          icon: 'credit-card',
          title: 'Automated Membership Billing',
          desc: 'Recurring billing runs on autopilot — failed payments are automatically retried, members receive receipts, and expiring cards are flagged before they lapse.',
          saving: 'Eliminates 100% of manual invoicing'
        },
        {
          icon: 'layout-list',
          title: 'Class Scheduling & Waitlists',
          desc: 'Members book classes online, join waitlists when full, and get notified instantly when a spot opens. Class reminders reduce no-shows by 30%.',
          saving: '-30% class no-shows'
        },
        {
          icon: 'trending-up',
          title: 'Member Retention Email Flows',
          desc: 'Members who haven't checked in for 2 weeks get an automated re-engagement message. Cancellation attempts trigger a win-back offer before they leave.',
          saving: '-20% churn rate'
        },
        {
          icon: 'users',
          title: 'New Member Onboarding Sequence',
          desc: 'Every new sign-up gets a 5-step welcome sequence: facility tour tips, class recommendations, trainer intro — all automated and personalized.',
          saving: '3× better 90-day retention'
        }
      ]
    },
    contractor: {
      label: 'Contractors & Trades',
      icon: 'hard-hat',
      tagline: 'Get more leads, send quotes faster, and get paid without chasing.',
      examples: [
        {
          icon: 'file-text',
          title: 'Automated Quote Generation',
          desc: 'A client fills out a project form on your site. Your system auto-generates a branded quote based on the details, sends it for e-signature, and follows up if unanswered.',
          saving: 'Quotes sent 10× faster'
        },
        {
          icon: 'receipt',
          title: 'Invoice & Payment Automation',
          desc: 'Invoices are automatically created on project completion and sent via email with a one-click payment link. Overdue invoices get automated follow-up reminders.',
          saving: 'Paid 2× faster, zero chasing'
        },
        {
          icon: 'zap',
          title: 'Lead Capture & Instant Response',
          desc: 'Every enquiry from your website or social media gets an instant automated reply with your availability and a link to book a site visit — even at midnight.',
          saving: '40% more enquiries converted'
        },
        {
          icon: 'star',
          title: 'Post-Job Review Requests',
          desc: 'After each completed job, clients receive an automated review request with a direct link to Google. More reviews = more leads from local search.',
          saving: '5× more Google reviews'
        }
      ]
    },
    professional: {
      label: 'Professional Services',
      icon: 'briefcase',
      tagline: 'Streamline onboarding, automate follow-ups, and grow your client base.',
      examples: [
        {
          icon: 'user-check',
          title: 'Client Onboarding Automation',
          desc: 'New clients receive a branded welcome sequence: contract for e-signature, intake questionnaire, calendar booking link, and a kick-off confirmation — all in one flow.',
          saving: 'Onboarding time cut by 80%'
        },
        {
          icon: 'mail',
          title: 'Automated Follow-Up Sequences',
          desc: 'Proposals that go unanswered trigger a 3-email follow-up sequence. Past clients get quarterly check-in emails to keep you top of mind.',
          saving: 'Closes 30% more proposals'
        },
        {
          icon: 'database',
          title: 'CRM & Pipeline Automation',
          desc: 'Leads from your website are automatically added to your CRM, assigned a stage, and trigger the right follow-up sequence based on their interest level.',
          saving: 'Zero leads fall through the cracks'
        },
        {
          icon: 'refresh-cw',
          title: 'Recurring Billing & Renewal Reminders',
          desc: 'Retainer clients are billed automatically each month. Contract renewals trigger a reminder 30 days before expiry with a one-click renewal link.',
          saving: '95% on-time payment rate'
        }
      ]
    }
  };

  /* ─────────────────────────────────────────────
     QUIZ DATA
  ───────────────────────────────────────────── */
  const QUIZ_STEPS = [
    {
      id: 'industry',
      question: 'Which best describes your business?',
      hint: 'We tailor our recommendation to your industry.',
      type: 'single',
      options: [
        { value: 'restaurant',   label: 'Restaurant / Food Service', icon: 'utensils' },
        { value: 'clinic',       label: 'Clinic / Healthcare',       icon: 'stethoscope' },
        { value: 'salon',        label: 'Salon / Spa / Beauty',      icon: 'scissors' },
        { value: 'gym',          label: 'Gym / Fitness Studio',      icon: 'dumbbell' },
        { value: 'contractor',   label: 'Contractor / Trades',       icon: 'hard-hat' },
        { value: 'professional', label: 'Professional Services',     icon: 'briefcase' }
      ]
    },
    {
      id: 'challenges',
      question: "What's eating most of your time right now?",
      hint: 'Pick all that apply.',
      type: 'multi',
      options: [
        { value: 'bookings',   label: 'Managing bookings & scheduling',    icon: 'calendar' },
        { value: 'followups',  label: 'Following up with leads & clients', icon: 'mail' },
        { value: 'invoicing',  label: 'Sending invoices & chasing payment',icon: 'receipt' },
        { value: 'noshows',    label: 'Dealing with no-shows',             icon: 'user-x' },
        { value: 'reviews',    label: 'Getting reviews & referrals',       icon: 'star' },
        { value: 'presence',   label: 'Looking professional online',       icon: 'monitor' }
      ]
    },
    {
      id: 'wants',
      question: 'What would you love to have?',
      hint: 'Select everything that excites you.',
      type: 'multi',
      options: [
        { value: 'website',    label: 'A modern, converting website',  icon: 'monitor' },
        { value: 'chatbot',    label: 'AI chatbot to handle enquiries',icon: 'message-circle' },
        { value: 'automation', label: 'Automated emails & reminders',  icon: 'cpu' },
        { value: 'booking',    label: 'Online booking system',         icon: 'calendar-check' },
        { value: 'payments',   label: 'Automated invoicing & payments',icon: 'credit-card' },
        { value: 'crm',        label: 'CRM & lead tracking',           icon: 'database' }
      ]
    },
    {
      id: 'budget',
      question: "What's your approximate investment range?",
      hint: 'This helps us recommend the right starting point.',
      type: 'single',
      options: [
        { value: 'starter',  label: 'Under $3,000',   icon: 'wallet' },
        { value: 'growth',   label: '$3,000 – $6,000', icon: 'trending-up' },
        { value: 'premium',  label: '$6,000+',         icon: 'layers' },
        { value: 'unsure',   label: 'Not sure yet',    icon: 'help-circle' }
      ]
    }
  ];

  /* ─────────────────────────────────────────────
     RECOMMENDATION ENGINE
  ───────────────────────────────────────────── */
  const PACKAGES = {
    website: {
      name: 'Smart Website Development',
      price: '$2,500',
      icon: 'monitor',
      tagline: 'A high-converting, professional online presence built for your industry.',
      features: [
        'Custom-designed, mobile-first website',
        'Lead capture forms & call-to-action pages',
        'Google Business Profile integration',
        'Basic SEO setup & fast hosting',
        'Contact form & booking page'
      ],
      addons: ['AI Chatbot Widget (+$1,800)', 'Online Booking System (+$350)', 'SMS Reminders (+$750)']
    },
    automation: {
      name: 'Business Automation System',
      price: '$3,500',
      icon: 'cpu',
      tagline: 'End-to-end automation for bookings, follow-ups, payments, and more.',
      features: [
        'Full booking & scheduling system',
        'Automated email & SMS sequences',
        'Invoice & payment automation',
        'No-show reduction workflow',
        'CRM integration & lead tracking'
      ],
      addons: ['AI Chatbot Widget (+$1,800)', 'Website Landing Page (+$500)', 'Monthly Support – Basic (+$750/mo)']
    },
    full: {
      name: 'Full Digital Infrastructure',
      price: '$6,500',
      icon: 'layers',
      tagline: 'Everything — website, automation, AI, and ongoing support in one package.',
      features: [
        'Everything in Smart Website + Business Automation',
        'AI-powered chatbot & customer engagement',
        'Advanced CRM, pipeline & analytics',
        'Industry-specific automation workflows',
        '30-day support & optimization',
        'Priority onboarding & dedicated manager'
      ],
      addons: ['Elite Monthly Support (+$2,500/mo)', 'Custom integrations (POA)', 'Predictive Revenue Model (+$4,500)']
    }
  };

  function calculateRecommendation(answers) {
    let score = { website: 0, automation: 0, full: 0 };

    if (answers.budget === 'starter')  { score.website += 3; }
    if (answers.budget === 'growth')   { score.automation += 3; }
    if (answers.budget === 'premium')  { score.full += 4; }
    if (answers.budget === 'unsure')   { score.automation += 1; }

    const wants = answers.wants || [];
    if (wants.includes('website'))    { score.website += 2; }
    if (wants.includes('chatbot'))    { score.automation += 1; score.full += 1; }
    if (wants.includes('automation')) { score.automation += 3; score.full += 2; }
    if (wants.includes('booking'))    { score.automation += 2; }
    if (wants.includes('payments'))   { score.automation += 2; }
    if (wants.includes('crm'))        { score.automation += 2; score.full += 2; }

    const ch = answers.challenges || [];
    if (ch.includes('bookings'))      { score.automation += 2; }
    if (ch.includes('followups'))     { score.automation += 2; }
    if (ch.includes('invoicing'))     { score.automation += 2; }
    if (ch.includes('noshows'))       { score.automation += 2; }
    if (ch.includes('presence'))      { score.website += 3; }

    if (wants.length >= 4)            { score.full += 3; }

    const top = Math.max(score.website, score.automation, score.full);
    if (score.full >= top - 2 && answers.budget !== 'starter') return 'full';
    if (score.automation >= score.website) return 'automation';
    return 'website';
  }

  /* ─────────────────────────────────────────────
     DOM HELPERS
  ───────────────────────────────────────────── */
  function runIcons(node) {
    if (window.lucide) window.lucide.createIcons({ nodes: [node] });
  }

  function getOverlay() {
    let el = document.getElementById('nmOverlay');
    if (!el) {
      el = document.createElement('div');
      el.className = 'nm-overlay';
      el.id = 'nmOverlay';
      document.body.appendChild(el);
      el.addEventListener('click', function (e) {
        if (e.target === el) closeAll();
      });
    }
    return el;
  }

  function closeAll() {
    const overlay = document.getElementById('nmOverlay');
    if (overlay) {
      overlay.classList.remove('open');
      setTimeout(function () { overlay.innerHTML = ''; }, 320);
    }
    document.body.style.overflow = '';
  }

  function openOverlay(content) {
    const overlay = getOverlay();
    overlay.innerHTML = '';
    overlay.appendChild(content);
    overlay.getBoundingClientRect(); // force reflow for CSS transition
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    runIcons(overlay);
  }

  /* ─────────────────────────────────────────────
     INDUSTRY MODAL
  ───────────────────────────────────────────── */
  function buildIndustryModal(key) {
    const data = INDUSTRY_DATA[key];
    if (!data) return null;

    const modal = document.createElement('div');
    modal.className = 'ind-modal';

    const examplesHtml = data.examples.map(ex => `
      <div class="ind-example-item">
        <div class="ind-example-icon"><i data-lucide="${ex.icon}"></i></div>
        <div>
          <h4>${ex.title}</h4>
          <p>${ex.desc}</p>
          <span class="ind-saving-badge"><i data-lucide="trending-up"></i> ${ex.saving}</span>
        </div>
      </div>
    `).join('');

    modal.innerHTML = `
      <div class="ind-modal-header">
        <div class="ind-modal-icon"><i data-lucide="${data.icon}"></i></div>
        <div>
          <h2>${data.label}</h2>
          <p>${data.tagline}</p>
        </div>
        <button class="ind-modal-close" aria-label="Close">&times;</button>
      </div>
      <div class="ind-modal-body">
        <div class="ind-example-list">
          ${examplesHtml}
        </div>
      </div>
      <div class="ind-modal-footer">
        <button class="btn btn-outline ind-close-btn">Close</button>
        <button class="btn btn-primary ind-quote-btn">Get a Free Quote <i data-lucide="arrow-right"></i></button>
      </div>
    `;

    modal.querySelector('.ind-modal-close').addEventListener('click', closeAll);
    modal.querySelector('.ind-close-btn').addEventListener('click', closeAll);
    modal.querySelector('.ind-quote-btn').addEventListener('click', function () {
      closeAll();
      setTimeout(function () { openWizard(key); }, 350);
    });

    return modal;
  }

  function openIndustryModal(key) {
    const modal = buildIndustryModal(key);
    if (modal) openOverlay(modal);
  }

  /* ─────────────────────────────────────────────
     QUOTE WIZARD
  ───────────────────────────────────────────── */
  var wizardAnswers = {};
  var wizardStep = 0;

  function openWizard(prefillIndustry) {
    wizardAnswers = {};
    wizardStep = 0;
    if (prefillIndustry) {
      wizardAnswers.industry = prefillIndustry;
      wizardStep = 1;
    }
    renderWizardStep();
  }

  function renderWizardStep() {
    var totalSteps = QUIZ_STEPS.length;
    var stepData = QUIZ_STEPS[wizardStep];
    var progress = Math.round((wizardStep / totalSteps) * 100);

    var optionsHtml = '';
    if (stepData.type === 'single') {
      optionsHtml = '<div class="option-grid">' + stepData.options.map(function (opt) {
        var sel = wizardAnswers[stepData.id] === opt.value ? 'selected' : '';
        return '<div class="option-card ' + sel + '" data-value="' + opt.value + '">' +
          '<div class="opt-icon"><i data-lucide="' + opt.icon + '"></i></div>' +
          '<span class="opt-label">' + opt.label + '</span>' +
          '<div class="opt-check"></div>' +
          '</div>';
      }).join('') + '</div>';
    } else {
      var arr = wizardAnswers[stepData.id] || [];
      optionsHtml = '<div class="check-grid">' + stepData.options.map(function (opt) {
        var checked = arr.indexOf(opt.value) > -1 ? 'selected' : '';
        var chk = checked ? 'checked' : '';
        return '<label class="check-option ' + checked + '">' +
          '<input type="checkbox" value="' + opt.value + '" ' + chk + ' />' +
          '<i data-lucide="' + opt.icon + '"></i>' +
          '<span class="check-label">' + opt.label + '</span>' +
          '<div class="check-box"><i data-lucide="check"></i></div>' +
          '</label>';
      }).join('') + '</div>';
    }

    var backBtnHtml = wizardStep > 0
      ? '<button class="wiz-back"><i data-lucide="arrow-left"></i> Back</button>'
      : '<span></span>';

    var nextLabel = wizardStep < totalSteps - 1
      ? 'Next <i data-lucide="arrow-right"></i>'
      : 'See My Recommendation <i data-lucide="arrow-right"></i>';

    var nextDisabled = (stepData.type === 'single' && !wizardAnswers[stepData.id]) ? 'disabled' : '';

    var box = document.createElement('div');
    box.className = 'wizard-box';
    box.innerHTML =
      '<div class="wiz-header">' +
        '<div class="wiz-title-block"><h3>Get Your Free Quote</h3><p>Step ' + (wizardStep + 1) + ' of ' + totalSteps + '</p></div>' +
        '<button class="wiz-close" aria-label="Close">&times;</button>' +
      '</div>' +
      '<div class="wiz-progress-bar"><div class="wiz-progress-fill" style="width:' + progress + '%"></div></div>' +
      '<div class="wiz-body">' +
        '<div class="wiz-step-label">Step ' + (wizardStep + 1) + ' of ' + totalSteps + '</div>' +
        '<div class="wiz-question">' + stepData.question + '</div>' +
        '<div class="wiz-sub">' + stepData.hint + '</div>' +
        optionsHtml +
        '<div class="wiz-nav">' +
          backBtnHtml +
          '<button class="wiz-next" ' + nextDisabled + '>' + nextLabel + '</button>' +
        '</div>' +
      '</div>';

    openOverlay(box);

    // Single-select: click to pick
    if (stepData.type === 'single') {
      box.querySelectorAll('.option-card').forEach(function (card) {
        card.addEventListener('click', function () {
          box.querySelectorAll('.option-card').forEach(function (c) { c.classList.remove('selected'); });
          card.classList.add('selected');
          wizardAnswers[stepData.id] = card.dataset.value;
          box.querySelector('.wiz-next').removeAttribute('disabled');
        });
      });
    }

    // Multi-select: checkboxes
    if (stepData.type === 'multi') {
      box.querySelector('.wiz-next').removeAttribute('disabled'); // always skippable
      box.querySelectorAll('.check-option input').forEach(function (cb) {
        cb.addEventListener('change', function () {
          var label = cb.closest('.check-option');
          label.classList.toggle('selected', cb.checked);
          var arr = wizardAnswers[stepData.id] || [];
          if (cb.checked) {
            if (arr.indexOf(cb.value) === -1) arr.push(cb.value);
          } else {
            var idx = arr.indexOf(cb.value);
            if (idx > -1) arr.splice(idx, 1);
          }
          wizardAnswers[stepData.id] = arr;
        });
      });
    }

    // Next
    box.querySelector('.wiz-next').addEventListener('click', function () {
      if (this.disabled) return;
      wizardStep++;
      if (wizardStep >= totalSteps) {
        closeAll();
        setTimeout(renderResult, 80);
      } else {
        closeAll();
        setTimeout(renderWizardStep, 80);
      }
    });

    // Back
    var backBtn = box.querySelector('.wiz-back');
    if (backBtn) {
      backBtn.addEventListener('click', function () {
        wizardStep--;
        closeAll();
        setTimeout(renderWizardStep, 80);
      });
    }

    // Close
    box.querySelector('.wiz-close').addEventListener('click', closeAll);
  }

  function renderResult() {
    var key = calculateRecommendation(wizardAnswers);
    var pkg = PACKAGES[key];

    var featuresHtml = '<div class="result-feature-list">' +
      pkg.features.map(function (f) {
        return '<div class="result-feature"><i data-lucide="check-circle"></i> ' + f + '</div>';
      }).join('') +
      '</div>';

    var addonsHtml = '<ul>' +
      pkg.addons.map(function (a) { return '<li>' + a + '</li>'; }).join('') +
      '</ul>';

    var industryNote = '';
    if (wizardAnswers.industry && INDUSTRY_DATA[wizardAnswers.industry]) {
      industryNote = '<p style="font-size:0.82rem;color:var(--accent);margin-top:8px">Customized for <strong>' +
        INDUSTRY_DATA[wizardAnswers.industry].label + '</strong></p>';
    }

    var box = document.createElement('div');
    box.className = 'wizard-box';
    box.innerHTML =
      '<div class="wiz-header">' +
        '<div class="wiz-title-block"><h3>Your Recommendation</h3><p>Based on your answers</p></div>' +
        '<button class="wiz-close" aria-label="Close">&times;</button>' +
      '</div>' +
      '<div class="wiz-body wiz-result">' +
        '<div class="result-hero">' +
          '<div class="result-tag">Perfect Match</div>' +
          '<h2>' + pkg.name + '</h2>' +
          '<div class="price">Starting at <sub>$</sub>' + pkg.price.replace('$', '') + '</div>' +
          '<p>' + pkg.tagline + '</p>' +
          industryNote +
        '</div>' +
        '<div class="result-includes">' +
          '<h4>What\'s included</h4>' +
          featuresHtml +
        '</div>' +
        '<div class="result-add-ons">' +
          '<h4>Popular add-ons</h4>' +
          addonsHtml +
        '</div>' +
        '<div class="lead-form" id="wizLeadForm">' +
          '<h4>Ready to get started?</h4>' +
          '<p>Fill in your details and we\'ll send a custom proposal with real numbers within 24 hours. No pressure, no commitment.</p>' +
          '<div class="lead-row">' +
            '<input type="text" id="wiz-name" placeholder="Your name *" required />' +
            '<input type="email" id="wiz-email" placeholder="Business email *" required />' +
          '</div>' +
          '<input type="text" id="wiz-biz" placeholder="Business name" />' +
          '<div class="lead-agreement">' +
            '<input type="checkbox" id="wiz-consent" required />' +
            '<label for="wiz-consent">I agree to be contacted by NovaMind AI with my custom proposal.</label>' +
          '</div>' +
          '<button class="lead-submit" id="wizSubmitBtn">Accept & Get Started <i data-lucide="send"></i></button>' +
        '</div>' +
        '<div class="lead-success" id="wizSuccess" style="display:none">' +
          '<div class="success-icon"><i data-lucide="check-circle"></i></div>' +
          '<h3>You\'re all set!</h3>' +
          '<p>We\'ll review your details and send a tailored proposal within 24 hours.</p>' +
        '</div>' +
        '<div style="display:flex;justify-content:center;gap:20px;margin-top:24px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.06)">' +
          '<button class="btn-ghost wiz-restart-btn" style="font-size:0.82rem;padding:10px 20px">Start over</button>' +
          '<button class="btn-ghost wiz-dismiss-btn" style="font-size:0.82rem;padding:10px 20px">Close</button>' +
        '</div>' +
      '</div>';

    openOverlay(box);

    // Lead form submit
    box.querySelector('#wizSubmitBtn').addEventListener('click', function () {
      var name = box.querySelector('#wiz-name').value.trim();
      var email = box.querySelector('#wiz-email').value.trim();
      var consent = box.querySelector('#wiz-consent').checked;
      if (!name || !email || !consent) {
        box.querySelectorAll('#wiz-name, #wiz-email').forEach(function (inp) {
          if (!inp.value.trim()) inp.style.borderColor = 'rgba(239,68,68,0.6)';
        });
        if (!consent) box.querySelector('#wiz-consent').style.outline = '2px solid rgba(239,68,68,0.6)';
        return;
      }
      box.querySelector('#wizLeadForm').style.display = 'none';
      var success = box.querySelector('#wizSuccess');
      success.style.display = 'block';
      runIcons(success);
    });

    // Restart
    box.querySelector('.wiz-restart-btn').addEventListener('click', function () {
      closeAll();
      setTimeout(function () { openWizard(); }, 350);
    });

    // Dismiss
    box.querySelector('.wiz-dismiss-btn').addEventListener('click', closeAll);
    box.querySelector('.wiz-close').addEventListener('click', closeAll);
  }

  /* ─────────────────────────────────────────────
     BIND INDUSTRY CARDS
  ───────────────────────────────────────────── */
  function bindCards() {
    document.querySelectorAll('[data-industry]').forEach(function (card) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', function (e) {
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
        openIndustryModal(card.dataset.industry);
      });
    });
  }

  /* ─────────────────────────────────────────────
     BIND QUOTE TRIGGER BUTTONS
  ───────────────────────────────────────────── */
  function bindQuoteButtons() {
    document.querySelectorAll('[data-open-wizard]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openWizard();
      });
    });
  }

  /* ─────────────────────────────────────────────
     ESC KEY
  ───────────────────────────────────────────── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll();
  });

  /* ─────────────────────────────────────────────
     INIT
  ───────────────────────────────────────────── */
  function init() {
    bindCards();
    bindQuoteButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.nmInteractive = { openWizard: openWizard, openIndustryModal: openIndustryModal, closeAll: closeAll };
})();
