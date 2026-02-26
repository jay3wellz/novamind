/* ============================================
   NovaMind. Nova Chatbot Widget
   FAQ chatbot with keyword-based responses
   ============================================ */
(function () {
  'use strict';

  // ---- Knowledge base ----
  const KB = [
    {
      keys: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'howdy', 'what\'s up', 'sup', 'bonjour', 'salut', 'allo'],
      reply: () => `Hey there! I'm <strong>Nova</strong>, NovaMind's assistant.<br><br>I can help you learn about our automation services, pricing, and how we help service businesses scale.<br><br>What would you like to know?`,
      chips: ['What is NovaMind?', 'Services', 'Pricing', 'Get started'],
    },
    {
      keys: ['what do you do', 'what is novamind', 'about', 'who are you', 'tell me about', 'what is this', 'c\'est quoi'],
      reply: () => `<strong>NovaMind</strong> is an AI automation infrastructure company for service businesses.<br><br>We don't replace your tools. we connect to your existing CRM, POS, calendars, and booking software, then automate <strong>20–40% of your repetitive operations</strong>.<br><br>Our two layers:<br>• <strong>Automation Infrastructure</strong>. AI response, workflow automation, integrations, reporting<br>• <strong>Owner Intelligence</strong>. Anomaly detection, churn alerts, revenue signals<br><br>Your operations run 24/7 on autopilot while you focus on growth.`,
      chips: ['Services', 'Pricing', 'How it works'],
    },
    {
      keys: ['product', 'products', 'tools', 'what you offer', 'features', 'services', 'service', 'what can you automate'],
      reply: () => `We offer two integrated service layers:<br><br><strong>Layer 1. Automation Infrastructure:</strong><br>1. <strong>AI Customer Response</strong>. Chat, SMS, email, voice. 24/7.<br>2. <strong>Workflow Automation</strong>. Intake → scheduling → task routing → follow-ups → billing<br>3. <strong>System Integrations</strong>. CRM, calendars, POS, booking software<br>4. <strong>Automated Reporting</strong>. Daily/weekly digests, anomaly alerts<br><br><strong>Layer 2. Owner Intelligence:</strong><br>5. <strong>Performance Baselines</strong>. Learns "normal", detects deviations<br>6. <strong>Smart Alerts</strong>. Churn risk, revenue signals, operational leaks<br>7. <strong>Owner Visibility</strong>. Mobile-first, 2-min daily check-in<br><br><a href="services.html">See all services →</a>`,
      chips: ['Pricing', 'How it works', 'Get started'],
    },
    {
      keys: ['ai response', 'customer response', 'chat', 'sms', 'email', 'voice', 'chatbot', 'bot'],
      reply: () => `Our <strong>AI Customer Response</strong> system handles communications across all channels:<br><br>• Chat, SMS, email, and voice. all automated<br>• Qualifies and routes leads instantly<br>• Responds in seconds, 24/7<br>• Custom-trained on your business data<br>• Reduces missed leads significantly<br><br>This is part of our Automation Infrastructure layer.`,
      chips: ['Other services', 'Pricing', 'Get started'],
    },
    {
      keys: ['workflow', 'automation', 'automate', 'process', 'intake', 'routing'],
      reply: () => `Our <strong>Workflow Automation</strong> maps your full operational flow:<br><br>• Intake → scheduling → task routing<br>• Follow-ups → billing triggers<br>• Eliminates manual handoffs<br>• Custom-designed for your specific business<br>• Works with your existing tools<br><br>No more dropping the ball between steps.`,
      chips: ['Other services', 'Pricing', 'Get started'],
    },
    {
      keys: ['integration', 'connect', 'crm', 'pos', 'calendar', 'booking', 'existing tools'],
      reply: () => `Our <strong>System Integrations</strong> connect to what you already use:<br><br>• CRM systems<br>• POS and payment platforms<br>• Calendars and booking software<br>• Accounting tools<br>• Communication platforms<br><br>We don't replace your tools. we make them talk to each other and work on autopilot.`,
      chips: ['Other services', 'Pricing', 'How it works'],
    },
    {
      keys: ['report', 'reporting', 'dashboard', 'analytic', 'data', 'insight', 'digest'],
      reply: () => `Our <strong>Automated Reporting & Escalation</strong> keeps you informed without the noise:<br><br>• Daily/weekly performance digests<br>• Anomaly detection alerts<br>• Escalation logic for critical issues<br>• Revenue and efficiency tracking<br><br>See what matters in under 2 minutes per day.`,
      chips: ['Owner Intelligence', 'Pricing', 'Get started'],
    },
    {
      keys: ['owner intelligence', 'anomaly', 'alert', 'churn', 'detection', 'baseline'],
      reply: () => `<strong>Owner Intelligence</strong> is our second service layer. built for business owners:<br><br>• <strong>Performance Baselines</strong>. AI learns what "normal" looks like, spots deviations early<br>• <strong>Smart Alerts</strong>. Churn risk, operational leaks, revenue signals<br>• <strong>Owner Visibility</strong>. Mobile-first, 2-minute daily check-in<br><br>Know what's happening in your business from anywhere, without being physically present.`,
      chips: ['Automation layer', 'Pricing', 'Get started'],
    },
    {
      keys: ['plan', 'plans', 'pricing', 'price', 'cost', 'how much', 'rates', 'fee', 'affordable', 'combien', 'prix', 'tarif'],
      reply: () => `Here's our <strong>pricing</strong>:<br><br><strong>Setup Packages (One-Time):</strong><br>• Entry. Starting at $2,000<br>• Standard. Starting at $3,500<br>• Enterprise. Starting at $5,000+<br><br><strong>Monthly Subscriptions:</strong><br>• Base. Starting at $500/mo<br>• Growth. Starting at $800/mo (Most Popular)<br>• Scale. Starting at $1,200/mo<br><br>Add-on modules available: AI Voice, AI Chat, CRM Integration, Advanced Reporting, and more.<br><br><a href="pricing.html">See full pricing →</a>`,
      chips: ['What\'s included?', 'ROI', 'Get started'],
    },
    {
      keys: ['entry', 'base', 'starter', 'small business', 'basic'],
      reply: () => `The <strong>Entry</strong> package is perfect for getting started:<br><br><strong>Setup:</strong> Starting at $2,000 (one-time)<br><strong>Monthly:</strong> Starting at $500/mo<br><br>Includes:<br>• 3–5 core automations<br>• Basic integration setup<br>• Monthly reporting<br>• Email support<br><br>Most clients see ROI within 90 days.`,
      chips: ['Growth tier', 'Scale tier', 'Get started'],
    },
    {
      keys: ['growth', 'standard', 'popular', 'mid'],
      reply: () => `The <strong>Growth</strong> package is our most popular:<br><br><strong>Setup:</strong> Starting at $3,500 (one-time)<br><strong>Monthly:</strong> Starting at $800/mo<br><br>Includes:<br>• Multi-workflow implementation<br>• 2–3 system integrations<br>• Priority support<br>• Quarterly performance reviews<br><br>Best value for businesses ready to scale operations.`,
      chips: ['Entry tier', 'Scale tier', 'Get started'],
    },
    {
      keys: ['scale', 'enterprise', 'full', 'custom', 'large'],
      reply: () => `The <strong>Scale</strong> package is for full infrastructure deployment:<br><br><strong>Setup:</strong> Starting at $5,000+ (one-time)<br><strong>Monthly:</strong> Starting at $1,200/mo<br><br>Includes:<br>• Full automation suite<br>• Custom alert configuration<br>• Dedicated optimization specialist<br>• Cross-department deployment<br><br>Contact us at <a href="mailto:contact@novamindai.com">contact@novamindai.com</a> for a custom quote.`,
      chips: ['Other tiers', 'Services', 'Contact'],
    },
    {
      keys: ['roi', 'return', 'worth it', 'results', 'outcome', 'save'],
      reply: () => `Our clients typically see <strong>measurable ROI within 90 days</strong>:<br><br>• <strong>20–40% of daily operations automated</strong><br>• Faster lead response (seconds, not hours)<br>• Hours saved per week on manual tasks<br>• Reduced missed opportunities & churn<br>• Improved profit margins through efficiency<br><br>Every engagement is designed to pay for itself.`,
      chips: ['Pricing', 'How it works', 'Get started'],
    },
    {
      keys: ['how it works', 'process', 'steps', 'how does it work', 'what happens', 'deployment', 'comment ça marche'],
      reply: () => `Our deployment follows a <strong>structured 6-step process</strong>:<br><br>1. <strong>Discovery</strong>. Deep-dive into your tools, workflows, and pain points<br>2. <strong>Architecture</strong>. Design your automation blueprint<br>3. <strong>Build & Integrate</strong>. Build automations, connect to your tools<br>4. <strong>Test & QA</strong>. Full testing with real data<br>5. <strong>Go-Live & Train</strong>. Deploy and train your team<br>6. <strong>Optimize & Expand</strong>. Review, optimize, and grow<br><br><a href="how-it-works.html">Learn more →</a>`,
      chips: ['Pricing', 'Services', 'Get started'],
    },
    {
      keys: ['get started', 'start', 'sign up', 'begin', 'ready', 'next step', 'register', 'commencer', 'démarrer'],
      reply: () => `Getting started is easy:<br><br>1. <strong>Book a Free Operations Review</strong>. We analyze your current workflows<br>2. We identify your top automation opportunities<br>3. We present a custom automation plan<br>4. You decide if you want to move forward<br><br>No commitment required. The review alone gives you valuable insights.<br><br>Click <strong>"Free Operations Review"</strong> in the navigation to get started.`,
      chips: ['Pricing', 'Services', 'How it works'],
    },
    {
      keys: ['contact', 'email', 'phone', 'reach', 'talk to', 'speak', 'support'],
      reply: () => `You can reach us at:<br><br><strong>Email:</strong> contact@novamindai.com<br><strong>Response time:</strong> Within 24 hours<br><br>Or book a <strong>Free Operations Review</strong> directly from our website. it's the fastest way to see what NovaMind can do for your business.`,
      chips: ['Pricing', 'How it works'],
    },
    {
      keys: ['industry', 'industries', 'restaurant', 'garage', 'gym', 'clinic', 'real estate', 'construction', 'law'],
      reply: () => `We serve <strong>8+ industries</strong> with specialized automation playbooks:<br><br>• Restaurants<br>• Auto repair garages<br>• Gyms & fitness studios<br>• Real estate agencies<br>• Law firms<br>• Construction companies<br>• Import/export<br>• And more<br><br>Each industry gets a custom automation blueprint tailored to its specific workflows.<br><br><a href="industries.html">See industry solutions →</a>`,
      chips: ['Services', 'Pricing', 'Get started'],
    },
    {
      keys: ['replace', 'switch', 'change tools', 'new software'],
      reply: () => `<strong>No. we don't replace your tools.</strong><br><br>That's our core principle. We connect to your existing CRM, POS, calendars, booking software, and other systems.<br><br>We automate the manual work your people do <em>around</em> those tools. without asking you to switch anything.`,
      chips: ['How it works', 'Services', 'Pricing'],
    },
  ];

  const FALLBACK = {
    reply: () => `I'm not sure I caught that. still learning!<br><br>Here's what I <em>can</em> help with:<br>• Our automation services<br>• Pricing & packages<br>• How deployment works<br>• Industries we serve<br><br>Or email us at <a href="mailto:contact@novamindai.com">contact@novamindai.com</a> for anything specific.`,
    chips: ['Services', 'Pricing', 'How it works', 'Get started'],
  };

  // ---- Match input to knowledge base ----
  function findAnswer(text) {
    const lower = text.toLowerCase().trim();
    for (const entry of KB) {
      if (entry.keys.some(k => lower.includes(k))) return entry;
    }
    return FALLBACK;
  }

  // ---- Build widget HTML ----
  function buildWidget() {
    const html = `
      <!-- Chatbot toggle button -->
      <button class="chatbot-toggle" id="cbToggle" aria-label="Open chat">
        <i data-lucide="message-circle"></i>
      </button>

      <!-- Chatbot window -->
      <div class="chatbot-window" id="cbWindow" role="dialog" aria-label="NovaMind Chat">
        <div class="cb-header">
          <div class="cb-header-left">
            <div class="cb-avatar"><i data-lucide="bot"></i></div>
            <div>
              <div class="cb-name">Nova · AI Assistant</div>
              <div class="cb-status">
                <span class="cb-status-dot"></span>
                Online now
              </div>
            </div>
          </div>
          <button class="cb-close" id="cbClose" aria-label="Close chat">
            <i data-lucide="x"></i>
          </button>
        </div>

        <div class="cb-messages" id="cbMessages"></div>

        <div class="cb-input-row">
          <input
            class="cb-input"
            id="cbInput"
            type="text"
            placeholder="Ask me anything…"
            autocomplete="off"
            maxlength="300"
          />
          <button class="cb-send" id="cbSend" aria-label="Send">
            <i data-lucide="send"></i>
          </button>
        </div>
      </div>
    `;
    const container = document.createElement('div');
    container.innerHTML = html;
    document.body.appendChild(container);
  }

  // ---- Render a message bubble ----
  function addMessage(role, html, chips) {
    const msgs = document.getElementById('cbMessages');
    if (!msgs) return;

    const wrap = document.createElement('div');
    wrap.className = `cb-msg ${role}`;

    if (role === 'bot') {
      wrap.innerHTML = `
        <div class="cb-msg-avatar"><i data-lucide="bot"></i></div>
        <div>
          <div class="cb-bubble">${html}</div>
          ${chips && chips.length ? renderChips(chips) : ''}
        </div>`;
    } else {
      wrap.innerHTML = `<div class="cb-bubble">${escapeHtml(html)}</div>`;
    }

    msgs.appendChild(wrap);

    // Re-render lucide icons inside new nodes
    if (window.lucide) window.lucide.createIcons({ nodes: [wrap] });

    scrollToBottom();
  }

  function renderChips(chips) {
    const items = chips.map(c => `<button class="cb-qr" data-msg="${escapeAttr(c)}">${escapeHtml(c)}</button>`).join('');
    return `<div class="cb-quick-replies">${items}</div>`;
  }

  function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function escapeAttr(str) {
    return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function scrollToBottom() {
    const msgs = document.getElementById('cbMessages');
    if (msgs) setTimeout(() => { msgs.scrollTop = msgs.scrollHeight; }, 30);
  }

  // ---- Typing indicator ----
  let typingEl = null;
  function showTyping() {
    const msgs = document.getElementById('cbMessages');
    if (!msgs || typingEl) return;
    const wrap = document.createElement('div');
    wrap.className = 'cb-msg bot';
    wrap.innerHTML = `
      <div class="cb-msg-avatar"><i data-lucide="bot"></i></div>
      <div class="cb-typing"><span></span><span></span><span></span></div>`;
    typingEl = wrap;
    msgs.appendChild(wrap);
    if (window.lucide) window.lucide.createIcons({ nodes: [wrap] });
    scrollToBottom();
  }
  function hideTyping() {
    if (typingEl) { typingEl.remove(); typingEl = null; }
  }

  // ---- Send flow ----
  function sendMessage(text) {
    if (!text.trim()) return;
    addMessage('user', text);
    const input = document.getElementById('cbInput');
    if (input) input.value = '';

    showTyping();
    const match = findAnswer(text);
    setTimeout(() => {
      hideTyping();
      addMessage('bot', match.reply(), match.chips || []);
    }, 900 + Math.random() * 500);
  }

  // ---- Open / close ----
  function openChat() {
    const win = document.getElementById('cbWindow');
    if (win) {
      win.classList.add('open');
    }
    setTimeout(() => { document.getElementById('cbInput')?.focus(); }, 350);
  }

  function closeChat() {
    const win = document.getElementById('cbWindow');
    if (win) win.classList.remove('open');
  }

  // ---- Init ----
  function init() {
    buildWidget();

    // Re-run lucide on new elements
    if (window.lucide) window.lucide.createIcons();

    // Wire buttons
    document.getElementById('cbToggle')?.addEventListener('click', () => {
      const win = document.getElementById('cbWindow');
      if (win && win.classList.contains('open')) {
        closeChat();
      } else {
        openChat();
      }
    });
    document.getElementById('cbClose')?.addEventListener('click', closeChat);

    document.getElementById('cbSend')?.addEventListener('click', () => {
      sendMessage(document.getElementById('cbInput')?.value || '');
    });
    document.getElementById('cbInput')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') sendMessage(e.target.value);
    });

    // Quick reply delegation
    document.getElementById('cbMessages')?.addEventListener('click', (e) => {
      if (e.target.classList.contains('cb-qr')) {
        sendMessage(e.target.dataset.msg || e.target.textContent);
      }
    });

    // Welcome message after slight delay
    setTimeout(() => {
      addMessage('bot',
        `Hi! I'm <strong>Nova</strong>, NovaMind's assistant.<br><br>I can answer questions about our automation services, pricing, and how we help service businesses scale. What would you like to know?`,
        ['Services', 'Pricing', 'How it works', 'Get started']
      );
    }, 800);
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
