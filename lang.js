/* ============================================
   NovaMind — Language System (EN / FR)
   ============================================ */

var NM_LANG = localStorage.getItem('nm-lang') || 'en';

var T = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.industries': 'Industries',
    'nav.pricing': 'Pricing',
    'nav.products': 'Products',
    'nav.howItWorks': 'How It Works',
    'nav.cta': 'Start Building',

    // Hero
    'hero.label': 'Industries',
    'hero.title': 'Intelligence Built for <span class="gradient-text">Your Industry</span>',
    'hero.sub': 'Not replacing your systems. Giving you owner-level control from anywhere.',

    // Filter
    'filter.garage': 'Garage',
    'filter.restaurant': 'Restaurant',
    'filter.gym': 'Gym',
    'filter.realestate': 'Real Estate',
    'filter.lawfirm': 'Law Firm',
    'filter.construction': 'Construction',
    'filter.importexport': 'Import / Export',

    // Common
    'whatYouGet': 'What You Get',
    'exampleAlerts': 'Example Alerts',
    'integratesWith': 'Integrates with',
    'bookDemo': 'Book a Demo',
    'seeHow': 'See How It Works',
    'viewDash': 'View Live Dashboard',

    // CTA
    'cta.label': 'Ready?',
    'cta.title': 'See It In Action',
    'cta.desc': 'Book a demo and see how NovaMind gives you owner-level control — without replacing a single system.',
    'cta.btn1': 'Book a Demo',
    'cta.btn2': 'Browse Products',

    // Footer
    'footer.desc': 'Owner-level intelligence for every industry. Real-time KPIs, alerts, and executive reporting.',
    'footer.platform': 'Platform',
    'footer.industries': 'Industries',
    'footer.contact': 'Contact',

    // ---- GARAGE ----
    'garage.title': 'NovaMind for <span class="gradient-text">Garages</span>',
    'garage.sub': 'AI-powered operational dashboard for high-volume auto repair garages.',
    'garage.notReplacing': 'Not replacing your garage management system. Giving you owner-level control.',
    'garage.f1': 'Live vehicle tracking with color-coded status indicators',
    'garage.f2': 'Real-time service timer with threshold alerts',
    'garage.f3': 'Technician performance tracking and ranking',
    'garage.f4': 'AI workload prediction & peak-hour forecasting',
    'garage.f5': 'Lobby display screen for customer transparency',
    'garage.a1': 'Vehicle #4 service time exceeding estimate by 40min.',
    'garage.a2': 'Bay 3 idle — no vehicle assigned since 2PM.',
    'garage.a3': 'Parts delay: brake rotors ETA pushed to tomorrow.',
    'garage.a4': 'Peak-hour incoming — 6 vehicles queued, 2 bays open.',
    'garage.a5': 'Technician B completion rate 22% below average.',

    // ---- RESTAURANT ----
    'restaurant.title': 'NovaMind for <span class="gradient-text">Restaurants</span>',
    'restaurant.sub': 'Remote performance command center for restaurant owners.',
    'restaurant.notReplacing': 'Not replacing your POS or kitchen systems. Giving you owner-level control.',
    'restaurant.kpi1': 'Revenue / Hr',
    'restaurant.kpi2': 'Labor Cost',
    'restaurant.kpi3': 'Avg Ticket Speed',
    'restaurant.kpi4': 'Items at Risk',
    'restaurant.f1': 'Real-time performance score (0-100) with status tracking',
    'restaurant.f2': 'Revenue pace vs baseline — instant momentum read',
    'restaurant.f3': 'Labor efficiency & overstaffing detection by hour',
    'restaurant.f4': 'Inventory run-out prediction for top 20 critical items',
    'restaurant.f5': 'Void/discount anomaly detection & fraud alerts',
    'restaurant.a1': 'Prep time +18% vs normal. Backlog rising.',
    'restaurant.a2': 'Avg ticket down 9% vs typical Friday.',
    'restaurant.a3': 'Labor % trending 34% (target 28%).',
    'restaurant.a4': 'Salmon projected to run out by 7:15 PM.',
    'restaurant.a5': 'Turnover 15% slower than typical lunch.',

    // ---- GYM ----
    'gym.title': 'NovaMind for <span class="gradient-text">Gyms</span>',
    'gym.sub': 'Remote performance command center for gym owners.',
    'gym.notReplacing': 'Not replacing your membership system. Giving you owner-level visibility.',
    'gym.kpi1': 'Net Members / Wk',
    'gym.kpi2': 'Lead Response',
    'gym.kpi3': 'Class Occupancy',
    'gym.kpi4': 'Labor Ratio',
    'gym.f1': 'Membership health — net joins minus cancels and freezes',
    'gym.f2': 'Lead conversion speed & appointment show-rate tracking',
    'gym.f3': 'Class occupancy & peak utilization signals',
    'gym.f4': 'Payroll efficiency — labor % vs revenue per staff hour',
    'gym.f5': 'Reputation monitoring — reviews & NPS trend alerts',
    'gym.a1': 'Lead leak — 42% of new leads not contacted in 15min.',
    'gym.a2': 'Cancellations up 35% vs last 2 weeks.',
    'gym.a3': 'Evening class occupancy down 20% vs baseline.',
    'gym.a4': 'Overstaffed 1-4 PM with low check-ins.',
    'gym.a5': '1-star review posted. NPS trend dropping.',

    // ---- REAL ESTATE ----
    'realestate.title': 'NovaMind for <span class="gradient-text">Real Estate</span>',
    'realestate.sub': 'Performance radar for brokers and team leaders.',
    'realestate.notReplacing': 'Not replacing your CRM. Giving you team-level intelligence.',
    'realestate.kpi1': 'Avg Response',
    'realestate.kpi2': 'Pipeline Value',
    'realestate.kpi3': 'Close Rate',
    'realestate.kpi4': '30-Day Forecast',
    'realestate.f1': 'Lead response time tracking & SLA compliance',
    'realestate.f2': 'Pipeline velocity — stuck-deal detection by stage',
    'realestate.f3': 'Agent scoreboard — activity-to-outcome conversion',
    'realestate.f4': 'Lead source quality — close rate by channel',
    'realestate.f5': '30-day revenue forecast with cashflow control',
    'realestate.a1': 'New leads waiting >10 minutes — response breach.',
    'realestate.a2': 'Deals stuck in Negotiation >14 days.',
    'realestate.a3': 'Hot leads with no follow-up in 48 hours.',
    'realestate.a4': 'Agent contacted only 54% of leads this week.',
    'realestate.a5': 'Meta leads appointment rate down 22%.',

    // ---- LAW FIRM ----
    'lawfirm.title': 'NovaMind for <span class="gradient-text">Law Firms</span>',
    'lawfirm.sub': 'Executive oversight for managing partners.',
    'lawfirm.notReplacing': 'Not replacing your case management system. Giving partners live visibility.',
    'lawfirm.kpi1': 'Consult Convert',
    'lawfirm.kpi2': 'Billable Capture',
    'lawfirm.kpi3': 'A/R Over 30 Days',
    'lawfirm.kpi4': 'Deadlines at Risk',
    'lawfirm.f1': 'Intake speed & consultation conversion rate',
    'lawfirm.f2': 'Case velocity — cycle time by type, stall detection',
    'lawfirm.f3': 'Billable capture — logged vs expected, leakage signals',
    'lawfirm.f4': 'Collections health — A/R aging at 30/60/90 days',
    'lawfirm.f5': 'Deadline risk — upcoming deadlines missing required steps',
    'lawfirm.a1': 'Intake leak — calls unanswered, consult rate dropping.',
    'lawfirm.a2': 'Case type A cycle time +18% vs baseline.',
    'lawfirm.a3': 'Attorney B billable logging down 25% this week.',
    'lawfirm.a4': 'A/R over 30 days rising above baseline.',
    'lawfirm.a5': 'Upcoming deadline with missing required steps.',

    // ---- CONSTRUCTION ----
    'construction.title': 'NovaMind for <span class="gradient-text">Construction</span>',
    'construction.sub': 'Owner command center for contractors and GCs.',
    'construction.notReplacing': 'Not replacing your project tool. Giving you owner-level command.',
    'construction.kpi1': 'On-Time Milestones',
    'construction.kpi2': 'Crew Utilization',
    'construction.kpi3': 'Estimate Pipeline',
    'construction.kpi4': 'Uncollected C/O',
    'construction.f1': 'Schedule health — milestones on-time vs baseline',
    'construction.f2': 'Crew utilization — productive vs idle/travel time',
    'construction.f3': 'Estimate pipeline — quotes sent, follow-up, win rate',
    'construction.f4': 'Profit leak signals — budget drift, uncollected change orders',
    'construction.f5': 'Materials risk — critical items pending, supplier delays',
    'construction.a1': 'Project X milestone late by 2 days.',
    'construction.a2': 'Crew B idle >1.5 hours today.',
    'construction.a3': 'Critical material not confirmed for Friday install.',
    'construction.a4': 'Change orders not approved/collected this week.',
    'construction.a5': 'Quotes sent with no follow-up in 72 hours.',

    // ---- IMPORT/EXPORT ----
    'importexport.title': 'NovaMind for <span class="gradient-text">Import / Export</span>',
    'importexport.sub': 'Supply chain radar for import/export operators.',
    'importexport.notReplacing': 'Not replacing your ERP. Giving you supply chain intelligence.',
    'importexport.kpi1': 'On-Time Rate',
    'importexport.kpi2': 'Lead Time Drift',
    'importexport.kpi3': 'Stockout Risk',
    'importexport.kpi4': 'Value in Transit',
    'importexport.f1': 'Shipment health — on-time rate & delay risk tracking',
    'importexport.f2': 'Lead time drift — supplier/carrier reliability trends',
    'importexport.f3': 'Stockout risk — inventory coverage days, run-out forecast',
    'importexport.f4': 'Cash exposure — value in transit + aging inventory',
    'importexport.f5': 'Compliance risk — missing docs & customs blockers',
    'importexport.a1': 'Shipment delayed 6 days — stockout predicted.',
    'importexport.a2': 'Supplier A lead time +22% this month.',
    'importexport.a3': 'SKU 104 projected to hit zero in 9 days.',
    'importexport.a4': 'Missing docs for shipment ID #4182.',
    'importexport.a5': 'High-value inventory aging >60 days.',

    // ======== INDEX PAGE ========
    'index.hero.badge': 'AI-Powered Business Platform',
    'index.hero.title': 'Everything Your<br/><span class="gradient-text">Business Needs</span><br/>In One Place.',
    'index.hero.desc': 'CRM, invoicing, scheduling, analytics, and an AI agent that knows your business inside and out. Start free. Scale when you\'re ready.',
    'index.hero.btn1': 'Start Building Free',
    'index.hero.btn2': 'Explore Products',
    'index.hero.m1': 'Business Products',
    'index.hero.m2': 'To Get Started',
    'index.hero.m3': 'AI Agent',
    'index.hero.cardName': 'Nova AI',
    'index.hero.cardRole': 'Your Business Agent',
    'index.hero.cardResponse': 'Your CRM just captured <strong>3 new leads</strong>. Invoices sent. Scheduling synced. Everything\'s running on autopilot.',
    'index.hero.chip1': 'Products',
    'index.hero.chip2': 'Per add-on',
    'index.hero.chip3': 'Always on',
    'index.hero.chip4': 'Setup fees',
    'index.hero.float1': 'Revenue +20%',
    'index.hero.float2': 'All Systems Live',
    'index.hero.scroll': 'Scroll to explore',
    // Services
    'index.svc.label': 'Core Products',
    'index.svc.title': 'Tools That<br/><span class="gradient-text">Run Your Business</span>',
    'index.svc.sub': '9 powerful products. Pick what you need. Add more anytime for $5/mo each.',
    'index.svc.crm': 'CRM',
    'index.svc.crmDesc': 'Manage contacts, track deals, and nurture every relationship from lead to loyal customer.',
    'index.svc.crmF1': 'Contact management',
    'index.svc.crmF2': 'Deal pipeline',
    'index.svc.crmF3': 'Activity tracking',
    'index.svc.inv': 'Invoicing',
    'index.svc.invDesc': 'Create, send, and track invoices automatically. Get paid faster with built-in payment processing.',
    'index.svc.invF1': 'Auto-generation',
    'index.svc.invF2': 'Payment tracking',
    'index.svc.invF3': 'Recurring invoices',
    'index.svc.sched': 'Scheduling',
    'index.svc.schedDesc': 'Smart appointment booking that syncs with your calendar and eliminates no-shows.',
    'index.svc.schedF1': 'Online booking',
    'index.svc.schedF2': 'Calendar sync',
    'index.svc.schedF3': 'SMS reminders',
    'index.svc.viewAll': 'View All 9 Products',
    // Bento
    'index.bento.label': 'Platform Benefits',
    'index.bento.title': 'More Than Just<br/><span class="gradient-text">Software</span>',
    'index.bento.ai': 'AI Business Agent',
    'index.bento.aiDesc': 'Every paid plan includes an AI agent that understands your business, answers questions, and helps you make better decisions. Available 24/7, trained on your data.',
    'index.bento.aiStat': 'Always-on intelligent assistant',
    'index.bento.new': 'New Products',
    'index.bento.newDesc': 'We release new products regularly. They\'re automatically available in your account.',
    'index.bento.newStat': 'Updates included',
    'index.bento.addon': '$5/mo Add-Ons',
    'index.bento.addonDesc': 'Need more than your plan includes? Add any product for just $5/month.',
    'index.bento.addonStat': 'Per additional product',
    'index.bento.noContract': 'No Contracts, No Hidden Fees',
    'index.bento.noContractDesc': 'Cancel anytime. No lock-in periods, no cancellation fees. Transparent pricing from day one, with every product clearly listed at $5/mo.',
    'index.bento.noContractStat': 'To start \u2014 free plan available',
    // Process
    'index.proc.label': 'How It Works',
    'index.proc.title': 'Up and Running in<br/><span class="gradient-text">Under 60 Seconds</span>',
    'index.proc.s1': 'Create Your Account',
    'index.proc.s1d': 'Enter your email, password, and business name. That\'s it. No credit card required for the free plan.',
    'index.proc.s2': 'Select Your Plan',
    'index.proc.s2d': 'Free, Start Up, Max, or Custom. Each plan includes a set number of products and optional AI agent access.',
    'index.proc.s3': 'Select Products & Grow',
    'index.proc.s3d': 'Pick the tools your business needs \u2014 CRM, invoicing, scheduling, and more. Add extra products anytime for $5/mo each.',
    'index.proc.more': 'Learn More',
    // Why
    'index.why.label': 'Why NovaMind',
    'index.why.title': 'Built for Businesses<br/><span class="gradient-text">That Move Fast</span>',
    'index.why.f1': 'AI That Knows Your Business',
    'index.why.f1d': 'Your AI agent learns your data, customers, and workflows to give you answers instantly.',
    'index.why.f2': 'All-in-One Platform',
    'index.why.f2d': 'CRM, invoicing, scheduling, analytics, and more \u2014 connected in one ecosystem.',
    'index.why.f3': 'Always Evolving',
    'index.why.f3d': 'New products released regularly. Your account grows with new tools automatically.',
    'index.why.f4': 'Transparent Pricing',
    'index.why.f4d': '$0 to start. $5/mo per additional product. No hidden fees, ever.',
    'index.why.bigStat': 'Business products available today',
    'index.why.ms1': 'To start',
    'index.why.ms2': 'Per add-on',
    'index.why.ms3': 'AI agent',
    'index.why.ms4': 'Setup time',
    // Testimonials
    'index.test.label': 'What Users Say',
    'index.test.title': 'Businesses <span class="gradient-text">Love</span> NovaMind',
    'index.test.q1': 'The CRM and invoicing products alone saved us hours every week. The AI agent is like having a business analyst on staff 24/7.',
    'index.test.r1': 'Marketing Agency',
    'index.test.q2': 'We switched from 4 different tools to NovaMind. Everything is connected now. Scheduling, invoicing, analytics \u2014 all in one place.',
    'index.test.r2': 'Fitness Studio Owner',
    'index.test.q3': 'Started on the free plan to test it out. Within a week I upgraded to Max. The products are genuinely good and the $5/mo add-ons are a no-brainer.',
    'index.test.r3': 'Salon Owner',
    // Pricing preview
    'index.price.label': 'Pricing',
    'index.price.title': 'Simple Plans,<br/><span class="gradient-text">Real Value</span>',
    'index.price.sub': 'Start free. Add products and upgrade as your business grows.',
    'index.price.freeDesc': '1 product included. No credit card required.',
    'index.price.maxDesc': '5 products + AI agent. Best for growing teams.',
    'index.price.startDesc': '3 products + AI agent. Great for small teams.',
    'index.price.getStarted': 'Get Started',
    'index.price.startBuilding': 'Start Building',
    'index.price.viewAll': 'View Full Pricing & Plans',
    // CTA
    'index.cta.label': 'Get Started',
    'index.cta.title': 'Start Building Your<br/>Business Today',
    'index.cta.desc': 'Create your free account in under 60 seconds. No credit card required. Upgrade anytime.',
    'index.cta.btn1': 'Create Free Account',
    'index.cta.btn2': 'Browse Products',
    // Footer
    'footer.desc2': 'Business tools that work while you sleep. CRM, invoicing, scheduling, and more \u2014 all in one platform.',
    'footer.products': 'Products',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // ======== PRICING PAGE ========
    'pricing.hero.label': 'Pricing',
    'pricing.hero.title': 'Simple, Transparent <span class="gradient-text">Pricing</span>',
    'pricing.hero.sub': 'Start free. Upgrade when you\'re ready. Every plan includes access to our growing suite of business products.',
    'pricing.plans.label': 'Plans',
    'pricing.plans.title': 'Choose Your <span class="gradient-text">Plan</span>',
    'pricing.plans.sub': 'From free to fully custom \u2014 pick the plan that fits where you are today.',
    'pricing.free.tag': 'Perfect for getting started. Try one product with no commitment.',
    'pricing.free.f1': '1 product included',
    'pricing.free.f2': 'Basic dashboard',
    'pricing.free.f3': 'Community support',
    'pricing.free.f4': 'Product updates',
    'pricing.free.btn': 'Get Started Free',
    'pricing.startup.tag': 'For growing businesses that need core tools and AI assistance.',
    'pricing.startup.f1': '3 products included',
    'pricing.startup.f2': 'AI Business Agent',
    'pricing.startup.f3': 'Priority email support',
    'pricing.startup.f4': 'Product updates',
    'pricing.startup.f5': 'Analytics dashboard',
    'pricing.startup.f6': '$5/mo per additional product',
    'pricing.startup.btn': 'Start Building',
    'pricing.max.tag': 'For businesses that want maximum power and flexibility.',
    'pricing.max.f1': '5 products included',
    'pricing.max.f2': 'AI Business Agent',
    'pricing.max.f3': 'Priority email & chat support',
    'pricing.max.f4': 'Product updates',
    'pricing.max.f5': 'Advanced analytics',
    'pricing.max.f6': 'Custom integrations',
    'pricing.max.f7': '$5/mo per additional product',
    'pricing.max.btn': 'Get Max Plan',
    'pricing.custom.name': 'Custom',
    'pricing.custom.price': 'Let\'s Talk',
    'pricing.custom.tag': 'Enterprise-grade. Tailored to your exact needs.',
    'pricing.custom.f1': 'Custom product selection',
    'pricing.custom.f2': 'Dedicated AI agent',
    'pricing.custom.f3': 'Dedicated account manager',
    'pricing.custom.f4': 'Custom integrations',
    'pricing.custom.f5': 'SLA guarantee',
    'pricing.custom.f6': 'Volume discounts',
    'pricing.custom.btn': 'Contact Sales',
    'pricing.addon.label': 'Add-On Products',
    'pricing.addon.title': 'Expand Your <span class="gradient-text">Toolkit</span>',
    'pricing.addon.sub': 'Need more than what\'s in your plan? Add any product for just $5/month.',
    'pricing.ai.label': 'AI Business Agent',
    'pricing.ai.title': 'Your Dedicated AI<br/><span class="gradient-text">That Knows Your Business</span>',
    'pricing.ai.p1': 'The NovaMind AI Business Agent learns everything about your company \u2014 your products, processes, team, and customers. It becomes your always-on team member that never sleeps.',
    'pricing.ai.p2': 'It helps answer questions, automate decisions, suggest optimizations, and even draft emails and reports. The more you use it, the smarter it gets.',
    'pricing.ai.p3': 'Available on <strong style="color:var(--white)">Start Up</strong>, <strong style="color:var(--white)">Max</strong>, and <strong style="color:var(--white)">Custom</strong> plans.',
    'pricing.ai.avail': 'AI agent availability',
    'pricing.ai.context': 'Business context',
    'pricing.ai.questions': 'Questions answered',
    'pricing.ai.setup': 'Setup required',
    'pricing.ai.learning': 'Always learning',
    'pricing.faq.label': 'FAQ',
    'pricing.faq.title': 'Pricing <span class="gradient-text">Questions</span>',
    'pricing.faq.q1': 'What\'s included in the free plan?',
    'pricing.faq.a1': 'The free plan gives you access to 1 product of your choice, a basic dashboard, and community support. No credit card required.',
    'pricing.faq.q2': 'Can I switch plans anytime?',
    'pricing.faq.a2': 'Yes. Upgrade, downgrade, or cancel at any time. Changes take effect on your next billing cycle.',
    'pricing.faq.q3': 'How do add-on products work?',
    'pricing.faq.a3': 'Any product not included in your plan can be added for $5/month each. You can add or remove products at any time.',
    'pricing.faq.q4': 'What is the AI Business Agent?',
    'pricing.faq.a4': 'It\'s a dedicated AI assistant included in paid plans that learns your company\'s data, processes, and customers. It can answer team questions, suggest improvements, draft content, and automate routine decisions.',
    'pricing.faq.q5': 'Do new products cost extra?',
    'pricing.faq.a5': 'No. When we release new products, they\'re automatically available in your account. If it\'s within your plan\'s product limit, it\'s free. Otherwise, it\'s $5/month to add.',
    'pricing.cta.label': 'Get Started',
    'pricing.cta.title': 'Start Free,<br/>Grow Unlimited',
    'pricing.cta.desc': 'Create your account in 60 seconds. No credit card required for the free plan.',
    'pricing.cta.btn1': 'Create Free Account',
    'pricing.cta.btn2': 'Browse Products',

    // ======== PRODUCTS PAGE ========
    'products.hero.label': 'Products',
    'products.hero.title': 'Powerful Tools for <span class="gradient-text">Modern Businesses</span>',
    'products.hero.sub': 'Everything you need to run your business, from CRM to AI chatbots. Pick your plan, select your products, and start growing.',
    'products.crm': 'CRM',
    'products.crmDesc': 'Manage contacts, track deals, and nurture relationships. Never lose a lead again.',
    'products.crmF1': 'Contact management',
    'products.crmF2': 'Deal pipeline',
    'products.crmF3': 'Activity tracking',
    'products.crmF4': 'Custom fields',
    'products.inv': 'Invoicing',
    'products.invDesc': 'Create, send, and track invoices automatically. Get paid faster with Stripe integration.',
    'products.invF1': 'Auto-generation',
    'products.invF2': 'Payment tracking',
    'products.invF3': 'Recurring invoices',
    'products.invF4': 'Late reminders',
    'products.sched': 'Scheduling',
    'products.schedDesc': 'Smart appointment booking that syncs with your calendar. Reduce no-shows with automated reminders.',
    'products.schedF1': 'Online booking',
    'products.schedF2': 'Calendar sync',
    'products.schedF3': 'SMS reminders',
    'products.schedF4': 'Rescheduling links',
    'products.analytics': 'Analytics',
    'products.analyticsDesc': 'Real-time business insights. Track revenue, customers, and performance in one dashboard.',
    'products.analyticsF1': 'Revenue tracking',
    'products.analyticsF2': 'Customer analytics',
    'products.analyticsF3': 'Custom reports',
    'products.analyticsF4': 'Goal tracking',
    'products.email': 'Email Marketing',
    'products.emailDesc': 'Build campaigns, automate sequences, and engage your audience at scale.',
    'products.emailF1': 'Drag-drop builder',
    'products.emailF2': 'Automation flows',
    'products.emailF3': 'A/B testing',
    'products.emailF4': 'Audience segments',
    'products.chatbot': 'AI Chatbot',
    'products.chatbotDesc': '24/7 intelligent customer support. Answers questions, qualifies leads, and books appointments.',
    'products.chatbotF1': 'Natural language AI',
    'products.chatbotF2': 'Lead qualification',
    'products.chatbotF3': 'Appointment booking',
    'products.chatbotF4': 'Custom training',
    'products.inventory': 'Inventory Management',
    'products.inventoryDesc': 'Track stock levels, set alerts, and manage suppliers all in one place.',
    'products.inventoryF1': 'Stock tracking',
    'products.inventoryF2': 'Low-stock alerts',
    'products.inventoryF3': 'Supplier management',
    'products.inventoryF4': 'Barcode scanning',
    'products.teamchat': 'Team Chat',
    'products.teamchatDesc': 'Internal communication built for speed. Channels, direct messages, and file sharing.',
    'products.teamchatF1': 'Channels & DMs',
    'products.teamchatF2': 'File sharing',
    'products.teamchatF3': 'Threaded replies',
    'products.teamchatF4': '@mentions',
    'products.pm': 'Project Management',
    'products.pmDesc': 'Task boards, timelines, and collaboration tools to keep your team aligned.',
    'products.pmF1': 'Kanban boards',
    'products.pmF2': 'Task assignments',
    'products.pmF3': 'Due dates',
    'products.pmF4': 'Progress tracking',
    'products.benefits.label': 'Platform Benefits',
    'products.benefits.title': 'Every Account <span class="gradient-text">Includes</span>',
    'products.benefits.new': 'New Products',
    'products.benefits.newDesc': 'New products are released regularly and automatically added to your account.',
    'products.benefits.ai': 'AI Business Agent',
    'products.benefits.aiDesc': 'Paid plans include an AI agent that understands everything about your company.',
    'products.benefits.aiSmall': 'Available on Start Up, Max, and Custom plans',
    'products.benefits.noContract': 'No Contracts',
    'products.benefits.noContractDesc': 'Cancel anytime. No lock-in periods, no cancellation fees.',
    'products.benefits.addon': '$5/mo Add-Ons',
    'products.benefits.addonDesc': 'Need more products? Add any product to your plan for just $5/month each.',
    'products.cta.label': 'Get Started',
    'products.cta.title': 'Ready to Power Up<br/>Your Business?',
    'products.cta.desc': 'Create your free account and start with one product today. Upgrade anytime.',
    'products.cta.btn1': 'Start Free',
    'products.cta.btn2': 'View Pricing',

    // ======== HOW IT WORKS PAGE ========
    'hiw.hero.label': 'How It Works',
    'hiw.hero.title': 'Three Steps to <span class="gradient-text">Transform Your Business</span>',
    'hiw.hero.sub': 'No complex setup. No lengthy onboarding. Create your account, pick your plan, select your products, and you\'re ready to go.',
    'hiw.s1': 'Create Your Account',
    'hiw.s1d': 'Sign up in under 60 seconds. Just your email, a password, and your business name. No credit card required for the free plan. You\'ll have immediate access to the platform.',
    'hiw.s2': 'Select Your Plan',
    'hiw.s2d': 'Choose the plan that fits your stage. Start free with 1 product, or go with Start Up (3 products), Max (5 products), or Custom for enterprise needs. Every paid plan includes your own AI business agent that learns everything about your company.',
    'hiw.s3': 'Select Products & Maximize Your Potential',
    'hiw.s3d': 'Browse our suite of 9 business products \u2014 from CRM and invoicing to AI chatbots and project management. Add products included in your plan, or expand with additional products at just $5/month each. New products are released regularly and automatically available in your account.',
    'hiw.feat.label': 'Platform Features',
    'hiw.feat.title': 'Everything Built to <span class="gradient-text">Scale With You</span>',
    'hiw.feat.f1': 'AI Business Agent',
    'hiw.feat.f1d': 'Your dedicated AI that understands your company inside and out. It helps with decisions, automates tasks, and provides insights specific to your business.',
    'hiw.feat.f2': 'Regular Product Updates',
    'hiw.feat.f2d': 'New products and features are released regularly. They\'re automatically added to your account \u2014 no extra cost, no setup needed.',
    'hiw.feat.f3': 'Enterprise-Grade Security',
    'hiw.feat.f3d': 'Bank-level encryption, SOC 2 compliance, and automatic backups. Your business data is always protected.',
    'hiw.feat.f4': 'Priority Support',
    'hiw.feat.f4d': 'Paid plans get priority email and chat support. Custom plans get a dedicated account manager.',
    'hiw.feat.bigStat': 'To create your account',
    'hiw.feat.ms1': 'Products available',
    'hiw.feat.ms2': 'To start',
    'hiw.feat.ms3': 'AI agent access',
    'hiw.feat.ms4': 'Per extra product',
    'hiw.test.label': 'What Users Say',
    'hiw.test.title': 'Businesses <span class="gradient-text">Love</span> NovaMind',
    'hiw.test.q1': 'The CRM alone saved us 10 hours a week. Adding invoicing and scheduling was a no-brainer at $5/month each.',
    'hiw.test.r1': 'Salon Owner',
    'hiw.test.q2': 'We started on the free plan to test it. Within a week we upgraded to Max. The AI agent is like having an extra employee.',
    'hiw.test.r2': 'Gym Owner',
    'hiw.test.q3': 'Finally, a platform that doesn\'t nickel and dime you. Clear pricing, great products, and the AI agent actually understands our business.',
    'hiw.test.r3': 'Restaurant Owner',
    'hiw.cta.label': 'Ready?',
    'hiw.cta.title': 'Start Building<br/>Your Business Today',
    'hiw.cta.desc': 'Create your free account in 60 seconds. No credit card required.',
    'hiw.cta.btn1': 'Create Free Account',
    'hiw.cta.btn2': 'Browse Products'
  },

  fr: {
    // Nav
    'nav.home': 'Accueil',
    'nav.industries': 'Industries',
    'nav.pricing': 'Tarification',
    'nav.products': 'Produits',
    'nav.howItWorks': 'Comment \u00e7a marche',
    'nav.cta': 'Commencer',

    // Hero
    'hero.label': 'Industries',
    'hero.title': 'L\u2019intelligence con\u00e7ue pour <span class="gradient-text">votre industrie</span>',
    'hero.sub': 'Ne remplace pas vos syst\u00e8mes. Vous donne le contr\u00f4le du propri\u00e9taire, o\u00f9 que vous soyez.',

    // Filter
    'filter.garage': 'Garage',
    'filter.restaurant': 'Restaurant',
    'filter.gym': 'Gym',
    'filter.realestate': 'Immobilier',
    'filter.lawfirm': 'Cabinet d\u2019avocats',
    'filter.construction': 'Construction',
    'filter.importexport': 'Import / Export',

    // Common
    'whatYouGet': 'Ce que vous obtenez',
    'exampleAlerts': 'Exemples d\u2019alertes',
    'integratesWith': 'S\u2019int\u00e8gre avec',
    'bookDemo': 'R\u00e9server une d\u00e9mo',
    'seeHow': 'Voir comment \u00e7a marche',
    'viewDash': 'Voir le tableau de bord',

    // CTA
    'cta.label': 'Pr\u00eat ?',
    'cta.title': 'Voyez-le en action',
    'cta.desc': 'R\u00e9servez une d\u00e9mo et d\u00e9couvrez comment NovaMind vous donne le contr\u00f4le du propri\u00e9taire \u2014 sans remplacer un seul syst\u00e8me.',
    'cta.btn1': 'R\u00e9server une d\u00e9mo',
    'cta.btn2': 'Parcourir les produits',

    // Footer
    'footer.desc': 'Intelligence de propri\u00e9taire pour chaque industrie. KPIs en temps r\u00e9el, alertes et rapports ex\u00e9cutifs.',
    'footer.platform': 'Plateforme',
    'footer.industries': 'Industries',
    'footer.contact': 'Contact',

    // ---- GARAGE ----
    'garage.title': 'NovaMind pour les <span class="gradient-text">Garages</span>',
    'garage.sub': 'Tableau de bord op\u00e9rationnel aliment\u00e9 par l\u2019IA pour les garages automobiles \u00e0 haut volume.',
    'garage.notReplacing': 'Ne remplace pas votre syst\u00e8me de gestion de garage. Vous donne le contr\u00f4le du propri\u00e9taire.',
    'garage.f1': 'Suivi en direct des v\u00e9hicules avec indicateurs de statut color\u00e9s',
    'garage.f2': 'Minuterie de service en temps r\u00e9el avec alertes de seuil',
    'garage.f3': 'Suivi et classement des performances des techniciens',
    'garage.f4': 'Pr\u00e9diction de charge de travail IA et pr\u00e9vision des heures de pointe',
    'garage.f5': '\u00c9cran d\u2019affichage pour la transparence client',
    'garage.a1': 'V\u00e9hicule #4 : temps de service d\u00e9passant l\u2019estimation de 40min.',
    'garage.a2': 'Baie 3 inactive \u2014 aucun v\u00e9hicule assign\u00e9 depuis 14h.',
    'garage.a3': 'Retard de pi\u00e8ces : disques de frein report\u00e9s \u00e0 demain.',
    'garage.a4': 'Heure de pointe \u2014 6 v\u00e9hicules en file, 2 baies libres.',
    'garage.a5': 'Technicien B : taux de compl\u00e9tion 22% sous la moyenne.',

    // ---- RESTAURANT ----
    'restaurant.title': 'NovaMind pour les <span class="gradient-text">Restaurants</span>',
    'restaurant.sub': 'Centre de commande de performance \u00e0 distance pour les restaurateurs.',
    'restaurant.notReplacing': 'Ne remplace pas votre caisse ou vos syst\u00e8mes de cuisine. Vous donne le contr\u00f4le du propri\u00e9taire.',
    'restaurant.kpi1': 'Revenu / h',
    'restaurant.kpi2': 'Co\u00fbt main-d\u2019\u0153uvre',
    'restaurant.kpi3': 'Vitesse moy. ticket',
    'restaurant.kpi4': 'Articles \u00e0 risque',
    'restaurant.f1': 'Score de performance en temps r\u00e9el (0-100) avec suivi du statut',
    'restaurant.f2': 'Rythme des revenus vs r\u00e9f\u00e9rence \u2014 lecture instantan\u00e9e de l\u2019\u00e9lan',
    'restaurant.f3': 'Efficacit\u00e9 de la main-d\u2019\u0153uvre et d\u00e9tection du sureffectif par heure',
    'restaurant.f4': 'Pr\u00e9diction d\u2019\u00e9puisement des 20 articles critiques',
    'restaurant.f5': 'D\u00e9tection d\u2019anomalies de remises/annulations et alertes fraude',
    'restaurant.a1': 'Temps de pr\u00e9p +18% vs normal. File d\u2019attente en hausse.',
    'restaurant.a2': 'Ticket moyen en baisse de 9% vs vendredi typique.',
    'restaurant.a3': 'Main-d\u2019\u0153uvre \u00e0 34% (objectif 28%).',
    'restaurant.a4': 'Saumon pr\u00e9vu \u00e9puis\u00e9 d\u2019ici 19h15.',
    'restaurant.a5': 'Rotation 15% plus lente qu\u2019un d\u00eener typique.',

    // ---- GYM ----
    'gym.title': 'NovaMind pour les <span class="gradient-text">Gyms</span>',
    'gym.sub': 'Centre de commande de performance \u00e0 distance pour les propri\u00e9taires de gym.',
    'gym.notReplacing': 'Ne remplace pas votre syst\u00e8me d\u2019adh\u00e9sion. Vous donne la visibilit\u00e9 du propri\u00e9taire.',
    'gym.kpi1': 'Membres nets / sem',
    'gym.kpi2': 'R\u00e9ponse lead',
    'gym.kpi3': 'Occupation cours',
    'gym.kpi4': 'Ratio main-d\u2019\u0153uvre',
    'gym.f1': 'Sant\u00e9 des adh\u00e9sions \u2014 inscriptions nettes moins annulations et gels',
    'gym.f2': 'Vitesse de conversion des leads et suivi des rendez-vous',
    'gym.f3': 'Occupation des cours et signaux d\u2019utilisation aux heures de pointe',
    'gym.f4': 'Efficacit\u00e9 salariale \u2014 % main-d\u2019\u0153uvre vs revenu par heure',
    'gym.f5': 'Surveillance de r\u00e9putation \u2014 avis et tendances NPS',
    'gym.a1': 'Fuite de leads \u2014 42% des nouveaux leads non contact\u00e9s en 15min.',
    'gym.a2': 'Annulations en hausse de 35% vs 2 derni\u00e8res semaines.',
    'gym.a3': 'Occupation des cours du soir en baisse de 20% vs r\u00e9f\u00e9rence.',
    'gym.a4': 'Sureffectif 13h-16h avec peu d\u2019entr\u00e9es.',
    'gym.a5': 'Avis 1 \u00e9toile publi\u00e9. Tendance NPS en baisse.',

    // ---- REAL ESTATE ----
    'realestate.title': 'NovaMind pour l\u2019<span class="gradient-text">Immobilier</span>',
    'realestate.sub': 'Radar de performance pour les courtiers et chefs d\u2019\u00e9quipe.',
    'realestate.notReplacing': 'Ne remplace pas votre CRM. Vous donne l\u2019intelligence au niveau \u00e9quipe.',
    'realestate.kpi1': 'R\u00e9ponse moy.',
    'realestate.kpi2': 'Valeur pipeline',
    'realestate.kpi3': 'Taux de cl\u00f4ture',
    'realestate.kpi4': 'Pr\u00e9vision 30 jours',
    'realestate.f1': 'Suivi du temps de r\u00e9ponse aux leads et conformit\u00e9 SLA',
    'realestate.f2': 'V\u00e9locit\u00e9 du pipeline \u2014 d\u00e9tection des dossiers bloqu\u00e9s par \u00e9tape',
    'realestate.f3': 'Tableau de bord des agents \u2014 conversion activit\u00e9-r\u00e9sultat',
    'realestate.f4': 'Qualit\u00e9 des sources de leads \u2014 taux de cl\u00f4ture par canal',
    'realestate.f5': 'Pr\u00e9vision de revenus sur 30 jours avec contr\u00f4le de tr\u00e9sorerie',
    'realestate.a1': 'Nouveaux leads en attente >10 min \u2014 violation de d\u00e9lai.',
    'realestate.a2': 'Dossiers bloqu\u00e9s en n\u00e9gociation >14 jours.',
    'realestate.a3': 'Leads chauds sans suivi depuis 48 heures.',
    'realestate.a4': 'Agent n\u2019a contact\u00e9 que 54% des leads cette semaine.',
    'realestate.a5': 'Taux de rendez-vous leads Meta en baisse de 22%.',

    // ---- LAW FIRM ----
    'lawfirm.title': 'NovaMind pour les <span class="gradient-text">Cabinets d\u2019avocats</span>',
    'lawfirm.sub': 'Supervision ex\u00e9cutive pour les associ\u00e9s g\u00e9rants.',
    'lawfirm.notReplacing': 'Ne remplace pas votre syst\u00e8me de gestion de dossiers. Donne aux associ\u00e9s une visibilit\u00e9 en direct.',
    'lawfirm.kpi1': 'Conv. consultation',
    'lawfirm.kpi2': 'Capture facturable',
    'lawfirm.kpi3': 'C/R + 30 jours',
    'lawfirm.kpi4': '\u00c9ch\u00e9ances \u00e0 risque',
    'lawfirm.f1': 'Vitesse d\u2019admission et taux de conversion des consultations',
    'lawfirm.f2': 'V\u00e9locit\u00e9 des dossiers \u2014 dur\u00e9e par type, d\u00e9tection de blocage',
    'lawfirm.f3': 'Capture facturable \u2014 heures saisies vs pr\u00e9vues, signaux de fuite',
    'lawfirm.f4': 'Sant\u00e9 des recouvrements \u2014 anciennet\u00e9 C/R \u00e0 30/60/90 jours',
    'lawfirm.f5': 'Risque d\u2019\u00e9ch\u00e9ance \u2014 \u00e9ch\u00e9ances \u00e0 venir avec \u00e9tapes manquantes',
    'lawfirm.a1': 'Fuite d\u2019admission \u2014 appels sans r\u00e9ponse, taux de consultation en baisse.',
    'lawfirm.a2': 'Dur\u00e9e du type de dossier A +18% vs r\u00e9f\u00e9rence.',
    'lawfirm.a3': 'Avocat B \u2014 saisie facturable en baisse de 25% cette semaine.',
    'lawfirm.a4': 'C/R de plus de 30 jours en hausse au-dessus de la r\u00e9f\u00e9rence.',
    'lawfirm.a5': '\u00c9ch\u00e9ance \u00e0 venir avec \u00e9tapes requises manquantes.',

    // ---- CONSTRUCTION ----
    'construction.title': 'NovaMind pour la <span class="gradient-text">Construction</span>',
    'construction.sub': 'Centre de commande du propri\u00e9taire pour les entrepreneurs et ma\u00eetres d\u2019\u0153uvre.',
    'construction.notReplacing': 'Ne remplace pas votre outil de gestion de projet. Vous donne le contr\u00f4le du propri\u00e9taire.',
    'construction.kpi1': 'Jalons \u00e0 temps',
    'construction.kpi2': 'Utilisation \u00e9quipe',
    'construction.kpi3': 'Pipeline devis',
    'construction.kpi4': 'O/C non per\u00e7us',
    'construction.f1': 'Sant\u00e9 du calendrier \u2014 jalons \u00e0 temps vs r\u00e9f\u00e9rence',
    'construction.f2': 'Utilisation des \u00e9quipes \u2014 temps productif vs inactif/d\u00e9placement',
    'construction.f3': 'Pipeline de devis \u2014 devis envoy\u00e9s, relances, taux de gain',
    'construction.f4': 'Signaux de fuite de profit \u2014 d\u00e9rive budg\u00e9taire, ordres de modification non recouvr\u00e9s',
    'construction.f5': 'Risque mat\u00e9riaux \u2014 articles critiques en attente, retards fournisseurs',
    'construction.a1': 'Jalon du projet X en retard de 2 jours.',
    'construction.a2': '\u00c9quipe B inactive >1,5 heures aujourd\u2019hui.',
    'construction.a3': 'Mat\u00e9riel critique non confirm\u00e9 pour l\u2019installation de vendredi.',
    'construction.a4': 'Ordres de modification non approuv\u00e9s/recouvr\u00e9s cette semaine.',
    'construction.a5': 'Devis envoy\u00e9s sans relance depuis 72 heures.',

    // ---- IMPORT/EXPORT ----
    'importexport.title': 'NovaMind pour l\u2019<span class="gradient-text">Import / Export</span>',
    'importexport.sub': 'Radar de cha\u00eene d\u2019approvisionnement pour les op\u00e9rateurs import/export.',
    'importexport.notReplacing': 'Ne remplace pas votre ERP. Vous donne l\u2019intelligence de la cha\u00eene d\u2019approvisionnement.',
    'importexport.kpi1': 'Taux ponctualit\u00e9',
    'importexport.kpi2': 'D\u00e9rive d\u00e9lai',
    'importexport.kpi3': 'Risque rupture',
    'importexport.kpi4': 'Valeur en transit',
    'importexport.f1': 'Sant\u00e9 des exp\u00e9ditions \u2014 taux de ponctualit\u00e9 et risque de retard',
    'importexport.f2': 'D\u00e9rive des d\u00e9lais \u2014 tendances de fiabilit\u00e9 fournisseurs/transporteurs',
    'importexport.f3': 'Risque de rupture \u2014 jours de couverture, pr\u00e9vision d\u2019\u00e9puisement',
    'importexport.f4': 'Exposition de tr\u00e9sorerie \u2014 valeur en transit + inventaire vieillissant',
    'importexport.f5': 'Risque de conformit\u00e9 \u2014 documents manquants et blocages douaniers',
    'importexport.a1': 'Exp\u00e9dition retard\u00e9e de 6 jours \u2014 rupture de stock pr\u00e9vue.',
    'importexport.a2': 'Fournisseur A : d\u00e9lai +22% ce mois.',
    'importexport.a3': 'SKU 104 pr\u00e9vu \u00e0 z\u00e9ro dans 9 jours.',
    'importexport.a4': 'Documents manquants pour exp\u00e9dition #4182.',
    'importexport.a5': 'Inventaire de grande valeur vieillissant >60 jours.',

    // ======== INDEX PAGE ========
    'index.hero.badge': 'Plateforme d\u2019affaires propuls\u00e9e par l\u2019IA',
    'index.hero.title': 'Tout ce dont votre<br/><span class="gradient-text">entreprise a besoin</span><br/>en un seul endroit.',
    'index.hero.desc': 'CRM, facturation, planification, analytique et un agent IA qui conna\u00eet votre entreprise de fond en comble. Commencez gratuitement. \u00c9voluez quand vous \u00eates pr\u00eat.',
    'index.hero.btn1': 'Commencer gratuitement',
    'index.hero.btn2': 'Explorer les produits',
    'index.hero.m1': 'Produits d\u2019affaires',
    'index.hero.m2': 'Pour commencer',
    'index.hero.m3': 'Agent IA',
    'index.hero.cardName': 'Nova IA',
    'index.hero.cardRole': 'Votre agent d\u2019affaires',
    'index.hero.cardResponse': 'Votre CRM a captur\u00e9 <strong>3 nouveaux leads</strong>. Factures envoy\u00e9es. Planification synchronis\u00e9e. Tout fonctionne en autopilote.',
    'index.hero.chip1': 'Produits',
    'index.hero.chip2': 'Par ajout',
    'index.hero.chip3': 'Toujours actif',
    'index.hero.chip4': 'Frais d\u2019installation',
    'index.hero.float1': 'Revenus +20%',
    'index.hero.float2': 'Tous syst\u00e8mes actifs',
    'index.hero.scroll': 'D\u00e9filez pour explorer',
    'index.svc.label': 'Produits principaux',
    'index.svc.title': 'Des outils qui<br/><span class="gradient-text">g\u00e8rent votre entreprise</span>',
    'index.svc.sub': '9 produits puissants. Choisissez ce dont vous avez besoin. Ajoutez-en \u00e0 tout moment pour 5$/mois chacun.',
    'index.svc.crm': 'CRM',
    'index.svc.crmDesc': 'G\u00e9rez vos contacts, suivez vos transactions et entretenez chaque relation du lead au client fid\u00e8le.',
    'index.svc.crmF1': 'Gestion des contacts',
    'index.svc.crmF2': 'Pipeline de ventes',
    'index.svc.crmF3': 'Suivi des activit\u00e9s',
    'index.svc.inv': 'Facturation',
    'index.svc.invDesc': 'Cr\u00e9ez, envoyez et suivez vos factures automatiquement. Soyez pay\u00e9 plus rapidement gr\u00e2ce au traitement int\u00e9gr\u00e9.',
    'index.svc.invF1': 'G\u00e9n\u00e9ration automatique',
    'index.svc.invF2': 'Suivi des paiements',
    'index.svc.invF3': 'Factures r\u00e9currentes',
    'index.svc.sched': 'Planification',
    'index.svc.schedDesc': 'Prise de rendez-vous intelligente synchronis\u00e9e avec votre calendrier. \u00c9liminez les absences.',
    'index.svc.schedF1': 'R\u00e9servation en ligne',
    'index.svc.schedF2': 'Synchro calendrier',
    'index.svc.schedF3': 'Rappels SMS',
    'index.svc.viewAll': 'Voir les 9 produits',
    'index.bento.label': 'Avantages de la plateforme',
    'index.bento.title': 'Plus qu\u2019un simple<br/><span class="gradient-text">logiciel</span>',
    'index.bento.ai': 'Agent IA d\u2019affaires',
    'index.bento.aiDesc': 'Chaque forfait payant inclut un agent IA qui comprend votre entreprise, r\u00e9pond aux questions et vous aide \u00e0 prendre de meilleures d\u00e9cisions. Disponible 24/7.',
    'index.bento.aiStat': 'Assistant intelligent en permanence',
    'index.bento.new': 'Nouveaux produits',
    'index.bento.newDesc': 'Nous lan\u00e7ons de nouveaux produits r\u00e9guli\u00e8rement. Ils sont automatiquement disponibles dans votre compte.',
    'index.bento.newStat': 'Mises \u00e0 jour incluses',
    'index.bento.addon': 'Ajouts \u00e0 5$/mois',
    'index.bento.addonDesc': 'Besoin de plus que votre forfait ? Ajoutez n\u2019importe quel produit pour seulement 5$/mois.',
    'index.bento.addonStat': 'Par produit suppl\u00e9mentaire',
    'index.bento.noContract': 'Sans contrat, sans frais cach\u00e9s',
    'index.bento.noContractDesc': 'Annulez \u00e0 tout moment. Aucun engagement, aucuns frais d\u2019annulation. Tarification transparente d\u00e8s le d\u00e9part.',
    'index.bento.noContractStat': 'Pour commencer \u2014 forfait gratuit disponible',
    'index.proc.label': 'Comment \u00e7a marche',
    'index.proc.title': 'Op\u00e9rationnel en<br/><span class="gradient-text">moins de 60 secondes</span>',
    'index.proc.s1': 'Cr\u00e9ez votre compte',
    'index.proc.s1d': 'Entrez votre courriel, mot de passe et nom d\u2019entreprise. C\u2019est tout. Aucune carte de cr\u00e9dit requise pour le forfait gratuit.',
    'index.proc.s2': 'Choisissez votre forfait',
    'index.proc.s2d': 'Gratuit, Start Up, Max ou Personnalis\u00e9. Chaque forfait inclut un nombre d\u00e9fini de produits et un acc\u00e8s optionnel \u00e0 l\u2019agent IA.',
    'index.proc.s3': 'S\u00e9lectionnez vos produits et grandissez',
    'index.proc.s3d': 'Choisissez les outils dont votre entreprise a besoin \u2014 CRM, facturation, planification et plus. Ajoutez des produits suppl\u00e9mentaires \u00e0 tout moment pour 5$/mois chacun.',
    'index.proc.more': 'En savoir plus',
    'index.why.label': 'Pourquoi NovaMind',
    'index.why.title': 'Con\u00e7u pour les entreprises<br/><span class="gradient-text">qui avancent vite</span>',
    'index.why.f1': 'IA qui conna\u00eet votre entreprise',
    'index.why.f1d': 'Votre agent IA apprend vos donn\u00e9es, clients et processus pour vous donner des r\u00e9ponses instantan\u00e9ment.',
    'index.why.f2': 'Plateforme tout-en-un',
    'index.why.f2d': 'CRM, facturation, planification, analytique et plus \u2014 connect\u00e9s dans un seul \u00e9cosyst\u00e8me.',
    'index.why.f3': 'Toujours en \u00e9volution',
    'index.why.f3d': 'Nouveaux produits publi\u00e9s r\u00e9guli\u00e8rement. Votre compte grandit avec de nouveaux outils automatiquement.',
    'index.why.f4': 'Tarification transparente',
    'index.why.f4d': '0$ pour commencer. 5$/mois par produit suppl\u00e9mentaire. Aucuns frais cach\u00e9s.',
    'index.why.bigStat': 'Produits d\u2019affaires disponibles aujourd\u2019hui',
    'index.why.ms1': 'Pour commencer',
    'index.why.ms2': 'Par ajout',
    'index.why.ms3': 'Agent IA',
    'index.why.ms4': 'Temps d\u2019installation',
    'index.test.label': 'Ce que disent les utilisateurs',
    'index.test.title': 'Les entreprises <span class="gradient-text">adorent</span> NovaMind',
    'index.test.q1': 'Le CRM et la facturation \u00e0 eux seuls nous ont fait gagner des heures chaque semaine. L\u2019agent IA, c\u2019est comme avoir un analyste d\u2019affaires 24/7.',
    'index.test.r1': 'Agence marketing',
    'index.test.q2': 'Nous sommes pass\u00e9s de 4 outils diff\u00e9rents \u00e0 NovaMind. Tout est connect\u00e9 maintenant. Planification, facturation, analytique \u2014 tout en un.',
    'index.test.r2': 'Propri\u00e9taire de studio fitness',
    'index.test.q3': 'Commenc\u00e9 avec le forfait gratuit pour tester. En une semaine, j\u2019ai pass\u00e9 au Max. Les produits sont vraiment bons et les ajouts \u00e0 5$/mois sont une \u00e9vidence.',
    'index.test.r3': 'Propri\u00e9taire de salon',
    'index.price.label': 'Tarification',
    'index.price.title': 'Forfaits simples,<br/><span class="gradient-text">vraie valeur</span>',
    'index.price.sub': 'Commencez gratuitement. Ajoutez des produits et passez \u00e0 un forfait sup\u00e9rieur au fur et \u00e0 mesure.',
    'index.price.freeDesc': '1 produit inclus. Aucune carte de cr\u00e9dit requise.',
    'index.price.maxDesc': '5 produits + agent IA. Id\u00e9al pour les \u00e9quipes en croissance.',
    'index.price.startDesc': '3 produits + agent IA. Parfait pour les petites \u00e9quipes.',
    'index.price.getStarted': 'Commencer',
    'index.price.startBuilding': 'Commencer',
    'index.price.viewAll': 'Voir tous les forfaits et tarifs',
    'index.cta.label': 'Commencer',
    'index.cta.title': 'Commencez \u00e0 b\u00e2tir<br/>votre entreprise aujourd\u2019hui',
    'index.cta.desc': 'Cr\u00e9ez votre compte gratuit en moins de 60 secondes. Aucune carte de cr\u00e9dit requise. Passez \u00e0 un forfait sup\u00e9rieur \u00e0 tout moment.',
    'index.cta.btn1': 'Cr\u00e9er un compte gratuit',
    'index.cta.btn2': 'Parcourir les produits',
    'footer.desc2': 'Des outils d\u2019affaires qui travaillent pendant que vous dormez. CRM, facturation, planification et plus \u2014 tout en une seule plateforme.',
    'footer.products': 'Produits',
    'footer.privacy': 'Politique de confidentialit\u00e9',
    'footer.terms': 'Conditions d\u2019utilisation',

    // ======== PRICING PAGE ========
    'pricing.hero.label': 'Tarification',
    'pricing.hero.title': 'Tarification simple et <span class="gradient-text">transparente</span>',
    'pricing.hero.sub': 'Commencez gratuitement. Passez \u00e0 un forfait sup\u00e9rieur quand vous \u00eates pr\u00eat. Chaque forfait inclut l\u2019acc\u00e8s \u00e0 notre suite croissante de produits.',
    'pricing.plans.label': 'Forfaits',
    'pricing.plans.title': 'Choisissez votre <span class="gradient-text">forfait</span>',
    'pricing.plans.sub': 'Du gratuit au personnalis\u00e9 \u2014 choisissez le forfait qui vous convient aujourd\u2019hui.',
    'pricing.free.tag': 'Parfait pour commencer. Essayez un produit sans engagement.',
    'pricing.free.f1': '1 produit inclus',
    'pricing.free.f2': 'Tableau de bord de base',
    'pricing.free.f3': 'Support communautaire',
    'pricing.free.f4': 'Mises \u00e0 jour des produits',
    'pricing.free.btn': 'Commencer gratuitement',
    'pricing.startup.tag': 'Pour les entreprises en croissance ayant besoin d\u2019outils essentiels et d\u2019assistance IA.',
    'pricing.startup.f1': '3 produits inclus',
    'pricing.startup.f2': 'Agent IA d\u2019affaires',
    'pricing.startup.f3': 'Support par courriel prioritaire',
    'pricing.startup.f4': 'Mises \u00e0 jour des produits',
    'pricing.startup.f5': 'Tableau de bord analytique',
    'pricing.startup.f6': '5$/mois par produit suppl\u00e9mentaire',
    'pricing.startup.btn': 'Commencer',
    'pricing.max.tag': 'Pour les entreprises qui veulent puissance et flexibilit\u00e9 maximales.',
    'pricing.max.f1': '5 produits inclus',
    'pricing.max.f2': 'Agent IA d\u2019affaires',
    'pricing.max.f3': 'Support courriel et clavardage prioritaire',
    'pricing.max.f4': 'Mises \u00e0 jour des produits',
    'pricing.max.f5': 'Analytique avanc\u00e9e',
    'pricing.max.f6': 'Int\u00e9grations personnalis\u00e9es',
    'pricing.max.f7': '5$/mois par produit suppl\u00e9mentaire',
    'pricing.max.btn': 'Obtenir le forfait Max',
    'pricing.custom.name': 'Personnalis\u00e9',
    'pricing.custom.price': 'Parlons-en',
    'pricing.custom.tag': 'Solution entreprise. Adapt\u00e9e \u00e0 vos besoins exacts.',
    'pricing.custom.f1': 'S\u00e9lection de produits personnalis\u00e9e',
    'pricing.custom.f2': 'Agent IA d\u00e9di\u00e9',
    'pricing.custom.f3': 'Gestionnaire de compte d\u00e9di\u00e9',
    'pricing.custom.f4': 'Int\u00e9grations personnalis\u00e9es',
    'pricing.custom.f5': 'Garantie SLA',
    'pricing.custom.f6': 'Remises sur volume',
    'pricing.custom.btn': 'Contacter les ventes',
    'pricing.addon.label': 'Produits suppl\u00e9mentaires',
    'pricing.addon.title': '\u00c9largissez votre <span class="gradient-text">bo\u00eete \u00e0 outils</span>',
    'pricing.addon.sub': 'Besoin de plus que votre forfait ? Ajoutez n\u2019importe quel produit pour seulement 5$/mois.',
    'pricing.ai.label': 'Agent IA d\u2019affaires',
    'pricing.ai.title': 'Votre IA d\u00e9di\u00e9e<br/><span class="gradient-text">qui conna\u00eet votre entreprise</span>',
    'pricing.ai.p1': 'L\u2019agent IA NovaMind apprend tout sur votre entreprise \u2014 vos produits, processus, \u00e9quipe et clients. Il devient votre membre d\u2019\u00e9quipe toujours actif qui ne dort jamais.',
    'pricing.ai.p2': 'Il aide \u00e0 r\u00e9pondre aux questions, automatiser les d\u00e9cisions, sugg\u00e9rer des optimisations et m\u00eame r\u00e9diger des courriels et rapports. Plus vous l\u2019utilisez, plus il devient intelligent.',
    'pricing.ai.p3': 'Disponible sur les forfaits <strong style="color:var(--white)">Start Up</strong>, <strong style="color:var(--white)">Max</strong> et <strong style="color:var(--white)">Personnalis\u00e9</strong>.',
    'pricing.ai.avail': 'Disponibilit\u00e9 de l\u2019agent IA',
    'pricing.ai.context': 'Contexte d\u2019affaires',
    'pricing.ai.questions': 'Questions r\u00e9pondues',
    'pricing.ai.setup': 'Installation requise',
    'pricing.ai.learning': 'Toujours en apprentissage',
    'pricing.faq.label': 'FAQ',
    'pricing.faq.title': 'Questions sur la <span class="gradient-text">tarification</span>',
    'pricing.faq.q1': 'Qu\u2019est-ce qui est inclus dans le forfait gratuit ?',
    'pricing.faq.a1': 'Le forfait gratuit vous donne acc\u00e8s \u00e0 1 produit de votre choix, un tableau de bord de base et le support communautaire. Aucune carte de cr\u00e9dit requise.',
    'pricing.faq.q2': 'Puis-je changer de forfait \u00e0 tout moment ?',
    'pricing.faq.a2': 'Oui. Passez \u00e0 un forfait sup\u00e9rieur, inf\u00e9rieur ou annulez \u00e0 tout moment. Les changements prennent effet au prochain cycle de facturation.',
    'pricing.faq.q3': 'Comment fonctionnent les produits suppl\u00e9mentaires ?',
    'pricing.faq.a3': 'Tout produit non inclus dans votre forfait peut \u00eatre ajout\u00e9 pour 5$/mois chacun. Vous pouvez ajouter ou retirer des produits \u00e0 tout moment.',
    'pricing.faq.q4': 'Qu\u2019est-ce que l\u2019agent IA d\u2019affaires ?',
    'pricing.faq.a4': 'C\u2019est un assistant IA d\u00e9di\u00e9 inclus dans les forfaits payants qui apprend les donn\u00e9es, processus et clients de votre entreprise. Il peut r\u00e9pondre aux questions, sugg\u00e9rer des am\u00e9liorations, r\u00e9diger du contenu et automatiser les d\u00e9cisions courantes.',
    'pricing.faq.q5': 'Les nouveaux produits co\u00fbtent-ils plus cher ?',
    'pricing.faq.a5': 'Non. Lorsque nous lan\u00e7ons de nouveaux produits, ils sont automatiquement disponibles dans votre compte. S\u2019il entre dans la limite de votre forfait, c\u2019est gratuit. Sinon, c\u2019est 5$/mois pour l\u2019ajouter.',
    'pricing.cta.label': 'Commencer',
    'pricing.cta.title': 'Commencez gratuitement,<br/>grandissez sans limite',
    'pricing.cta.desc': 'Cr\u00e9ez votre compte en 60 secondes. Aucune carte de cr\u00e9dit requise pour le forfait gratuit.',
    'pricing.cta.btn1': 'Cr\u00e9er un compte gratuit',
    'pricing.cta.btn2': 'Parcourir les produits',

    // ======== PRODUCTS PAGE ========
    'products.hero.label': 'Produits',
    'products.hero.title': 'Des outils puissants pour les <span class="gradient-text">entreprises modernes</span>',
    'products.hero.sub': 'Tout ce dont vous avez besoin pour g\u00e9rer votre entreprise, du CRM aux chatbots IA. Choisissez votre forfait, s\u00e9lectionnez vos produits et commencez \u00e0 grandir.',
    'products.crm': 'CRM',
    'products.crmDesc': 'G\u00e9rez vos contacts, suivez vos transactions et entretenez vos relations. Ne perdez plus jamais un lead.',
    'products.crmF1': 'Gestion des contacts',
    'products.crmF2': 'Pipeline de ventes',
    'products.crmF3': 'Suivi des activit\u00e9s',
    'products.crmF4': 'Champs personnalis\u00e9s',
    'products.inv': 'Facturation',
    'products.invDesc': 'Cr\u00e9ez, envoyez et suivez vos factures automatiquement. Soyez pay\u00e9 plus rapidement avec l\u2019int\u00e9gration Stripe.',
    'products.invF1': 'G\u00e9n\u00e9ration automatique',
    'products.invF2': 'Suivi des paiements',
    'products.invF3': 'Factures r\u00e9currentes',
    'products.invF4': 'Rappels de retard',
    'products.sched': 'Planification',
    'products.schedDesc': 'Prise de rendez-vous intelligente synchronis\u00e9e avec votre calendrier. R\u00e9duisez les absences avec des rappels automatis\u00e9s.',
    'products.schedF1': 'R\u00e9servation en ligne',
    'products.schedF2': 'Synchro calendrier',
    'products.schedF3': 'Rappels SMS',
    'products.schedF4': 'Liens de reprogrammation',
    'products.analytics': 'Analytique',
    'products.analyticsDesc': 'Insights en temps r\u00e9el. Suivez les revenus, clients et performances dans un seul tableau de bord.',
    'products.analyticsF1': 'Suivi des revenus',
    'products.analyticsF2': 'Analytique clients',
    'products.analyticsF3': 'Rapports personnalis\u00e9s',
    'products.analyticsF4': 'Suivi des objectifs',
    'products.email': 'Marketing par courriel',
    'products.emailDesc': 'Cr\u00e9ez des campagnes, automatisez des s\u00e9quences et engagez votre audience \u00e0 grande \u00e9chelle.',
    'products.emailF1': 'Constructeur glisser-d\u00e9poser',
    'products.emailF2': 'Flux d\u2019automatisation',
    'products.emailF3': 'Tests A/B',
    'products.emailF4': 'Segments d\u2019audience',
    'products.chatbot': 'Chatbot IA',
    'products.chatbotDesc': 'Support client intelligent 24/7. R\u00e9pond aux questions, qualifie les leads et prend des rendez-vous.',
    'products.chatbotF1': 'IA en langage naturel',
    'products.chatbotF2': 'Qualification de leads',
    'products.chatbotF3': 'Prise de rendez-vous',
    'products.chatbotF4': 'Formation personnalis\u00e9e',
    'products.inventory': 'Gestion des stocks',
    'products.inventoryDesc': 'Suivez les niveaux de stock, configurez des alertes et g\u00e9rez les fournisseurs en un seul endroit.',
    'products.inventoryF1': 'Suivi des stocks',
    'products.inventoryF2': 'Alertes stock bas',
    'products.inventoryF3': 'Gestion fournisseurs',
    'products.inventoryF4': 'Lecture de codes-barres',
    'products.teamchat': 'Clavardage d\u2019\u00e9quipe',
    'products.teamchatDesc': 'Communication interne con\u00e7ue pour la vitesse. Canaux, messages directs et partage de fichiers.',
    'products.teamchatF1': 'Canaux et MD',
    'products.teamchatF2': 'Partage de fichiers',
    'products.teamchatF3': 'R\u00e9ponses en fil',
    'products.teamchatF4': '@mentions',
    'products.pm': 'Gestion de projets',
    'products.pmDesc': 'Tableaux de t\u00e2ches, \u00e9ch\u00e9anciers et outils de collaboration pour garder votre \u00e9quipe align\u00e9e.',
    'products.pmF1': 'Tableaux Kanban',
    'products.pmF2': 'Attribution de t\u00e2ches',
    'products.pmF3': 'Dates d\u2019\u00e9ch\u00e9ance',
    'products.pmF4': 'Suivi de progression',
    'products.benefits.label': 'Avantages de la plateforme',
    'products.benefits.title': 'Chaque compte <span class="gradient-text">inclut</span>',
    'products.benefits.new': 'Nouveaux produits',
    'products.benefits.newDesc': 'De nouveaux produits sont publi\u00e9s r\u00e9guli\u00e8rement et ajout\u00e9s automatiquement \u00e0 votre compte.',
    'products.benefits.ai': 'Agent IA d\u2019affaires',
    'products.benefits.aiDesc': 'Les forfaits payants incluent un agent IA qui comprend tout de votre entreprise.',
    'products.benefits.aiSmall': 'Disponible sur les forfaits Start Up, Max et Personnalis\u00e9',
    'products.benefits.noContract': 'Sans contrat',
    'products.benefits.noContractDesc': 'Annulez \u00e0 tout moment. Aucun engagement, aucuns frais d\u2019annulation.',
    'products.benefits.addon': 'Ajouts \u00e0 5$/mois',
    'products.benefits.addonDesc': 'Besoin de plus de produits ? Ajoutez n\u2019importe quel produit \u00e0 votre forfait pour seulement 5$/mois chacun.',
    'products.cta.label': 'Commencer',
    'products.cta.title': 'Pr\u00eat \u00e0 propulser<br/>votre entreprise ?',
    'products.cta.desc': 'Cr\u00e9ez votre compte gratuit et commencez avec un produit aujourd\u2019hui. Passez \u00e0 un forfait sup\u00e9rieur \u00e0 tout moment.',
    'products.cta.btn1': 'Commencer gratuitement',
    'products.cta.btn2': 'Voir la tarification',

    // ======== HOW IT WORKS PAGE ========
    'hiw.hero.label': 'Comment \u00e7a marche',
    'hiw.hero.title': 'Trois \u00e9tapes pour <span class="gradient-text">transformer votre entreprise</span>',
    'hiw.hero.sub': 'Aucune configuration complexe. Aucun long d\u00e9marrage. Cr\u00e9ez votre compte, choisissez votre forfait, s\u00e9lectionnez vos produits et c\u2019est parti.',
    'hiw.s1': 'Cr\u00e9ez votre compte',
    'hiw.s1d': 'Inscrivez-vous en moins de 60 secondes. Juste votre courriel, un mot de passe et le nom de votre entreprise. Aucune carte de cr\u00e9dit requise pour le forfait gratuit. Acc\u00e8s imm\u00e9diat \u00e0 la plateforme.',
    'hiw.s2': 'Choisissez votre forfait',
    'hiw.s2d': 'Choisissez le forfait qui correspond \u00e0 votre \u00e9tape. Commencez gratuitement avec 1 produit, ou optez pour Start Up (3 produits), Max (5 produits) ou Personnalis\u00e9 pour les besoins entreprise. Chaque forfait payant inclut votre propre agent IA qui apprend tout sur votre entreprise.',
    'hiw.s3': 'S\u00e9lectionnez vos produits et maximisez votre potentiel',
    'hiw.s3d': 'Parcourez notre suite de 9 produits \u2014 du CRM et facturation aux chatbots IA et gestion de projets. Ajoutez les produits inclus dans votre forfait, ou \u00e9largissez avec des produits suppl\u00e9mentaires \u00e0 seulement 5$/mois chacun.',
    'hiw.feat.label': 'Fonctionnalit\u00e9s de la plateforme',
    'hiw.feat.title': 'Tout est con\u00e7u pour <span class="gradient-text">\u00e9voluer avec vous</span>',
    'hiw.feat.f1': 'Agent IA d\u2019affaires',
    'hiw.feat.f1d': 'Votre IA d\u00e9di\u00e9e qui comprend votre entreprise de fond en comble. Elle aide aux d\u00e9cisions, automatise les t\u00e2ches et fournit des insights sp\u00e9cifiques.',
    'hiw.feat.f2': 'Mises \u00e0 jour r\u00e9guli\u00e8res',
    'hiw.feat.f2d': 'De nouveaux produits et fonctionnalit\u00e9s sont publi\u00e9s r\u00e9guli\u00e8rement. Ils sont automatiquement ajout\u00e9s \u00e0 votre compte \u2014 sans frais suppl\u00e9mentaires.',
    'hiw.feat.f3': 'S\u00e9curit\u00e9 de niveau entreprise',
    'hiw.feat.f3d': 'Chiffrement de niveau bancaire, conformit\u00e9 SOC 2 et sauvegardes automatiques. Vos donn\u00e9es sont toujours prot\u00e9g\u00e9es.',
    'hiw.feat.f4': 'Support prioritaire',
    'hiw.feat.f4d': 'Les forfaits payants b\u00e9n\u00e9ficient du support courriel et clavardage prioritaire. Les forfaits personnalis\u00e9s ont un gestionnaire de compte d\u00e9di\u00e9.',
    'hiw.feat.bigStat': 'Pour cr\u00e9er votre compte',
    'hiw.feat.ms1': 'Produits disponibles',
    'hiw.feat.ms2': 'Pour commencer',
    'hiw.feat.ms3': 'Acc\u00e8s agent IA',
    'hiw.feat.ms4': 'Par produit suppl\u00e9mentaire',
    'hiw.test.label': 'Ce que disent les utilisateurs',
    'hiw.test.title': 'Les entreprises <span class="gradient-text">adorent</span> NovaMind',
    'hiw.test.q1': 'Le CRM \u00e0 lui seul nous a fait gagner 10 heures par semaine. Ajouter la facturation et la planification \u00e0 5$/mois chacun \u00e9tait une \u00e9vidence.',
    'hiw.test.r1': 'Propri\u00e9taire de salon',
    'hiw.test.q2': 'Nous avons commenc\u00e9 avec le forfait gratuit pour tester. En une semaine, nous avons pass\u00e9 au Max. L\u2019agent IA, c\u2019est comme avoir un employ\u00e9 suppl\u00e9mentaire.',
    'hiw.test.r2': 'Propri\u00e9taire de gym',
    'hiw.test.q3': 'Enfin, une plateforme qui ne vous arnaque pas. Tarification claire, excellents produits et l\u2019agent IA comprend vraiment notre entreprise.',
    'hiw.test.r3': 'Propri\u00e9taire de restaurant',
    'hiw.cta.label': 'Pr\u00eat ?',
    'hiw.cta.title': 'Commencez \u00e0 b\u00e2tir<br/>votre entreprise aujourd\u2019hui',
    'hiw.cta.desc': 'Cr\u00e9ez votre compte gratuit en 60 secondes. Aucune carte de cr\u00e9dit requise.',
    'hiw.cta.btn1': 'Cr\u00e9er un compte gratuit',
    'hiw.cta.btn2': 'Parcourir les produits'
  }
};

var INDUSTRY_IDS = ['garage', 'restaurant', 'gym', 'realestate', 'lawfirm', 'construction', 'importexport'];

function setLang(lang) {
  NM_LANG = lang;
  localStorage.setItem('nm-lang', lang);
  var t = T[lang];
  if (!t) return;

  // Update toggle button text
  var btn = document.getElementById('langBtn');
  if (btn) btn.textContent = lang.toUpperCase();

  // Nav links
  var navLinks = document.querySelectorAll('.nav-links a');
  var navKeys = ['nav.home', 'nav.industries', 'nav.pricing', 'nav.products', 'nav.howItWorks'];
  navLinks.forEach(function(a, i) {
    if (navKeys[i] && t[navKeys[i]]) a.textContent = t[navKeys[i]];
  });

  // Nav CTA
  var navCta = document.querySelector('.nav-cta span');
  if (navCta) navCta.textContent = t['nav.cta'];

  // Mobile menu links
  var mobileLinks = document.querySelectorAll('.mobile-menu a');
  var mobileKeys = ['nav.home', 'nav.industries', 'nav.pricing', 'nav.products', 'nav.howItWorks'];
  mobileLinks.forEach(function(a, i) {
    if (mobileKeys[i] && t[mobileKeys[i]]) a.textContent = t[mobileKeys[i]];
  });

  // Detect page
  var path = window.location.pathname;
  var page = 'index';
  if (path.indexOf('industries') !== -1) page = 'industries';
  else if (path.indexOf('pricing') !== -1) page = 'pricing';
  else if (path.indexOf('products') !== -1) page = 'products';
  else if (path.indexOf('how-it-works') !== -1) page = 'hiw';

  // --- INDUSTRIES PAGE ---
  if (page === 'industries') {
    var heroLabel = document.querySelector('.page-hero .section-label');
    var heroTitle = document.querySelector('.page-hero h1');
    var heroSub = document.querySelector('.page-hero p');
    if (heroLabel) heroLabel.textContent = t['hero.label'];
    if (heroTitle) heroTitle.innerHTML = t['hero.title'];
    if (heroSub) heroSub.textContent = t['hero.sub'];

    document.querySelectorAll('.ind-filter-btn').forEach(function(btn) {
      var key = 'filter.' + btn.dataset.target;
      if (t[key]) btn.textContent = t[key];
    });

    INDUSTRY_IDS.forEach(function(id) {
      var section = document.getElementById(id);
      if (!section) return;
      var h2 = section.querySelector('h2');
      if (h2 && t[id + '.title']) h2.innerHTML = t[id + '.title'];
      var sub = section.querySelector('.ind-subtitle');
      if (sub && t[id + '.sub']) sub.textContent = t[id + '.sub'];
      var nr = section.querySelector('.ind-not-replacing');
      if (nr && t[id + '.notReplacing']) nr.textContent = t[id + '.notReplacing'];
      var trigger = section.querySelector('.ind-dash-trigger span');
      if (trigger) trigger.textContent = t['viewDash'];
      section.querySelectorAll('.ind-kpi-name').forEach(function(el, i) {
        var key = id + '.kpi' + (i + 1);
        if (t[key]) el.textContent = t[key];
      });
      var cards = section.querySelectorAll('.ind-card h3');
      if (cards[0]) cards[0].textContent = t['whatYouGet'];
      if (cards[1]) cards[1].textContent = t['exampleAlerts'];
      section.querySelectorAll('.ind-features li').forEach(function(li, i) {
        var key = id + '.f' + (i + 1);
        if (t[key]) li.innerHTML = '<span class="check-dot"></span>' + t[key];
      });
      section.querySelectorAll('.ind-alert').forEach(function(alert, i) {
        var key = id + '.a' + (i + 1);
        if (t[key]) {
          var cls = alert.classList.contains('critical') ? 'critical' : 'warning';
          alert.className = 'ind-alert ' + cls;
          alert.textContent = t[key];
        }
      });
      var intLabel = section.querySelector('.ind-integrations-label');
      if (intLabel) intLabel.textContent = t['integratesWith'];
      var ctas = section.querySelectorAll('.ind-cta-row .btn span');
      if (ctas[0]) ctas[0].textContent = t['bookDemo'];
      if (ctas[1]) ctas[1].textContent = t['seeHow'];
    });

    var ctaLabel = document.querySelector('.section-cta .section-label');
    var ctaTitle = document.querySelector('.section-cta .cta-title');
    var ctaDesc = document.querySelector('.section-cta .cta-desc');
    var ctaBtns = document.querySelectorAll('.section-cta .btn span');
    if (ctaLabel) ctaLabel.textContent = t['cta.label'];
    if (ctaTitle) ctaTitle.textContent = t['cta.title'];
    if (ctaDesc) ctaDesc.textContent = t['cta.desc'];
    if (ctaBtns[0]) ctaBtns[0].textContent = t['cta.btn1'];
    if (ctaBtns[1]) ctaBtns[1].textContent = t['cta.btn2'];
  }

  // --- INDEX PAGE ---
  if (page === 'index') {
    // Hero
    var badge = document.querySelector('.hero-badge');
    if (badge) badge.innerHTML = '<span class="pulse-dot"></span>' + t['index.hero.badge'];
    var hTitle = document.querySelector('.hero-title');
    if (hTitle) hTitle.innerHTML = t['index.hero.title'];
    var hDesc = document.querySelector('.hero-desc');
    if (hDesc) hDesc.textContent = t['index.hero.desc'];
    var heroBtns = document.querySelectorAll('.hero-actions .btn span');
    if (heroBtns[0]) heroBtns[0].textContent = t['index.hero.btn1'];
    if (heroBtns[1]) heroBtns[1].textContent = t['index.hero.btn2'];
    var metricLabels = document.querySelectorAll('.hero-metric .metric-label');
    if (metricLabels[0]) metricLabels[0].textContent = t['index.hero.m1'];
    if (metricLabels[1]) metricLabels[1].textContent = t['index.hero.m2'];
    if (metricLabels[2]) metricLabels[2].textContent = t['index.hero.m3'];
    var cardName = document.querySelector('.card-header-text .name');
    var cardRole = document.querySelector('.card-header-text .role');
    if (cardName) cardName.textContent = t['index.hero.cardName'];
    if (cardRole) cardRole.textContent = t['index.hero.cardRole'];
    var aiResp = document.getElementById('aiResponse');
    if (aiResp) aiResp.innerHTML = t['index.hero.cardResponse'];
    var chips = document.querySelectorAll('.metric-chip .chip-label');
    if (chips[0]) chips[0].textContent = t['index.hero.chip1'];
    if (chips[1]) chips[1].textContent = t['index.hero.chip2'];
    if (chips[2]) chips[2].textContent = t['index.hero.chip3'];
    if (chips[3]) chips[3].textContent = t['index.hero.chip4'];
    var floats = document.querySelectorAll('.float-card');
    if (floats[0]) { var svg0 = floats[0].querySelector('svg'); floats[0].innerHTML = ''; if (svg0) floats[0].appendChild(svg0); floats[0].appendChild(document.createTextNode(' ' + t['index.hero.float1'])); }
    if (floats[1]) { var svg1 = floats[1].querySelector('svg'); floats[1].innerHTML = ''; if (svg1) floats[1].appendChild(svg1); floats[1].appendChild(document.createTextNode(' ' + t['index.hero.float2'])); }
    var scrollInd = document.querySelector('.scroll-indicator span');
    if (scrollInd) scrollInd.textContent = t['index.hero.scroll'];

    // Services
    var svcSection = document.getElementById('services');
    if (svcSection) {
      var sl = svcSection.querySelector('.section-label');
      if (sl) sl.textContent = t['index.svc.label'];
      var st = svcSection.querySelector('.section-title');
      if (st) st.innerHTML = t['index.svc.title'];
      var ss = svcSection.querySelector('.section-subtitle');
      if (ss) ss.textContent = t['index.svc.sub'];
      var svcCards = svcSection.querySelectorAll('.service-card');
      var svcKeys = [
        ['index.svc.crm', 'index.svc.crmDesc', 'index.svc.crmF1', 'index.svc.crmF2', 'index.svc.crmF3'],
        ['index.svc.inv', 'index.svc.invDesc', 'index.svc.invF1', 'index.svc.invF2', 'index.svc.invF3'],
        ['index.svc.sched', 'index.svc.schedDesc', 'index.svc.schedF1', 'index.svc.schedF2', 'index.svc.schedF3']
      ];
      svcCards.forEach(function(card, ci) {
        if (!svcKeys[ci]) return;
        var h3 = card.querySelector('h3');
        if (h3) h3.textContent = t[svcKeys[ci][0]];
        var p = card.querySelector('p');
        if (p) p.textContent = t[svcKeys[ci][1]];
        card.querySelectorAll('.service-features li').forEach(function(li, fi) {
          if (svcKeys[ci][fi + 2]) li.innerHTML = '<span class="check-dot"></span>' + t[svcKeys[ci][fi + 2]];
        });
      });
      var viewAll = svcSection.querySelector('.btn span');
      if (viewAll) viewAll.textContent = t['index.svc.viewAll'];
    }

    // Bento
    var bentoSection = document.querySelector('.section-bento');
    if (bentoSection) {
      var bl = bentoSection.querySelector('.section-label');
      if (bl) bl.textContent = t['index.bento.label'];
      var bt = bentoSection.querySelector('.section-title');
      if (bt) bt.innerHTML = t['index.bento.title'];
      var bentoCards = bentoSection.querySelectorAll('.bento-card');
      var bentoMap = [
        ['index.bento.ai', 'index.bento.aiDesc', 'index.bento.aiStat'],
        ['index.bento.new', 'index.bento.newDesc', 'index.bento.newStat'],
        ['index.bento.addon', 'index.bento.addonDesc', 'index.bento.addonStat'],
        ['index.bento.noContract', 'index.bento.noContractDesc', 'index.bento.noContractStat']
      ];
      bentoCards.forEach(function(card, i) {
        if (!bentoMap[i]) return;
        var h3 = card.querySelector('h3');
        if (h3) h3.textContent = t[bentoMap[i][0]];
        var p = card.querySelector('p');
        if (p) p.textContent = t[bentoMap[i][1]];
        var sl = card.querySelector('.bento-stat-label');
        if (sl) sl.textContent = t[bentoMap[i][2]];
      });
    }

    // Process
    var procSection = document.querySelector('.section-process');
    if (procSection) {
      var pl = procSection.querySelector('.section-label');
      if (pl) pl.textContent = t['index.proc.label'];
      var pt = procSection.querySelector('.section-title');
      if (pt) pt.innerHTML = t['index.proc.title'];
      var steps = procSection.querySelectorAll('.step-content');
      var stepKeys = [['index.proc.s1', 'index.proc.s1d'], ['index.proc.s2', 'index.proc.s2d'], ['index.proc.s3', 'index.proc.s3d']];
      steps.forEach(function(step, i) {
        if (!stepKeys[i]) return;
        var h3 = step.querySelector('h3');
        if (h3) h3.textContent = t[stepKeys[i][0]];
        var p = step.querySelector('p');
        if (p) p.textContent = t[stepKeys[i][1]];
      });
      var moreBtn = procSection.querySelector('.btn span');
      if (moreBtn) moreBtn.textContent = t['index.proc.more'];
    }

    // Why NovaMind
    var whySection = document.querySelector('.section-why');
    if (whySection) {
      var wl = whySection.querySelector('.section-label');
      if (wl) wl.textContent = t['index.why.label'];
      var wt = whySection.querySelector('.section-title');
      if (wt) wt.innerHTML = t['index.why.title'];
      var wFeats = whySection.querySelectorAll('.why-feature');
      var wKeys = [['index.why.f1', 'index.why.f1d'], ['index.why.f2', 'index.why.f2d'], ['index.why.f3', 'index.why.f3d'], ['index.why.f4', 'index.why.f4d']];
      wFeats.forEach(function(f, i) {
        if (!wKeys[i]) return;
        var h4 = f.querySelector('h4');
        if (h4) h4.textContent = t[wKeys[i][0]];
        var p = f.querySelector('p');
        if (p) p.textContent = t[wKeys[i][1]];
      });
      var bigLabel = whySection.querySelector('.big-stat-label');
      if (bigLabel) bigLabel.textContent = t['index.why.bigStat'];
      var miniLabels = whySection.querySelectorAll('.mini-stat-label');
      if (miniLabels[0]) miniLabels[0].textContent = t['index.why.ms1'];
      if (miniLabels[1]) miniLabels[1].textContent = t['index.why.ms2'];
      if (miniLabels[2]) miniLabels[2].textContent = t['index.why.ms3'];
      if (miniLabels[3]) miniLabels[3].textContent = t['index.why.ms4'];
    }

    // Testimonials
    var testSection = document.querySelector('.section-testimonials');
    if (testSection) {
      var tl = testSection.querySelector('.section-label');
      if (tl) tl.textContent = t['index.test.label'];
      var tt = testSection.querySelector('.section-title');
      if (tt) tt.innerHTML = t['index.test.title'];
      var tCards = testSection.querySelectorAll('.testimonial-card');
      var tKeys = [['index.test.q1', 'index.test.r1'], ['index.test.q2', 'index.test.r2'], ['index.test.q3', 'index.test.r3']];
      tCards.forEach(function(card, i) {
        if (!tKeys[i]) return;
        var bq = card.querySelector('blockquote');
        if (bq) bq.textContent = t[tKeys[i][0]];
        var role = card.querySelector('.author-role');
        if (role) role.textContent = t[tKeys[i][1]];
      });
    }

    // Pricing preview
    var priceSection = document.querySelector('.section-pricing');
    if (priceSection) {
      var prl = priceSection.querySelector('.section-label');
      if (prl) prl.textContent = t['index.price.label'];
      var prt = priceSection.querySelector('.section-title');
      if (prt) prt.innerHTML = t['index.price.title'];
      var prs = priceSection.querySelector('.section-subtitle');
      if (prs) prs.textContent = t['index.price.sub'];
      var prCards = priceSection.querySelectorAll('.pricing-card');
      var prDescs = priceSection.querySelectorAll('.pricing-desc');
      if (prDescs[0]) prDescs[0].textContent = t['index.price.freeDesc'];
      if (prDescs[1]) prDescs[1].textContent = t['index.price.maxDesc'];
      if (prDescs[2]) prDescs[2].textContent = t['index.price.startDesc'];
      var viewPricing = priceSection.querySelector('a.btn span');
      if (viewPricing) viewPricing.textContent = t['index.price.viewAll'];
    }

    // CTA
    var ctaSec = document.querySelector('.section-cta');
    if (ctaSec) {
      var cl = ctaSec.querySelector('.section-label');
      if (cl) cl.textContent = t['index.cta.label'];
      var ct = ctaSec.querySelector('.cta-title');
      if (ct) ct.innerHTML = t['index.cta.title'];
      var cd = ctaSec.querySelector('.cta-desc');
      if (cd) cd.textContent = t['index.cta.desc'];
      var cBtns = ctaSec.querySelectorAll('.btn span');
      if (cBtns[0]) cBtns[0].textContent = t['index.cta.btn1'];
      if (cBtns[1]) cBtns[1].textContent = t['index.cta.btn2'];
    }
  }

  // --- PRICING PAGE ---
  if (page === 'pricing') {
    var ph = document.querySelector('.page-hero');
    if (ph) {
      var phl = ph.querySelector('.section-label');
      if (phl) phl.textContent = t['pricing.hero.label'];
      var pht = ph.querySelector('h1');
      if (pht) pht.innerHTML = t['pricing.hero.title'];
      var php = ph.querySelector('p');
      if (php) php.textContent = t['pricing.hero.sub'];
    }
    // Plans section
    var planLabels = document.querySelectorAll('.section .section-label');
    var planTitles = document.querySelectorAll('.section .section-title');
    var planSubs = document.querySelectorAll('.section .section-subtitle');
    // Plans header (first section after hero)
    if (planLabels[0]) planLabels[0].textContent = t['pricing.plans.label'];
    if (planTitles[0]) planTitles[0].innerHTML = t['pricing.plans.title'];
    if (planSubs[0]) planSubs[0].textContent = t['pricing.plans.sub'];

    // Plan cards
    var planCards = document.querySelectorAll('.pricing-full-card');
    // Free
    if (planCards[0]) {
      var ptag = planCards[0].querySelector('.plan-tagline');
      if (ptag) ptag.textContent = t['pricing.free.tag'];
      var feats = planCards[0].querySelectorAll('.plan-features li');
      ['pricing.free.f1','pricing.free.f2','pricing.free.f3','pricing.free.f4'].forEach(function(k, i) { if (feats[i]) { var ic = feats[i].querySelector('.check-icon'); feats[i].textContent = t[k]; if (ic) feats[i].prepend(ic); } });
      var btn = planCards[0].querySelector('.plan-cta span');
      if (btn) btn.textContent = t['pricing.free.btn'];
    }
    // Start Up
    if (planCards[1]) {
      var ptag = planCards[1].querySelector('.plan-tagline');
      if (ptag) ptag.textContent = t['pricing.startup.tag'];
      var feats = planCards[1].querySelectorAll('.plan-features li');
      ['pricing.startup.f1','pricing.startup.f2','pricing.startup.f3','pricing.startup.f4','pricing.startup.f5','pricing.startup.f6'].forEach(function(k, i) { if (feats[i]) { var ic = feats[i].querySelector('.check-icon'); feats[i].textContent = t[k]; if (ic) feats[i].prepend(ic); } });
      var btn = planCards[1].querySelector('.plan-cta span');
      if (btn) btn.textContent = t['pricing.startup.btn'];
    }
    // Max
    if (planCards[2]) {
      var ptag = planCards[2].querySelector('.plan-tagline');
      if (ptag) ptag.textContent = t['pricing.max.tag'];
      var feats = planCards[2].querySelectorAll('.plan-features li');
      ['pricing.max.f1','pricing.max.f2','pricing.max.f3','pricing.max.f4','pricing.max.f5','pricing.max.f6','pricing.max.f7'].forEach(function(k, i) { if (feats[i]) { var ic = feats[i].querySelector('.check-icon'); feats[i].textContent = t[k]; if (ic) feats[i].prepend(ic); } });
      var btn = planCards[2].querySelector('.plan-cta span');
      if (btn) btn.textContent = t['pricing.max.btn'];
    }
    // Custom
    if (planCards[3]) {
      var pn = planCards[3].querySelector('.plan-name');
      if (pn) pn.textContent = t['pricing.custom.name'];
      var pp = planCards[3].querySelector('.plan-price');
      if (pp) pp.textContent = t['pricing.custom.price'];
      var ptag = planCards[3].querySelector('.plan-tagline');
      if (ptag) ptag.textContent = t['pricing.custom.tag'];
      var feats = planCards[3].querySelectorAll('.plan-features li');
      ['pricing.custom.f1','pricing.custom.f2','pricing.custom.f3','pricing.custom.f4','pricing.custom.f5','pricing.custom.f6'].forEach(function(k, i) { if (feats[i]) { var ic = feats[i].querySelector('.check-icon'); feats[i].textContent = t[k]; if (ic) feats[i].prepend(ic); } });
      var btn = planCards[3].querySelector('.plan-cta span');
      if (btn) btn.textContent = t['pricing.custom.btn'];
    }

    // FAQ
    var faqCards = document.querySelectorAll('.glass-card h3');
    var faqDescs = document.querySelectorAll('.glass-card h3 + p');
    // Match FAQ by checking parent context
    var faqSection = document.querySelectorAll('.glass-card[style*="padding:28px"]');
    faqSection.forEach(function(card, i) {
      var qKey = 'pricing.faq.q' + (i + 1);
      var aKey = 'pricing.faq.a' + (i + 1);
      if (t[qKey]) { var h3 = card.querySelector('h3'); if (h3) h3.textContent = t[qKey]; }
      if (t[aKey]) { var p = card.querySelector('p'); if (p) p.textContent = t[aKey]; }
    });

    // CTA
    var ctaSec = document.querySelector('.section-cta');
    if (ctaSec) {
      var cl = ctaSec.querySelector('.section-label');
      if (cl) cl.textContent = t['pricing.cta.label'];
      var ct = ctaSec.querySelector('.cta-title');
      if (ct) ct.innerHTML = t['pricing.cta.title'];
      var cd = ctaSec.querySelector('.cta-desc');
      if (cd) cd.textContent = t['pricing.cta.desc'];
      var cBtns = ctaSec.querySelectorAll('.btn span');
      if (cBtns[0]) cBtns[0].textContent = t['pricing.cta.btn1'];
      if (cBtns[1]) cBtns[1].textContent = t['pricing.cta.btn2'];
    }
  }

  // --- PRODUCTS PAGE ---
  if (page === 'products') {
    var ph = document.querySelector('.page-hero');
    if (ph) {
      var phl = ph.querySelector('.section-label');
      if (phl) phl.textContent = t['products.hero.label'];
      var pht = ph.querySelector('h1');
      if (pht) pht.innerHTML = t['products.hero.title'];
      var php = ph.querySelector('p');
      if (php) php.textContent = t['products.hero.sub'];
    }
    var svcCards = document.querySelectorAll('.service-card');
    var prodKeys = ['crm','inv','sched','analytics','email','chatbot','inventory','teamchat','pm'];
    var prodFeats = {
      'crm': ['products.crmF1','products.crmF2','products.crmF3','products.crmF4'],
      'inv': ['products.invF1','products.invF2','products.invF3','products.invF4'],
      'sched': ['products.schedF1','products.schedF2','products.schedF3','products.schedF4'],
      'analytics': ['products.analyticsF1','products.analyticsF2','products.analyticsF3','products.analyticsF4'],
      'email': ['products.emailF1','products.emailF2','products.emailF3','products.emailF4'],
      'chatbot': ['products.chatbotF1','products.chatbotF2','products.chatbotF3','products.chatbotF4'],
      'inventory': ['products.inventoryF1','products.inventoryF2','products.inventoryF3','products.inventoryF4'],
      'teamchat': ['products.teamchatF1','products.teamchatF2','products.teamchatF3','products.teamchatF4'],
      'pm': ['products.pmF1','products.pmF2','products.pmF3','products.pmF4']
    };
    svcCards.forEach(function(card, i) {
      var pk = prodKeys[i];
      if (!pk) return;
      var h3 = card.querySelector('h3');
      if (h3 && t['products.' + pk]) h3.textContent = t['products.' + pk];
      var p = card.querySelector('p');
      if (p && t['products.' + pk + 'Desc']) p.textContent = t['products.' + pk + 'Desc'];
      var fk = prodFeats[pk];
      if (fk) {
        card.querySelectorAll('.service-features li').forEach(function(li, fi) {
          if (fk[fi] && t[fk[fi]]) li.innerHTML = '<span class="check-dot"></span>' + t[fk[fi]];
        });
      }
    });
    // Benefits
    var bentoCards = document.querySelectorAll('.bento-card');
    var bMap = [
      ['products.benefits.new', 'products.benefits.newDesc'],
      ['products.benefits.ai', 'products.benefits.aiDesc'],
      ['products.benefits.noContract', 'products.benefits.noContractDesc'],
      ['products.benefits.addon', 'products.benefits.addonDesc']
    ];
    bentoCards.forEach(function(card, i) {
      if (!bMap[i]) return;
      var h3 = card.querySelector('h3');
      if (h3 && t[bMap[i][0]]) h3.textContent = t[bMap[i][0]];
      var p = card.querySelector('p');
      if (p && t[bMap[i][1]]) p.textContent = t[bMap[i][1]];
    });
    // CTA
    var ctaSec = document.querySelector('.cta-section');
    if (ctaSec) {
      var cl = ctaSec.querySelector('.section-label');
      if (cl) cl.textContent = t['products.cta.label'];
      var ct = ctaSec.querySelector('.section-title');
      if (ct) ct.innerHTML = t['products.cta.title'];
      var cd = ctaSec.querySelector('p');
      if (cd) cd.textContent = t['products.cta.desc'];
      var cBtns = ctaSec.querySelectorAll('.btn span');
      if (cBtns[0]) cBtns[0].textContent = t['products.cta.btn1'];
      if (cBtns[1]) cBtns[1].textContent = t['products.cta.btn2'];
    }
  }

  // --- HOW IT WORKS PAGE ---
  if (page === 'hiw') {
    var ph = document.querySelector('.page-hero');
    if (ph) {
      var phl = ph.querySelector('.section-label');
      if (phl) phl.textContent = t['hiw.hero.label'];
      var pht = ph.querySelector('h1');
      if (pht) pht.innerHTML = t['hiw.hero.title'];
      var php = ph.querySelector('p');
      if (php) php.textContent = t['hiw.hero.sub'];
    }
    // Steps
    var steps = document.querySelectorAll('.step-content');
    var sKeys = [['hiw.s1', 'hiw.s1d'], ['hiw.s2', 'hiw.s2d'], ['hiw.s3', 'hiw.s3d']];
    steps.forEach(function(step, i) {
      if (!sKeys[i]) return;
      var h3 = step.querySelector('h3');
      if (h3) h3.textContent = t[sKeys[i][0]];
      var p = step.querySelector('p');
      if (p) p.textContent = t[sKeys[i][1]];
    });
    // Features
    var whySection = document.querySelector('.section-why');
    if (whySection) {
      var wl = whySection.querySelector('.section-label');
      if (wl) wl.textContent = t['hiw.feat.label'];
      var wt = whySection.querySelector('.section-title');
      if (wt) wt.innerHTML = t['hiw.feat.title'];
      var wFeats = whySection.querySelectorAll('.why-feature');
      var wKeys = [['hiw.feat.f1', 'hiw.feat.f1d'], ['hiw.feat.f2', 'hiw.feat.f2d'], ['hiw.feat.f3', 'hiw.feat.f3d'], ['hiw.feat.f4', 'hiw.feat.f4d']];
      wFeats.forEach(function(f, i) {
        if (!wKeys[i]) return;
        var h4 = f.querySelector('h4');
        if (h4) h4.textContent = t[wKeys[i][0]];
        var p = f.querySelector('p');
        if (p) p.textContent = t[wKeys[i][1]];
      });
      var bigLabel = whySection.querySelector('.big-stat-label');
      if (bigLabel) bigLabel.textContent = t['hiw.feat.bigStat'];
      var miniLabels = whySection.querySelectorAll('.mini-stat-label');
      if (miniLabels[0]) miniLabels[0].textContent = t['hiw.feat.ms1'];
      if (miniLabels[1]) miniLabels[1].textContent = t['hiw.feat.ms2'];
      if (miniLabels[2]) miniLabels[2].textContent = t['hiw.feat.ms3'];
      if (miniLabels[3]) miniLabels[3].textContent = t['hiw.feat.ms4'];
    }
    // Testimonials
    var testSection = document.querySelector('.section-testimonials');
    if (testSection) {
      var tl = testSection.querySelector('.section-label');
      if (tl) tl.textContent = t['hiw.test.label'];
      var tt = testSection.querySelector('.section-title');
      if (tt) tt.innerHTML = t['hiw.test.title'];
      var tCards = testSection.querySelectorAll('.testimonial-card');
      var tKeys = [['hiw.test.q1', 'hiw.test.r1'], ['hiw.test.q2', 'hiw.test.r2'], ['hiw.test.q3', 'hiw.test.r3']];
      tCards.forEach(function(card, i) {
        if (!tKeys[i]) return;
        var bq = card.querySelector('blockquote');
        if (bq) bq.textContent = t[tKeys[i][0]];
        var role = card.querySelector('.author-role');
        if (role) role.textContent = t[tKeys[i][1]];
      });
    }
    // CTA
    var ctaSec = document.querySelector('.section-cta');
    if (ctaSec) {
      var cl = ctaSec.querySelector('.section-label');
      if (cl) cl.textContent = t['hiw.cta.label'];
      var ct = ctaSec.querySelector('.cta-title');
      if (ct) ct.innerHTML = t['hiw.cta.title'];
      var cd = ctaSec.querySelector('.cta-desc');
      if (cd) cd.textContent = t['hiw.cta.desc'];
      var cBtns = ctaSec.querySelectorAll('.btn span');
      if (cBtns[0]) cBtns[0].textContent = t['hiw.cta.btn1'];
      if (cBtns[1]) cBtns[1].textContent = t['hiw.cta.btn2'];
    }
  }

  // --- FOOTER (all pages) ---
  var footerDesc = document.querySelector('.footer-brand p');
  if (footerDesc) footerDesc.textContent = (page === 'industries') ? t['footer.desc'] : t['footer.desc2'];
  var footerCols = document.querySelectorAll('.footer-col h4');
  if (footerCols[0]) footerCols[0].textContent = t['footer.platform'];
  if (footerCols[1]) footerCols[1].textContent = (page === 'industries') ? t['footer.industries'] : t['footer.products'];
  if (footerCols[2]) footerCols[2].textContent = t['footer.contact'];
  var bottomLinks = document.querySelectorAll('.footer-bottom-links a');
  if (bottomLinks[0]) bottomLinks[0].textContent = t['footer.privacy'];
  if (bottomLinks[1]) bottomLinks[1].textContent = t['footer.terms'];

  // Close dropdown
  var dd = document.getElementById('langDropdown');
  if (dd) dd.classList.remove('open');
}

function toggleLangMenu() {
  var dd = document.getElementById('langDropdown');
  if (dd) dd.classList.toggle('open');
}

// Close dropdown on outside click
document.addEventListener('click', function(e) {
  if (!e.target.closest('.lang-switch')) {
    var dd = document.getElementById('langDropdown');
    if (dd) dd.classList.remove('open');
  }
});

// Apply saved language on load
document.addEventListener('DOMContentLoaded', function() {
  if (NM_LANG && NM_LANG !== 'en') {
    setLang(NM_LANG);
  }
});
