/* ============================================
   NovaMind — Nova Chatbot Widget
   FAQ chatbot with keyword-based responses
   ============================================ */
(function () {
  'use strict';

  // ---- Knowledge base ----
  const KB = [
    {
      keys: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'howdy', 'what\'s up', 'sup'],
      reply: () => `Hey there! I'm <strong>Nova</strong>, NovaMind's assistant.<br><br>I can help you learn about our products, pricing, plans, and how to get started.<br><br>What would you like to know?`,
      chips: ['What is NovaMind?', 'Products', 'Pricing', 'Get started'],
    },
    {
      keys: ['what do you do', 'what is novamind', 'about', 'who are you', 'tell me about', 'what is this'],
      reply: () => `<strong>NovaMind</strong> is a business platform that gives you powerful tools to run your entire operation.<br><br>We offer <strong>9 products</strong> — CRM, Invoicing, Scheduling, Analytics, Email Marketing, AI Chatbot, Inventory Management, Team Chat, and Project Management.<br><br>Every paid plan includes an <strong>AI Business Agent</strong> that knows everything about your company and works 24/7.`,
      chips: ['Products', 'Pricing', 'How it works'],
    },
    {
      keys: ['product', 'products', 'tools', 'what you offer', 'features', 'services', 'service'],
      reply: () => `We offer <strong>9 business products</strong>:<br><br>1. <strong>CRM</strong> — Contact management & deal pipeline<br>2. <strong>Invoicing</strong> — Auto-generation & payment tracking<br>3. <strong>Scheduling</strong> — Online booking & calendar sync<br>4. <strong>Analytics</strong> — Revenue tracking & custom reports<br>5. <strong>Email Marketing</strong> — Campaign builder & automation<br>6. <strong>AI Chatbot</strong> — 24/7 customer support<br>7. <strong>Inventory Management</strong> — Stock tracking & alerts<br>8. <strong>Team Chat</strong> — Internal communication<br>9. <strong>Project Management</strong> — Task boards & collaboration<br><br>Each product is <strong>$5/mo</strong> as an add-on. <a href="products.html">See all products →</a>`,
      chips: ['Pricing & plans', 'AI Agent', 'Get started'],
    },
    {
      keys: ['crm', 'contact', 'leads', 'deal', 'pipeline'],
      reply: () => `Our <strong>CRM</strong> product helps you manage contacts, track deals, and nurture relationships.<br><br>Features include:<br>• Contact management<br>• Deal pipeline tracking<br>• Activity logs<br>• Custom fields<br><br>Included in your plan or available as a <strong>$5/mo add-on</strong>.`,
      chips: ['Other products', 'Pricing', 'Get started'],
    },
    {
      keys: ['invoice', 'invoicing', 'billing', 'payment'],
      reply: () => `Our <strong>Invoicing</strong> product handles billing on autopilot.<br><br>• Auto-generate invoices<br>• Payment tracking<br>• Recurring invoices<br>• Late payment reminders<br>• Stripe integration<br><br>Included in your plan or available as a <strong>$5/mo add-on</strong>.`,
      chips: ['Other products', 'Pricing', 'Get started'],
    },
    {
      keys: ['schedul', 'booking', 'appointment', 'calendar'],
      reply: () => `Our <strong>Scheduling</strong> product streamlines appointment booking.<br><br>• Online booking page<br>• Calendar sync<br>• SMS reminders<br>• Rescheduling links<br>• No-show reduction<br><br>Included in your plan or available as a <strong>$5/mo add-on</strong>.`,
      chips: ['Other products', 'Pricing', 'Get started'],
    },
    {
      keys: ['analytic', 'dashboard', 'report', 'data', 'insight'],
      reply: () => `Our <strong>Analytics</strong> product gives you real-time business insights.<br><br>• Revenue tracking<br>• Customer analytics<br>• Custom reports<br>• Goal tracking<br>• Performance dashboards<br><br>Included in your plan or available as a <strong>$5/mo add-on</strong>.`,
      chips: ['Other products', 'Pricing', 'Get started'],
    },
    {
      keys: ['email', 'marketing', 'campaign', 'newsletter'],
      reply: () => `Our <strong>Email Marketing</strong> product helps you engage your audience at scale.<br><br>• Drag-and-drop campaign builder<br>• Automation flows<br>• A/B testing<br>• Audience segmentation<br><br>Included in your plan or available as a <strong>$5/mo add-on</strong>.`,
      chips: ['Other products', 'Pricing', 'Get started'],
    },
    {
      keys: ['chatbot', 'ai chatbot', 'chat', 'bot', 'customer support'],
      reply: () => `Our <strong>AI Chatbot</strong> product provides 24/7 intelligent customer support for your business.<br><br>• Natural language AI<br>• Lead qualification<br>• Appointment booking<br>• Custom training on your data<br>• Reduces support volume significantly<br><br>Included in your plan or available as a <strong>$5/mo add-on</strong>.`,
      chips: ['AI Agent', 'Other products', 'Get started'],
    },
    {
      keys: ['inventory', 'stock', 'supplier', 'warehouse'],
      reply: () => `Our <strong>Inventory Management</strong> product keeps your stock in check.<br><br>• Real-time stock tracking<br>• Low-stock alerts<br>• Supplier management<br>• Barcode scanning<br><br>Included in your plan or available as a <strong>$5/mo add-on</strong>.`,
      chips: ['Other products', 'Pricing', 'Get started'],
    },
    {
      keys: ['team chat', 'internal', 'communication', 'message', 'slack'],
      reply: () => `Our <strong>Team Chat</strong> product is built for fast internal communication.<br><br>• Channels & direct messages<br>• File sharing<br>• Threaded replies<br>• @mentions & notifications<br><br>Included in your plan or available as a <strong>$5/mo add-on</strong>.`,
      chips: ['Other products', 'Pricing', 'Get started'],
    },
    {
      keys: ['project', 'task', 'kanban', 'board', 'collaboration'],
      reply: () => `Our <strong>Project Management</strong> product keeps your team aligned.<br><br>• Kanban boards<br>• Task assignments<br>• Due dates & deadlines<br>• Progress tracking<br><br>Included in your plan or available as a <strong>$5/mo add-on</strong>.`,
      chips: ['Other products', 'Pricing', 'Get started'],
    },
    {
      keys: ['plan', 'plans', 'pricing', 'price', 'cost', 'how much', 'rates', 'fee', 'affordable', 'cheap', 'expensive'],
      reply: () => `Here's our <strong>pricing</strong>:<br><br><strong>Free</strong> — $0/mo<br>1 product included, no AI agent<br><br><strong>Start Up</strong> — $29/mo<br>3 products + AI Business Agent<br><br><strong>Max</strong> — $79/mo (Most Popular)<br>5 products + AI Business Agent<br><br><strong>Custom</strong> — Contact us<br>Custom product selection + AI agent<br><br>Additional products: <strong>$5/mo each</strong><br><br><a href="pricing.html">See full pricing →</a>`,
      chips: ['What\'s included?', 'AI Agent', 'Get started'],
    },
    {
      keys: ['free', 'free plan', 'no cost', 'trial'],
      reply: () => `Our <strong>Free plan</strong> includes:<br><br>• 1 product of your choice<br>• Full access to that product<br>• No credit card required<br>• No time limit<br><br>You can upgrade to a paid plan anytime to unlock more products and the AI Business Agent.`,
      chips: ['Upgrade options', 'All products', 'Get started'],
    },
    {
      keys: ['startup', 'start up', 'start-up'],
      reply: () => `The <strong>Start Up plan</strong> is $29/mo and includes:<br><br>• 3 products of your choice<br>• AI Business Agent<br>• Priority support<br>• All platform updates<br><br>Need more products? Add any for $5/mo each.`,
      chips: ['Max plan', 'All products', 'Get started'],
    },
    {
      keys: ['max', 'max plan', 'popular'],
      reply: () => `The <strong>Max plan</strong> is our most popular at $79/mo:<br><br>• 5 products of your choice<br>• AI Business Agent<br>• Priority support<br>• All platform updates<br>• Best value per product<br><br>Need more? Add any product for $5/mo each.`,
      chips: ['Custom plan', 'All products', 'Get started'],
    },
    {
      keys: ['custom', 'enterprise', 'tailored', 'custom plan'],
      reply: () => `Our <strong>Custom plan</strong> is built for larger businesses:<br><br>• Custom product selection<br>• AI Business Agent<br>• Dedicated support<br>• Custom integrations<br>• Volume pricing<br><br>Contact us at <a href="mailto:contact@novamindai.com">contact@novamindai.com</a> to discuss your needs.`,
      chips: ['Other plans', 'Products', 'Contact'],
    },
    {
      keys: ['ai agent', 'ai business', 'artificial intelligence', 'agent'],
      reply: () => `The <strong>AI Business Agent</strong> is included in every paid plan.<br><br>It's an intelligent assistant that:<br>• Knows everything about your company<br>• Answers business questions instantly<br>• Helps with decision-making<br>• Works 24/7, no breaks<br>• Learns from your data<br><br>It's like having a business analyst on staff around the clock.`,
      chips: ['Plans & pricing', 'Products', 'Get started'],
    },
    {
      keys: ['add-on', 'addon', 'extra', 'additional', '$5'],
      reply: () => `Need more products beyond what your plan includes? <strong>Add any product for just $5/mo each</strong>.<br><br>This applies to all plans. For example, on the Start Up plan (3 products included), you can add a 4th product for $5/mo, a 5th for another $5/mo, and so on.<br><br>New products are released regularly and automatically available in your account.`,
      chips: ['All products', 'Plans & pricing', 'Get started'],
    },
    {
      keys: ['how it works', 'process', 'steps', 'how does it work', 'what happens'],
      reply: () => `Getting started with NovaMind takes <strong>under 60 seconds</strong>:<br><br><strong>1. Create Your Account</strong><br>Email, password, business name. That's it.<br><br><strong>2. Select Your Plan</strong><br>Free, Start Up, Max, or Custom.<br><br><strong>3. Select Products & Grow</strong><br>Pick the tools your business needs. Add more anytime for $5/mo each.<br><br><a href="how-it-works.html">Learn more →</a>`,
      chips: ['Create account', 'Plans & pricing', 'Products'],
    },
    {
      keys: ['get started', 'start', 'sign up', 'begin', 'ready', 'next step', 'create account', 'register'],
      reply: () => `Getting started is simple and <strong>completely free</strong>:<br><br>1. Click <strong>"Start Building"</strong> in the top navigation<br>2. Enter your email, password, and business name<br>3. Choose your plan (start free!)<br>4. Select your products and you're ready to go<br><br>No credit card required for the free plan. Takes under 60 seconds.`,
      chips: ['Pricing', 'Products', 'How it works'],
    },
    {
      keys: ['contact', 'email', 'phone', 'reach', 'talk to', 'speak', 'support'],
      reply: () => `You can reach us at:<br><br><strong>Email:</strong> contact@novamindai.com<br><strong>Response time:</strong> Within 24 hours<br><br>For existing customers on paid plans, priority support is available directly through the platform.`,
      chips: ['Plans & pricing', 'How it works'],
    },
    {
      keys: ['new product', 'update', 'release', 'coming soon', 'roadmap'],
      reply: () => `We regularly release <strong>new products</strong> and updates.<br><br>When a new product launches, it's automatically available in your account. You can activate it as one of your included products or add it for $5/mo.<br><br>All existing products also receive continuous improvements and new features at no extra cost.`,
      chips: ['Current products', 'Pricing', 'Get started'],
    },
  ];

  const FALLBACK = {
    reply: () => `I'm not sure I caught that — still learning!<br><br>Here's what I <em>can</em> help with:<br>• Our products & features<br>• Plans & pricing<br>• How to get started<br>• AI Business Agent<br><br>Or email us at <a href="mailto:contact@novamindai.com">contact@novamindai.com</a> for anything specific.`,
    chips: ['Products', 'Pricing', 'How it works', 'Get started'],
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
        `Hi! I'm <strong>Nova</strong>, NovaMind's assistant.<br><br>I can answer questions about our products, pricing, and how to get your business running on NovaMind. What would you like to know?`,
        ['Products', 'Pricing', 'How it works', 'Get started']
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
