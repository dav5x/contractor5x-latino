/*
 * DESIGN: Industrial Brutalism — Trades data
 * Each trade has: hero content, pain points, tailored solutions, stats, testimonial, and FAQs
 */

export interface TradePainPoint {
  title: string;
  desc: string;
}

export interface TradeSolution {
  tool: string;
  headline: string;
  desc: string;
  stat: string;
  statLabel: string;
}

export interface TradeFAQ {
  q: string;
  a: string;
}

export interface TradeData {
  id: string;
  name: string;
  tagline: string;
  headline: string;
  subheadline: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  icon: string;
  accentStat: string;
  accentStatLabel: string;
  painPoints: TradePainPoint[];
  solutions: TradeSolution[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
    result: string;
  };
  faqs: TradeFAQ[];
}

// Unsplash images — trade specific
const IMGS = {
  hvac: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1400&q=80",
  plumbing: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1400&q=80",
  electrical: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1400&q=80",
  roofing: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80",
  generalContractor: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80",
  painting: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1400&q=80",
  landscaping: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1400&q=80",
  pestControl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
  treeService: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1400&q=80",
  poolService: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1400&q=80",
  applianceRepair: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
  windows: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80",
};

export const tradesData: TradeData[] = [
  {
    id: "hvac",
    name: "HVAC",
    tagline: "Heating, Cooling & Ventilation",
    headline: "AI Marketing Built for HVAC Contractors",
    subheadline: "Fill your schedule with high-value installs and service calls — without chasing leads.",
    description: "HVAC is one of the most competitive trades in local markets. Homeowners search Google when their system breaks — and they call the first company they find. We make sure that's you.",
    heroImage: IMGS.hvac,
    heroImageAlt: "HVAC technician working on an air conditioning unit",
    icon: "🌡️",
    accentStat: "+287%",
    accentStatLabel: "Average lead increase for HVAC clients",
    painPoints: [
      { title: "Seasonal Demand Spikes", desc: "When the heat hits, every HVAC company gets slammed. The ones who win are already ranked on Google before the season starts — not scrambling to catch up." },
      { title: "Emergency Calls Going to Competitors", desc: "Homeowners with a broken AC at 10pm call the first company that answers. If your phone goes to voicemail, they move on." },
      { title: "Low-Value Calls Eating Your Time", desc: "You're fielding calls for $50 filter changes when you should be booking $8,000 system replacements. AI filters and qualifies leads so you focus on the big jobs." },
      { title: "No System for Reviews", desc: "Your competitor has 200 Google reviews and you have 12 — even though your work is better. Reviews are the #1 ranking factor for HVAC searches." },
    ],
    solutions: [
      { tool: "Lead Closer", headline: "Never Miss an Emergency Call", desc: "When a homeowner's AC dies at midnight, Lead Closer answers instantly, collects their info, and schedules your tech — even while you sleep.", stat: "78%", statLabel: "of HVAC leads go to first responder" },
      { tool: "Google Optimizer", headline: "Dominate HVAC Searches Near You", desc: "We optimize your Google Business Profile with HVAC-specific keywords, seasonal content, and a review generation system that builds your visibility month over month.", stat: "6 weeks", statLabel: "average time to see ranking improvement" },
      { tool: "Job Promoter", headline: "Show Off Every Install", desc: "Before/after photos of system replacements, video walkthroughs of new installs — Job Promoter turns your completed jobs into a 24/7 sales tool.", stat: "3.2X", statLabel: "more quote requests from social proof" },
      { tool: "Re-Activator", headline: "Book Maintenance Agreements", desc: "Re-Activator automatically reaches out to past customers with seasonal tune-up offers, turning one-time service calls into recurring annual revenue.", stat: "$12K", statLabel: "average revenue from re-activated HVAC customers" },
    ],
    testimonial: {
      quote: "Before Contractor5x, I was losing emergency calls every night because I couldn't answer after 6pm. Now the AI handles all after-hours inquiries and I'm booking 40% more jobs. My Google reviews went from 18 to 94 in four months.",
      name: "Mike R.",
      role: "HVAC Contractor",
      result: "+40% jobs booked, 94 Google reviews",
    },
    faqs: [
      { q: "Does this work for both residential and commercial HVAC?", a: "Yes. We customize your lead qualification and messaging for both residential service calls and commercial maintenance contracts. Many of our HVAC clients run both divisions from the same system." },
      { q: "How does the AI handle after-hours emergency calls?", a: "The AI Agent answers every call 24/7, collects the customer's information and issue details, and either books them for emergency service or schedules a next-day appointment — all without you lifting a finger." },
      { q: "Can you help with seasonal marketing (spring AC tune-ups, fall furnace checks)?", a: "Absolutely. We build seasonal campaigns into your Re-Activator and Job Promoter workflows so your past customers get timely offers automatically every spring and fall." },
    ],
  },
  {
    id: "plumbing",
    name: "Plumbing",
    tagline: "Residential & Commercial Plumbing",
    headline: "AI Marketing Built for Plumbers",
    subheadline: "Stop missing emergency calls. Start dominating local search. Fill your schedule year-round.",
    description: "Plumbing is an emergency-driven business. When a pipe bursts or a water heater fails, homeowners need help NOW — and they call whoever shows up first on Google. We make sure that's you.",
    heroImage: IMGS.plumbing,
    heroImageAlt: "Plumber working under a sink on pipes",
    icon: "🔧",
    accentStat: "+312%",
    accentStatLabel: "Average lead increase for plumbing clients",
    painPoints: [
      { title: "Missing Emergency Calls", desc: "A burst pipe at 2am is a $2,000 job. If you miss that call, your competitor gets it. Our AI answers every call, every time — day or night." },
      { title: "Invisible on Google", desc: "When someone searches 'plumber near me,' the top 3 results get 80% of the calls. If you're not there, you don't exist to that customer." },
      { title: "No Repeat Business System", desc: "You've fixed hundreds of water heaters and cleared hundreds of drains. But those customers don't think of you when their next problem hits — because you never stayed in touch." },
      { title: "Competing on Price", desc: "When customers can't tell the difference between plumbers, they pick the cheapest one. We help you build a reputation that makes price irrelevant." },
    ],
    solutions: [
      { tool: "AI Agent", headline: "Answer Every Emergency Call", desc: "The AI Agent handles calls 24/7 — collecting job details, dispatching your on-call tech, and booking non-emergency appointments automatically.", stat: "2X", statLabel: "close rate with instant response" },
      { tool: "Google Optimizer", headline: "Get Found for 'Plumber Near Me'", desc: "We build your Google Business Profile into a lead machine — optimized keywords, consistent reviews, and local SEO that significantly improves your visibility in local search.", stat: "6 weeks", statLabel: "average time to see ranking improvement" },
      { tool: "Lead Closer", headline: "Convert More Quotes to Jobs", desc: "Lead Closer follows up on every estimate automatically — sending reminders, answering questions, and nudging prospects until they book.", stat: "67%", statLabel: "higher quote-to-job conversion" },
      { tool: "Re-Activator", headline: "Turn Past Customers into Repeat Revenue", desc: "Automatically reach out to past customers with water heater maintenance reminders, seasonal drain cleaning offers, and referral requests.", stat: "$9K", statLabel: "average monthly revenue from re-activation" },
    ],
    testimonial: {
      quote: "My Google ranking improved dramatically within weeks. I'm now showing up for searches I never ranked for before. The AI Agent alone has paid for the entire service — it catches every emergency call I used to miss.",
      name: "Dave M.",
      role: "Plumbing Contractor",
      result: "Improved Google visibility, 2X close rate",
    },
    faqs: [
      { q: "Does this work for drain cleaning, water heaters, and full remodels?", a: "Yes. We customize your lead intake forms and AI responses for every service type — from $150 drain clears to $15,000 bathroom remodels. Each lead gets routed and followed up appropriately." },
      { q: "How does the AI handle emergency dispatch?", a: "When someone calls with an emergency, the AI collects their address, describes the issue, and either connects them to your on-call tech or sends an automated dispatch notification to your team." },
      { q: "Can you help me get more 5-star Google reviews?", a: "Yes — our Google Optimizer includes an automated review request system that texts customers after every completed job, making it effortless for happy customers to leave a review." },
    ],
  },
  {
    id: "electrical",
    name: "Electrical",
    tagline: "Residential & Commercial Electrical",
    headline: "AI Marketing Built for Electricians",
    subheadline: "More panel upgrades, more EV charger installs, more high-value jobs — on autopilot.",
    description: "Electrical work ranges from $200 outlet repairs to $15,000 panel upgrades. The contractors who win the big jobs are the ones who show up first, follow up consistently, and have the reviews to back it up.",
    heroImage: IMGS.electrical,
    heroImageAlt: "Electrician working on an electrical panel",
    icon: "⚡",
    accentStat: "+265%",
    accentStatLabel: "Average lead increase for electrical clients",
    painPoints: [
      { title: "Missing High-Value Leads", desc: "Panel upgrades, EV charger installs, and whole-home rewires are $5,000–$20,000 jobs. One missed call can cost you a month's worth of small jobs." },
      { title: "Competing with Large Companies", desc: "Big electrical companies have marketing teams and ad budgets. We level the playing field with AI that works as hard as their entire marketing department." },
      { title: "Slow Estimate Follow-Up", desc: "You give a quote, get busy on a job, and forget to follow up. The customer hires someone else. Automated follow-up fixes this permanently." },
      { title: "No Showcase for Your Work", desc: "Electrical work is invisible once the walls close up. Job Promoter captures your work before the drywall goes up — building trust with future customers." },
    ],
    solutions: [
      { tool: "Lead Closer", headline: "Capture Every High-Value Lead", desc: "Lead Closer qualifies every inquiry — filtering small jobs from big ones — and automatically follows up on every estimate until the customer books.", stat: "3X", statLabel: "more panel upgrade bookings" },
      { tool: "Job Promoter", headline: "Document Your Work Before It's Hidden", desc: "We create before/after content of every panel upgrade, EV install, and rewire — turning your invisible work into visible social proof.", stat: "2.8X", statLabel: "more quote requests from content" },
      { tool: "Google Optimizer", headline: "Get Found for High-Intent Searches", desc: "EV charger installation, panel upgrade, electrician near me — we optimize your listing for the searches that bring in the highest-value jobs.", stat: "6 weeks", statLabel: "average time to see ranking improvement" },
      { tool: "AI Agent", headline: "Answer Every Call, Day or Night", desc: "Whether it's a tripped breaker at midnight or a commercial quote request on Saturday, the AI Agent handles it professionally and books the job.", stat: "24/7", statLabel: "coverage, zero missed calls" },
    ],
    testimonial: {
      quote: "I used to lose panel upgrade leads because I was always on a job when they called. Now the AI handles every inquiry and I'm booking 3x more high-value jobs. My revenue is up 55% this year.",
      name: "James T.",
      role: "Electrical Contractor",
      result: "+55% revenue, 3X panel upgrade bookings",
    },
    faqs: [
      { q: "Does this work for both residential and commercial electrical?", a: "Yes. We set up separate lead pipelines for residential and commercial work, with different qualification questions, pricing expectations, and follow-up sequences for each." },
      { q: "Can you help me market EV charger installations specifically?", a: "Absolutely. EV charger installs are one of the fastest-growing segments in residential electrical. We build targeted Google content and social posts specifically around this service." },
      { q: "How do you help me compete with larger electrical companies?", a: "We give you the same marketing infrastructure that large companies have — automated follow-up, review generation, professional content — but tailored to your local market and brand." },
    ],
  },
  {
    id: "roofing",
    name: "Roofing",
    tagline: "Roof Repair, Replacement & Installation",
    headline: "AI Marketing Built for Roofers",
    subheadline: "Storm season or slow season — keep your crew busy with a full pipeline year-round.",
    description: "Roofing is a high-ticket, high-competition trade. A single roof replacement is worth $8,000–$25,000. The roofers who win consistently are the ones with the best online presence, the most reviews, and the fastest follow-up.",
    heroImage: IMGS.roofing,
    heroImageAlt: "Roofer installing shingles on a residential roof",
    icon: "🏠",
    accentStat: "+340%",
    accentStatLabel: "Average lead increase for roofing clients",
    painPoints: [
      { title: "Storm Chasing Competition", desc: "After every storm, out-of-town contractors flood your market. The local roofers who already have strong Google rankings and reviews win the jobs — the others get nothing." },
      { title: "Long Sales Cycles", desc: "Homeowners get 3–5 roofing quotes before deciding. The contractor who follows up best — not the cheapest — usually wins. Most roofers follow up once and give up." },
      { title: "Seasonal Slowdowns", desc: "Winter kills revenue for roofers in most markets. Re-Activator keeps your pipeline warm by reaching out to past customers and referral sources during slow months." },
      { title: "Insurance Claim Complexity", desc: "Insurance jobs require different messaging and follow-up than cash jobs. We customize your lead pipeline to handle both types correctly." },
    ],
    solutions: [
      { tool: "Lead Closer", headline: "Win the Follow-Up Battle", desc: "Lead Closer sends automated follow-up sequences over 7–14 days after every estimate — keeping you top of mind while competitors go silent.", stat: "5X", statLabel: "more estimates converted to jobs" },
      { tool: "Job Promoter", headline: "Before & After Content That Sells", desc: "Nothing sells a roof replacement like a dramatic before/after. Job Promoter turns every completed job into compelling content that generates referrals and new leads.", stat: "4.1X", statLabel: "more referrals from visual content" },
      { tool: "Google Optimizer", headline: "Get Found for Local Roofing Searches", desc: "We build your Google presence to significantly improve your visibility for local roofing searches — especially high-intent ones like 'roof replacement near me' and 'storm damage repair.'", stat: "6 weeks", statLabel: "average time to see ranking improvement" },
      { tool: "Re-Activator", headline: "Fill Slow Seasons", desc: "Re-Activator reaches out to past customers with gutter cleaning offers, annual inspection reminders, and referral requests — keeping revenue flowing year-round.", stat: "$22K", statLabel: "average revenue from re-activation campaigns" },
    ],
    testimonial: {
      quote: "Last storm season I was overwhelmed with leads for the first time in 10 years. The AI handled all the initial inquiries, booked estimates, and followed up automatically. I closed 40% more jobs than the year before without hiring anyone new.",
      name: "Rick S.",
      role: "Roofing Contractor",
      result: "+40% jobs closed, $22K from re-activation",
    },
    faqs: [
      { q: "Does this work for both insurance claims and cash jobs?", a: "Yes. We build separate lead pipelines for insurance and cash customers — with different messaging, qualification questions, and follow-up sequences for each type of job." },
      { q: "How do you help during storm season when leads spike?", a: "During storm season, Lead Closer handles the volume surge automatically — responding to every inquiry instantly, qualifying leads, and booking estimates without you being overwhelmed." },
      { q: "Can you help me get more referrals from past customers?", a: "Absolutely. Re-Activator includes an automated referral request sequence that reaches out to past customers and makes it easy for them to refer friends and family." },
    ],
  },
  {
    id: "general-contracting",
    name: "General Contracting",
    tagline: "Remodeling, Renovation & Construction",
    headline: "AI Marketing Built for General Contractors",
    subheadline: "Land more remodels, additions, and commercial projects — without spending all day on sales.",
    description: "General contracting involves long sales cycles, complex projects, and high-value contracts. The GCs who grow consistently are the ones who manage their reputation, follow up relentlessly, and showcase their portfolio effectively.",
    heroImage: IMGS.generalContractor,
    heroImageAlt: "General contractor reviewing blueprints on a construction site",
    icon: "🏗️",
    accentStat: "+198%",
    accentStatLabel: "Average lead increase for GC clients",
    painPoints: [
      { title: "Long Sales Cycles with No Follow-Up", desc: "A kitchen remodel takes weeks to close. Most GCs give one quote and wait. The ones who follow up consistently — without being pushy — win the job." },
      { title: "Showcasing Complex Projects", desc: "A $150,000 addition is hard to sell from a text description. Job Promoter creates compelling visual content that shows the transformation and builds trust before the first meeting." },
      { title: "Managing Multiple Project Types", desc: "From bathroom remodels to commercial buildouts, each project type needs different messaging. We customize your lead pipeline for every service you offer." },
      { title: "Referrals Left on the Table", desc: "Your best customers know 10 people who need work done. Re-Activator systematically asks for referrals at the right moment — turning happy customers into your best salespeople." },
    ],
    solutions: [
      { tool: "Lead Closer", headline: "Nurture Long Sales Cycles", desc: "Lead Closer runs multi-week follow-up sequences after every estimate — sending helpful content, answering questions, and keeping you top of mind until the customer is ready to commit.", stat: "3.5X", statLabel: "more estimates converted to signed contracts" },
      { tool: "Job Promoter", headline: "Portfolio That Sells Itself", desc: "We document every project with professional before/during/after content — creating a visual portfolio that builds trust and generates referrals automatically.", stat: "5X", statLabel: "more referrals from project documentation" },
      { tool: "Smart Website", headline: "A Website That Wins Projects", desc: "Your website is your digital showroom. We build a contractor website that showcases your portfolio, captures leads, and converts visitors into consultations.", stat: "4.2X", statLabel: "more consultation requests" },
      { tool: "Re-Activator", headline: "Maximize Referrals", desc: "Re-Activator reaches out to past clients at the perfect moment — after project completion and again at 6 months — to ask for referrals and reviews.", stat: "67%", statLabel: "of GC business comes from referrals" },
    ],
    testimonial: {
      quote: "The Job Promoter transformed how I present my work. My Instagram went from empty to 3,500 followers in 4 months, and I'm getting consultation requests from people who found me on social media. My average project size has gone up because clients see the quality of my work before we even meet.",
      name: "Carlos R.",
      role: "General Contractor",
      result: "3,500 Instagram followers, higher average project value",
    },
    faqs: [
      { q: "Does this work for both residential remodeling and commercial construction?", a: "Yes. We set up separate lead pipelines and messaging for residential and commercial projects, with appropriate qualification questions and follow-up sequences for each." },
      { q: "How do you handle the long sales cycle for large projects?", a: "Lead Closer runs multi-week nurture sequences that provide value — project planning tips, material guides, financing information — while keeping you top of mind until the customer is ready to sign." },
      { q: "Can you help me build a portfolio that attracts higher-value projects?", a: "Absolutely. Job Promoter systematically documents every project with professional content that showcases your craftsmanship and attracts clients who value quality over price." },
    ],
  },
  {
    id: "painting",
    name: "Painting",
    tagline: "Interior & Exterior Painting",
    headline: "AI Marketing Built for Painting Contractors",
    subheadline: "Book more interior and exterior jobs — and stop competing on price.",
    description: "Painting is one of the most visual trades — and the most price-competitive. The painters who win premium jobs are the ones with the best before/after content, the most reviews, and a system that follows up on every quote.",
    heroImage: IMGS.painting,
    heroImageAlt: "Painter applying paint to an interior wall",
    icon: "🎨",
    accentStat: "+223%",
    accentStatLabel: "Average lead increase for painting clients",
    painPoints: [
      { title: "Always Competing on Price", desc: "When customers can't see the difference between painters, they pick the cheapest one. Visual content and reviews make your quality obvious — so price becomes secondary." },
      { title: "Seasonal Slowdowns", desc: "Exterior painting dies in winter. Re-Activator keeps revenue flowing by promoting interior painting, touch-ups, and cabinet refinishing during slow months." },
      { title: "Quotes That Go Cold", desc: "You give a quote, the customer says they'll think about it, and you never hear back. Automated follow-up keeps the conversation going until they're ready to book." },
      { title: "No Referral System", desc: "Happy painting customers are your best source of new business — but only if you ask at the right time. Re-Activator automates the ask." },
    ],
    solutions: [
      { tool: "Job Promoter", headline: "Before & After Content That Wins Jobs", desc: "Nothing sells painting like a stunning transformation photo. Job Promoter turns every completed job into scroll-stopping content that generates referrals and new leads.", stat: "4.5X", statLabel: "more quote requests from visual content" },
      { tool: "Lead Closer", headline: "Follow Up Until They Book", desc: "Lead Closer sends a 10-day follow-up sequence after every quote — answering questions, sharing examples of similar work, and gently nudging the customer to commit.", stat: "3X", statLabel: "more quotes converted to jobs" },
      { tool: "Google Optimizer", headline: "Get Found for Local Painting Searches", desc: "We optimize your Google Business Profile with painting-specific keywords and a review generation system that builds your local visibility month over month.", stat: "6 weeks", statLabel: "average time to see ranking improvement" },
      { tool: "Re-Activator", headline: "Keep Revenue Flowing Year-Round", desc: "Re-Activator reaches out to past customers with interior painting offers in winter, touch-up specials in spring, and referral requests after every completed job.", stat: "$8K", statLabel: "average monthly revenue from re-activation" },
    ],
    testimonial: {
      quote: "I used to compete on price and barely make a profit. Since using Contractor5x, my before/after content has completely changed how customers see my work. I'm charging 30% more and booking more jobs than ever. The follow-up system alone has paid for itself 10 times over.",
      name: "Luis M.",
      role: "Painting Contractor",
      result: "+30% pricing, 3X more quotes converted",
    },
    faqs: [
      { q: "Does this work for both interior and exterior painting?", a: "Yes. We customize your lead intake and content strategy for both interior and exterior jobs, with seasonal campaigns that promote the right service at the right time of year." },
      { q: "How do you help me stop competing on price?", a: "By building a strong portfolio of before/after content and a library of 5-star reviews, we make your quality obvious before the customer even calls — so they're choosing you for your work, not your price." },
      { q: "Can you help me get more cabinet refinishing and specialty jobs?", a: "Absolutely. We create targeted content and Google optimization for high-value specialty services like cabinet refinishing, epoxy floors, and decorative painting." },
    ],
  },
  {
    id: "landscaping",
    name: "Landscaping",
    tagline: "Lawn Care, Landscaping & Hardscaping",
    headline: "AI Marketing Built for Landscapers",
    subheadline: "Fill your schedule with recurring lawn care and high-value landscaping projects.",
    description: "Landscaping is a relationship business. Recurring lawn care clients are worth thousands per year, and a single hardscaping project can be worth $20,000+. We help you win both — and keep them coming back.",
    heroImage: IMGS.landscaping,
    heroImageAlt: "Landscaper working on a beautiful garden",
    icon: "🌿",
    accentStat: "+245%",
    accentStatLabel: "Average lead increase for landscaping clients",
    painPoints: [
      { title: "Seasonal Revenue Gaps", desc: "Lawn care dies in winter. Snow removal helps some, but most landscapers struggle with cash flow in the off-season. Re-Activator keeps revenue flowing year-round." },
      { title: "High Customer Churn", desc: "Lawn care customers switch providers constantly — usually because of poor communication, not poor service. Staying in touch automatically reduces churn dramatically." },
      { title: "Underpriced Hardscaping", desc: "Hardscaping and landscape design are high-value services that most landscapers undersell. Better content and a stronger online presence attracts clients who value quality." },
      { title: "No Showcase for Transformations", desc: "A landscape transformation is one of the most dramatic before/afters in any trade. Job Promoter turns every project into a lead-generating showcase." },
    ],
    solutions: [
      { tool: "Re-Activator", headline: "Reduce Churn, Increase Recurring Revenue", desc: "Re-Activator automatically checks in with lawn care customers, sends seasonal service reminders, and makes it easy for them to add services or refer friends.", stat: "85%", statLabel: "customer retention rate with re-activation" },
      { tool: "Job Promoter", headline: "Landscape Transformations That Go Viral", desc: "Before/after landscape transformations are some of the most shareable content on social media. Job Promoter captures every project and distributes it automatically.", stat: "6X", statLabel: "more referrals from project content" },
      { tool: "Lead Closer", headline: "Convert Hardscaping Inquiries to Signed Contracts", desc: "Lead Closer qualifies hardscaping leads, follows up on every estimate, and nurtures prospects through the longer decision cycle for big-ticket projects.", stat: "4X", statLabel: "more hardscaping projects booked" },
      { tool: "Google Optimizer", headline: "Get Found for Every Landscaping Search", desc: "From 'lawn care near me' to 'patio installation contractor,' we optimize your Google presence for every service you offer.", stat: "6 weeks", statLabel: "average time to see ranking improvement" },
    ],
    testimonial: {
      quote: "My recurring lawn care revenue used to drop 60% in winter. Now Re-Activator keeps my customers engaged year-round with seasonal offers and I've added $4,000/month in off-season revenue. The hardscaping leads from Job Promoter have been incredible — I'm booked 3 months out.",
      name: "Tony G.",
      role: "Landscaping Contractor",
      result: "+$4K/month off-season, booked 3 months out",
    },
    faqs: [
      { q: "Does this work for both lawn maintenance and hardscaping?", a: "Yes. We build separate lead pipelines for recurring maintenance and one-time hardscaping projects, with different messaging and follow-up sequences for each." },
      { q: "How do you help with seasonal slowdowns?", a: "Re-Activator runs seasonal campaigns that promote snow removal in fall, spring cleanup in late winter, and landscape design consultations in the off-season — keeping revenue flowing year-round." },
      { q: "Can you help me attract higher-value hardscaping clients?", a: "Absolutely. Job Promoter creates compelling before/after content for every hardscaping project, and we optimize your Google presence for high-value searches like 'patio installation' and 'outdoor kitchen contractor.'" },
    ],
  },
  {
    id: "pest-control",
    name: "Pest Control",
    tagline: "Residential & Commercial Pest Management",
    headline: "AI Marketing Built for Pest Control Companies",
    subheadline: "Build recurring revenue with more service agreements and less chasing one-time customers.",
    description: "Pest control is a recurring revenue business — but only if you have a system to convert one-time customers into annual agreements. We help you do that automatically, while also filling your pipeline with new leads.",
    heroImage: IMGS.pestControl,
    heroImageAlt: "Pest control technician treating a home",
    icon: "🐛",
    accentStat: "+189%",
    accentStatLabel: "Average lead increase for pest control clients",
    painPoints: [
      { title: "One-Time Customers Who Never Return", desc: "You treat a home for ants, do a great job, and never hear from them again — until they have roaches and call someone else. Re-Activator fixes this automatically." },
      { title: "Seasonal Spikes and Dead Periods", desc: "Termite season, mosquito season, rodent season — your business spikes and crashes. A year-round marketing system smooths out the revenue curve." },
      { title: "Low Service Agreement Conversion", desc: "Most pest control customers don't realize they need quarterly service until they have a major infestation. Automated education campaigns change this." },
      { title: "Competing with National Chains", desc: "Orkin and Terminix have massive marketing budgets. We help local pest control companies compete with better local SEO, more reviews, and faster response times." },
    ],
    solutions: [
      { tool: "Re-Activator", headline: "Convert One-Time to Recurring", desc: "Re-Activator reaches out to every past customer with educational content about prevention and timely offers for quarterly service agreements — automatically.", stat: "$18K", statLabel: "average revenue from re-activation campaigns" },
      { tool: "AI Agent", headline: "Handle Infestation Emergencies Instantly", desc: "When someone discovers a wasp nest or rodent problem, they want help NOW. The AI Agent responds instantly, qualifies the job, and books the appointment.", stat: "24/7", statLabel: "coverage for emergency pest calls" },
      { tool: "Google Optimizer", headline: "Outrank the National Chains Locally", desc: "National chains can't compete with a local company that has 200 five-star reviews and an optimized Google listing. We build that advantage for you.", stat: "6 weeks", statLabel: "average time to see ranking improvement" },
      { tool: "Lead Closer", headline: "Nurture Leads Into Service Agreements", desc: "Lead Closer follows up on every inquiry with educational content about pest prevention, building trust and converting one-time inquiries into long-term service agreements.", stat: "3X", statLabel: "more service agreements signed" },
    ],
    testimonial: {
      quote: "The Customer Re-Activator alone paid for the entire service. We re-engaged 200+ past customers in the first month and booked $18,000 in jobs we would have never gotten otherwise. My recurring service agreement revenue has doubled in six months.",
      name: "Jennifer K.",
      role: "Pest Control Owner",
      result: "$18K from re-activation, 2X recurring revenue",
    },
    faqs: [
      { q: "Does this work for both residential and commercial pest control?", a: "Yes. We build separate lead pipelines for residential and commercial accounts, with different pricing, qualification questions, and follow-up sequences for each." },
      { q: "How do you help convert one-time customers to service agreements?", a: "Re-Activator sends a series of educational messages after every one-time service — explaining the benefits of quarterly prevention, sharing seasonal pest alerts, and making it easy to sign up for a recurring plan." },
      { q: "Can you help me compete with Orkin and Terminix?", a: "Absolutely. Local companies consistently outrank national chains when they have strong Google reviews and an optimized local listing. We build that advantage systematically." },
    ],
  },
  {
    id: "tree-service",
    name: "Tree Service",
    tagline: "Tree Removal, Trimming & Stump Grinding",
    headline: "AI Marketing Built for Tree Service Companies",
    subheadline: "More removal jobs, more trimming contracts, more storm work — year-round.",
    description: "Tree service is high-ticket, high-risk, and highly competitive. A single tree removal can be worth $2,000–$8,000. The companies that win consistently are the ones with the best reviews, the fastest response, and the most compelling visual content.",
    heroImage: IMGS.treeService,
    heroImageAlt: "Arborist trimming a large tree",
    icon: "🌳",
    accentStat: "+278%",
    accentStatLabel: "Average lead increase for tree service clients",
    painPoints: [
      { title: "Storm Work Goes to Whoever Answers First", desc: "After a storm, homeowners call every tree company they can find. The first one to answer and book an estimate wins the job. Our AI answers every call instantly." },
      { title: "Dangerous Work Needs Strong Trust Signals", desc: "Homeowners are nervous about hiring a tree company — one wrong cut and their house is damaged. Reviews, insurance proof, and professional content build the trust that wins jobs." },
      { title: "Seasonal Revenue Swings", desc: "Spring and fall are busy; summer and winter can be slow. Re-Activator keeps revenue flowing with seasonal trimming reminders and referral campaigns." },
      { title: "Competing on Price for Removals", desc: "Tree removal quotes vary wildly. Customers who can see your quality through content and reviews are less likely to go with the cheapest option." },
    ],
    solutions: [
      { tool: "AI Agent", headline: "Win Every Storm Emergency", desc: "The AI Agent answers every call during and after storms — booking emergency assessments, collecting job details, and dispatching your crew without you being glued to your phone.", stat: "3X", statLabel: "more storm jobs captured" },
      { tool: "Job Promoter", headline: "Dramatic Content That Builds Trust", desc: "Tree removals and dramatic trims are some of the most compelling before/after content in any trade. Job Promoter captures every job and turns it into trust-building social proof.", stat: "5X", statLabel: "more referrals from visual content" },
      { tool: "Google Optimizer", headline: "Get Found for Emergency Tree Searches", desc: "'Tree removal near me,' 'emergency tree service,' 'fallen tree removal' — we optimize your Google presence for the searches that bring in the highest-value jobs.", stat: "6 weeks", statLabel: "average time to see ranking improvement" },
      { tool: "Re-Activator", headline: "Annual Trimming Reminders That Fill Slow Seasons", desc: "Re-Activator automatically reaches out to past customers with annual trimming reminders, storm preparation tips, and referral requests — keeping your schedule full year-round.", stat: "$11K", statLabel: "average revenue from re-activation" },
    ],
    testimonial: {
      quote: "Last storm season was completely different. The AI handled all the emergency calls while I was out with my crew. I captured 3x more storm jobs than the year before and my Google reviews went from 22 to 89 in five months. Best investment I've made in my business.",
      name: "Brian W.",
      role: "Tree Service Owner",
      result: "3X storm jobs, 89 Google reviews",
    },
    faqs: [
      { q: "Does this work for tree removal, trimming, and stump grinding?", a: "Yes. We customize your lead intake and content for every service you offer — with different pricing expectations and follow-up sequences for removal, trimming, and stump work." },
      { q: "How do you handle the surge in calls after a storm?", a: "The AI Agent handles unlimited concurrent calls during storm surges — collecting job details, booking assessments, and prioritizing emergency situations without any manual effort from you." },
      { q: "How do you help build trust for high-risk work?", a: "We build your Google review profile, create professional before/after content, and ensure your website clearly communicates your insurance, certifications, and experience — making customers confident in choosing you." },
    ],
  },
  {
    id: "pool-service",
    name: "Pool Service",
    tagline: "Pool Cleaning, Repair & Installation",
    headline: "AI Marketing Built for Pool Service Companies",
    subheadline: "Build a base of recurring weekly service clients and win more pool builds.",
    description: "Pool service is the ultimate recurring revenue business — weekly cleaning clients are worth $1,500–$3,000 per year each. We help you build that base while also winning high-value repair and installation jobs.",
    heroImage: IMGS.poolService,
    heroImageAlt: "Pool technician cleaning and maintaining a swimming pool",
    icon: "🏊",
    accentStat: "+234%",
    accentStatLabel: "Average lead increase for pool service clients",
    painPoints: [
      { title: "Losing Weekly Service Clients to Competitors", desc: "Pool service clients switch providers when they feel ignored or undervalued. Automated check-ins and seasonal communications dramatically reduce churn." },
      { title: "Seasonal Revenue Drops", desc: "In colder markets, pool service revenue drops 70% in winter. Re-Activator keeps revenue flowing with winterization reminders, equipment upgrade offers, and early spring opening campaigns." },
      { title: "Missing High-Value Repair Calls", desc: "A pool pump failure or leak is an emergency. If you don't answer, the customer calls your competitor — and often stays with them for weekly service too." },
      { title: "No System for Pool Build Referrals", desc: "Your weekly service clients are the best source of pool build referrals. Re-Activator systematically asks for referrals at the right moment." },
    ],
    solutions: [
      { tool: "Re-Activator", headline: "Keep Weekly Clients for Life", desc: "Re-Activator sends automated check-ins, seasonal service reminders, and equipment upgrade offers — keeping your weekly clients happy and reducing churn to near zero.", stat: "92%", statLabel: "client retention rate with re-activation" },
      { tool: "AI Agent", headline: "Never Miss an Emergency Repair Call", desc: "When a pool pump fails on a Friday afternoon, the AI Agent answers instantly, collects the details, and dispatches your tech — keeping the customer calm and the job yours.", stat: "24/7", statLabel: "emergency repair coverage" },
      { tool: "Job Promoter", headline: "Pool Transformations That Sell Themselves", desc: "A pool renovation or new build is one of the most stunning before/afters in any trade. Job Promoter captures every project and turns it into referral-generating content.", stat: "8X", statLabel: "more referrals from pool build content" },
      { tool: "Google Optimizer", headline: "Get Found for Pool Service in Your Area", desc: "We optimize your Google Business Profile for every pool service you offer — from weekly cleaning to full renovations — building your local visibility month over month.", stat: "6 weeks", statLabel: "average time to see ranking improvement" },
    ],
    testimonial: {
      quote: "I used to lose 20% of my weekly service clients every year to competitors. Since using Contractor5x, my churn rate has dropped to almost nothing. The automated check-ins make customers feel valued, and the Re-Activator has brought back 15 clients I thought I'd lost for good.",
      name: "Marco V.",
      role: "Pool Service Owner",
      result: "Near-zero churn, 15 clients re-activated",
    },
    faqs: [
      { q: "Does this work for weekly service, repairs, and pool builds?", a: "Yes. We build separate lead pipelines for each service type — with different messaging, pricing expectations, and follow-up sequences for maintenance, repair, and new construction." },
      { q: "How do you help reduce client churn for weekly service?", a: "Re-Activator sends automated monthly check-ins, seasonal service reminders, and proactive equipment maintenance alerts — making clients feel valued and reducing the temptation to switch providers." },
      { q: "Can you help me market pool renovations and new builds?", a: "Absolutely. Job Promoter creates stunning before/after content for every renovation and new build, and we optimize your Google presence for high-value searches like 'pool renovation contractor' and 'pool builder near me.'" },
    ],
  },
  {
    id: "appliance-repair",
    name: "Appliance Repair",
    tagline: "All Major Brands & Appliances",
    headline: "AI Marketing Built for Appliance Repair Companies",
    subheadline: "Answer every emergency call and build a loyal customer base that calls you first.",
    description: "Appliance repair is an emergency-driven, repeat-business trade. Customers who have a great experience call you back for every future repair — and refer their neighbors. We help you capture every emergency and build that loyal base.",
    heroImage: IMGS.applianceRepair,
    heroImageAlt: "Appliance repair technician fixing a washing machine",
    icon: "🔨",
    accentStat: "+156%",
    accentStatLabel: "Average lead increase for appliance repair clients",
    painPoints: [
      { title: "Losing Emergency Calls to Competitors", desc: "When a refrigerator breaks on a Sunday, the customer calls every repair company they can find. The first one to answer wins the job — and often the customer for life." },
      { title: "No Repeat Business System", desc: "Customers who had a great experience with you will call a random company next time — unless you stay in touch. Re-Activator keeps you top of mind." },
      { title: "Competing with Manufacturer Service Centers", desc: "LG, Samsung, and Whirlpool all have their own service networks. We help independent repair companies compete with better local SEO, faster response, and stronger reviews." },
      { title: "Low Average Job Value", desc: "Individual repair calls are low-value. The key is volume and repeat business — which requires a system for capturing every call and staying in touch with past customers." },
    ],
    solutions: [
      { tool: "AI Agent", headline: "Answer Every Emergency, Every Time", desc: "The AI Agent handles all calls 24/7 — collecting appliance details, scheduling same-day or next-day appointments, and keeping customers calm during stressful breakdowns.", stat: "24/7", statLabel: "emergency call coverage" },
      { tool: "Re-Activator", headline: "Turn One-Time Customers Into Loyal Clients", desc: "Re-Activator reaches out to past customers with maintenance tips, seasonal reminders, and service offers — keeping you top of mind for every future repair.", stat: "4X", statLabel: "more repeat customers" },
      { tool: "Google Optimizer", headline: "Get Found Above Manufacturer Service Centers", desc: "We optimize your Google Business Profile with appliance-specific keywords and a review generation system that builds your local visibility and helps you compete with manufacturer service centers.", stat: "6 weeks", statLabel: "average time to see ranking improvement" },
      { tool: "Lead Closer", headline: "Book More Jobs Per Day", desc: "Lead Closer handles all incoming inquiries simultaneously — qualifying jobs, providing estimates, and booking appointments without phone tag.", stat: "2.5X", statLabel: "more jobs booked per day" },
    ],
    testimonial: {
      quote: "I used to miss 30% of my calls because I was always on a job. Now the AI handles every call and I'm booking 2.5x more jobs per day. My Google reviews went from 14 to 78 in three months and I'm now the top result for appliance repair in my city.",
      name: "Steve H.",
      role: "Appliance Repair Owner",
      result: "2.5X more jobs, improved Google visibility",
    },
    faqs: [
      { q: "Does this work for all appliance types and brands?", a: "Yes. We customize your lead intake forms to collect appliance type, brand, and model information — ensuring your tech arrives prepared and customers get accurate estimates." },
      { q: "How do you help compete with manufacturer service centers?", a: "Local companies consistently outrank manufacturer service centers when they have strong Google reviews and an optimized local listing. We build that advantage systematically." },
      { q: "Can you help me build a loyal customer base for repeat business?", a: "Absolutely. Re-Activator sends automated follow-up messages after every repair — sharing maintenance tips, seasonal reminders, and making it easy for customers to book their next service with you." },
    ],
  },
  {
    id: "windows-doors",
    name: "Windows & Doors",
    tagline: "Installation, Replacement & Repair",
    headline: "AI Marketing Built for Window & Door Contractors",
    subheadline: "Win more replacement projects and build a pipeline of high-value renovation jobs.",
    description: "Window and door replacement is a high-ticket, considered purchase. Homeowners research extensively before deciding. The contractors who win are the ones who show up first in search, have the most reviews, and follow up consistently after every estimate.",
    heroImage: IMGS.windows,
    heroImageAlt: "Window installer fitting a new window in a home",
    icon: "🪟",
    accentStat: "+201%",
    accentStatLabel: "Average lead increase for window & door clients",
    painPoints: [
      { title: "Long Decision Cycles", desc: "Window replacement is a $5,000–$20,000 decision. Customers take weeks to decide. The contractor who follows up best — without being pushy — wins the job." },
      { title: "Multiple Quote Comparisons", desc: "Homeowners get 3–5 quotes for window projects. Your follow-up system needs to keep you top of mind while they're comparing — and make your value obvious." },
      { title: "Seasonal Demand Patterns", desc: "Spring and fall are peak seasons for window replacement. Re-Activator reaches out to past customers and referral sources before the season starts — filling your pipeline early." },
      { title: "Energy Efficiency Messaging", desc: "Energy savings are the #1 selling point for window replacement — but most contractors don't communicate this effectively. We build it into your content and follow-up." },
    ],
    solutions: [
      { tool: "Lead Closer", headline: "Win the Long Follow-Up Battle", desc: "Lead Closer runs 14-day follow-up sequences after every estimate — sharing energy savings data, financing options, and examples of similar projects until the customer commits.", stat: "4X", statLabel: "more estimates converted to signed contracts" },
      { tool: "Job Promoter", headline: "Before & After Content That Justifies the Investment", desc: "A window transformation is dramatic — especially when you show the energy efficiency data alongside the visual improvement. Job Promoter captures every install.", stat: "3.8X", statLabel: "more referrals from project content" },
      { tool: "Google Optimizer", headline: "Get Found for Window Replacement Searches", desc: "We optimize your Google presence for high-intent searches like 'window replacement near me,' 'energy efficient windows,' and 'door installation contractor.'", stat: "6 weeks", statLabel: "average time to see ranking improvement" },
      { tool: "Re-Activator", headline: "Seasonal Campaigns That Fill Your Pipeline", desc: "Re-Activator reaches out to past customers and referral sources before peak season — with energy savings reminders, financing offers, and referral requests.", stat: "$15K", statLabel: "average revenue from seasonal campaigns" },
    ],
    testimonial: {
      quote: "The follow-up system completely changed my business. I used to give quotes and wait. Now Lead Closer follows up automatically and I'm converting 4x more estimates to signed contracts. My revenue is up 65% this year.",
      name: "Paul N.",
      role: "Window & Door Contractor",
      result: "+65% revenue, 4X quote conversion",
    },
    faqs: [
      { q: "Does this work for both windows and doors?", a: "Yes. We customize your lead intake and content strategy for both windows and doors — with different messaging for replacement, repair, and new installation projects." },
      { q: "How do you handle the long decision cycle for window replacement?", a: "Lead Closer runs multi-week nurture sequences that provide value — energy savings calculators, financing information, examples of similar projects — while keeping you top of mind until the customer is ready to sign." },
      { q: "Can you help me market energy efficiency as a selling point?", a: "Absolutely. We build energy efficiency messaging into your Google content, social posts, and follow-up sequences — making the ROI of new windows obvious to every prospect." },
    ],
  },
];

export const tradesById = Object.fromEntries(tradesData.map((t) => [t.id, t]));
