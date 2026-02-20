/* ============================================
   NovaMind AI — Nova Chatbot Widget
   FAQ chatbot with keyword-based responses
   ============================================ */
(function () {
  'use strict';

  // ---- Knowledge base (V2 content) ----
  const KB = [
    {
      keys: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'howdy', 'what\'s up', 'sup'],
      reply: () => `Hey there! 👋 I'm <strong>Nova</strong>, NovaMind AI's assistant.<br><br>I can help you learn about our services, pricing, and how we help service businesses grow with AI automation.<br><br>What would you like to know?`,
      chips: ['What do you do?', 'Services & Pricing', 'How it works', 'Get started'],
    },
    {
      keys: ['what do you do', 'what is novamind', 'about', 'who are you', 'tell me about', 'what is this'],
      reply: () => `<strong>NovaMind AI</strong> builds <strong>digital infrastructure & AI automation</strong> for service businesses.<br><br>We help restaurants, clinics, salons, gyms, contractors, and other service providers:<br><br>• Design modern, revenue-generating websites<br>• Automate operations and workflows<br>• Implement AI systems that reduce manual work<br>• Integrate payments, CRMs, and booking tools<br><br>Our goal: <strong>increase your revenue while reducing manual workload</strong>.`,
      chips: ['Our services', 'Pricing', 'Industries we serve'],
    },
    {
      keys: ['services', 'what services', 'offer', 'packages', 'what you offer'],
      reply: () => `We offer <strong>3 core packages</strong>:<br><br><strong>1. Smart Website Development</strong> — from $2,500<br>Modern websites with payments, booking, SEO & automation built in.<br><br><strong>2. Business Automation Systems</strong> — from $3,500<br>Workflow automation, CRM, email sequences, dashboards & more.<br><br><strong>3. Full Digital Infrastructure</strong> — from $6,500<br>Everything combined: website + automation + AI chatbot + CRM + 5 automated flows.<br><br>We also offer monthly support plans starting at $750/mo.`,
      chips: ['Website details', 'Automation details', 'Full package', 'Monthly support'],
    },
    {
      keys: ['website', 'web development', 'site', 'web design', 'smart website'],
      reply: () => `Our <strong>Smart Website Development</strong> package starts at <strong>$2,500</strong> and includes:<br><br>• Up to 5-page responsive website<br>• Mobile optimization<br>• Basic SEO setup<br>• Contact form & booking integration<br>• Stripe/Square payment setup<br>• Automated email confirmations<br>• Google Analytics integration<br><br><strong>Popular add-ons:</strong> AI Chatbot (+$1,800), Advanced SEO (+$900), Custom UI/UX (+$1,500), Online Ordering (+$2,000).`,
      chips: ['Business automation', 'Full package', 'Get a quote'],
    },
    {
      keys: ['automation', 'automate', 'business automation', 'workflow', 'crm', 'email sequence'],
      reply: () => `Our <strong>Business Automation System</strong> starts at <strong>$3,500</strong> and includes:<br><br>• Workflow automation<br>• CRM integration<br>• 3 automated email sequences<br>• Payment automation<br>• Performance dashboard<br>• Staff notification system<br><br><strong>Popular add-ons:</strong> AI Lead Qualification Bot (+$2,500), WhatsApp Integration (+$1,500), Recurring Billing (+$1,800), Client Onboarding Automation (+$1,200).`,
      chips: ['Time savings examples', 'Full package', 'Pricing'],
    },
    {
      keys: ['time saving', 'save time', 'how much time', 'efficiency', 'reduce workload', 'examples', 'automation example'],
      reply: () => `Great question! Here are real-world examples of <strong>automation saving time</strong> for service businesses:<br><br><strong>🍽 Restaurant:</strong> Automated booking confirmations & reminders → <strong>saves 2 hrs/day</strong> on phone calls & manual follow-ups.<br><br><strong>💇 Salon / Clinic:</strong> AI scheduling + no-show prevention → <strong>reduces no-shows by 40%</strong>, recovering thousands per month.<br><br><strong>🔧 Contractor:</strong> Automated invoicing & payment follow-ups → <strong>gets paid 2× faster</strong> with zero manual chasing.<br><br><strong>📧 Any Business:</strong> Automated email sequences for leads & clients → <strong>saves 3+ hrs/week</strong> on manual follow-ups.`,
      chips: ['Our automation package', 'Full package', 'Get started'],
    },
    {
      keys: ['full package', 'full digital', 'infrastructure', 'all in one', 'complete', 'everything'],
      reply: () => `Our <strong>Full Digital Infrastructure</strong> package starts at <strong>$6,500</strong> and is our all-in-one solution:<br><br>• Smart website<br>• Full automation system<br>• AI chatbot (like me!)<br>• Payment integrations<br>• CRM setup<br>• Performance dashboard<br>• 5 automated workflows<br>• 30-day optimization support<br><br>Premium AI add-ons available: Custom AI Sales Assistant ($3,500), Predictive Revenue Model ($4,500), Dynamic Pricing AI ($5,500).`,
      chips: ['Monthly support', 'How it works', 'Get a quote'],
    },
    {
      keys: ['monthly', 'support', 'maintenance', 'ongoing', 'retainer', 'monthly plan'],
      reply: () => `We offer <strong>Monthly AI Optimization & Support</strong> plans:<br><br><strong>Basic — $750/mo</strong><br>Maintenance, minor updates, monthly performance report.<br><br><strong>Growth — $1,500/mo</strong><br>Continuous optimization, monthly strategy call, funnel improvements.<br><br><strong>Elite — $2,500/mo</strong><br>Full system management, A/B testing, revenue forecasting, conversion optimization.<br><br>Custom development outside listed services is billed at <strong>$125/hour</strong> (10-hour minimum block).`,
      chips: ['Main packages', 'How it works', 'Contact us'],
    },
    {
      keys: ['price', 'pricing', 'cost', 'how much', 'rates', 'fee', 'affordable', 'cheap', 'expensive'],
      reply: () => `Here's a quick <strong>pricing overview</strong>:<br><br>• Smart Website Development — from <strong>$2,500</strong><br>• Business Automation System — from <strong>$3,500</strong><br>• Full Digital Infrastructure — from <strong>$6,500</strong><br>• Monthly Support: <strong>$750 – $2,500/mo</strong><br>• Custom Dev: <strong>$125/hr</strong> (10hr min)<br><br>All prices are transparent — no hidden fees. <a href="pricing.html">See full pricing →</a>`,
      chips: ['What\'s included?', 'Monthly plans', 'Book free call'],
    },
    {
      keys: ['industry', 'industries', 'restaurant', 'clinic', 'salon', 'gym', 'contractor', 'who do you help', 'serve'],
      reply: () => `We specialize in <strong>service businesses</strong>, including:<br><br>• 🍽 Restaurants & food service<br>• 🏥 Clinics & healthcare providers<br>• ✂ Salons & beauty services<br>• 🏋 Gyms & fitness studios<br>• 🔧 Contractors & trades<br>• 💼 Professional service providers<br><br>Each solution is <strong>tailored to your specific industry</strong>, with automations built around your actual workflows.`,
      chips: ['Automation examples', 'Our services', 'Get started'],
    },
    {
      keys: ['how it works', 'process', 'steps', 'how does it work', 'what happens'],
      reply: () => `Here's our <strong>4-step process</strong>:<br><br><strong>1. Free Consultation</strong><br>We analyze your business and identify automation opportunities.<br><br><strong>2. Strategy & System Design</strong><br>We create a custom digital infrastructure plan for your business.<br><br><strong>3. Implementation</strong><br>Design, integration, and testing of your systems.<br><br><strong>4. Optimization</strong><br>Ongoing improvement and scaling to maximize results.<br><br>It all starts with a <strong>free consultation</strong> — no commitment required.`,
      chips: ['Book free consultation', 'Our services', 'Pricing'],
    },
    {
      keys: ['get started', 'start', 'sign up', 'begin', 'ready', 'next step', 'book', 'consultation', 'free consultation'],
      reply: () => `Awesome! Getting started is simple and <strong>completely free</strong>:<br><br>1. Head to our <a href="contact.html">Contact page</a><br>2. Fill in the short form with your business info<br>3. We'll review and respond within 24 hours<br>4. Schedule your free 30-min discovery call<br><br>No commitment, no pressure — just a conversation about how AI can grow your business. <a href="contact.html">Book now →</a>`,
      chips: ['What to expect', 'Pricing', 'Our services'],
    },
    {
      keys: ['contact', 'email', 'phone', 'reach', 'talk to', 'speak'],
      reply: () => `You can reach us at:<br><br><strong>Email:</strong> contact@novamindai.com<br><strong>Response time:</strong> Within 24 hours<br><br>Or fill out our contact form at <a href="contact.html">the Contact page</a> — we'll get back to you promptly to discuss your business and AI goals.`,
      chips: ['Book consultation', 'How it works'],
    },
    {
      keys: ['chatbot', 'ai chatbot', 'chat', 'ai assistant', 'bot'],
      reply: () => `An <strong>AI chatbot</strong> (like me!) is one of our most popular add-ons (+$1,800, or included in the Full Digital Infrastructure package).<br><br>For your business, a custom AI chatbot can:<br><br>• Answer customer questions 24/7<br>• Qualify leads automatically<br>• Take bookings and orders<br>• Reduce support volume by up to <strong>60%</strong><br>• Respond instantly — no wait time<br><br>Want one like this for your business?`,
      chips: ['Full package pricing', 'Get started', 'Other services'],
    },
    {
      keys: ['add-on', 'addon', 'extra', 'additional', 'seo', 'whatsapp', 'invoice', 'billing', 'loyalty'],
      reply: () => `We have a wide range of <strong>add-ons</strong> to expand any package:<br><br><strong>Website add-ons:</strong> Advanced SEO ($900), Custom UI/UX ($1,500), AI Chatbot ($1,800), SMS Reminders ($750), Online Ordering ($2,000), Membership Portal ($2,200), CRM Setup ($1,500)<br><br><strong>Automation add-ons:</strong> AI Lead Qualification ($2,500), WhatsApp Integration ($1,500), Inventory Automation ($2,000), Recurring Billing ($1,800), Onboarding Automation ($1,200), Loyalty Program ($1,400)<br><br>Mix and match to build exactly what your business needs.`,
      chips: ['Main packages', 'Full package', 'Get a quote'],
    },
  ];

  const FALLBACK = {
    reply: () => `I'm not sure I caught that — I'm still learning! 😅<br><br>Here's what I <em>can</em> help you with:<br>• Our services & pricing<br>• Automation examples & time savings<br>• Industries we serve<br>• How to get started<br><br>Or <a href="contact.html">contact our team directly</a> for anything specific.`,
    chips: ['Services & Pricing', 'Automation examples', 'How it works', 'Contact us'],
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
        <span class="badge">1</span>
      </button>

      <!-- Chatbot window -->
      <div class="chatbot-window" id="cbWindow" role="dialog" aria-label="NovaMind AI Chat">
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

    // Remove badge on first message
    const badge = document.querySelector('.chatbot-toggle .badge');
    if (badge) badge.remove();

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
      sessionStorage.setItem('cbOpen', '1');
    }
    const badge = document.querySelector('.chatbot-toggle .badge');
    if (badge) badge.remove();
    setTimeout(() => { document.getElementById('cbInput')?.focus(); }, 350);
  }

  function closeChat() {
    const win = document.getElementById('cbWindow');
    if (win) win.classList.remove('open');
    sessionStorage.removeItem('cbOpen');
  }

  // ---- Init ----
  function init() {
    buildWidget();

    // Re-run lucide on new elements
    if (window.lucide) window.lucide.createIcons();

    // Wire buttons
    document.getElementById('cbToggle')?.addEventListener('click', openChat);
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
        `Hi! I'm <strong>Nova</strong>, NovaMind AI's assistant 👋<br><br>I can answer questions about our services, pricing, and how we help service businesses automate and grow. What would you like to know?`,
        ['Services & Pricing', 'Automation examples', 'How it works', 'Get started']
      );
    }, 800);

    // Restore open state
    if (sessionStorage.getItem('cbOpen') === '1') openChat();
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
