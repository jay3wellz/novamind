/* ============================================
   NovaMind. Language System (EN / FR)
   ============================================ */

var NM_LANG = localStorage.getItem('nm-lang') || 'en';

var T = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.industries': 'Industries',
    'nav.pricing': 'Pricing',
    'nav.products': 'Services',
    'nav.howItWorks': 'How It Works',
    'nav.cta': 'Free Operations Review',

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
    'bookDemo': 'Get a Free Operations Review',
    'seeHow': 'See How It Works',
    'viewDash': 'View Live Dashboard',
    'automationExamples': 'Automation Examples',

    // CTA
    'cta.label': 'Ready?',
    'cta.title': 'Ready to Automate Your Operations?',
    'cta.desc': 'Book a free operations review and see how NovaMind automates your business. without replacing a single system.',
    'cta.btn1': 'Get a Free Operations Review',
    'cta.btn2': 'See How It Works',

    // Footer
    'footer.desc': 'AI automation infrastructure for service businesses. We don\'t replace your tools. We make them work for you.',
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
    'garage.a2': 'Bay 3 idle. no vehicle assigned since 2PM.',
    'garage.a3': 'Parts delay: brake rotors ETA pushed to tomorrow.',
    'garage.a4': 'Peak-hour incoming. 6 vehicles queued, 2 bays open.',
    'garage.a5': 'Technician B completion rate 22% below average.',
    'garage.auto1': 'SMS Appointment Reminders',
    'garage.auto1d': 'Customers get automatic text reminders 24 hours and 1 hour before their service. reducing no-shows by up to 35%.',
    'garage.auto2': 'Post-Service Follow-Up',
    'garage.auto2d': 'After every completed job, an automated message asks for a Google review and checks satisfaction. No staff effort required.',
    'garage.auto3': 'Parts Reorder Alerts',
    'garage.auto3d': 'When frequently-used parts (filters, oil, brake pads) drop below threshold, a reorder notification is triggered automatically.',

    // ---- RESTAURANT ----
    'restaurant.title': 'NovaMind for <span class="gradient-text">Restaurants</span>',
    'restaurant.sub': 'Remote performance command center for restaurant owners.',
    'restaurant.notReplacing': 'Not replacing your POS or kitchen systems. Giving you owner-level control.',
    'restaurant.kpi1': 'Revenue / Hr',
    'restaurant.kpi2': 'Labor Cost',
    'restaurant.kpi3': 'Avg Ticket Speed',
    'restaurant.kpi4': 'Items at Risk',
    'restaurant.f1': 'Real-time performance score (0-100) with status tracking',
    'restaurant.f2': 'Revenue pace vs baseline. instant momentum read',
    'restaurant.f3': 'Labor efficiency & overstaffing detection by hour',
    'restaurant.f4': 'Inventory run-out prediction for top 20 critical items',
    'restaurant.f5': 'Void/discount anomaly detection & fraud alerts',
    'restaurant.a1': 'Prep time +18% vs normal. Backlog rising.',
    'restaurant.a2': 'Avg ticket down 9% vs typical Friday.',
    'restaurant.a3': 'Labor % trending 34% (target 28%).',
    'restaurant.a4': 'Salmon projected to run out by 7:15 PM.',
    'restaurant.a5': 'Turnover 15% slower than typical lunch.',
    'restaurant.auto1': 'Reservation Confirmations & Reminders',
    'restaurant.auto1d': 'Every booking gets an automatic confirmation + reminder SMS 3 hours before. cutting no-shows and late cancellations.',
    'restaurant.auto2': 'Supplier Reorder Triggers',
    'restaurant.auto2d': 'When key inventory items (proteins, produce, spirits) hit reorder thresholds, purchase orders are drafted and sent to suppliers automatically.',
    'restaurant.auto3': 'Post-Visit Review Requests',
    'restaurant.auto3d': '2 hours after a guest\u2019s visit, an automated text invites them to leave a Google or Yelp review. building your reputation on autopilot.',

    // ---- GYM ----
    'gym.title': 'NovaMind for <span class="gradient-text">Gyms</span>',
    'gym.sub': 'Remote performance command center for gym owners.',
    'gym.notReplacing': 'Not replacing your membership system. Giving you owner-level visibility.',
    'gym.kpi1': 'Net Members / Wk',
    'gym.kpi2': 'Lead Response',
    'gym.kpi3': 'Class Occupancy',
    'gym.kpi4': 'Labor Ratio',
    'gym.f1': 'Membership health. net joins minus cancels and freezes',
    'gym.f2': 'Lead conversion speed & appointment show-rate tracking',
    'gym.f3': 'Class occupancy & peak utilization signals',
    'gym.f4': 'Payroll efficiency. labor % vs revenue per staff hour',
    'gym.f5': 'Reputation monitoring. reviews & NPS trend alerts',
    'gym.a1': 'Lead leak. 42% of new leads not contacted in 15min.',
    'gym.a2': 'Cancellations up 35% vs last 2 weeks.',
    'gym.a3': 'Evening class occupancy down 20% vs baseline.',
    'gym.a4': 'Overstaffed 1-4 PM with low check-ins.',
    'gym.a5': '1-star review posted. NPS trend dropping.',
    'gym.auto1': 'Instant Lead Follow-Up',
    'gym.auto1d': 'New inquiries get a personalized response within 2 minutes. via SMS and email. with a link to book a tour. No front desk delay.',
    'gym.auto2': 'Membership Renewal Reminders',
    'gym.auto2d': 'Automated sequences at 30, 15, and 7 days before expiry with renewal links and special offers. reducing involuntary churn.',
    'gym.auto3': 'At-Risk Member Outreach',
    'gym.auto3d': 'When a member\u2019s visit frequency drops below their baseline, a personalized check-in message is sent automatically. before they cancel.',

    // ---- REAL ESTATE ----
    'realestate.title': 'NovaMind for <span class="gradient-text">Real Estate</span>',
    'realestate.sub': 'Performance radar for brokers and team leaders.',
    'realestate.notReplacing': 'Not replacing your CRM. Giving you team-level intelligence.',
    'realestate.kpi1': 'Avg Response',
    'realestate.kpi2': 'Pipeline Value',
    'realestate.kpi3': 'Close Rate',
    'realestate.kpi4': '30-Day Forecast',
    'realestate.f1': 'Lead response time tracking & SLA compliance',
    'realestate.f2': 'Pipeline velocity. stuck-deal detection by stage',
    'realestate.f3': 'Agent scoreboard. activity-to-outcome conversion',
    'realestate.f4': 'Lead source quality. close rate by channel',
    'realestate.f5': '30-day revenue forecast with cashflow control',
    'realestate.a1': 'New leads waiting >10 minutes. response breach.',
    'realestate.a2': 'Deals stuck in Negotiation >14 days.',
    'realestate.a3': 'Hot leads with no follow-up in 48 hours.',
    'realestate.a4': 'Agent contacted only 54% of leads this week.',
    'realestate.a5': 'Meta leads appointment rate down 22%.',
    'realestate.auto1': 'Instant Lead Response',
    'realestate.auto1d': 'Every new lead gets a personalized text and email within 2 minutes. qualifying intent and booking a showing before competitors respond.',
    'realestate.auto2': 'Showing Follow-Up & Feedback',
    'realestate.auto2d': 'After every showing, an automated message collects buyer feedback and triggers next steps. offer prep, second showing, or nurture sequence.',
    'realestate.auto3': 'Pipeline Stall Alerts',
    'realestate.auto3d': 'Deals sitting too long at any stage get flagged automatically. with suggested actions pushed to the assigned agent\u2019s phone.',

    // ---- LAW FIRM ----
    'lawfirm.title': 'NovaMind for <span class="gradient-text">Law Firms</span>',
    'lawfirm.sub': 'Executive oversight for managing partners.',
    'lawfirm.notReplacing': 'Not replacing your case management system. Giving partners live visibility.',
    'lawfirm.kpi1': 'Consult Convert',
    'lawfirm.kpi2': 'Billable Capture',
    'lawfirm.kpi3': 'A/R Over 30 Days',
    'lawfirm.kpi4': 'Deadlines at Risk',
    'lawfirm.f1': 'Intake speed & consultation conversion rate',
    'lawfirm.f2': 'Case velocity. cycle time by type, stall detection',
    'lawfirm.f3': 'Billable capture. logged vs expected, leakage signals',
    'lawfirm.f4': 'Collections health. A/R aging at 30/60/90 days',
    'lawfirm.f5': 'Deadline risk. upcoming deadlines missing required steps',
    'lawfirm.a1': 'Intake leak. calls unanswered, consult rate dropping.',
    'lawfirm.a2': 'Case type A cycle time +18% vs baseline.',
    'lawfirm.a3': 'Attorney B billable logging down 25% this week.',
    'lawfirm.a4': 'A/R over 30 days rising above baseline.',
    'lawfirm.a5': 'Upcoming deadline with missing required steps.',
    'lawfirm.auto1': 'Intake Screening & Booking',
    'lawfirm.auto1d': 'New inquiries are automatically screened for case type and urgency, then routed to the right attorney with a consultation link. 24/7.',
    'lawfirm.auto2': 'Client Case Updates',
    'lawfirm.auto2d': 'When a case hits a milestone (filing, hearing, settlement), clients receive an automatic status update. reducing "where\u2019s my case?" calls.',
    'lawfirm.auto3': 'Billable Hour Nudges',
    'lawfirm.auto3d': 'When an attorney\u2019s weekly capture rate drops below target, they get a gentle automated reminder. before revenue leakage compounds.',

    // ---- CONSTRUCTION ----
    'construction.title': 'NovaMind for <span class="gradient-text">Construction</span>',
    'construction.sub': 'Owner command center for contractors and GCs.',
    'construction.notReplacing': 'Not replacing your project tool. Giving you owner-level command.',
    'construction.kpi1': 'On-Time Milestones',
    'construction.kpi2': 'Crew Utilization',
    'construction.kpi3': 'Estimate Pipeline',
    'construction.kpi4': 'Uncollected C/O',
    'construction.f1': 'Schedule health. milestones on-time vs baseline',
    'construction.f2': 'Crew utilization. productive vs idle/travel time',
    'construction.f3': 'Estimate pipeline. quotes sent, follow-up, win rate',
    'construction.f4': 'Profit leak signals. budget drift, uncollected change orders',
    'construction.f5': 'Materials risk. critical items pending, supplier delays',
    'construction.a1': 'Project X milestone late by 2 days.',
    'construction.a2': 'Crew B idle >1.5 hours today.',
    'construction.a3': 'Critical material not confirmed for Friday install.',
    'construction.a4': 'Change orders not approved/collected this week.',
    'construction.a5': 'Quotes sent with no follow-up in 72 hours.',
    'construction.auto1': 'Daily Site Reports',
    'construction.auto1d': 'Crew check-ins, photos, and task completions are compiled into an automated daily report. sent to the owner every evening.',
    'construction.auto2': 'Change Order Workflows',
    'construction.auto2d': 'When a change order is submitted, approval workflows fire automatically. routing to the right stakeholder with deadline escalation.',
    'construction.auto3': 'Supplier Delay Alerts',
    'construction.auto3d': 'Delivery tracking is monitored continuously. If a critical material shipment slips, the PM and owner are alerted before it impacts the schedule.',

    // ---- IMPORT/EXPORT ----
    'importexport.title': 'NovaMind for <span class="gradient-text">Import / Export</span>',
    'importexport.sub': 'Supply chain radar for import/export operators.',
    'importexport.notReplacing': 'Not replacing your ERP. Giving you supply chain intelligence.',
    'importexport.kpi1': 'On-Time Rate',
    'importexport.kpi2': 'Lead Time Drift',
    'importexport.kpi3': 'Stockout Risk',
    'importexport.kpi4': 'Value in Transit',
    'importexport.f1': 'Shipment health. on-time rate & delay risk tracking',
    'importexport.f2': 'Lead time drift. supplier/carrier reliability trends',
    'importexport.f3': 'Stockout risk. inventory coverage days, run-out forecast',
    'importexport.f4': 'Cash exposure. value in transit + aging inventory',
    'importexport.f5': 'Compliance risk. missing docs & customs blockers',
    'importexport.a1': 'Shipment delayed 6 days. stockout predicted.',
    'importexport.a2': 'Supplier A lead time +22% this month.',
    'importexport.a3': 'SKU 104 projected to hit zero in 9 days.',
    'importexport.a4': 'Missing docs for shipment ID #4182.',
    'importexport.a5': 'High-value inventory aging >60 days.',
    'importexport.auto1': 'Customs Document Tracking',
    'importexport.auto1d': 'Missing or expiring customs documents trigger automatic alerts with deadline countdowns. preventing holds and demurrage charges.',
    'importexport.auto2': 'Inventory Reorder Triggers',
    'importexport.auto2d': 'Based on burn rate and lead time, reorder points are calculated and POs are auto-drafted when stock coverage drops below safety thresholds.',
    'importexport.auto3': 'Delay Cascade Notifications',
    'importexport.auto3d': 'When a shipment delays, all downstream stakeholders (warehouse, sales, customers) are notified automatically with revised ETAs.',

    // ======== INDEX PAGE ========
    'index.hero.badge': 'AI Automation Infrastructure',
    'index.hero.title': 'We Don\u2019t Replace<br/><span class="gradient-text">Your Tools.</span><br/>We Make Them Work<br/>For You. Automatically.',
    'index.hero.desc': 'NovaMind helps service businesses automate 20\u201340% of their repetitive daily operations. So you can scale revenue without scaling payroll.',
    'index.hero.btn1': 'Get a Free Operations Review',
    'index.hero.btn2': 'See How It Works',
    'index.hero.m1': 'Ops Automated',
    'index.hero.m2': 'Industries Served',
    'index.hero.m3': 'Automation Running',
    'index.hero.cardName': 'Nova AI',
    'index.hero.cardRole': 'Automation Engine',
    'index.hero.cardResponse': '<strong>3 new leads</strong> captured and qualified automatically. Follow-ups scheduled. Owner digest sent. Your operations are running on autopilot.',
    'index.hero.chip1': 'Uptime',
    'index.hero.chip2': 'Industries',
    'index.hero.chip3': 'Powered',
    'index.hero.chip4': 'Tools replaced',
    'index.hero.float1': 'Ops Automated +35%',
    'index.hero.float2': 'All Systems Live',
    'index.hero.scroll': 'Scroll to explore',
    // Social proof
    'index.sp.1': 'Hours saved per week, typical',
    'index.sp.2': 'Faster customer response time',
    'index.sp.3': 'Days to measurable ROI',
    'index.sp.4': 'Tools replaced. we integrate',
    // Marquee
    'index.marquee': ['AI Response', 'Workflow Automation', 'System Integrations', 'Owner Intelligence', 'Anomaly Detection', 'Automated Reporting', 'Churn Prevention', 'Lead Capture'],
    // Services
    'index.svc.label': 'Core Services',
    'index.svc.title': 'Automation That<br/><span class="gradient-text">Runs Your Business</span>',
    'index.svc.sub': 'Two integrated layers that transform your business from reactive to proactive.',
    'index.svc.crm': 'AI Customer Response',
    'index.svc.crmDesc': 'Handles incoming chat, SMS, email, and voice inquiries automatically. Responds in seconds. capturing leads and bookings that would otherwise be lost.',
    'index.svc.crmF1': 'Multi-channel: chat, SMS, email, voice',
    'index.svc.crmF2': 'Lead qualification & routing',
    'index.svc.crmF3': '24/7 instant response',
    'index.svc.inv': 'Workflow Automation',
    'index.svc.invDesc': 'Maps the full operational flow from intake to billing. Eliminates manual handoffs and creates consistent execution regardless of staff.',
    'index.svc.invF1': 'Intake \u2192 scheduling \u2192 follow-ups',
    'index.svc.invF2': 'Billing triggers & reminders',
    'index.svc.invF3': 'Escalation logic',
    'index.svc.sched': 'Owner Intelligence',
    'index.svc.schedDesc': 'Performance baselines, anomaly detection, churn risk alerts, and revenue signals. See what matters in under 2 minutes per day.',
    'index.svc.schedF1': 'Real-time anomaly detection',
    'index.svc.schedF2': 'Churn risk & revenue signals',
    'index.svc.schedF3': 'Mobile-first visibility',
    'index.svc.viewAll': 'View All Services',
    // Bento
    'index.bento.label': 'Why NovaMind',
    'index.bento.title': 'More Than Just<br/><span class="gradient-text">Automation</span>',
    'index.bento.ai': '24/7 Automation Infrastructure',
    'index.bento.aiDesc': 'Intelligent systems that run in the background without manual intervention. Your operations keep running whether you\u2019re there or not.',
    'index.bento.aiStat': 'Always-on operational engine',
    'index.bento.new': 'Multi-Vertical Playbooks',
    'index.bento.newDesc': 'Pre-built automation templates for your specific industry. Restaurants, garages, gyms, clinics, and more.',
    'index.bento.newStat': 'Industry playbooks',
    'index.bento.addon': 'Seamless Integrations',
    'index.bento.addonDesc': 'Connects to your existing CRM, POS, calendars, and booking software. No replacements needed.',
    'index.bento.addonStat': 'Tools replaced',
    'index.bento.noContract': 'Measurable ROI',
    'index.bento.noContractDesc': 'Track hours saved, leads captured, response time improvement, and margin expansion. Results within 90 days.',
    'index.bento.noContractStat': 'Days to measurable ROI',
    // Process
    'index.proc.label': 'How It Works',
    'index.proc.title': 'From Discovery to<br/><span class="gradient-text">Automation in Weeks</span>',
    'index.proc.s1': 'Discovery & Review',
    'index.proc.s1d': 'We deep-dive into your existing tools, workflows, and pain points. We identify the top 3\u20135 automation opportunities ranked by impact.',
    'index.proc.s2': 'Build & Integrate',
    'index.proc.s2d': 'We design and build your automation infrastructure, connecting to the tools you already use. No software replacement. Just intelligent automation on top.',
    'index.proc.s3': 'Go-Live & Optimize',
    'index.proc.s3d': 'Deploy, train your team, and continuously optimize. Your operations run on autopilot while you focus on growth.',
    'index.proc.more': 'See Full Process',
    // Why
    'index.why.label': 'The NovaMind Difference',
    'index.why.title': 'Built for Businesses<br/><span class="gradient-text">That Want Leverage</span>',
    'index.why.f1': 'Automation, Not Advice',
    'index.why.f1d': 'We build systems that run without us. Every engagement leaves behind infrastructure, not a consulting report.',
    'index.why.f2': 'Integrates With Your Tools',
    'index.why.f2d': 'We connect to your CRM, POS, calendars, and booking software. No replacements needed.',
    'index.why.f3': 'Industry-Specific Playbooks',
    'index.why.f3d': 'Proven automation templates for restaurants, garages, gyms, clinics, construction, and more.',
    'index.why.f4': 'Measurable Outcomes',
    'index.why.f4d': 'Hours saved, leads captured, margins expanded. ROI you can see within 90 days.',
    'index.why.bigStat': 'Of daily operations automated',
    'index.why.ms1': 'Industries',
    'index.why.ms2': 'Uptime',
    'index.why.ms3': 'Days to ROI',
    'index.why.ms4': 'Daily check-in',
    // Testimonials
    'index.test.label': 'What Clients Say',
    'index.test.title': 'Businesses <span class="gradient-text">Trust</span> NovaMind',
    'index.test.q1': 'NovaMind\u2019s automated response system captures leads we used to miss entirely. We went from responding in hours to responding in seconds. and our booking rate jumped overnight.',
    'index.test.r1': 'Marketing Agency',
    'index.test.q2': 'The workflow automation cut our admin hours in half. Scheduling, follow-ups, billing. it all runs on autopilot now. My staff focuses on members instead of paperwork.',
    'index.test.r2': 'Fitness Studio Owner',
    'index.test.q3': 'The owner intelligence dashboard changed everything. I can see exactly what\u2019s happening at my salon from my phone. without being there. I finally feel in control.',
    'index.test.r3': 'Salon Owner',
    // Pricing preview
    'index.price.label': 'Pricing',
    'index.price.title': 'Investment That<br/><span class="gradient-text">Pays for Itself</span>',
    'index.price.sub': 'Setup packages + monthly subscriptions. Measurable ROI within 90 days.',
    'index.price.tier1': 'Entry',
    'index.price.tier2': 'Growth',
    'index.price.tier3': 'Scale',
    'index.price.badge': 'Most Popular',
    'index.price.freeDesc': '+ from $500/mo. 3\u20135 core automations, basic reporting, email support.',
    'index.price.maxDesc': '+ from $800/mo. Multi-workflow implementation, 2\u20133 integrations, priority support.',
    'index.price.startDesc': '+ from $1,200/mo. Full infrastructure, custom alerts, dedicated optimization.',
    'index.price.setup': ' setup',
    'index.price.btn1': 'Get Started',
    'index.price.btn2': 'Get a Free Operations Review',
    'index.price.btn3': 'Contact Us',
    'index.price.viewAll': 'View Full Pricing',
    // CTA
    'index.cta.label': 'Get Started',
    'index.cta.title': 'Ready to Automate<br/>Your Operations?',
    'index.cta.desc': 'Book a free operations review. We\u2019ll identify your top automation opportunities and show you exactly what NovaMind can do for your business.',
    'index.cta.btn1': 'Get a Free Operations Review',
    'index.cta.btn2': 'See How It Works',
    // Footer
    'footer.desc2': 'AI automation infrastructure for service businesses. We don\u2019t replace your tools. We make them work for you.',
    'footer.services': 'Services',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.pl.services': 'Services',
    'footer.pl.pricing': 'Pricing',
    'footer.pl.how': 'How It Works',
    'footer.sv.ai': 'AI Response',
    'footer.sv.workflow': 'Workflow Automation',
    'footer.sv.owner': 'Owner Intelligence',
    'footer.sv.integrations': 'System Integrations',
    'footer.copyright': '\u00a9 2026 NovaMind. All rights reserved.',
    'services.featured': 'Core',

    // ======== PRICING PAGE ========
    'pricing.hero.label': 'Pricing',
    'pricing.hero.title': 'Investment That <span class="gradient-text">Pays for Itself</span>',
    'pricing.hero.sub': 'Setup packages + monthly subscriptions. Every engagement is structured to deliver measurable ROI within 90 days.',
    'pricing.setup.label': 'One-Time Setup',
    'pricing.setup.title': 'Setup <span class="gradient-text">Packages</span>',
    'pricing.setup.sub': 'Every new client begins with a paid implementation covering discovery, workflow design, integration mapping, automation build, testing, and launch.',
    'pricing.entry.tag': 'For small businesses ready to automate their first core workflows.',
    'pricing.entry.f1': '3\u20135 core automations',
    'pricing.entry.f2': 'Basic integration setup',
    'pricing.entry.f3': 'Workflow discovery & mapping',
    'pricing.entry.f4': 'Testing & go-live support',
    'pricing.entry.btn': 'Get Started',
    'pricing.standard.badge': 'Most Popular',
    'pricing.standard.tag': 'Multi-workflow implementation with deeper integrations and automation coverage.',
    'pricing.standard.f1': 'Multi-workflow implementation',
    'pricing.standard.f2': '2\u20133 system integrations',
    'pricing.standard.f3': 'Full discovery & architecture',
    'pricing.standard.f4': 'Testing, QA & go-live',
    'pricing.standard.f5': 'Team training included',
    'pricing.standard.btn': 'Get a Free Operations Review',
    'pricing.enterprise.tag': 'Full infrastructure deployment across departments for larger organizations.',
    'pricing.enterprise.f1': 'Full infrastructure deployment',
    'pricing.enterprise.f2': 'Unlimited integrations',
    'pricing.enterprise.f3': 'Cross-department automation',
    'pricing.enterprise.f4': 'Custom escalation logic',
    'pricing.enterprise.f5': 'Dedicated project manager',
    'pricing.enterprise.f6': 'Extended training & onboarding',
    'pricing.enterprise.btn': 'Contact Us',
    'pricing.monthly.label': 'Monthly Subscriptions',
    'pricing.monthly.title': 'Ongoing <span class="gradient-text">Automation & Support</span>',
    'pricing.monthly.sub': 'After setup, clients move to a monthly subscription covering automation runtime, monitoring, optimization, and support.',
    'pricing.base.tag': 'Core automations running with basic support and monthly reporting.',
    'pricing.base.f1': 'Core automations running 24/7',
    'pricing.base.f2': 'Basic monitoring & alerts',
    'pricing.base.f3': 'Monthly performance report',
    'pricing.base.f4': 'Email support',
    'pricing.base.btn': 'Get Started',
    'pricing.growth.badge': 'Most Popular',
    'pricing.growth.tag': 'Expanded automations with priority support and regular performance reviews.',
    'pricing.growth.f1': 'Expanded automation coverage',
    'pricing.growth.f2': 'Priority email & chat support',
    'pricing.growth.f3': 'Weekly performance reviews',
    'pricing.growth.f4': 'Owner intelligence dashboard',
    'pricing.growth.f5': 'Quarterly optimization sessions',
    'pricing.growth.btn': 'Get a Free Operations Review',
    'pricing.scale.tag': 'Full infrastructure suite with dedicated optimization and custom alerts.',
    'pricing.scale.f1': 'Full automation infrastructure',
    'pricing.scale.f2': 'Dedicated optimization specialist',
    'pricing.scale.f3': 'Custom alerts & escalation',
    'pricing.scale.f4': 'Advanced owner intelligence',
    'pricing.scale.f5': 'Monthly strategy sessions',
    'pricing.scale.f6': 'SLA guarantee',
    'pricing.scale.btn': 'Contact Us',
    'pricing.plan.entry': 'Entry',
    'pricing.plan.standard': 'Standard',
    'pricing.plan.enterprise': 'Enterprise',
    'pricing.plan.base': 'Base',
    'pricing.plan.growth': 'Growth',
    'pricing.plan.scale': 'Scale',
    'pricing.plan.onetime': 'one-time',
    'pricing.plan.month': '/month',
    'pricing.addon.label': 'Add-On Modules',
    'pricing.addon.title': 'Expand Your <span class="gradient-text">Capabilities</span>',
    'pricing.addon.sub': 'Individual capability modules you can add as your needs grow. High-margin, fast-to-deploy.',
    'pricing.addon.voice': 'AI Voice',
    'pricing.addon.voiceDesc': 'Inbound call handling & routing',
    'pricing.addon.chat': 'AI Chat',
    'pricing.addon.chatDesc': 'Website & messaging chatbot',
    'pricing.addon.crm': 'CRM Integration',
    'pricing.addon.crmDesc': 'Deep sync with your CRM',
    'pricing.addon.report': 'Advanced Reporting',
    'pricing.addon.reportDesc': 'Custom dashboards & analytics',
    'pricing.addon.churn': 'Churn Intelligence',
    'pricing.addon.churnDesc': 'Predictive at-risk customer model',
    'pricing.addon.review': 'Review & Reputation',
    'pricing.addon.reviewDesc': 'Post-service review automation',
    'pricing.faq.label': 'FAQ',
    'pricing.faq.title': 'Pricing <span class="gradient-text">Questions</span>',
    'pricing.faq.q1': 'What\u2019s included in the setup fee?',
    'pricing.faq.a1': 'The setup fee covers the full deployment process: discovery, workflow design, integration mapping, automation build, testing, and go-live support. It ensures your automation infrastructure is properly designed and deployed for your specific business.',
    'pricing.faq.q2': 'What does the monthly subscription cover?',
    'pricing.faq.a2': 'Your monthly subscription covers automation runtime, ongoing monitoring, performance optimization, support, and regular reporting. It keeps your systems running and continuously improving.',
    'pricing.faq.q3': 'How long does deployment take?',
    'pricing.faq.a3': 'Most deployments are completed within 2\u20134 weeks depending on complexity. The Entry package is typically faster, while Enterprise deployments may take longer due to the scope of integrations and workflows.',
    'pricing.faq.q4': 'Do I need to replace my existing tools?',
    'pricing.faq.a4': 'No. NovaMind connects to the tools you already use. your CRM, calendars, POS, booking software, and accounting tools. We become the intelligent automation layer on top of your existing stack.',
    'pricing.faq.q5': 'What kind of ROI can I expect?',
    'pricing.faq.a5': 'Our target is measurable ROI within 90 days. We track hours saved per week, response time improvement, lead capture rate changes, and reduction in missed appointments and billing gaps.',
    'pricing.cta.label': 'Get Started',
    'pricing.cta.title': 'Ready to See What<br/>We Can Automate?',
    'pricing.cta.desc': 'Book a free operations review. We\u2019ll identify your top automation opportunities and show you exactly how NovaMind can transform your business.',
    'pricing.cta.btn1': 'Get a Free Operations Review',
    'pricing.cta.btn2': 'View Our Services',

    // ======== SERVICES PAGE ========
    'services.hero.label': 'Services',
    'services.hero.title': 'Automation Infrastructure <span class="gradient-text">Built for Service Businesses</span>',
    'services.hero.sub': 'Two integrated layers that transform your operations from reactive to proactive. We connect to your existing tools and automate what your people are doing manually around them.',
    'services.l1.label': 'Layer 1',
    'services.l1.title': 'Automation <span class="gradient-text">Infrastructure</span>',
    'services.l1.sub': 'The operational engine. It handles the actual work that humans are currently doing manually.',
    'services.s1': 'AI Customer Response',
    'services.s1d': 'Handles incoming chat, SMS, email, and voice inquiries automatically. Responds in seconds. not hours. capturing leads that would otherwise be lost.',
    'services.s1f1': 'Multi-channel: chat, SMS, email, voice',
    'services.s1f2': 'Lead qualification & routing',
    'services.s1f3': 'Instant response, 24/7',
    'services.s1f4': 'Custom-trained to your business',
    'services.s2': 'Workflow Automation',
    'services.s2d': 'Maps the full operational flow from intake to billing. Eliminates manual handoffs and creates consistent execution regardless of which staff member is working.',
    'services.s2f1': 'Intake \u2192 scheduling \u2192 task routing',
    'services.s2f2': 'Automated follow-ups & reminders',
    'services.s2f3': 'Billing triggers & confirmations',
    'services.s2f4': 'Escalation logic',
    'services.s3': 'System Integrations',
    'services.s3d': 'Connects to the tools you already use. CRM, calendars, POS, booking software, accounting. No need to replace anything.',
    'services.s3f1': 'CRM, POS & calendar sync',
    'services.s3f2': 'Booking software integration',
    'services.s3f3': 'Eliminates duplicate entry',
    'services.s3f4': 'Automatic data flow between systems',
    'services.s4': 'Automated Reporting & Escalation',
    'services.s4d': 'Daily and weekly owner digests. Real-time alerts for anomalies. Escalation logic that notifies the right person at the right time.',
    'services.s4f1': 'Daily & weekly performance digests',
    'services.s4f2': 'Real-time anomaly alerts',
    'services.s4f3': 'Smart escalation routing',
    'services.s4f4': 'Throughput & revenue monitoring',
    'services.l2.label': 'Layer 2',
    'services.l2.title': 'Owner <span class="gradient-text">Intelligence</span>',
    'services.l2.sub': 'The control system. Visibility and early warnings to manage your business from anywhere.',
    'services.s5': 'Performance Baselines & Anomaly Detection',
    'services.s5d': 'Learns what "normal" looks like for your business over time. Detects deviations early and distinguishes real problems from natural variation.',
    'services.s5f1': 'Learns your business patterns',
    'services.s5f2': 'Early deviation alerts',
    'services.s5f3': 'Day-of-week comparison',
    'services.s5f4': 'Trend analysis',
    'services.s6': 'Alerts That Matter',
    'services.s6d': 'Churn risk signals, operational leaks, and revenue signals. No noise. only the alerts that require your attention.',
    'services.s6f1': 'Churn risk detection',
    'services.s6f2': 'Operational leak identification',
    'services.s6f3': 'Revenue signal tracking',
    'services.s6f4': 'Booking gap alerts',
    'services.s7': 'Owner-From-Anywhere Visibility',
    'services.s7d': 'Mobile-first key metrics available on any device. Designed as a situational awareness tool. see what matters in under 2 minutes per day.',
    'services.s7f1': 'Mobile-first dashboard',
    'services.s7f2': '2-minute daily check-in',
    'services.s7f3': 'Key metrics at a glance',
    'services.s7f4': 'No vanity metrics. only signal',
    'services.addon.label': 'Add-On Modules',
    'services.addon.title': 'Expand Your <span class="gradient-text">Capabilities</span>',
    'services.addon.sub': 'High-margin, fast-to-deploy modules that create natural expansion paths as your needs grow.',
    'services.ao1': 'AI Voice',
    'services.ao1d': 'Inbound call handling & routing',
    'services.ao2': 'AI Chat',
    'services.ao2d': 'Website & messaging chatbot',
    'services.ao3': 'CRM Integration',
    'services.ao3d': 'Deep sync with your CRM platform',
    'services.ao4': 'Advanced Reporting',
    'services.ao4d': 'Custom dashboards & analytics',
    'services.ao5': 'Churn Intelligence',
    'services.ao5d': 'Predictive model for at-risk customers',
    'services.ao6': 'Review & Reputation',
    'services.ao6d': 'Post-service review automation',
    'services.principle.label': 'Our Core Principle',
    'services.principle.title': 'We Connect to <span class="gradient-text">What You Already Have</span>',
    'services.principle.p1': 'We don\u2019t replace your POS, your CRM, or your booking tool. We connect to what you already have, then automate what your people are doing manually around it.',
    'services.principle.p2': 'NovaMind is tool-agnostic at the integration layer. we work with whatever you already use. Our infrastructure sits on top of your existing systems and makes them work together intelligently.',
    'services.principle.p3': 'The result: consistent execution, faster response times, and owner visibility. without changing how your team works day-to-day.',
    'services.principle.uptime': 'Automation uptime',
    'services.principle.ops': 'Ops automated',
    'services.principle.industries': 'Industries served',
    'services.principle.tools': 'Tools replaced',
    'services.principle.roi': 'Days to ROI',
    'services.cta.label': 'Get Started',
    'services.cta.title': 'Ready to Automate<br/>Your Operations?',
    'services.cta.desc': 'Book a free operations review. We\u2019ll identify your top automation opportunities and show you exactly what NovaMind can do for your business.',
    'services.cta.btn1': 'Get a Free Operations Review',
    'services.cta.btn2': 'See How It Works',

    // ======== HOW IT WORKS PAGE ========
    'hiw.hero.label': 'How It Works',
    'hiw.hero.title': 'From Discovery to <span class="gradient-text">Automation</span>',
    'hiw.hero.sub': 'A structured deployment process, calibrated to your industry. Every client goes through the same proven steps. and the more we deploy, the faster each deployment becomes.',
    'hiw.s1': 'Discovery',
    'hiw.s1d': 'We deep-dive into your existing tools, workflows, and pain points. We map every manual process and identify the top 3\u20135 automation opportunities ranked by impact on your business.',
    'hiw.s2': 'Architecture',
    'hiw.s2d': 'We design the automation blueprint: which workflows to automate, which tools to connect, what triggers and actions to set up, what escalation logic to implement, and what reporting outputs you need.',
    'hiw.s3': 'Build & Integrate',
    'hiw.s3d': 'We build the automations using our infrastructure stack and connect to your existing tools via APIs and integration platforms. No replacement of existing software. Just intelligent automation on top.',
    'hiw.s4': 'Test & QA',
    'hiw.s4d': 'Full testing of every automation with real or simulated data. Edge case coverage. Client walkthrough and sign-off before anything goes live.',
    'hiw.s5': 'Go-Live & Train',
    'hiw.s5d': 'Deploy to your live environment. Train you and your key staff on how to monitor and interact with the system. Set clear expectations for the first 30 days.',
    'hiw.s6': 'Optimize & Expand',
    'hiw.s6d': 'After 30 days, we review performance data. Optimize underperforming automations. Identify upsell opportunities. Begin the next phase of automation expansion.',
    'hiw.feat.label': 'What You Get',
    'hiw.feat.title': 'Infrastructure That <span class="gradient-text">Scales With You</span>',
    'hiw.feat.f1': 'Automation That Runs 24/7',
    'hiw.feat.f1d': 'Systems that handle inquiries, route tasks, trigger follow-ups, and send reports without human intervention. around the clock.',
    'hiw.feat.f2': 'Industry Playbooks',
    'hiw.feat.f2d': 'Pre-built automation templates calibrated to your specific vertical. restaurants, garages, gyms, clinics, and more.',
    'hiw.feat.f3': 'Enterprise-Grade Security',
    'hiw.feat.f3d': 'Bank-level encryption and automatic backups. Your business data is always protected.',
    'hiw.feat.f4': 'Dedicated Optimization',
    'hiw.feat.f4d': 'Continuous improvement of your automation systems. We monitor, refine, and expand your infrastructure over time.',
    'hiw.feat.bigStat': 'To measurable ROI',
    'hiw.feat.ms1': 'Industries',
    'hiw.feat.ms2': 'Automated',
    'hiw.feat.ms3': 'Running',
    'hiw.feat.ms4': 'Daily check-in',
    'hiw.test.label': 'What Clients Say',
    'hiw.test.title': 'Businesses <span class="gradient-text">Trust</span> NovaMind',
    'hiw.test.q1': 'NovaMind\u2019s automated response system captures leads we used to miss entirely. We went from responding in hours to responding in seconds.',
    'hiw.test.r1': 'Marketing Agency',
    'hiw.test.q2': 'The workflow automation cut our admin hours in half. Scheduling, follow-ups, billing. it all runs on autopilot now.',
    'hiw.test.r2': 'Fitness Studio Owner',
    'hiw.test.q3': 'The owner intelligence dashboard changed everything. I can see what\u2019s happening at my salon from my phone. without being there.',
    'hiw.test.r3': 'Salon Owner',
    'hiw.cta.label': 'Ready?',
    'hiw.cta.title': 'Ready to Automate<br/>Your Operations?',
    'hiw.cta.desc': 'Book a free operations review. We\u2019ll identify your top automation opportunities and show you exactly what NovaMind can do for your business.',
    'hiw.cta.btn1': 'Get a Free Operations Review',
    'hiw.cta.btn2': 'View Our Services',

    // Privacy Policy
    'priv.label': 'Legal',
    'priv.title': 'Privacy <span class="gradient-text">Policy</span>',
    'priv.effective': 'Effective Date: February 25, 2026',
    'priv.h1': '1. Introduction',
    'priv.p1': 'NovaMind ("we", "us", "our") is an AI automation infrastructure company that helps service businesses automate their operations. We are committed to protecting the privacy and security of your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (novamindai.com), use our services, or interact with us in any way.',
    'priv.p1b': 'By accessing our website or using our services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with the practices described herein, please do not use our services.',
    'priv.h2': '2. What Personal Data We Collect',
    'priv.p2': 'We may collect the following categories of personal data:',
    'priv.p2a': 'Contact Information: Name, email address, phone number, business name, and job title that you provide when requesting an operations review, contacting us, or signing up for communications.',
    'priv.p2b': 'Business Information: Industry type, existing tools and software you use, business size, and operational workflows. This information is collected during the discovery and onboarding process to design your automation infrastructure.',
    'priv.p2c': 'Payment Information: Billing address and payment details processed through our secure third-party payment providers. We do not store full credit card numbers on our servers.',
    'priv.p2d': 'Usage Data: Information about how you interact with our website, including IP address, browser type, device information, pages visited, time spent on pages, and referring URLs. This data is collected automatically through cookies and similar technologies.',
    'priv.p2e': 'Communication Data: Records of correspondence when you contact us via email, phone, or our website contact forms.',
    'priv.p2f': 'Integration Data: When we connect to your existing business tools (CRM, POS, calendars, booking software) as part of our automation services, we may access operational data necessary to build and run your automations. This data is processed strictly according to your service agreement.',
    'priv.h3': '3. How We Collect Your Data',
    'priv.p3a': 'Directly from you: When you request a free operations review, fill out a contact form, subscribe to communications, or engage with us during the onboarding process.',
    'priv.p3b': 'Automatically: Through cookies, web beacons, and similar tracking technologies when you browse our website.',
    'priv.p3c': 'From third-party integrations: When you authorize NovaMind to connect to your existing business tools as part of our automation services.',
    'priv.p3d': 'From publicly available sources: Business directories, social media profiles, and other public records to better understand your industry and needs.',
    'priv.h4': '4. How We Use Your Personal Data',
    'priv.p4': 'We use your personal data for the following purposes:',
    'priv.p4a': 'Service Delivery: To design, build, deploy, and optimize your automation infrastructure. This includes connecting to your existing tools, configuring workflows, and running automations on your behalf.',
    'priv.p4b': 'Communication: To respond to your inquiries, send service updates, provide support, and deliver operational reports and alerts as part of your subscription.',
    'priv.p4c': 'Improvement: To analyze usage patterns, improve our services, develop new features, and refine our industry-specific automation playbooks.',
    'priv.p4d': 'Marketing: To send you relevant information about our services, case studies, and industry insights. You can opt out of marketing communications at any time.',
    'priv.p4e': 'Legal Compliance: To comply with applicable laws, regulations, and legal processes.',
    'priv.p4f': 'Security: To detect, prevent, and address technical issues, fraud, and unauthorized access.',
    'priv.h5': '5. Data Sharing and Disclosure',
    'priv.p5': 'We do not sell your personal data. We may share your information with:',
    'priv.p5a': 'Service Providers: Third-party vendors who assist us in delivering our services, including cloud hosting providers, payment processors, analytics tools, and communication platforms. These providers are contractually obligated to protect your data.',
    'priv.p5b': 'Integration Partners: When you authorize us to connect to your existing business tools, data flows between NovaMind and those tools as necessary to run your automations. We only access what is required for the automations you have approved.',
    'priv.p5c': 'Legal Requirements: We may disclose your data if required to do so by law, regulation, or legal process, or if we believe in good faith that such disclosure is necessary to protect our rights, your safety, or the safety of others.',
    'priv.p5d': 'Business Transfers: In the event of a merger, acquisition, or sale of assets, your personal data may be transferred as part of that transaction. We will notify you of any such change.',
    'priv.h6': '6. Data Retention',
    'priv.p6': 'We retain your personal data only for as long as necessary to fulfill the purposes described in this policy, or as required by law. Specifically:',
    'priv.p6a': 'Active Clients: We retain your data for the duration of your service agreement plus 12 months after termination to allow for account reactivation and to meet legal obligations.',
    'priv.p6b': 'Prospective Clients: If you request an operations review but do not proceed, we retain your contact information for up to 24 months unless you request earlier deletion.',
    'priv.p6c': 'Website Visitors: Usage data collected through cookies is retained according to our cookie settings, typically no longer than 13 months.',
    'priv.p6d': 'When data is no longer needed, it is securely deleted or anonymized.',
    'priv.h7': '7. Data Security',
    'priv.p7a': 'We implement industry-standard security measures to protect your personal data, including:',
    'priv.p7b': 'Encryption of data in transit (TLS/SSL) and at rest. Access controls and authentication for all internal systems. Regular security audits and vulnerability assessments. Employee training on data protection best practices. Secure cloud infrastructure with automatic backups.',
    'priv.p7c': 'While we take every reasonable precaution to protect your data, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.',
    'priv.h8': '8. Cookies and Tracking Technologies',
    'priv.p8': 'Our website uses cookies and similar technologies to enhance your browsing experience and collect usage data. These include:',
    'priv.p8a': 'Essential Cookies: Required for the website to function properly. These cannot be disabled.',
    'priv.p8b': 'Analytics Cookies: Help us understand how visitors interact with our website so we can improve it.',
    'priv.p8c': 'Preference Cookies: Remember your settings, such as language preference.',
    'priv.p8d': 'You can manage your cookie preferences through your browser settings. Disabling certain cookies may affect your experience on our website.',
    'priv.h9': '9. Your Rights',
    'priv.p9': 'Depending on your jurisdiction, you may have the following rights regarding your personal data:',
    'priv.p9a': 'Access: Request a copy of the personal data we hold about you.',
    'priv.p9b': 'Correction: Request that we correct inaccurate or incomplete data.',
    'priv.p9c': 'Deletion: Request that we delete your personal data, subject to legal retention requirements.',
    'priv.p9d': 'Portability: Request your data in a structured, commonly used, machine-readable format.',
    'priv.p9e': 'Objection: Object to processing of your data for certain purposes, including marketing.',
    'priv.p9f': 'Withdrawal of Consent: Where processing is based on consent, you may withdraw it at any time.',
    'priv.p9g': 'To exercise any of these rights, please contact us at contact@novamindai.com. We will respond to your request within 30 days.',
    'priv.h10': '10. Third-Party Links',
    'priv.p10': 'Our website may contain links to third-party websites and services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party services you visit.',
    'priv.h11': '11. Children\'s Privacy',
    'priv.p11': 'Our services are designed for businesses and are not intended for individuals under the age of 16. We do not knowingly collect personal data from children. If we become aware that we have collected data from a child under 16, we will take steps to delete it promptly.',
    'priv.h12': '12. International Data Transfers',
    'priv.p12': 'Your personal data may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable data protection laws.',
    'priv.h13': '13. Changes to This Policy',
    'priv.p13a': 'We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. When we make significant changes, we will update the "Effective Date" at the top of this page and, where appropriate, notify you via email or a prominent notice on our website.',
    'priv.p13b': 'We encourage you to review this policy periodically to stay informed about how we are protecting your data.',
    'priv.h14': '14. Contact Us',
    'priv.p14': 'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:',

    // Terms of Service
    'terms.label': 'Legal',
    'terms.title': 'Terms of <span class="gradient-text">Service</span>',
    'terms.effective': 'Effective Date: February 25, 2026',
    'terms.h1': '1. Acceptance of Terms',
    'terms.p1': 'By accessing or using the NovaMind website (novamindai.com) and services, you agree to be bound by these Terms of Service ("Terms"). If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind that entity. If you do not agree to these Terms, do not use our services.',
    'terms.h2': '2. Description of Services',
    'terms.p2': 'NovaMind provides AI automation infrastructure services for service businesses. Our services include, but are not limited to:',
    'terms.p2a': 'AI Customer Response Systems: Automated handling of chat, SMS, email, and voice communications on behalf of your business.',
    'terms.p2b': 'Workflow Automation: Design and implementation of automated operational workflows including intake, scheduling, task routing, follow-ups, and billing triggers.',
    'terms.p2c': 'System Integrations: Connecting your existing business tools (CRM, POS, calendars, booking software, accounting) to our automation infrastructure.',
    'terms.p2d': 'Owner Intelligence: Performance baselines, anomaly detection, churn risk alerts, revenue signals, and automated reporting.',
    'terms.p2e': 'The specific scope of services for each client is defined in the individual service agreement established during the onboarding process.',
    'terms.h3': '3. Account and Access',
    'terms.p3a': 'Certain features of our services may require you to provide access credentials to your existing business tools. You are responsible for:',
    'terms.p3b': 'Providing accurate and complete information during onboarding. Maintaining the security of your account credentials. Notifying us immediately of any unauthorized access. Ensuring that authorized personnel within your organization use the services in accordance with these Terms.',
    'terms.p3c': 'We reserve the right to suspend or terminate access if we reasonably believe your account is being used in violation of these Terms.',
    'terms.h4': '4. Service Agreements and Onboarding',
    'terms.p4a': 'Each NovaMind engagement begins with a discovery phase where we assess your operations and design a custom automation blueprint. The specifics of your automation infrastructure, including scope, timeline, and deliverables, are documented in a separate service agreement.',
    'terms.p4b': 'The service agreement, together with these Terms, constitutes the complete agreement between you and NovaMind. In the event of a conflict between these Terms and your service agreement, the service agreement shall prevail.',
    'terms.h5': '5. Payment Terms',
    'terms.p5a': 'Setup Fees: One-time setup fees are due upon signing the service agreement. Setup fees cover the discovery, architecture, build, testing, and deployment phases of your automation infrastructure.',
    'terms.p5b': 'Monthly Subscriptions: Recurring monthly fees begin on the go-live date and are billed on the first of each month. Monthly fees cover ongoing automation operation, monitoring, support, and optimization.',
    'terms.p5c': 'Add-On Modules: Additional modules (AI Voice, AI Chat, Advanced Reporting, etc.) may be added to your subscription at any time and will be billed at the rates specified in your service agreement.',
    'terms.p5d': 'Late Payments: Payments not received within 15 days of the due date may result in temporary suspension of services. We will provide at least 7 days written notice before any suspension.',
    'terms.p5e': 'Taxes: All fees are exclusive of applicable taxes. You are responsible for all taxes associated with your use of the services.',
    'terms.h6': '6. Intellectual Property',
    'terms.p6a': 'NovaMind Property: All content on our website, including text, graphics, logos, software, and documentation, is owned by NovaMind or its licensors and is protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our prior written consent.',
    'terms.p6b': 'Automation Infrastructure: The automation workflows, integration logic, and system architecture we build for you are licensed for your use under your active subscription. The underlying technology, frameworks, and playbooks remain the intellectual property of NovaMind.',
    'terms.p6c': 'Your Data: You retain full ownership of all business data processed through our automation infrastructure. We claim no ownership over your customer data, operational data, or business records.',
    'terms.h7': '7. Acceptable Use',
    'terms.p7a': 'You agree not to use our services to:',
    'terms.p7b': 'Violate any applicable laws, regulations, or third-party rights. Send spam, unsolicited communications, or misleading messages through our automated systems. Interfere with or disrupt the integrity or performance of our services. Attempt to gain unauthorized access to our systems or other clients\' data. Use our services for any illegal, fraudulent, or harmful purpose. Reverse-engineer, decompile, or attempt to extract the source code of our technology.',
    'terms.p7c': 'Violation of these terms may result in immediate suspension or termination of services.',
    'terms.h8': '8. Service Levels and Availability',
    'terms.p8a': 'We strive to maintain high availability for all automation services. Specific uptime commitments and support response times are detailed in your individual service agreement.',
    'terms.p8b': 'We may temporarily suspend services for scheduled maintenance, security updates, or circumstances beyond our reasonable control. We will provide advance notice of planned maintenance whenever possible.',
    'terms.h9': '9. Confidentiality',
    'terms.p9a': 'Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. This includes business processes, customer data, pricing, automation blueprints, and any other information marked as confidential or that would reasonably be understood to be confidential.',
    'terms.p9b': 'This obligation survives the termination of the service agreement for a period of 2 years, except for trade secrets which shall remain confidential indefinitely.',
    'terms.h10': '10. Limitation of Liability',
    'terms.p10a': 'To the maximum extent permitted by law, NovaMind shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business opportunities, or goodwill, arising out of or in connection with your use of our services.',
    'terms.p10b': 'Our total aggregate liability for any claim arising from these Terms or your use of the services shall not exceed the total fees paid by you to NovaMind in the 12 months preceding the claim.',
    'terms.p10c': 'This limitation applies regardless of the theory of liability (contract, tort, strict liability, or otherwise) and even if NovaMind has been advised of the possibility of such damages.',
    'terms.h11': '11. Disclaimer of Warranties',
    'terms.p11a': 'Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
    'terms.p11b': 'While we strive to deliver measurable ROI and operational improvements, we do not guarantee specific business outcomes, revenue increases, or cost savings. Results vary depending on your industry, existing operations, and implementation scope.',
    'terms.h12': '12. Termination',
    'terms.p12a': 'By You: You may terminate your subscription by providing 30 days written notice. Setup fees are non-refundable. Monthly fees are prorated to the termination date.',
    'terms.p12b': 'By NovaMind: We may terminate or suspend your services immediately if you breach these Terms, fail to make payments after notice, or use the services in a way that could harm other clients or our infrastructure.',
    'terms.p12c': 'Effect of Termination: Upon termination, we will provide you with a copy of your operational data in a standard format within 30 days of your request. Access to automations and integrations will be deactivated. Your data will be retained for 90 days after termination to allow for reactivation, after which it will be permanently deleted.',
    'terms.h13': '13. Indemnification',
    'terms.p13': 'You agree to indemnify, defend, and hold harmless NovaMind, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses (including reasonable legal fees) arising out of or in connection with your violation of these Terms, your misuse of the services, or your violation of any third-party rights.',
    'terms.h14': '14. Governing Law',
    'terms.p14': 'These Terms shall be governed by and construed in accordance with the laws of the Province of Quebec and the federal laws of Canada applicable therein, without regard to conflict of law principles. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in Montreal, Quebec.',
    'terms.h15': '15. Changes to These Terms',
    'terms.p15a': 'We reserve the right to modify these Terms at any time. When we make changes, we will update the "Effective Date" at the top of this page. For material changes, we will provide at least 30 days notice via email or a prominent notice on our website.',
    'terms.p15b': 'Your continued use of our services after the effective date of revised Terms constitutes your acceptance of those changes.',
    'terms.h16': '16. Contact Us',
    'terms.p16': 'If you have any questions about these Terms of Service, please contact us:'
  },

  fr: {
    // Nav
    'nav.home': 'Accueil',
    'nav.industries': 'Industries',
    'nav.pricing': 'Tarification',
    'nav.products': 'Services',
    'nav.howItWorks': 'Comment \u00e7a marche',
    'nav.cta': 'Revue gratuite',

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
    'bookDemo': 'Revue des op\u00e9rations gratuite',
    'seeHow': 'Voir comment \u00e7a marche',
    'viewDash': 'Voir le tableau de bord',
    'automationExamples': 'Exemples d\u2019automatisation',

    // CTA
    'cta.label': 'Pr\u00eat ?',
    'cta.title': 'Pr\u00eat \u00e0 automatiser vos op\u00e9rations ?',
    'cta.desc': 'R\u00e9servez une revue des op\u00e9rations gratuite et d\u00e9couvrez comment NovaMind automatise votre entreprise. Sans remplacer un seul syst\u00e8me.',
    'cta.btn1': 'Revue des op\u00e9rations gratuite',
    'cta.btn2': 'Voir comment \u00e7a marche',

    // Footer
    'footer.desc': 'Infrastructure d\u2019automatisation IA pour les entreprises de services. Nous ne rempla\u00e7ons pas vos outils. Nous les faisons travailler pour vous.',
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
    'garage.a2': 'Baie 3 inactive. aucun v\u00e9hicule assign\u00e9 depuis 14h.',
    'garage.a3': 'Retard de pi\u00e8ces : disques de frein report\u00e9s \u00e0 demain.',
    'garage.a4': 'Heure de pointe. 6 v\u00e9hicules en file, 2 baies libres.',
    'garage.a5': 'Technicien B : taux de compl\u00e9tion 22% sous la moyenne.',
    'garage.auto1': 'Rappels de rendez-vous par SMS',
    'garage.auto1d': 'Les clients re\u00e7oivent automatiquement des rappels par texto 24 heures et 1 heure avant leur service. r\u00e9duisant les absences jusqu\u2019\u00e0 35%.',
    'garage.auto2': 'Suivi post-service',
    'garage.auto2d': 'Apr\u00e8s chaque travail compl\u00e9t\u00e9, un message automatique demande un avis Google et v\u00e9rifie la satisfaction. Sans effort du personnel.',
    'garage.auto3': 'Alertes de r\u00e9approvisionnement',
    'garage.auto3d': 'Lorsque les pi\u00e8ces fr\u00e9quemment utilis\u00e9es (filtres, huile, plaquettes) passent sous le seuil, une notification de commande est d\u00e9clench\u00e9e automatiquement.',

    // ---- RESTAURANT ----
    'restaurant.title': 'NovaMind pour les <span class="gradient-text">Restaurants</span>',
    'restaurant.sub': 'Centre de commande de performance \u00e0 distance pour les restaurateurs.',
    'restaurant.notReplacing': 'Ne remplace pas votre caisse ou vos syst\u00e8mes de cuisine. Vous donne le contr\u00f4le du propri\u00e9taire.',
    'restaurant.kpi1': 'Revenu / h',
    'restaurant.kpi2': 'Co\u00fbt main-d\u2019\u0153uvre',
    'restaurant.kpi3': 'Vitesse moy. ticket',
    'restaurant.kpi4': 'Articles \u00e0 risque',
    'restaurant.f1': 'Score de performance en temps r\u00e9el (0-100) avec suivi du statut',
    'restaurant.f2': 'Rythme des revenus vs r\u00e9f\u00e9rence. lecture instantan\u00e9e de l\u2019\u00e9lan',
    'restaurant.f3': 'Efficacit\u00e9 de la main-d\u2019\u0153uvre et d\u00e9tection du sureffectif par heure',
    'restaurant.f4': 'Pr\u00e9diction d\u2019\u00e9puisement des 20 articles critiques',
    'restaurant.f5': 'D\u00e9tection d\u2019anomalies de remises/annulations et alertes fraude',
    'restaurant.a1': 'Temps de pr\u00e9p +18% vs normal. File d\u2019attente en hausse.',
    'restaurant.a2': 'Ticket moyen en baisse de 9% vs vendredi typique.',
    'restaurant.a3': 'Main-d\u2019\u0153uvre \u00e0 34% (objectif 28%).',
    'restaurant.a4': 'Saumon pr\u00e9vu \u00e9puis\u00e9 d\u2019ici 19h15.',
    'restaurant.a5': 'Rotation 15% plus lente qu\u2019un d\u00eener typique.',
    'restaurant.auto1': 'Confirmations et rappels de r\u00e9servation',
    'restaurant.auto1d': 'Chaque r\u00e9servation re\u00e7oit une confirmation automatique + un rappel SMS 3 heures avant. r\u00e9duisant les absences et annulations tardives.',
    'restaurant.auto2': 'D\u00e9clencheurs de commande fournisseur',
    'restaurant.auto2d': 'Lorsque les articles d\u2019inventaire cl\u00e9s (prot\u00e9ines, produits frais, spiritueux) atteignent les seuils, les bons de commande sont r\u00e9dig\u00e9s et envoy\u00e9s automatiquement.',
    'restaurant.auto3': 'Demandes d\u2019avis post-visite',
    'restaurant.auto3d': '2 heures apr\u00e8s la visite d\u2019un client, un texto automatique l\u2019invite \u00e0 laisser un avis Google ou Yelp. construisant votre r\u00e9putation en autopilote.',

    // ---- GYM ----
    'gym.title': 'NovaMind pour les <span class="gradient-text">Gyms</span>',
    'gym.sub': 'Centre de commande de performance \u00e0 distance pour les propri\u00e9taires de gym.',
    'gym.notReplacing': 'Ne remplace pas votre syst\u00e8me d\u2019adh\u00e9sion. Vous donne la visibilit\u00e9 du propri\u00e9taire.',
    'gym.kpi1': 'Membres nets / sem',
    'gym.kpi2': 'R\u00e9ponse lead',
    'gym.kpi3': 'Occupation cours',
    'gym.kpi4': 'Ratio main-d\u2019\u0153uvre',
    'gym.f1': 'Sant\u00e9 des adh\u00e9sions. inscriptions nettes moins annulations et gels',
    'gym.f2': 'Vitesse de conversion des leads et suivi des rendez-vous',
    'gym.f3': 'Occupation des cours et signaux d\u2019utilisation aux heures de pointe',
    'gym.f4': 'Efficacit\u00e9 salariale. % main-d\u2019\u0153uvre vs revenu par heure',
    'gym.f5': 'Surveillance de r\u00e9putation. avis et tendances NPS',
    'gym.a1': 'Fuite de leads. 42% des nouveaux leads non contact\u00e9s en 15min.',
    'gym.a2': 'Annulations en hausse de 35% vs 2 derni\u00e8res semaines.',
    'gym.a3': 'Occupation des cours du soir en baisse de 20% vs r\u00e9f\u00e9rence.',
    'gym.a4': 'Sureffectif 13h-16h avec peu d\u2019entr\u00e9es.',
    'gym.a5': 'Avis 1 \u00e9toile publi\u00e9. Tendance NPS en baisse.',
    'gym.auto1': 'Suivi instantan\u00e9 des leads',
    'gym.auto1d': 'Les nouvelles demandes re\u00e7oivent une r\u00e9ponse personnalis\u00e9e en 2 minutes. par SMS et courriel. avec un lien pour r\u00e9server une visite. Aucun d\u00e9lai de r\u00e9ception.',
    'gym.auto2': 'Rappels de renouvellement',
    'gym.auto2d': 'S\u00e9quences automatis\u00e9es \u00e0 30, 15 et 7 jours avant l\u2019expiration avec liens de renouvellement et offres sp\u00e9ciales. r\u00e9duisant le roulement involontaire.',
    'gym.auto3': 'Relance des membres \u00e0 risque',
    'gym.auto3d': 'Lorsque la fr\u00e9quence de visite d\u2019un membre chute sous sa r\u00e9f\u00e9rence, un message personnalis\u00e9 est envoy\u00e9 automatiquement. avant qu\u2019il ne se d\u00e9sabonne.',

    // ---- REAL ESTATE ----
    'realestate.title': 'NovaMind pour l\u2019<span class="gradient-text">Immobilier</span>',
    'realestate.sub': 'Radar de performance pour les courtiers et chefs d\u2019\u00e9quipe.',
    'realestate.notReplacing': 'Ne remplace pas votre CRM. Vous donne l\u2019intelligence au niveau \u00e9quipe.',
    'realestate.kpi1': 'R\u00e9ponse moy.',
    'realestate.kpi2': 'Valeur pipeline',
    'realestate.kpi3': 'Taux de cl\u00f4ture',
    'realestate.kpi4': 'Pr\u00e9vision 30 jours',
    'realestate.f1': 'Suivi du temps de r\u00e9ponse aux leads et conformit\u00e9 SLA',
    'realestate.f2': 'V\u00e9locit\u00e9 du pipeline. d\u00e9tection des dossiers bloqu\u00e9s par \u00e9tape',
    'realestate.f3': 'Tableau de bord des agents. conversion activit\u00e9-r\u00e9sultat',
    'realestate.f4': 'Qualit\u00e9 des sources de leads. taux de cl\u00f4ture par canal',
    'realestate.f5': 'Pr\u00e9vision de revenus sur 30 jours avec contr\u00f4le de tr\u00e9sorerie',
    'realestate.a1': 'Nouveaux leads en attente >10 min. violation de d\u00e9lai.',
    'realestate.a2': 'Dossiers bloqu\u00e9s en n\u00e9gociation >14 jours.',
    'realestate.a3': 'Leads chauds sans suivi depuis 48 heures.',
    'realestate.a4': 'Agent n\u2019a contact\u00e9 que 54% des leads cette semaine.',
    'realestate.a5': 'Taux de rendez-vous leads Meta en baisse de 22%.',
    'realestate.auto1': 'R\u00e9ponse instantan\u00e9e aux leads',
    'realestate.auto1d': 'Chaque nouveau lead re\u00e7oit un texto et courriel personnalis\u00e9 en 2 minutes. qualifiant l\u2019intention et r\u00e9servant une visite avant la concurrence.',
    'realestate.auto2': 'Suivi et retour post-visite',
    'realestate.auto2d': 'Apr\u00e8s chaque visite, un message automatique recueille les commentaires de l\u2019acheteur et d\u00e9clenche les prochaines \u00e9tapes. offre, deuxi\u00e8me visite ou s\u00e9quence de nurture.',
    'realestate.auto3': 'Alertes de stagnation du pipeline',
    'realestate.auto3d': 'Les dossiers qui stagnent trop longtemps sont signal\u00e9s automatiquement. avec des actions sugg\u00e9r\u00e9es envoy\u00e9es sur le t\u00e9l\u00e9phone de l\u2019agent.',

    // ---- LAW FIRM ----
    'lawfirm.title': 'NovaMind pour les <span class="gradient-text">Cabinets d\u2019avocats</span>',
    'lawfirm.sub': 'Supervision ex\u00e9cutive pour les associ\u00e9s g\u00e9rants.',
    'lawfirm.notReplacing': 'Ne remplace pas votre syst\u00e8me de gestion de dossiers. Donne aux associ\u00e9s une visibilit\u00e9 en direct.',
    'lawfirm.kpi1': 'Conv. consultation',
    'lawfirm.kpi2': 'Capture facturable',
    'lawfirm.kpi3': 'C/R + 30 jours',
    'lawfirm.kpi4': '\u00c9ch\u00e9ances \u00e0 risque',
    'lawfirm.f1': 'Vitesse d\u2019admission et taux de conversion des consultations',
    'lawfirm.f2': 'V\u00e9locit\u00e9 des dossiers. dur\u00e9e par type, d\u00e9tection de blocage',
    'lawfirm.f3': 'Capture facturable. heures saisies vs pr\u00e9vues, signaux de fuite',
    'lawfirm.f4': 'Sant\u00e9 des recouvrements. anciennet\u00e9 C/R \u00e0 30/60/90 jours',
    'lawfirm.f5': 'Risque d\u2019\u00e9ch\u00e9ance. \u00e9ch\u00e9ances \u00e0 venir avec \u00e9tapes manquantes',
    'lawfirm.a1': 'Fuite d\u2019admission. appels sans r\u00e9ponse, taux de consultation en baisse.',
    'lawfirm.a2': 'Dur\u00e9e du type de dossier A +18% vs r\u00e9f\u00e9rence.',
    'lawfirm.a3': 'Avocat B. saisie facturable en baisse de 25% cette semaine.',
    'lawfirm.a4': 'C/R de plus de 30 jours en hausse au-dessus de la r\u00e9f\u00e9rence.',
    'lawfirm.a5': '\u00c9ch\u00e9ance \u00e0 venir avec \u00e9tapes requises manquantes.',
    'lawfirm.auto1': 'Pr\u00e9s\u00e9lection et prise de rendez-vous',
    'lawfirm.auto1d': 'Les nouvelles demandes sont automatiquement tri\u00e9es par type de dossier et urgence, puis dirig\u00e9es vers le bon avocat avec un lien de consultation. 24/7.',
    'lawfirm.auto2': 'Mises \u00e0 jour du dossier client',
    'lawfirm.auto2d': 'Lorsqu\u2019un dossier atteint un jalon (d\u00e9p\u00f4t, audience, r\u00e8glement), les clients re\u00e7oivent une mise \u00e0 jour automatique. r\u00e9duisant les appels \u00ab o\u00f9 en est mon dossier ? \u00bb.',
    'lawfirm.auto3': 'Rappels d\u2019heures facturables',
    'lawfirm.auto3d': 'Lorsque le taux de capture hebdomadaire d\u2019un avocat descend sous l\u2019objectif, il re\u00e7oit un rappel automatique discret. avant que la fuite de revenus ne s\u2019aggrave.',

    // ---- CONSTRUCTION ----
    'construction.title': 'NovaMind pour la <span class="gradient-text">Construction</span>',
    'construction.sub': 'Centre de commande du propri\u00e9taire pour les entrepreneurs et ma\u00eetres d\u2019\u0153uvre.',
    'construction.notReplacing': 'Ne remplace pas votre outil de gestion de projet. Vous donne le contr\u00f4le du propri\u00e9taire.',
    'construction.kpi1': 'Jalons \u00e0 temps',
    'construction.kpi2': 'Utilisation \u00e9quipe',
    'construction.kpi3': 'Pipeline devis',
    'construction.kpi4': 'O/C non per\u00e7us',
    'construction.f1': 'Sant\u00e9 du calendrier. jalons \u00e0 temps vs r\u00e9f\u00e9rence',
    'construction.f2': 'Utilisation des \u00e9quipes. temps productif vs inactif/d\u00e9placement',
    'construction.f3': 'Pipeline de devis. devis envoy\u00e9s, relances, taux de gain',
    'construction.f4': 'Signaux de fuite de profit. d\u00e9rive budg\u00e9taire, ordres de modification non recouvr\u00e9s',
    'construction.f5': 'Risque mat\u00e9riaux. articles critiques en attente, retards fournisseurs',
    'construction.a1': 'Jalon du projet X en retard de 2 jours.',
    'construction.a2': '\u00c9quipe B inactive >1,5 heures aujourd\u2019hui.',
    'construction.a3': 'Mat\u00e9riel critique non confirm\u00e9 pour l\u2019installation de vendredi.',
    'construction.a4': 'Ordres de modification non approuv\u00e9s/recouvr\u00e9s cette semaine.',
    'construction.a5': 'Devis envoy\u00e9s sans relance depuis 72 heures.',
    'construction.auto1': 'Rapports de chantier quotidiens',
    'construction.auto1d': 'Les enregistrements d\u2019\u00e9quipe, photos et ach\u00e8vements de t\u00e2ches sont compil\u00e9s dans un rapport quotidien automatique. envoy\u00e9 au propri\u00e9taire chaque soir.',
    'construction.auto2': 'Flux d\u2019ordres de modification',
    'construction.auto2d': 'Lorsqu\u2019un ordre de modification est soumis, les flux d\u2019approbation se d\u00e9clenchent automatiquement. acheminant vers le bon intervenant avec escalade des d\u00e9lais.',
    'construction.auto3': 'Alertes de retard fournisseur',
    'construction.auto3d': 'Le suivi des livraisons est surveill\u00e9 en continu. Si une exp\u00e9dition critique glisse, le chef de projet et le propri\u00e9taire sont alert\u00e9s avant l\u2019impact sur le calendrier.',

    // ---- IMPORT/EXPORT ----
    'importexport.title': 'NovaMind pour l\u2019<span class="gradient-text">Import / Export</span>',
    'importexport.sub': 'Radar de cha\u00eene d\u2019approvisionnement pour les op\u00e9rateurs import/export.',
    'importexport.notReplacing': 'Ne remplace pas votre ERP. Vous donne l\u2019intelligence de la cha\u00eene d\u2019approvisionnement.',
    'importexport.kpi1': 'Taux ponctualit\u00e9',
    'importexport.kpi2': 'D\u00e9rive d\u00e9lai',
    'importexport.kpi3': 'Risque rupture',
    'importexport.kpi4': 'Valeur en transit',
    'importexport.f1': 'Sant\u00e9 des exp\u00e9ditions. taux de ponctualit\u00e9 et risque de retard',
    'importexport.f2': 'D\u00e9rive des d\u00e9lais. tendances de fiabilit\u00e9 fournisseurs/transporteurs',
    'importexport.f3': 'Risque de rupture. jours de couverture, pr\u00e9vision d\u2019\u00e9puisement',
    'importexport.f4': 'Exposition de tr\u00e9sorerie. valeur en transit + inventaire vieillissant',
    'importexport.f5': 'Risque de conformit\u00e9. documents manquants et blocages douaniers',
    'importexport.a1': 'Exp\u00e9dition retard\u00e9e de 6 jours. rupture de stock pr\u00e9vue.',
    'importexport.a2': 'Fournisseur A : d\u00e9lai +22% ce mois.',
    'importexport.a3': 'SKU 104 pr\u00e9vu \u00e0 z\u00e9ro dans 9 jours.',
    'importexport.a4': 'Documents manquants pour exp\u00e9dition #4182.',
    'importexport.a5': 'Inventaire de grande valeur vieillissant >60 jours.',
    'importexport.auto1': 'Suivi des documents douaniers',
    'importexport.auto1d': 'Les documents douaniers manquants ou expirants d\u00e9clenchent des alertes automatiques avec compte \u00e0 rebours. pr\u00e9venant les retenues et frais de surestaries.',
    'importexport.auto2': 'D\u00e9clencheurs de r\u00e9approvisionnement',
    'importexport.auto2d': 'Bas\u00e9 sur le taux de consommation et les d\u00e9lais, les points de commande sont calcul\u00e9s et les BC r\u00e9dig\u00e9s automatiquement lorsque la couverture passe sous les seuils.',
    'importexport.auto3': 'Notifications en cascade de retard',
    'importexport.auto3d': 'Lorsqu\u2019une exp\u00e9dition est retard\u00e9e, tous les intervenants en aval (entrep\u00f4t, ventes, clients) sont notifi\u00e9s automatiquement avec des ETA r\u00e9vis\u00e9s.',

    // ======== INDEX PAGE ========
    'index.hero.badge': 'Infrastructure d\u2019automatisation IA',
    'index.hero.title': 'Nous ne rempla\u00e7ons pas<br/><span class="gradient-text">vos outils.</span><br/>Nous les faisons travailler<br/>pour vous. automatiquement.',
    'index.hero.desc': 'NovaMind aide les entreprises de services \u00e0 automatiser 20 \u00e0 40% de leurs op\u00e9rations quotidiennes r\u00e9p\u00e9titives. pour augmenter vos revenus sans augmenter votre masse salariale.',
    'index.hero.btn1': 'Revue des op\u00e9rations gratuite',
    'index.hero.btn2': 'Voir comment \u00e7a marche',
    'index.hero.m1': 'Ops automatis\u00e9es',
    'index.hero.m2': 'Industries servies',
    'index.hero.m3': 'Automatisation active',
    'index.hero.cardName': 'Nova IA',
    'index.hero.cardRole': 'Moteur d\u2019automatisation',
    'index.hero.cardResponse': '<strong>3 nouveaux leads</strong> captur\u00e9s et qualifi\u00e9s automatiquement. Suivis planifi\u00e9s. R\u00e9sum\u00e9 propri\u00e9taire envoy\u00e9. Vos op\u00e9rations tournent en autopilote.',
    'index.hero.chip1': 'Disponibilit\u00e9',
    'index.hero.chip2': 'Industries',
    'index.hero.chip3': 'Propuls\u00e9',
    'index.hero.chip4': 'Outils remplac\u00e9s',
    'index.hero.float1': 'Ops automatis\u00e9es +35%',
    'index.hero.float2': 'Tous syst\u00e8mes actifs',
    'index.hero.scroll': 'D\u00e9filez pour explorer',
    // Social proof
    'index.sp.1': 'Heures \u00e9conomis\u00e9es par semaine, typique',
    'index.sp.2': 'Temps de r\u00e9ponse client 2x plus rapide',
    'index.sp.3': 'Jours vers un ROI mesurable',
    'index.sp.4': 'Outils remplac\u00e9s. nous int\u00e9grons',
    // Marquee
    'index.marquee': ['R\u00e9ponse IA', 'Automatisation des flux', 'Int\u00e9grations syst\u00e8mes', 'Intelligence propri\u00e9taire', 'D\u00e9tection d\u2019anomalies', 'Rapports automatis\u00e9s', 'Pr\u00e9vention du roulement', 'Capture de leads'],
    'index.svc.label': 'Services principaux',
    'index.svc.title': 'L\u2019automatisation qui<br/><span class="gradient-text">g\u00e8re votre entreprise</span>',
    'index.svc.sub': 'Deux couches int\u00e9gr\u00e9es qui transforment votre entreprise de r\u00e9active \u00e0 proactive.',
    'index.svc.crm': 'R\u00e9ponse client IA',
    'index.svc.crmDesc': 'G\u00e8re les demandes entrantes par chat, SMS, courriel et voix automatiquement. R\u00e9pond en quelques secondes. capturant les leads et r\u00e9servations autrement perdus.',
    'index.svc.crmF1': 'Multicanal : chat, SMS, courriel, voix',
    'index.svc.crmF2': 'Qualification et acheminement des leads',
    'index.svc.crmF3': 'R\u00e9ponse instantan\u00e9e 24/7',
    'index.svc.inv': 'Automatisation des flux',
    'index.svc.invDesc': 'Cartographie le flux op\u00e9rationnel complet de l\u2019admission \u00e0 la facturation. \u00c9limine les transferts manuels et cr\u00e9e une ex\u00e9cution coh\u00e9rente.',
    'index.svc.invF1': 'Admission \u2192 planification \u2192 suivis',
    'index.svc.invF2': 'D\u00e9clencheurs de facturation et rappels',
    'index.svc.invF3': 'Logique d\u2019escalade',
    'index.svc.sched': 'Intelligence propri\u00e9taire',
    'index.svc.schedDesc': 'R\u00e9f\u00e9rences de performance, d\u00e9tection d\u2019anomalies, alertes de risque et signaux de revenus. Voyez ce qui compte en moins de 2 minutes par jour.',
    'index.svc.schedF1': 'D\u00e9tection d\u2019anomalies en temps r\u00e9el',
    'index.svc.schedF2': 'Risque de d\u00e9sabonnement et signaux de revenus',
    'index.svc.schedF3': 'Visibilit\u00e9 mobile',
    'index.svc.viewAll': 'Voir tous les services',
    'index.bento.label': 'Pourquoi NovaMind',
    'index.bento.title': 'Plus qu\u2019une simple<br/><span class="gradient-text">automatisation</span>',
    'index.bento.ai': 'Infrastructure d\u2019automatisation 24/7',
    'index.bento.aiDesc': 'Syst\u00e8mes intelligents qui fonctionnent en arri\u00e8re-plan sans intervention manuelle. Vos op\u00e9rations continuent que vous soyez pr\u00e9sent ou non.',
    'index.bento.aiStat': 'Moteur op\u00e9rationnel toujours actif',
    'index.bento.new': 'Guides multi-sectoriels',
    'index.bento.newDesc': 'Mod\u00e8les d\u2019automatisation pr\u00e9con\u00e7us pour votre industrie. Restaurants, garages, gyms, cliniques et plus.',
    'index.bento.newStat': 'Guides sectoriels',
    'index.bento.addon': 'Int\u00e9grations transparentes',
    'index.bento.addonDesc': 'Se connecte \u00e0 votre CRM, PDV, calendriers et logiciel de r\u00e9servation existants. Aucun remplacement n\u00e9cessaire.',
    'index.bento.addonStat': 'Outils remplac\u00e9s',
    'index.bento.noContract': 'ROI mesurable',
    'index.bento.noContractDesc': 'Suivez les heures \u00e9conomis\u00e9es, les leads captur\u00e9s, l\u2019am\u00e9lioration du temps de r\u00e9ponse et l\u2019expansion des marges. R\u00e9sultats dans les 90 jours.',
    'index.bento.noContractStat': 'Jours jusqu\u2019au ROI mesurable',
    'index.proc.label': 'Comment \u00e7a marche',
    'index.proc.title': 'De la d\u00e9couverte \u00e0<br/><span class="gradient-text">l\u2019automatisation en semaines</span>',
    'index.proc.s1': 'D\u00e9couverte et revue',
    'index.proc.s1d': 'Nous plongeons dans vos outils existants, flux de travail et points de douleur. Nous identifions les 3 \u00e0 5 meilleures opportunit\u00e9s d\u2019automatisation class\u00e9es par impact.',
    'index.proc.s2': 'Construction et int\u00e9gration',
    'index.proc.s2d': 'Nous concevons et construisons votre infrastructure d\u2019automatisation, en nous connectant aux outils que vous utilisez d\u00e9j\u00e0. Pas de remplacement. juste une automatisation intelligente par-dessus.',
    'index.proc.s3': 'Mise en production et optimisation',
    'index.proc.s3d': 'D\u00e9ployez, formez votre \u00e9quipe et optimisez continuellement. Vos op\u00e9rations tournent en autopilote pendant que vous vous concentrez sur la croissance.',
    'index.proc.more': 'Voir le processus complet',
    'index.why.label': 'La diff\u00e9rence NovaMind',
    'index.why.title': 'Con\u00e7u pour les entreprises<br/><span class="gradient-text">qui veulent du levier</span>',
    'index.why.f1': 'De l\u2019automatisation, pas des conseils',
    'index.why.f1d': 'Nous construisons des syst\u00e8mes qui fonctionnent sans nous. Chaque engagement laisse derri\u00e8re lui une infrastructure, pas un rapport.',
    'index.why.f2': 'S\u2019int\u00e8gre avec vos outils',
    'index.why.f2d': 'Nous nous connectons \u00e0 votre CRM, PDV, calendriers et logiciel de r\u00e9servation. Aucun remplacement n\u00e9cessaire.',
    'index.why.f3': 'Guides sp\u00e9cifiques \u00e0 l\u2019industrie',
    'index.why.f3d': 'Mod\u00e8les d\u2019automatisation \u00e9prouv\u00e9s pour les restaurants, garages, gyms, cliniques, construction et plus.',
    'index.why.f4': 'R\u00e9sultats mesurables',
    'index.why.f4d': 'Heures \u00e9conomis\u00e9es, leads captur\u00e9s, marges \u00e9largies. ROI visible dans les 90 jours.',
    'index.why.bigStat': 'Des op\u00e9rations quotidiennes automatis\u00e9es',
    'index.why.ms1': 'Industries',
    'index.why.ms2': 'Disponibilit\u00e9',
    'index.why.ms3': 'Jours jusqu\u2019au ROI',
    'index.why.ms4': 'Contr\u00f4le quotidien',
    'index.test.label': 'Ce que disent les clients',
    'index.test.title': 'Les entreprises font <span class="gradient-text">confiance</span> \u00e0 NovaMind',
    'index.test.q1': 'Le syst\u00e8me de r\u00e9ponse automatis\u00e9e de NovaMind capture des leads que nous perdions auparavant. Nous sommes pass\u00e9s de r\u00e9ponses en heures \u00e0 des r\u00e9ponses en secondes. et notre taux de r\u00e9servation a bondi.',
    'index.test.r1': 'Agence marketing',
    'index.test.q2': 'L\u2019automatisation des flux a r\u00e9duit nos heures administratives de moiti\u00e9. Planification, suivis, facturation. tout tourne en autopilote maintenant.',
    'index.test.r2': 'Propri\u00e9taire de studio fitness',
    'index.test.q3': 'Le tableau de bord d\u2019intelligence propri\u00e9taire a tout chang\u00e9. Je peux voir ce qui se passe dans mon salon depuis mon t\u00e9l\u00e9phone. Sans \u00eatre pr\u00e9sente.',
    'index.test.r3': 'Propri\u00e9taire de salon',
    'index.price.label': 'Tarification',
    'index.price.title': 'Un investissement qui<br/><span class="gradient-text">se rentabilise</span>',
    'index.price.sub': 'Forfaits d\u2019installation + abonnements mensuels. ROI mesurable dans les 90 jours.',
    'index.price.tier1': 'Entr\u00e9e',
    'index.price.tier2': 'Croissance',
    'index.price.tier3': '\u00c9volution',
    'index.price.badge': 'Le plus populaire',
    'index.price.freeDesc': '+ \u00e0 partir de 500$/mois. 3\u20135 automatisations, rapports de base, support courriel.',
    'index.price.maxDesc': '+ \u00e0 partir de 800$/mois. Impl\u00e9mentation multi-flux, 2\u20133 int\u00e9grations, support prioritaire.',
    'index.price.startDesc': '+ \u00e0 partir de 1 200$/mois. Infrastructure compl\u00e8te, alertes personnalis\u00e9es, optimisation d\u00e9di\u00e9e.',
    'index.price.setup': ' installation',
    'index.price.btn1': 'Commencer',
    'index.price.btn2': 'Revue des op\u00e9rations gratuite',
    'index.price.btn3': 'Contactez-nous',
    'index.price.viewAll': 'Voir la tarification compl\u00e8te',
    'index.cta.label': 'Commencer',
    'index.cta.title': 'Pr\u00eat \u00e0 automatiser<br/>vos op\u00e9rations ?',
    'index.cta.desc': 'R\u00e9servez une revue des op\u00e9rations gratuite. Nous identifierons vos meilleures opportunit\u00e9s d\u2019automatisation et vous montrerons ce que NovaMind peut faire pour votre entreprise.',
    'index.cta.btn1': 'Revue des op\u00e9rations gratuite',
    'index.cta.btn2': 'Voir comment \u00e7a marche',
    'footer.desc2': 'Infrastructure d\u2019automatisation IA pour les entreprises de services. Nous ne rempla\u00e7ons pas vos outils. Nous les faisons travailler pour vous.',
    'footer.services': 'Services',
    'footer.privacy': 'Politique de confidentialit\u00e9',
    'footer.terms': 'Conditions d\u2019utilisation',
    'footer.pl.services': 'Services',
    'footer.pl.pricing': 'Tarification',
    'footer.pl.how': 'Comment \u00e7a marche',
    'footer.sv.ai': 'R\u00e9ponse IA',
    'footer.sv.workflow': 'Automatisation des flux',
    'footer.sv.owner': 'Intelligence propri\u00e9taire',
    'footer.sv.integrations': 'Int\u00e9grations syst\u00e8mes',
    'footer.copyright': '\u00a9 2026 NovaMind. Tous droits r\u00e9serv\u00e9s.',
    'services.featured': 'Essentiel',

    // ======== PRICING PAGE ========
    'pricing.hero.label': 'Tarification',
    'pricing.hero.title': 'Un investissement qui <span class="gradient-text">se rentabilise</span>',
    'pricing.hero.sub': 'Forfaits d\u2019installation + abonnements mensuels. Chaque engagement est structur\u00e9 pour offrir un ROI mesurable dans les 90 jours.',
    'pricing.setup.label': 'Installation unique',
    'pricing.setup.title': 'Forfaits <span class="gradient-text">d\u2019installation</span>',
    'pricing.setup.sub': 'Chaque nouveau client commence par une impl\u00e9mentation couvrant la d\u00e9couverte, la conception des flux, la cartographie des int\u00e9grations, la construction, les tests et le lancement.',
    'pricing.entry.tag': 'Pour les petites entreprises pr\u00eates \u00e0 automatiser leurs premiers flux de travail.',
    'pricing.entry.f1': '3 \u00e0 5 automatisations principales',
    'pricing.entry.f2': 'Configuration d\u2019int\u00e9gration de base',
    'pricing.entry.f3': 'D\u00e9couverte et cartographie des flux',
    'pricing.entry.f4': 'Tests et support de lancement',
    'pricing.entry.btn': 'Commencer',
    'pricing.standard.badge': 'Le plus populaire',
    'pricing.standard.tag': 'Impl\u00e9mentation multi-flux avec des int\u00e9grations plus profondes et une couverture d\u2019automatisation \u00e9tendue.',
    'pricing.standard.f1': 'Impl\u00e9mentation multi-flux',
    'pricing.standard.f2': '2 \u00e0 3 int\u00e9grations syst\u00e8mes',
    'pricing.standard.f3': 'D\u00e9couverte et architecture compl\u00e8tes',
    'pricing.standard.f4': 'Tests, QA et mise en production',
    'pricing.standard.f5': 'Formation d\u2019\u00e9quipe incluse',
    'pricing.standard.btn': 'Revue des op\u00e9rations gratuite',
    'pricing.enterprise.tag': 'D\u00e9ploiement d\u2019infrastructure compl\u00e8te \u00e0 travers les d\u00e9partements pour les grandes organisations.',
    'pricing.enterprise.f1': 'D\u00e9ploiement d\u2019infrastructure complet',
    'pricing.enterprise.f2': 'Int\u00e9grations illimit\u00e9es',
    'pricing.enterprise.f3': 'Automatisation inter-d\u00e9partements',
    'pricing.enterprise.f4': 'Logique d\u2019escalade personnalis\u00e9e',
    'pricing.enterprise.f5': 'Chef de projet d\u00e9di\u00e9',
    'pricing.enterprise.f6': 'Formation et int\u00e9gration \u00e9tendues',
    'pricing.enterprise.btn': 'Contactez-nous',
    'pricing.monthly.label': 'Abonnements mensuels',
    'pricing.monthly.title': 'Automatisation et <span class="gradient-text">support continus</span>',
    'pricing.monthly.sub': 'Apr\u00e8s l\u2019installation, les clients passent \u00e0 un abonnement mensuel couvrant l\u2019ex\u00e9cution, la surveillance, l\u2019optimisation et le support.',
    'pricing.base.tag': 'Automatisations principales avec support de base et rapports mensuels.',
    'pricing.base.f1': 'Automatisations 24/7',
    'pricing.base.f2': 'Surveillance et alertes de base',
    'pricing.base.f3': 'Rapport de performance mensuel',
    'pricing.base.f4': 'Support par courriel',
    'pricing.base.btn': 'Commencer',
    'pricing.growth.badge': 'Le plus populaire',
    'pricing.growth.tag': 'Automatisations \u00e9tendues avec support prioritaire et revues de performance r\u00e9guli\u00e8res.',
    'pricing.growth.f1': 'Couverture d\u2019automatisation \u00e9tendue',
    'pricing.growth.f2': 'Support courriel et clavardage prioritaire',
    'pricing.growth.f3': 'Revues de performance hebdomadaires',
    'pricing.growth.f4': 'Tableau de bord intelligence propri\u00e9taire',
    'pricing.growth.f5': 'Sessions d\u2019optimisation trimestrielles',
    'pricing.growth.btn': 'Revue des op\u00e9rations gratuite',
    'pricing.scale.tag': 'Suite d\u2019infrastructure compl\u00e8te avec optimisation d\u00e9di\u00e9e et alertes personnalis\u00e9es.',
    'pricing.scale.f1': 'Infrastructure d\u2019automatisation compl\u00e8te',
    'pricing.scale.f2': 'Sp\u00e9cialiste d\u2019optimisation d\u00e9di\u00e9',
    'pricing.scale.f3': 'Alertes et escalade personnalis\u00e9es',
    'pricing.scale.f4': 'Intelligence propri\u00e9taire avanc\u00e9e',
    'pricing.scale.f5': 'Sessions strat\u00e9giques mensuelles',
    'pricing.scale.f6': 'Garantie SLA',
    'pricing.scale.btn': 'Contactez-nous',
    'pricing.plan.entry': 'Entr\u00e9e',
    'pricing.plan.standard': 'Standard',
    'pricing.plan.enterprise': 'Entreprise',
    'pricing.plan.base': 'Base',
    'pricing.plan.growth': 'Croissance',
    'pricing.plan.scale': '\u00c9chelle',
    'pricing.plan.onetime': 'unique',
    'pricing.plan.month': '/mois',
    'pricing.addon.label': 'Modules compl\u00e9mentaires',
    'pricing.addon.title': '\u00c9largissez vos <span class="gradient-text">capacit\u00e9s</span>',
    'pricing.addon.sub': 'Modules individuels que vous pouvez ajouter selon vos besoins. D\u00e9ploiement rapide.',
    'pricing.addon.voice': 'Voix IA',
    'pricing.addon.voiceDesc': 'Gestion et acheminement des appels entrants',
    'pricing.addon.chat': 'Chat IA',
    'pricing.addon.chatDesc': 'Chatbot pour site web et messagerie',
    'pricing.addon.crm': 'Int\u00e9gration CRM',
    'pricing.addon.crmDesc': 'Synchronisation approfondie avec votre CRM',
    'pricing.addon.report': 'Rapports avanc\u00e9s',
    'pricing.addon.reportDesc': 'Tableaux de bord et analytique personnalis\u00e9s',
    'pricing.addon.churn': 'Intelligence d\u2019attrition',
    'pricing.addon.churnDesc': 'Mod\u00e8le pr\u00e9dictif des clients \u00e0 risque',
    'pricing.addon.review': 'Avis et r\u00e9putation',
    'pricing.addon.reviewDesc': 'Automatisation des avis post-service',
    'pricing.faq.label': 'FAQ',
    'pricing.faq.title': 'Questions sur la <span class="gradient-text">tarification</span>',
    'pricing.faq.q1': 'Qu\u2019est-ce qui est inclus dans les frais d\u2019installation ?',
    'pricing.faq.a1': 'Les frais d\u2019installation couvrent le processus complet de d\u00e9ploiement : d\u00e9couverte, conception des flux, cartographie des int\u00e9grations, construction des automatisations, tests et support de mise en production.',
    'pricing.faq.q2': 'Que couvre l\u2019abonnement mensuel ?',
    'pricing.faq.a2': 'Votre abonnement mensuel couvre l\u2019ex\u00e9cution des automatisations, la surveillance continue, l\u2019optimisation des performances, le support et les rapports r\u00e9guliers.',
    'pricing.faq.q3': 'Combien de temps dure le d\u00e9ploiement ?',
    'pricing.faq.a3': 'La plupart des d\u00e9ploiements sont compl\u00e9t\u00e9s en 2 \u00e0 4 semaines selon la complexit\u00e9. Le forfait Entr\u00e9e est g\u00e9n\u00e9ralement plus rapide, tandis que les d\u00e9ploiements Entreprise peuvent prendre plus de temps.',
    'pricing.faq.q4': 'Dois-je remplacer mes outils existants ?',
    'pricing.faq.a4': 'Non. NovaMind se connecte aux outils que vous utilisez d\u00e9j\u00e0. votre CRM, calendriers, PDV, logiciel de r\u00e9servation et outils comptables. Nous devenons la couche d\u2019automatisation intelligente par-dessus votre infrastructure existante.',
    'pricing.faq.q5': 'Quel ROI puis-je esp\u00e9rer ?',
    'pricing.faq.a5': 'Notre objectif est un ROI mesurable dans les 90 jours. Nous suivons les heures \u00e9conomis\u00e9es par semaine, l\u2019am\u00e9lioration du temps de r\u00e9ponse, les changements dans le taux de capture de leads et la r\u00e9duction des rendez-vous manqu\u00e9s.',
    'pricing.cta.label': 'Commencer',
    'pricing.cta.title': 'Pr\u00eat \u00e0 voir ce que<br/>nous pouvons automatiser ?',
    'pricing.cta.desc': 'R\u00e9servez une revue des op\u00e9rations gratuite. Nous identifierons vos meilleures opportunit\u00e9s d\u2019automatisation et vous montrerons comment NovaMind peut transformer votre entreprise.',
    'pricing.cta.btn1': 'Revue des op\u00e9rations gratuite',
    'pricing.cta.btn2': 'Voir nos services',

    // ======== SERVICES PAGE ========
    'services.hero.label': 'Services',
    'services.hero.title': 'Infrastructure d\u2019automatisation <span class="gradient-text">pour les entreprises de services</span>',
    'services.hero.sub': 'Deux couches int\u00e9gr\u00e9es qui transforment vos op\u00e9rations de r\u00e9actives \u00e0 proactives. Nous nous connectons \u00e0 vos outils existants et automatisons ce que vos employ\u00e9s font manuellement.',
    'services.l1.label': 'Couche 1',
    'services.l1.title': 'Infrastructure <span class="gradient-text">d\u2019automatisation</span>',
    'services.l1.sub': 'Le moteur op\u00e9rationnel. Il g\u00e8re le travail que les humains font manuellement.',
    'services.s1': 'R\u00e9ponse client IA',
    'services.s1d': 'G\u00e8re les demandes entrantes par chat, SMS, courriel et voix automatiquement. R\u00e9pond en secondes. pas en heures. capturant les leads autrement perdus.',
    'services.s1f1': 'Multicanal : chat, SMS, courriel, voix',
    'services.s1f2': 'Qualification et acheminement des leads',
    'services.s1f3': 'R\u00e9ponse instantan\u00e9e 24/7',
    'services.s1f4': 'Form\u00e9e sur les donn\u00e9es de votre entreprise',
    'services.s2': 'Automatisation des flux',
    'services.s2d': 'Cartographie le flux op\u00e9rationnel complet de l\u2019admission \u00e0 la facturation. \u00c9limine les transferts manuels et cr\u00e9e une ex\u00e9cution coh\u00e9rente.',
    'services.s2f1': 'Admission \u2192 planification \u2192 acheminement',
    'services.s2f2': 'Suivis et rappels automatis\u00e9s',
    'services.s2f3': 'D\u00e9clencheurs de facturation et confirmations',
    'services.s2f4': 'Logique d\u2019escalade',
    'services.s3': 'Int\u00e9grations syst\u00e8mes',
    'services.s3d': 'Se connecte aux outils que vous utilisez d\u00e9j\u00e0. CRM, calendriers, PDV, logiciel de r\u00e9servation, comptabilit\u00e9. Aucun remplacement n\u00e9cessaire.',
    'services.s3f1': 'Synchronisation CRM, PDV et calendrier',
    'services.s3f2': 'Int\u00e9gration de logiciel de r\u00e9servation',
    'services.s3f3': '\u00c9limine la double saisie',
    'services.s3f4': 'Flux de donn\u00e9es automatique entre syst\u00e8mes',
    'services.s4': 'Rapports automatis\u00e9s et escalade',
    'services.s4d': 'R\u00e9sum\u00e9s quotidiens et hebdomadaires pour le propri\u00e9taire. Alertes en temps r\u00e9el pour les anomalies. Logique d\u2019escalade qui notifie la bonne personne au bon moment.',
    'services.s4f1': 'R\u00e9sum\u00e9s de performance quotidiens et hebdomadaires',
    'services.s4f2': 'Alertes d\u2019anomalies en temps r\u00e9el',
    'services.s4f3': 'Acheminement d\u2019escalade intelligent',
    'services.s4f4': 'Surveillance du d\u00e9bit et des revenus',
    'services.l2.label': 'Couche 2',
    'services.l2.title': 'Intelligence <span class="gradient-text">propri\u00e9taire</span>',
    'services.l2.sub': 'Le syst\u00e8me de contr\u00f4le. Visibilit\u00e9 et alertes pr\u00e9coces pour g\u00e9rer votre entreprise de n\u2019importe o\u00f9.',
    'services.s5': 'R\u00e9f\u00e9rences de performance et d\u00e9tection d\u2019anomalies',
    'services.s5d': 'Apprend ce qui est \u00ab normal \u00bb pour votre entreprise au fil du temps. D\u00e9tecte les \u00e9carts t\u00f4t et distingue les vrais probl\u00e8mes de la variation naturelle.',
    'services.s5f1': 'Apprend les sch\u00e9mas de votre entreprise',
    'services.s5f2': 'Alertes d\u2019\u00e9carts pr\u00e9coces',
    'services.s5f3': 'Comparaison par jour de la semaine',
    'services.s5f4': 'Analyse des tendances',
    'services.s6': 'Alertes qui comptent',
    'services.s6d': 'Signaux de risque d\u2019attrition, fuites op\u00e9rationnelles et signaux de revenus. Aucun bruit. seulement les alertes qui n\u00e9cessitent votre attention.',
    'services.s6f1': 'D\u00e9tection du risque d\u2019attrition',
    'services.s6f2': 'Identification des fuites op\u00e9rationnelles',
    'services.s6f3': 'Suivi des signaux de revenus',
    'services.s6f4': 'Alertes de cr\u00e9neaux vacants',
    'services.s7': 'Visibilit\u00e9 propri\u00e9taire \u00e0 distance',
    'services.s7d': 'M\u00e9triques cl\u00e9s mobiles accessibles sur tout appareil. Con\u00e7u comme un outil de conscience situationnelle. voyez ce qui compte en moins de 2 minutes par jour.',
    'services.s7f1': 'Tableau de bord mobile',
    'services.s7f2': 'Contr\u00f4le quotidien en 2 minutes',
    'services.s7f3': 'M\u00e9triques cl\u00e9s en un coup d\u2019\u0153il',
    'services.s7f4': 'Aucune m\u00e9trique vaniteuse. que du signal',
    'services.addon.label': 'Modules compl\u00e9mentaires',
    'services.addon.title': '\u00c9largissez vos <span class="gradient-text">capacit\u00e9s</span>',
    'services.addon.sub': 'Modules \u00e0 d\u00e9ploiement rapide qui cr\u00e9ent des voies d\u2019expansion naturelles selon vos besoins.',
    'services.ao1': 'Voix IA',
    'services.ao1d': 'Gestion et acheminement des appels entrants',
    'services.ao2': 'Chat IA',
    'services.ao2d': 'Chatbot pour site web et messagerie',
    'services.ao3': 'Int\u00e9gration CRM',
    'services.ao3d': 'Synchronisation approfondie avec votre plateforme CRM',
    'services.ao4': 'Rapports avanc\u00e9s',
    'services.ao4d': 'Tableaux de bord et analyses personnalis\u00e9s',
    'services.ao5': 'Intelligence d\u2019attrition',
    'services.ao5d': 'Mod\u00e8le pr\u00e9dictif pour les clients \u00e0 risque',
    'services.ao6': 'Avis et r\u00e9putation',
    'services.ao6d': 'Automatisation des avis apr\u00e8s service',
    'services.principle.label': 'Notre principe fondamental',
    'services.principle.title': 'Nous nous connectons \u00e0 <span class="gradient-text">ce que vous avez d\u00e9j\u00e0</span>',
    'services.principle.p1': 'Nous ne rempla\u00e7ons pas votre PDV, votre CRM ou votre outil de r\u00e9servation. Nous nous connectons \u00e0 ce que vous avez d\u00e9j\u00e0, puis automatisons ce que vos employ\u00e9s font manuellement autour.',
    'services.principle.p2': 'NovaMind est agnostique en mati\u00e8re d\u2019outils. nous travaillons avec tout ce que vous utilisez d\u00e9j\u00e0. Notre infrastructure se superpose \u00e0 vos syst\u00e8mes existants et les fait fonctionner ensemble intelligemment.',
    'services.principle.p3': 'Le r\u00e9sultat : ex\u00e9cution coh\u00e9rente, temps de r\u00e9ponse plus rapides et visibilit\u00e9 propri\u00e9taire. Sans changer la fa\u00e7on dont votre \u00e9quipe travaille au quotidien.',
    'services.principle.uptime': 'Disponibilit\u00e9 de l\u2019automatisation',
    'services.principle.ops': 'Ops automatis\u00e9es',
    'services.principle.industries': 'Industries servies',
    'services.principle.tools': 'Outils remplac\u00e9s',
    'services.principle.roi': 'Jours jusqu\u2019au ROI',
    'services.cta.label': 'Commencer',
    'services.cta.title': 'Pr\u00eat \u00e0 automatiser<br/>vos op\u00e9rations ?',
    'services.cta.desc': 'R\u00e9servez une revue des op\u00e9rations gratuite. Nous identifierons vos meilleures opportunit\u00e9s d\u2019automatisation et vous montrerons ce que NovaMind peut faire pour votre entreprise.',
    'services.cta.btn1': 'Revue des op\u00e9rations gratuite',
    'services.cta.btn2': 'Voir comment \u00e7a marche',

    // ======== HOW IT WORKS PAGE ========
    'hiw.hero.label': 'Comment \u00e7a marche',
    'hiw.hero.title': 'De la d\u00e9couverte \u00e0 <span class="gradient-text">l\u2019automatisation</span>',
    'hiw.hero.sub': 'Un processus de d\u00e9ploiement structur\u00e9, calibr\u00e9 pour votre industrie. Chaque client passe par les m\u00eames \u00e9tapes \u00e9prouv\u00e9es. et plus nous d\u00e9ployons, plus chaque d\u00e9ploiement est rapide.',
    'hiw.s1': 'D\u00e9couverte',
    'hiw.s1d': 'Nous plongeons dans vos outils existants, flux de travail et points de douleur. Nous cartographions chaque processus manuel et identifions les 3 \u00e0 5 meilleures opportunit\u00e9s d\u2019automatisation class\u00e9es par impact.',
    'hiw.s2': 'Architecture',
    'hiw.s2d': 'Nous concevons le plan d\u2019automatisation : quels flux automatiser, quels outils connecter, quels d\u00e9clencheurs et actions configurer, quelle logique d\u2019escalade impl\u00e9menter et quels rapports produire.',
    'hiw.s3': 'Construction et int\u00e9gration',
    'hiw.s3d': 'Nous construisons les automatisations avec notre infrastructure et nous connectons \u00e0 vos outils existants via des API. Pas de remplacement de logiciels. juste une automatisation intelligente par-dessus.',
    'hiw.s4': 'Tests et QA',
    'hiw.s4d': 'Tests complets de chaque automatisation avec des donn\u00e9es r\u00e9elles ou simul\u00e9es. Couverture des cas limites. Revue client et approbation avant toute mise en production.',
    'hiw.s5': 'Mise en production et formation',
    'hiw.s5d': 'D\u00e9ploiement dans votre environnement en direct. Formation de vous et votre \u00e9quipe cl\u00e9 sur la surveillance et l\u2019interaction avec le syst\u00e8me. Attentes claires pour les 30 premiers jours.',
    'hiw.s6': 'Optimisation et expansion',
    'hiw.s6d': 'Apr\u00e8s 30 jours, nous analysons les donn\u00e9es de performance. Optimisation des automatisations sous-performantes. Identification des opportunit\u00e9s d\u2019expansion.',
    'hiw.feat.label': 'Ce que vous obtenez',
    'hiw.feat.title': 'Infrastructure qui <span class="gradient-text">\u00e9volue avec vous</span>',
    'hiw.feat.f1': 'Automatisation 24/7',
    'hiw.feat.f1d': 'Syst\u00e8mes qui g\u00e8rent les demandes, acheminent les t\u00e2ches, d\u00e9clenchent les suivis et envoient les rapports sans intervention humaine. 24 heures sur 24.',
    'hiw.feat.f2': 'Guides sectoriels',
    'hiw.feat.f2d': 'Mod\u00e8les d\u2019automatisation pr\u00e9con\u00e7us calibr\u00e9s pour votre secteur. restaurants, garages, gyms, cliniques et plus.',
    'hiw.feat.f3': 'S\u00e9curit\u00e9 de niveau entreprise',
    'hiw.feat.f3d': 'Chiffrement de niveau bancaire et sauvegardes automatiques. Vos donn\u00e9es sont toujours prot\u00e9g\u00e9es.',
    'hiw.feat.f4': 'Optimisation d\u00e9di\u00e9e',
    'hiw.feat.f4d': 'Am\u00e9lioration continue de vos syst\u00e8mes d\u2019automatisation. Nous surveillons, affinons et \u00e9tendons votre infrastructure au fil du temps.',
    'hiw.feat.bigStat': 'Jusqu\u2019au ROI mesurable',
    'hiw.feat.ms1': 'Industries',
    'hiw.feat.ms2': 'Automatis\u00e9',
    'hiw.feat.ms3': 'En fonctionnement',
    'hiw.feat.ms4': 'Contr\u00f4le quotidien',
    'hiw.test.label': 'Ce que disent les clients',
    'hiw.test.title': 'Les entreprises font <span class="gradient-text">confiance</span> \u00e0 NovaMind',
    'hiw.test.q1': 'Le syst\u00e8me de r\u00e9ponse automatis\u00e9e de NovaMind capture des leads que nous perdions auparavant. Nous sommes pass\u00e9s de r\u00e9ponses en heures \u00e0 des r\u00e9ponses en secondes.',
    'hiw.test.r1': 'Agence marketing',
    'hiw.test.q2': 'L\u2019automatisation des flux a r\u00e9duit nos heures administratives de moiti\u00e9. Planification, suivis, facturation. tout tourne en autopilote maintenant.',
    'hiw.test.r2': 'Propri\u00e9taire de studio fitness',
    'hiw.test.q3': 'Le tableau de bord d\u2019intelligence propri\u00e9taire a tout chang\u00e9. Je peux voir ce qui se passe dans mon salon depuis mon t\u00e9l\u00e9phone. Sans \u00eatre pr\u00e9sente.',
    'hiw.test.r3': 'Propri\u00e9taire de salon',
    'hiw.cta.label': 'Pr\u00eat ?',
    'hiw.cta.title': 'Pr\u00eat \u00e0 automatiser<br/>vos op\u00e9rations ?',
    'hiw.cta.desc': 'R\u00e9servez une revue des op\u00e9rations gratuite. Nous identifierons vos meilleures opportunit\u00e9s d\u2019automatisation et vous montrerons ce que NovaMind peut faire pour votre entreprise.',
    'hiw.cta.btn1': 'Revue des op\u00e9rations gratuite',
    'hiw.cta.btn2': 'Voir nos services',

    // Politique de confidentialit\u00e9
    'priv.label': 'L\u00e9gal',
    'priv.title': 'Politique de <span class="gradient-text">confidentialit\u00e9</span>',
    'priv.effective': 'Date d\u2019entr\u00e9e en vigueur : 25 f\u00e9vrier 2026',
    'priv.h1': '1. Introduction',
    'priv.p1': 'NovaMind (\u00ab nous \u00bb, \u00ab notre \u00bb) est une entreprise d\u2019infrastructure d\u2019automatisation IA qui aide les entreprises de services \u00e0 automatiser leurs op\u00e9rations. Nous nous engageons \u00e0 prot\u00e9ger la confidentialit\u00e9 et la s\u00e9curit\u00e9 de vos donn\u00e9es personnelles. Cette politique de confidentialit\u00e9 explique comment nous collectons, utilisons, divulguons et prot\u00e9geons vos informations lorsque vous visitez notre site web (novamindai.com), utilisez nos services ou interagissez avec nous.',
    'priv.p1b': 'En acc\u00e9dant \u00e0 notre site web ou en utilisant nos services, vous reconnaissez avoir lu et compris cette politique de confidentialit\u00e9. Si vous n\u2019\u00eates pas d\u2019accord avec les pratiques d\u00e9crites, veuillez ne pas utiliser nos services.',
    'priv.h2': '2. Donn\u00e9es personnelles que nous collectons',
    'priv.p2': 'Nous pouvons collecter les cat\u00e9gories suivantes de donn\u00e9es personnelles :',
    'priv.p2a': 'Coordonn\u00e9es : Nom, adresse courriel, num\u00e9ro de t\u00e9l\u00e9phone, nom de l\u2019entreprise et titre de poste que vous fournissez lors d\u2019une demande de revue des op\u00e9rations, en nous contactant ou en vous inscrivant \u00e0 nos communications.',
    'priv.p2b': 'Informations commerciales : Type d\u2019industrie, outils et logiciels existants, taille de l\u2019entreprise et flux op\u00e9rationnels. Ces informations sont collect\u00e9es lors du processus de d\u00e9couverte et d\u2019int\u00e9gration pour concevoir votre infrastructure d\u2019automatisation.',
    'priv.p2c': 'Informations de paiement : Adresse de facturation et d\u00e9tails de paiement trait\u00e9s par nos fournisseurs de paiement tiers s\u00e9curis\u00e9s. Nous ne stockons pas les num\u00e9ros complets de carte de cr\u00e9dit sur nos serveurs.',
    'priv.p2d': 'Donn\u00e9es d\u2019utilisation : Informations sur la fa\u00e7on dont vous interagissez avec notre site web, y compris l\u2019adresse IP, le type de navigateur, les informations sur l\u2019appareil, les pages visit\u00e9es, le temps pass\u00e9 sur les pages et les URL de r\u00e9f\u00e9rence. Ces donn\u00e9es sont collect\u00e9es automatiquement via des cookies et technologies similaires.',
    'priv.p2e': 'Donn\u00e9es de communication : Enregistrements de correspondance lorsque vous nous contactez par courriel, t\u00e9l\u00e9phone ou nos formulaires de contact.',
    'priv.p2f': 'Donn\u00e9es d\u2019int\u00e9gration : Lorsque nous connectons vos outils existants (CRM, TPV, calendriers, logiciels de r\u00e9servation) dans le cadre de nos services d\u2019automatisation, nous pouvons acc\u00e9der aux donn\u00e9es op\u00e9rationnelles n\u00e9cessaires pour construire et ex\u00e9cuter vos automatisations. Ces donn\u00e9es sont trait\u00e9es strictement selon votre contrat de service.',
    'priv.h3': '3. Comment nous collectons vos donn\u00e9es',
    'priv.p3a': 'Directement de vous : Lorsque vous demandez une revue gratuite des op\u00e9rations, remplissez un formulaire de contact, vous inscrivez \u00e0 nos communications ou interagissez avec nous lors du processus d\u2019int\u00e9gration.',
    'priv.p3b': 'Automatiquement : Par le biais de cookies, balises web et technologies de suivi similaires lorsque vous naviguez sur notre site web.',
    'priv.p3c': 'Par des int\u00e9grations tierces : Lorsque vous autorisez NovaMind \u00e0 se connecter \u00e0 vos outils existants dans le cadre de nos services d\u2019automatisation.',
    'priv.p3d': '\u00c0 partir de sources publiques : R\u00e9pertoires d\u2019entreprises, profils de m\u00e9dias sociaux et autres registres publics pour mieux comprendre votre industrie et vos besoins.',
    'priv.h4': '4. Comment nous utilisons vos donn\u00e9es',
    'priv.p4': 'Nous utilisons vos donn\u00e9es personnelles aux fins suivantes :',
    'priv.p4a': 'Prestation de services : Pour concevoir, construire, d\u00e9ployer et optimiser votre infrastructure d\u2019automatisation. Cela comprend la connexion \u00e0 vos outils existants, la configuration des flux de travail et l\u2019ex\u00e9cution des automatisations en votre nom.',
    'priv.p4b': 'Communication : Pour r\u00e9pondre \u00e0 vos demandes, envoyer des mises \u00e0 jour de service, fournir un support et livrer des rapports op\u00e9rationnels et des alertes dans le cadre de votre abonnement.',
    'priv.p4c': 'Am\u00e9lioration : Pour analyser les mod\u00e8les d\u2019utilisation, am\u00e9liorer nos services, d\u00e9velopper de nouvelles fonctionnalit\u00e9s et affiner nos guides d\u2019automatisation sp\u00e9cifiques \u00e0 chaque industrie.',
    'priv.p4d': 'Marketing : Pour vous envoyer des informations pertinentes sur nos services, \u00e9tudes de cas et perspectives industrielles. Vous pouvez vous d\u00e9sabonner des communications marketing \u00e0 tout moment.',
    'priv.p4e': 'Conformit\u00e9 l\u00e9gale : Pour nous conformer aux lois, r\u00e8glements et proc\u00e9dures l\u00e9gales applicables.',
    'priv.p4f': 'S\u00e9curit\u00e9 : Pour d\u00e9tecter, pr\u00e9venir et traiter les probl\u00e8mes techniques, la fraude et les acc\u00e8s non autoris\u00e9s.',
    'priv.h5': '5. Partage et divulgation des donn\u00e9es',
    'priv.p5': 'Nous ne vendons pas vos donn\u00e9es personnelles. Nous pouvons partager vos informations avec :',
    'priv.p5a': 'Fournisseurs de services : Tiers qui nous aident \u00e0 fournir nos services, y compris les fournisseurs d\u2019h\u00e9bergement cloud, processeurs de paiement, outils d\u2019analyse et plateformes de communication. Ces fournisseurs sont contractuellement tenus de prot\u00e9ger vos donn\u00e9es.',
    'priv.p5b': 'Partenaires d\u2019int\u00e9gration : Lorsque vous nous autorisez \u00e0 nous connecter \u00e0 vos outils existants, les donn\u00e9es circulent entre NovaMind et ces outils dans la mesure n\u00e9cessaire pour ex\u00e9cuter vos automatisations. Nous n\u2019acc\u00e9dons qu\u2019\u00e0 ce qui est requis pour les automatisations que vous avez approuv\u00e9es.',
    'priv.p5c': 'Exigences l\u00e9gales : Nous pouvons divulguer vos donn\u00e9es si la loi, un r\u00e8glement ou une proc\u00e9dure l\u00e9gale l\u2019exige, ou si nous croyons de bonne foi qu\u2019une telle divulgation est n\u00e9cessaire pour prot\u00e9ger nos droits, votre s\u00e9curit\u00e9 ou celle d\u2019autrui.',
    'priv.p5d': 'Transferts d\u2019entreprise : En cas de fusion, acquisition ou vente d\u2019actifs, vos donn\u00e9es personnelles peuvent \u00eatre transf\u00e9r\u00e9es dans le cadre de cette transaction. Nous vous informerons de tout changement de ce type.',
    'priv.h6': '6. Conservation des donn\u00e9es',
    'priv.p6': 'Nous conservons vos donn\u00e9es personnelles uniquement aussi longtemps que n\u00e9cessaire pour remplir les objectifs d\u00e9crits dans cette politique, ou tel que requis par la loi. Pr\u00e9cis\u00e9ment :',
    'priv.p6a': 'Clients actifs : Nous conservons vos donn\u00e9es pendant la dur\u00e9e de votre contrat de service plus 12 mois apr\u00e8s la r\u00e9siliation pour permettre la r\u00e9activation du compte et respecter les obligations l\u00e9gales.',
    'priv.p6b': 'Clients potentiels : Si vous demandez une revue des op\u00e9rations mais ne proc\u00e9dez pas, nous conservons vos coordonn\u00e9es jusqu\u2019\u00e0 24 mois, sauf si vous demandez une suppression anticip\u00e9e.',
    'priv.p6c': 'Visiteurs du site web : Les donn\u00e9es d\u2019utilisation collect\u00e9es via les cookies sont conserv\u00e9es selon nos param\u00e8tres de cookies, g\u00e9n\u00e9ralement pas plus de 13 mois.',
    'priv.p6d': 'Lorsque les donn\u00e9es ne sont plus n\u00e9cessaires, elles sont supprim\u00e9es de mani\u00e8re s\u00e9curis\u00e9e ou anonymis\u00e9es.',
    'priv.h7': '7. S\u00e9curit\u00e9 des donn\u00e9es',
    'priv.p7a': 'Nous mettons en \u0153uvre des mesures de s\u00e9curit\u00e9 conformes aux normes de l\u2019industrie pour prot\u00e9ger vos donn\u00e9es personnelles, notamment :',
    'priv.p7b': 'Chiffrement des donn\u00e9es en transit (TLS/SSL) et au repos. Contr\u00f4les d\u2019acc\u00e8s et authentification pour tous les syst\u00e8mes internes. Audits de s\u00e9curit\u00e9 r\u00e9guliers et \u00e9valuations des vuln\u00e9rabilit\u00e9s. Formation des employ\u00e9s sur les meilleures pratiques de protection des donn\u00e9es. Infrastructure cloud s\u00e9curis\u00e9e avec sauvegardes automatiques.',
    'priv.p7c': 'Bien que nous prenions toutes les pr\u00e9cautions raisonnables pour prot\u00e9ger vos donn\u00e9es, aucune m\u00e9thode de transmission sur Internet ou de stockage \u00e9lectronique n\u2019est s\u00e9curis\u00e9e \u00e0 100%. Nous ne pouvons pas garantir une s\u00e9curit\u00e9 absolue.',
    'priv.h8': '8. Cookies et technologies de suivi',
    'priv.p8': 'Notre site web utilise des cookies et technologies similaires pour am\u00e9liorer votre exp\u00e9rience de navigation et collecter des donn\u00e9es d\u2019utilisation. Ceux-ci comprennent :',
    'priv.p8a': 'Cookies essentiels : N\u00e9cessaires au bon fonctionnement du site web. Ceux-ci ne peuvent pas \u00eatre d\u00e9sactiv\u00e9s.',
    'priv.p8b': 'Cookies analytiques : Nous aident \u00e0 comprendre comment les visiteurs interagissent avec notre site web afin de l\u2019am\u00e9liorer.',
    'priv.p8c': 'Cookies de pr\u00e9f\u00e9rence : M\u00e9morisent vos param\u00e8tres, comme la pr\u00e9f\u00e9rence de langue.',
    'priv.p8d': 'Vous pouvez g\u00e9rer vos pr\u00e9f\u00e9rences de cookies via les param\u00e8tres de votre navigateur. La d\u00e9sactivation de certains cookies peut affecter votre exp\u00e9rience sur notre site web.',
    'priv.h9': '9. Vos droits',
    'priv.p9': 'Selon votre juridiction, vous pouvez avoir les droits suivants concernant vos donn\u00e9es personnelles :',
    'priv.p9a': 'Acc\u00e8s : Demander une copie des donn\u00e9es personnelles que nous d\u00e9tenons \u00e0 votre sujet.',
    'priv.p9b': 'Correction : Demander que nous corrigions les donn\u00e9es inexactes ou incompl\u00e8tes.',
    'priv.p9c': 'Suppression : Demander que nous supprimions vos donn\u00e9es personnelles, sous r\u00e9serve des exigences l\u00e9gales de conservation.',
    'priv.p9d': 'Portabilit\u00e9 : Demander vos donn\u00e9es dans un format structur\u00e9, couramment utilis\u00e9 et lisible par machine.',
    'priv.p9e': 'Opposition : Vous opposer au traitement de vos donn\u00e9es \u00e0 certaines fins, y compris le marketing.',
    'priv.p9f': 'Retrait du consentement : Lorsque le traitement est fond\u00e9 sur le consentement, vous pouvez le retirer \u00e0 tout moment.',
    'priv.p9g': 'Pour exercer l\u2019un de ces droits, veuillez nous contacter \u00e0 contact@novamindai.com. Nous r\u00e9pondrons \u00e0 votre demande dans les 30 jours.',
    'priv.h10': '10. Liens vers des tiers',
    'priv.p10': 'Notre site web peut contenir des liens vers des sites web et services tiers. Nous ne sommes pas responsables des pratiques de confidentialit\u00e9 ou du contenu de ces sites externes. Nous vous encourageons \u00e0 consulter les politiques de confidentialit\u00e9 de tout service tiers que vous visitez.',
    'priv.h11': '11. Confidentialit\u00e9 des enfants',
    'priv.p11': 'Nos services sont con\u00e7us pour les entreprises et ne sont pas destin\u00e9s aux personnes de moins de 16 ans. Nous ne collectons pas sciemment de donn\u00e9es personnelles d\u2019enfants. Si nous apprenons que nous avons collect\u00e9 des donn\u00e9es d\u2019un enfant de moins de 16 ans, nous prendrons des mesures pour les supprimer rapidement.',
    'priv.h12': '12. Transferts internationaux de donn\u00e9es',
    'priv.p12': 'Vos donn\u00e9es personnelles peuvent \u00eatre transf\u00e9r\u00e9es et trait\u00e9es dans des pays autres que votre pays de r\u00e9sidence. Nous veillons \u00e0 ce que des garanties appropri\u00e9es soient en place pour prot\u00e9ger vos donn\u00e9es conform\u00e9ment \u00e0 cette politique de confidentialit\u00e9 et aux lois applicables en mati\u00e8re de protection des donn\u00e9es.',
    'priv.h13': '13. Modifications de cette politique',
    'priv.p13a': 'Nous pouvons mettre \u00e0 jour cette politique de confidentialit\u00e9 de temps \u00e0 autre pour refl\u00e9ter les changements dans nos pratiques, services ou exigences l\u00e9gales. Lorsque nous apportons des modifications importantes, nous mettrons \u00e0 jour la \u00ab date d\u2019entr\u00e9e en vigueur \u00bb en haut de cette page et, le cas \u00e9ch\u00e9ant, vous informerons par courriel ou par un avis visible sur notre site web.',
    'priv.p13b': 'Nous vous encourageons \u00e0 consulter cette politique r\u00e9guli\u00e8rement pour rester inform\u00e9 de la fa\u00e7on dont nous prot\u00e9geons vos donn\u00e9es.',
    'priv.h14': '14. Nous contacter',
    'priv.p14': 'Si vous avez des questions, pr\u00e9occupations ou demandes concernant cette politique de confidentialit\u00e9 ou nos pratiques en mati\u00e8re de donn\u00e9es, veuillez nous contacter :',

    // Conditions d\u2019utilisation
    'terms.label': 'L\u00e9gal',
    'terms.title': 'Conditions <span class="gradient-text">d\u2019utilisation</span>',
    'terms.effective': 'Date d\u2019entr\u00e9e en vigueur : 25 f\u00e9vrier 2026',
    'terms.h1': '1. Acceptation des conditions',
    'terms.p1': 'En acc\u00e9dant ou en utilisant le site web NovaMind (novamindai.com) et ses services, vous acceptez d\u2019\u00eatre li\u00e9 par ces conditions d\u2019utilisation (\u00ab conditions \u00bb). Si vous concluez ces conditions au nom d\u2019une entreprise ou d\u2019une autre entit\u00e9 juridique, vous d\u00e9clarez avoir l\u2019autorit\u00e9 de lier cette entit\u00e9. Si vous n\u2019acceptez pas ces conditions, n\u2019utilisez pas nos services.',
    'terms.h2': '2. Description des services',
    'terms.p2': 'NovaMind fournit des services d\u2019infrastructure d\u2019automatisation IA pour les entreprises de services. Nos services comprennent, sans s\u2019y limiter :',
    'terms.p2a': 'Syst\u00e8mes de r\u00e9ponse client IA : Gestion automatis\u00e9e des communications par chat, SMS, courriel et voix au nom de votre entreprise.',
    'terms.p2b': 'Automatisation des flux de travail : Conception et mise en \u0153uvre de flux de travail op\u00e9rationnels automatis\u00e9s incluant l\u2019accueil, la planification, l\u2019acheminement des t\u00e2ches, les suivis et les d\u00e9clencheurs de facturation.',
    'terms.p2c': 'Int\u00e9grations syst\u00e8mes : Connexion de vos outils existants (CRM, TPV, calendriers, logiciels de r\u00e9servation, comptabilit\u00e9) \u00e0 notre infrastructure d\u2019automatisation.',
    'terms.p2d': 'Intelligence propri\u00e9taire : R\u00e9f\u00e9rences de performance, d\u00e9tection d\u2019anomalies, alertes de risque de d\u00e9sabonnement, signaux de revenus et rapports automatis\u00e9s.',
    'terms.p2e': 'La port\u00e9e sp\u00e9cifique des services pour chaque client est d\u00e9finie dans le contrat de service individuel \u00e9tabli lors du processus d\u2019int\u00e9gration.',
    'terms.h3': '3. Compte et acc\u00e8s',
    'terms.p3a': 'Certaines fonctionnalit\u00e9s de nos services peuvent n\u00e9cessiter que vous fournissiez des identifiants d\u2019acc\u00e8s \u00e0 vos outils existants. Vous \u00eates responsable de :',
    'terms.p3b': 'Fournir des informations exactes et compl\u00e8tes lors de l\u2019int\u00e9gration. Maintenir la s\u00e9curit\u00e9 de vos identifiants de compte. Nous notifier imm\u00e9diatement de tout acc\u00e8s non autoris\u00e9. Veiller \u00e0 ce que le personnel autoris\u00e9 au sein de votre organisation utilise les services conform\u00e9ment \u00e0 ces conditions.',
    'terms.p3c': 'Nous nous r\u00e9servons le droit de suspendre ou de r\u00e9silier l\u2019acc\u00e8s si nous croyons raisonnablement que votre compte est utilis\u00e9 en violation de ces conditions.',
    'terms.h4': '4. Contrats de service et int\u00e9gration',
    'terms.p4a': 'Chaque engagement NovaMind commence par une phase de d\u00e9couverte o\u00f9 nous \u00e9valuons vos op\u00e9rations et concevons un plan d\u2019automatisation personnalis\u00e9. Les d\u00e9tails de votre infrastructure d\u2019automatisation, y compris la port\u00e9e, le calendrier et les livrables, sont document\u00e9s dans un contrat de service s\u00e9par\u00e9.',
    'terms.p4b': 'Le contrat de service, conjointement avec ces conditions, constitue l\u2019accord complet entre vous et NovaMind. En cas de conflit entre ces conditions et votre contrat de service, le contrat de service pr\u00e9vaudra.',
    'terms.h5': '5. Conditions de paiement',
    'terms.p5a': 'Frais d\u2019installation : Les frais d\u2019installation uniques sont dus \u00e0 la signature du contrat de service. Les frais d\u2019installation couvrent les phases de d\u00e9couverte, d\u2019architecture, de construction, de test et de d\u00e9ploiement de votre infrastructure d\u2019automatisation.',
    'terms.p5b': 'Abonnements mensuels : Les frais mensuels r\u00e9currents commencent \u00e0 la date de mise en production et sont factur\u00e9s le premier de chaque mois. Les frais mensuels couvrent l\u2019exploitation continue des automatisations, la surveillance, le support et l\u2019optimisation.',
    'terms.p5c': 'Modules compl\u00e9mentaires : Des modules suppl\u00e9mentaires (IA vocale, IA chat, rapports avanc\u00e9s, etc.) peuvent \u00eatre ajout\u00e9s \u00e0 votre abonnement \u00e0 tout moment et seront factur\u00e9s aux tarifs sp\u00e9cifi\u00e9s dans votre contrat de service.',
    'terms.p5d': 'Retards de paiement : Les paiements non re\u00e7us dans les 15 jours suivant la date d\u2019\u00e9ch\u00e9ance peuvent entra\u00eener une suspension temporaire des services. Nous fournirons un pr\u00e9avis \u00e9crit d\u2019au moins 7 jours avant toute suspension.',
    'terms.p5e': 'Taxes : Tous les frais sont hors taxes applicables. Vous \u00eates responsable de toutes les taxes associ\u00e9es \u00e0 votre utilisation des services.',
    'terms.h6': '6. Propri\u00e9t\u00e9 intellectuelle',
    'terms.p6a': 'Propri\u00e9t\u00e9 de NovaMind : Tout le contenu de notre site web, y compris les textes, graphiques, logos, logiciels et documentation, est la propri\u00e9t\u00e9 de NovaMind ou de ses conc\u00e9dants de licence et est prot\u00e9g\u00e9 par les lois sur la propri\u00e9t\u00e9 intellectuelle. Vous ne pouvez pas copier, modifier, distribuer ou cr\u00e9er des \u0153uvres d\u00e9riv\u00e9es sans notre consentement \u00e9crit pr\u00e9alable.',
    'terms.p6b': 'Infrastructure d\u2019automatisation : Les flux de travail d\u2019automatisation, la logique d\u2019int\u00e9gration et l\u2019architecture syst\u00e8me que nous construisons pour vous sont licenci\u00e9s pour votre utilisation dans le cadre de votre abonnement actif. La technologie, les cadres et les guides sous-jacents restent la propri\u00e9t\u00e9 intellectuelle de NovaMind.',
    'terms.p6c': 'Vos donn\u00e9es : Vous conservez la pleine propri\u00e9t\u00e9 de toutes les donn\u00e9es commerciales trait\u00e9es via notre infrastructure d\u2019automatisation. Nous ne revendiquons aucun droit de propri\u00e9t\u00e9 sur vos donn\u00e9es clients, donn\u00e9es op\u00e9rationnelles ou dossiers commerciaux.',
    'terms.h7': '7. Utilisation acceptable',
    'terms.p7a': 'Vous acceptez de ne pas utiliser nos services pour :',
    'terms.p7b': 'Violer les lois, r\u00e8glements ou droits de tiers applicables. Envoyer du spam, des communications non sollicit\u00e9es ou des messages trompeurs via nos syst\u00e8mes automatis\u00e9s. Interf\u00e9rer avec l\u2019int\u00e9grit\u00e9 ou les performances de nos services. Tenter d\u2019obtenir un acc\u00e8s non autoris\u00e9 \u00e0 nos syst\u00e8mes ou aux donn\u00e9es d\u2019autres clients. Utiliser nos services \u00e0 des fins ill\u00e9gales, frauduleuses ou nuisibles. R\u00e9tro-ing\u00e9nierie, d\u00e9compilation ou tentative d\u2019extraction du code source de notre technologie.',
    'terms.p7c': 'La violation de ces conditions peut entra\u00eener la suspension ou la r\u00e9siliation imm\u00e9diate des services.',
    'terms.h8': '8. Niveaux de service et disponibilit\u00e9',
    'terms.p8a': 'Nous nous effor\u00e7ons de maintenir une haute disponibilit\u00e9 pour tous les services d\u2019automatisation. Les engagements sp\u00e9cifiques de temps de fonctionnement et les d\u00e9lais de r\u00e9ponse du support sont d\u00e9taill\u00e9s dans votre contrat de service individuel.',
    'terms.p8b': 'Nous pouvons suspendre temporairement les services pour maintenance planifi\u00e9e, mises \u00e0 jour de s\u00e9curit\u00e9 ou circonstances ind\u00e9pendantes de notre volont\u00e9. Nous fournirons un pr\u00e9avis de maintenance planifi\u00e9e dans la mesure du possible.',
    'terms.h9': '9. Confidentialit\u00e9',
    'terms.p9a': 'Les deux parties s\u2019engagent \u00e0 maintenir la confidentialit\u00e9 des informations propri\u00e9taires partag\u00e9es durant l\u2019engagement. Cela comprend les processus d\u2019affaires, les donn\u00e9es clients, les tarifs, les plans d\u2019automatisation et toute autre information marqu\u00e9e comme confidentielle ou raisonnablement comprise comme telle.',
    'terms.p9b': 'Cette obligation survit \u00e0 la r\u00e9siliation du contrat de service pour une p\u00e9riode de 2 ans, sauf pour les secrets commerciaux qui resteront confidentiels ind\u00e9finiment.',
    'terms.h10': '10. Limitation de responsabilit\u00e9',
    'terms.p10a': 'Dans la mesure maximale permise par la loi, NovaMind ne sera pas responsable des dommages indirects, accessoires, sp\u00e9ciaux, cons\u00e9cutifs ou punitifs, y compris, mais sans s\u2019y limiter, la perte de profits, de donn\u00e9es, d\u2019occasions d\u2019affaires ou de client\u00e8le, d\u00e9coulant de votre utilisation de nos services.',
    'terms.p10b': 'Notre responsabilit\u00e9 totale cumul\u00e9e pour toute r\u00e9clamation d\u00e9coulant de ces conditions ou de votre utilisation des services ne d\u00e9passera pas le total des frais que vous avez pay\u00e9s \u00e0 NovaMind au cours des 12 mois pr\u00e9c\u00e9dant la r\u00e9clamation.',
    'terms.p10c': 'Cette limitation s\u2019applique ind\u00e9pendamment de la th\u00e9orie de responsabilit\u00e9 (contrat, d\u00e9lit, responsabilit\u00e9 stricte ou autre) et m\u00eame si NovaMind a \u00e9t\u00e9 avis\u00e9 de la possibilit\u00e9 de tels dommages.',
    'terms.h11': '11. Exclusion de garanties',
    'terms.p11a': 'Nos services sont fournis \u00ab tels quels \u00bb et \u00ab selon disponibilit\u00e9 \u00bb sans garantie d\u2019aucune sorte, expresse ou implicite, y compris, mais sans s\u2019y limiter, les garanties implicites de qualit\u00e9 marchande, d\u2019ad\u00e9quation \u00e0 un usage particulier et de non-contrefa\u00e7on.',
    'terms.p11b': 'Bien que nous nous efforcions de livrer un ROI mesurable et des am\u00e9liorations op\u00e9rationnelles, nous ne garantissons pas de r\u00e9sultats commerciaux sp\u00e9cifiques, d\u2019augmentation de revenus ou d\u2019\u00e9conomies de co\u00fbts. Les r\u00e9sultats varient selon votre industrie, vos op\u00e9rations existantes et la port\u00e9e de la mise en \u0153uvre.',
    'terms.h12': '12. R\u00e9siliation',
    'terms.p12a': 'Par vous : Vous pouvez r\u00e9silier votre abonnement en fournissant un pr\u00e9avis \u00e9crit de 30 jours. Les frais d\u2019installation ne sont pas remboursables. Les frais mensuels sont calcul\u00e9s au prorata jusqu\u2019\u00e0 la date de r\u00e9siliation.',
    'terms.p12b': 'Par NovaMind : Nous pouvons r\u00e9silier ou suspendre vos services imm\u00e9diatement si vous violez ces conditions, ne parvenez pas \u00e0 effectuer les paiements apr\u00e8s notification, ou utilisez les services d\u2019une mani\u00e8re qui pourrait nuire \u00e0 d\u2019autres clients ou \u00e0 notre infrastructure.',
    'terms.p12c': 'Effet de la r\u00e9siliation : \u00c0 la r\u00e9siliation, nous vous fournirons une copie de vos donn\u00e9es op\u00e9rationnelles dans un format standard dans les 30 jours suivant votre demande. L\u2019acc\u00e8s aux automatisations et int\u00e9grations sera d\u00e9sactiv\u00e9. Vos donn\u00e9es seront conserv\u00e9es 90 jours apr\u00e8s la r\u00e9siliation pour permettre la r\u00e9activation, apr\u00e8s quoi elles seront d\u00e9finitivement supprim\u00e9es.',
    'terms.h13': '13. Indemnisation',
    'terms.p13': 'Vous acceptez d\u2019indemniser, d\u00e9fendre et d\u00e9gager de toute responsabilit\u00e9 NovaMind, ses dirigeants, administrateurs, employ\u00e9s et agents contre toute r\u00e9clamation, responsabilit\u00e9, dommage, perte ou d\u00e9pense (y compris les frais juridiques raisonnables) d\u00e9coulant de votre violation de ces conditions, de votre mauvaise utilisation des services ou de votre violation des droits de tiers.',
    'terms.h14': '14. Droit applicable',
    'terms.p14': 'Ces conditions sont r\u00e9gies et interpr\u00e9t\u00e9es conform\u00e9ment aux lois de la province de Qu\u00e9bec et aux lois f\u00e9d\u00e9rales du Canada qui y sont applicables, sans \u00e9gard aux principes de conflit de lois. Tout litige d\u00e9coulant de ces conditions sera soumis \u00e0 la comp\u00e9tence exclusive des tribunaux situ\u00e9s \u00e0 Montr\u00e9al, Qu\u00e9bec.',
    'terms.h15': '15. Modifications de ces conditions',
    'terms.p15a': 'Nous nous r\u00e9servons le droit de modifier ces conditions \u00e0 tout moment. Lorsque nous apportons des modifications, nous mettrons \u00e0 jour la \u00ab date d\u2019entr\u00e9e en vigueur \u00bb en haut de cette page. Pour les modifications importantes, nous fournirons un pr\u00e9avis d\u2019au moins 30 jours par courriel ou par un avis visible sur notre site web.',
    'terms.p15b': 'Votre utilisation continue de nos services apr\u00e8s la date d\u2019entr\u00e9e en vigueur des conditions r\u00e9vis\u00e9es constitue votre acceptation de ces modifications.',
    'terms.h16': '16. Nous contacter',
    'terms.p16': 'Si vous avez des questions concernant ces conditions d\u2019utilisation, veuillez nous contacter :'
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
  else if (path.indexOf('services') !== -1) page = 'services';
  else if (path.indexOf('products') !== -1) page = 'products';
  else if (path.indexOf('how-it-works') !== -1) page = 'hiw';
  else if (path.indexOf('privacy') !== -1) page = 'privacy';
  else if (path.indexOf('terms') !== -1) page = 'terms';

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
      var autoBlock = section.querySelector('.ind-automations');
      if (autoBlock) {
        var autoH3 = autoBlock.querySelector('h3');
        if (autoH3) autoH3.textContent = t['automationExamples'];
        var autoItems = autoBlock.querySelectorAll('.ind-auto-item');
        autoItems.forEach(function(item, i) {
          var num = i + 1;
          var strong = item.querySelector('strong');
          var p = item.querySelector('p');
          if (strong && t[id + '.auto' + num]) strong.textContent = t[id + '.auto' + num];
          if (p && t[id + '.auto' + num + 'd']) p.textContent = t[id + '.auto' + num + 'd'];
        });
      }
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

    // Social proof stats
    var spLabels = document.querySelectorAll('.sp-label');
    if (spLabels.length) {
      var spKeys = ['index.sp.1', 'index.sp.2', 'index.sp.3', 'index.sp.4'];
      spLabels.forEach(function(el, i) {
        if (t[spKeys[i]]) el.textContent = t[spKeys[i]];
      });
    }

    // Marquee
    if (t['index.marquee']) {
      var marqueeSpans = document.querySelectorAll('.marquee-content span:not(.marquee-dot)');
      var mWords = t['index.marquee'];
      marqueeSpans.forEach(function(span, i) {
        var wi = i % mWords.length;
        span.textContent = mWords[wi];
      });
    }

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
      // Tier names
      var prTiers = priceSection.querySelectorAll('.pricing-tier');
      if (prTiers[0]) prTiers[0].textContent = t['index.price.tier1'];
      if (prTiers[1]) prTiers[1].textContent = t['index.price.tier2'];
      if (prTiers[2]) prTiers[2].textContent = t['index.price.tier3'];
      // Badge
      var prBadge = priceSection.querySelector('.pricing-badge');
      if (prBadge) prBadge.textContent = t['index.price.badge'];
      // Setup labels
      var prSetups = priceSection.querySelectorAll('.pricing-amount span');
      prSetups.forEach(function(sp) { if (t['index.price.setup']) sp.textContent = t['index.price.setup']; });
      // Descriptions
      var prDescs = priceSection.querySelectorAll('.pricing-desc');
      if (prDescs[0]) prDescs[0].textContent = t['index.price.freeDesc'];
      if (prDescs[1]) prDescs[1].textContent = t['index.price.maxDesc'];
      if (prDescs[2]) prDescs[2].textContent = t['index.price.startDesc'];
      // Card buttons
      var prBtns = priceSection.querySelectorAll('.pricing-cards .btn span');
      if (prBtns[0]) prBtns[0].textContent = t['index.price.btn1'];
      if (prBtns[1]) prBtns[1].textContent = t['index.price.btn2'];
      if (prBtns[2]) prBtns[2].textContent = t['index.price.btn3'];
      // View all link
      var viewPricing = priceSection.querySelector('.text-center > a.btn span');
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
    // Section headers (setup, monthly, addon, faq)
    var sections = document.querySelectorAll('.section');
    // Setup section (first .section)
    if (sections[0]) {
      var sl = sections[0].querySelector('.section-label');
      if (sl) sl.textContent = t['pricing.setup.label'];
      var st = sections[0].querySelector('.section-title');
      if (st) st.innerHTML = t['pricing.setup.title'];
      var ss = sections[0].querySelector('.section-subtitle');
      if (ss) ss.textContent = t['pricing.setup.sub'];
    }
    // Monthly section (second .section)
    if (sections[1]) {
      var sl = sections[1].querySelector('.section-label');
      if (sl) sl.textContent = t['pricing.monthly.label'];
      var st = sections[1].querySelector('.section-title');
      if (st) st.innerHTML = t['pricing.monthly.title'];
      var ss = sections[1].querySelector('.section-subtitle');
      if (ss) ss.textContent = t['pricing.monthly.sub'];
    }
    // Add-on section (third .section)
    if (sections[2]) {
      var sl = sections[2].querySelector('.section-label');
      if (sl) sl.textContent = t['pricing.addon.label'];
      var st = sections[2].querySelector('.section-title');
      if (st) st.innerHTML = t['pricing.addon.title'];
      var ss = sections[2].querySelector('.section-subtitle');
      if (ss) ss.textContent = t['pricing.addon.sub'];
    }

    // Plan names and price labels
    var planNames = document.querySelectorAll('.plan-name');
    var nameKeys = ['pricing.plan.entry','pricing.plan.standard','pricing.plan.enterprise','pricing.plan.base','pricing.plan.growth','pricing.plan.scale'];
    planNames.forEach(function(el, i) { if (nameKeys[i] && t[nameKeys[i]]) el.textContent = t[nameKeys[i]]; });
    var priceSubs = document.querySelectorAll('.plan-price sub');
    priceSubs.forEach(function(sub) {
      var txt = sub.textContent.trim();
      if (txt === 'one-time' || txt === 'unique') sub.textContent = ' ' + t['pricing.plan.onetime'];
      if (txt === '/month' || txt === '/mois') sub.textContent = t['pricing.plan.month'];
    });

    // Plan cards. all 6 cards across both grids
    var planCards = document.querySelectorAll('.pricing-full-card');
    // Setup: Entry (0), Standard (1), Enterprise (2)
    var setupMap = [
      { tag: 'pricing.entry.tag', feats: ['pricing.entry.f1','pricing.entry.f2','pricing.entry.f3','pricing.entry.f4'], btn: 'pricing.entry.btn' },
      { tag: 'pricing.standard.tag', feats: ['pricing.standard.f1','pricing.standard.f2','pricing.standard.f3','pricing.standard.f4','pricing.standard.f5'], btn: 'pricing.standard.btn', badge: 'pricing.standard.badge' },
      { tag: 'pricing.enterprise.tag', feats: ['pricing.enterprise.f1','pricing.enterprise.f2','pricing.enterprise.f3','pricing.enterprise.f4','pricing.enterprise.f5','pricing.enterprise.f6'], btn: 'pricing.enterprise.btn' },
      { tag: 'pricing.base.tag', feats: ['pricing.base.f1','pricing.base.f2','pricing.base.f3','pricing.base.f4'], btn: 'pricing.base.btn' },
      { tag: 'pricing.growth.tag', feats: ['pricing.growth.f1','pricing.growth.f2','pricing.growth.f3','pricing.growth.f4','pricing.growth.f5'], btn: 'pricing.growth.btn', badge: 'pricing.growth.badge' },
      { tag: 'pricing.scale.tag', feats: ['pricing.scale.f1','pricing.scale.f2','pricing.scale.f3','pricing.scale.f4','pricing.scale.f5','pricing.scale.f6'], btn: 'pricing.scale.btn' }
    ];
    planCards.forEach(function(card, ci) {
      var m = setupMap[ci];
      if (!m) return;
      var ptag = card.querySelector('.plan-tagline');
      if (ptag) ptag.textContent = t[m.tag];
      if (m.badge) {
        var badge = card.querySelector('.pricing-badge');
        if (badge) badge.textContent = t[m.badge];
      }
      var feats = card.querySelectorAll('.plan-features li');
      m.feats.forEach(function(k, i) {
        if (feats[i]) { var ic = feats[i].querySelector('.check-icon'); feats[i].textContent = t[k]; if (ic) feats[i].prepend(ic); }
      });
      var btn = card.querySelector('.plan-cta span');
      if (btn) btn.textContent = t[m.btn];
    });

    // Add-on module cards
    var addonCards = document.querySelectorAll('.industry-card[style*="padding:28px"]');
    var addonMap = [
      ['pricing.addon.voice', 'pricing.addon.voiceDesc'],
      ['pricing.addon.chat', 'pricing.addon.chatDesc'],
      ['pricing.addon.crm', 'pricing.addon.crmDesc'],
      ['pricing.addon.report', 'pricing.addon.reportDesc'],
      ['pricing.addon.churn', 'pricing.addon.churnDesc'],
      ['pricing.addon.review', 'pricing.addon.reviewDesc']
    ];
    addonCards.forEach(function(card, i) {
      if (!addonMap[i]) return;
      var divs = card.querySelectorAll('div[style*="font-weight:600"], div[style*="font-size:0.85rem"]');
      if (divs[0] && t[addonMap[i][0]]) divs[0].textContent = t[addonMap[i][0]];
      if (divs[1] && t[addonMap[i][1]]) divs[1].textContent = t[addonMap[i][1]];
    });

    // FAQ
    var faqSection = document.querySelectorAll('.glass-card[style*="padding:28px"]');
    faqSection.forEach(function(card, i) {
      var qKey = 'pricing.faq.q' + (i + 1);
      var aKey = 'pricing.faq.a' + (i + 1);
      if (t[qKey]) { var h3 = card.querySelector('h3'); if (h3) h3.textContent = t[qKey]; }
      if (t[aKey]) { var p = card.querySelector('p'); if (p) p.textContent = t[aKey]; }
    });

    // FAQ section header
    if (sections[3]) {
      var sl = sections[3].querySelector('.section-label');
      if (sl) sl.textContent = t['pricing.faq.label'];
      var st = sections[3].querySelector('.section-title');
      if (st) st.innerHTML = t['pricing.faq.title'];
    }

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

  // --- SERVICES PAGE ---
  if (page === 'services') {
    var ph = document.querySelector('.page-hero');
    if (ph) {
      var phl = ph.querySelector('.section-label');
      if (phl) phl.textContent = t['services.hero.label'];
      var pht = ph.querySelector('h1');
      if (pht) pht.innerHTML = t['services.hero.title'];
      var php = ph.querySelector('p');
      if (php) php.textContent = t['services.hero.sub'];
    }
    // Sections: Layer 1 (0), Layer 2 (1), Add-Ons (2), Core Principle (3)
    var sections = document.querySelectorAll('.section:not(.section-cta)');
    // Layer 1
    if (sections[0]) {
      var sl = sections[0].querySelector('.section-label');
      if (sl) sl.textContent = t['services.l1.label'];
      var st = sections[0].querySelector('.section-title');
      if (st) st.innerHTML = t['services.l1.title'];
      var ss = sections[0].querySelector('.section-subtitle');
      if (ss) ss.textContent = t['services.l1.sub'];
    }
    // Layer 2
    if (sections[1]) {
      var sl = sections[1].querySelector('.section-label');
      if (sl) sl.textContent = t['services.l2.label'];
      var st = sections[1].querySelector('.section-title');
      if (st) st.innerHTML = t['services.l2.title'];
      var ss = sections[1].querySelector('.section-subtitle');
      if (ss) ss.textContent = t['services.l2.sub'];
    }
    // Add-Ons
    if (sections[2]) {
      var sl = sections[2].querySelector('.section-label');
      if (sl) sl.textContent = t['services.addon.label'];
      var st = sections[2].querySelector('.section-title');
      if (st) st.innerHTML = t['services.addon.title'];
      var ss = sections[2].querySelector('.section-subtitle');
      if (ss) ss.textContent = t['services.addon.sub'];
      // Add-on cards
      var aoCards = sections[2].querySelectorAll('.industry-card');
      var aoMap = ['ao1','ao2','ao3','ao4','ao5','ao6'];
      aoCards.forEach(function(card, i) {
        var key = aoMap[i];
        if (!key) return;
        var divs = card.querySelectorAll('div');
        // Title is the div with font-weight:600
        for (var d = 0; d < divs.length; d++) {
          if (divs[d].style.fontWeight === '600' && t['services.' + key]) {
            divs[d].textContent = t['services.' + key];
          }
          if (divs[d].style.opacity === '0.6' && t['services.' + key + 'd']) {
            divs[d].textContent = t['services.' + key + 'd'];
          }
        }
      });
    }
    // Core Principle
    if (sections[3]) {
      var sl = sections[3].querySelector('.section-label');
      if (sl) sl.textContent = t['services.principle.label'];
      var st = sections[3].querySelector('.section-title');
      if (st) st.innerHTML = t['services.principle.title'];
      var ps = sections[3].querySelectorAll('.why-layout > div:first-child > p');
      if (ps[0]) ps[0].textContent = t['services.principle.p1'];
      if (ps[1]) ps[1].textContent = t['services.principle.p2'];
      if (ps[2]) ps[2].textContent = t['services.principle.p3'];
    }
    // Featured tag
    var featTag = document.querySelector('.featured-tag');
    if (featTag && t['services.featured']) featTag.textContent = t['services.featured'];
    // Service cards (7 total across both grids)
    var svcCards = document.querySelectorAll('.service-card');
    var svcMap = ['s1','s2','s3','s4','s5','s6','s7'];
    svcCards.forEach(function(card, i) {
      var key = svcMap[i];
      if (!key) return;
      var h3 = card.querySelector('h3');
      if (h3 && t['services.' + key]) h3.textContent = t['services.' + key];
      var p = card.querySelector('p');
      if (p && t['services.' + key + 'd']) p.textContent = t['services.' + key + 'd'];
      card.querySelectorAll('.service-features li').forEach(function(li, fi) {
        var fk = 'services.' + key + 'f' + (fi + 1);
        if (t[fk]) li.innerHTML = '<span class="check-dot"></span>' + t[fk];
      });
    });
    // CTA
    var ctaSec = document.querySelector('.section-cta');
    if (ctaSec) {
      var cl = ctaSec.querySelector('.section-label');
      if (cl) cl.textContent = t['services.cta.label'];
      var ct = ctaSec.querySelector('.cta-title');
      if (ct) ct.innerHTML = t['services.cta.title'];
      var cd = ctaSec.querySelector('.cta-desc');
      if (cd) cd.textContent = t['services.cta.desc'];
      var cBtns = ctaSec.querySelectorAll('.btn span');
      if (cBtns[0]) cBtns[0].textContent = t['services.cta.btn1'];
      if (cBtns[1]) cBtns[1].textContent = t['services.cta.btn2'];
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
    // Steps (6 steps)
    var steps = document.querySelectorAll('.step-content');
    var sKeys = [['hiw.s1','hiw.s1d'],['hiw.s2','hiw.s2d'],['hiw.s3','hiw.s3d'],['hiw.s4','hiw.s4d'],['hiw.s5','hiw.s5d'],['hiw.s6','hiw.s6d']];
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
      var wKeys = [['hiw.feat.f1','hiw.feat.f1d'],['hiw.feat.f2','hiw.feat.f2d'],['hiw.feat.f3','hiw.feat.f3d'],['hiw.feat.f4','hiw.feat.f4d']];
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
      var tKeys = [['hiw.test.q1','hiw.test.r1'],['hiw.test.q2','hiw.test.r2'],['hiw.test.q3','hiw.test.r3']];
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

  // --- PRIVACY PAGE ---
  if (page === 'privacy') {
    var ph = document.querySelector('.page-hero');
    if (ph) {
      var phl = ph.querySelector('.section-label');
      if (phl) phl.textContent = t['priv.label'];
      var pht = ph.querySelector('h1');
      if (pht) pht.innerHTML = t['priv.title'];
      var phe = ph.querySelector('.privacy-effective');
      if (phe) phe.textContent = t['priv.effective'];
    }
    var items = document.querySelectorAll('.legal-item');
    var privSections = [
      {h: 'priv.h1', ps: ['priv.p1', 'priv.p1b']},
      {h: 'priv.h2', ps: ['priv.p2', 'priv.p2a', 'priv.p2b', 'priv.p2c', 'priv.p2d', 'priv.p2e', 'priv.p2f']},
      {h: 'priv.h3', ps: ['priv.p3a', 'priv.p3b', 'priv.p3c', 'priv.p3d']},
      {h: 'priv.h4', ps: ['priv.p4', 'priv.p4a', 'priv.p4b', 'priv.p4c', 'priv.p4d', 'priv.p4e', 'priv.p4f']},
      {h: 'priv.h5', ps: ['priv.p5', 'priv.p5a', 'priv.p5b', 'priv.p5c', 'priv.p5d']},
      {h: 'priv.h6', ps: ['priv.p6', 'priv.p6a', 'priv.p6b', 'priv.p6c', 'priv.p6d']},
      {h: 'priv.h7', ps: ['priv.p7a', 'priv.p7b', 'priv.p7c']},
      {h: 'priv.h8', ps: ['priv.p8', 'priv.p8a', 'priv.p8b', 'priv.p8c', 'priv.p8d']},
      {h: 'priv.h9', ps: ['priv.p9', 'priv.p9a', 'priv.p9b', 'priv.p9c', 'priv.p9d', 'priv.p9e', 'priv.p9f', 'priv.p9g']},
      {h: 'priv.h10', ps: ['priv.p10']},
      {h: 'priv.h11', ps: ['priv.p11']},
      {h: 'priv.h12', ps: ['priv.p12']},
      {h: 'priv.h13', ps: ['priv.p13a', 'priv.p13b']},
      {h: 'priv.h14', ps: ['priv.p14']}
    ];
    privSections.forEach(function(sec, i) {
      var item = items[i];
      if (!item) return;
      var h3 = item.querySelector('.privacy-heading');
      if (h3 && t[sec.h]) h3.textContent = t[sec.h];
      var body = item.querySelector('.legal-body');
      if (!body) return;
      var ps = body.querySelectorAll('p');
      sec.ps.forEach(function(key, pi) {
        if (ps[pi] && t[key]) ps[pi].textContent = t[key];
      });
    });
  }

  // --- TERMS PAGE ---
  if (page === 'terms') {
    var ph = document.querySelector('.page-hero');
    if (ph) {
      var phl = ph.querySelector('.section-label');
      if (phl) phl.textContent = t['terms.label'];
      var pht = ph.querySelector('h1');
      if (pht) pht.innerHTML = t['terms.title'];
      var phe = ph.querySelector('.privacy-effective');
      if (phe) phe.textContent = t['terms.effective'];
    }
    var items = document.querySelectorAll('.legal-item');
    var termsSections = [
      {h: 'terms.h1', ps: ['terms.p1']},
      {h: 'terms.h2', ps: ['terms.p2', 'terms.p2a', 'terms.p2b', 'terms.p2c', 'terms.p2d', 'terms.p2e']},
      {h: 'terms.h3', ps: ['terms.p3a', 'terms.p3b', 'terms.p3c']},
      {h: 'terms.h4', ps: ['terms.p4a', 'terms.p4b']},
      {h: 'terms.h5', ps: ['terms.p5a', 'terms.p5b', 'terms.p5c', 'terms.p5d', 'terms.p5e']},
      {h: 'terms.h6', ps: ['terms.p6a', 'terms.p6b', 'terms.p6c']},
      {h: 'terms.h7', ps: ['terms.p7a', 'terms.p7b', 'terms.p7c']},
      {h: 'terms.h8', ps: ['terms.p8a', 'terms.p8b']},
      {h: 'terms.h9', ps: ['terms.p9a', 'terms.p9b']},
      {h: 'terms.h10', ps: ['terms.p10a', 'terms.p10b', 'terms.p10c']},
      {h: 'terms.h11', ps: ['terms.p11a', 'terms.p11b']},
      {h: 'terms.h12', ps: ['terms.p12a', 'terms.p12b', 'terms.p12c']},
      {h: 'terms.h13', ps: ['terms.p13']},
      {h: 'terms.h14', ps: ['terms.p14']},
      {h: 'terms.h15', ps: ['terms.p15a', 'terms.p15b']},
      {h: 'terms.h16', ps: ['terms.p16']}
    ];
    termsSections.forEach(function(sec, i) {
      var item = items[i];
      if (!item) return;
      var h3 = item.querySelector('.privacy-heading');
      if (h3 && t[sec.h]) h3.textContent = t[sec.h];
      var body = item.querySelector('.legal-body');
      if (!body) return;
      var ps = body.querySelectorAll('p');
      sec.ps.forEach(function(key, pi) {
        if (ps[pi] && t[key]) ps[pi].textContent = t[key];
      });
    });
  }

  // --- FOOTER (all pages) ---
  var footerDesc = document.querySelector('.footer-brand p');
  if (footerDesc) footerDesc.textContent = (page === 'industries') ? t['footer.desc'] : t['footer.desc2'];
  var footerCols = document.querySelectorAll('.footer-col h4');
  if (footerCols[0]) footerCols[0].textContent = t['footer.platform'];
  if (footerCols[1]) footerCols[1].textContent = (page === 'industries') ? t['footer.industries'] : (t['footer.services'] || t['footer.products']);
  if (footerCols[2]) footerCols[2].textContent = t['footer.contact'];
  var bottomLinks = document.querySelectorAll('.footer-bottom-links a');
  if (bottomLinks[0]) bottomLinks[0].textContent = t['footer.privacy'];
  if (bottomLinks[1]) bottomLinks[1].textContent = t['footer.terms'];
  // Platform column links
  var footerColsList = document.querySelectorAll('.footer-col');
  if (footerColsList[0]) {
    var plLinks = footerColsList[0].querySelectorAll('.footer-links a');
    if (plLinks[0]) plLinks[0].textContent = t['footer.pl.services'];
    if (plLinks[1]) plLinks[1].textContent = t['footer.pl.pricing'];
    if (plLinks[2]) plLinks[2].textContent = t['footer.pl.how'];
  }
  // Services column links
  if (footerColsList[1]) {
    var svLinks = footerColsList[1].querySelectorAll('.footer-links a');
    if (svLinks[0]) svLinks[0].textContent = t['footer.sv.ai'];
    if (svLinks[1]) svLinks[1].textContent = t['footer.sv.workflow'];
    if (svLinks[2]) svLinks[2].textContent = t['footer.sv.owner'];
    if (svLinks[3]) svLinks[3].textContent = t['footer.sv.integrations'];
  }
  // Footer copyright
  var footerBottom = document.querySelector('.footer-bottom > span');
  if (footerBottom && t['footer.copyright']) footerBottom.textContent = t['footer.copyright'];

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
