/**
 * DESIGN: Industrial Brutalism — Case Studies data
 * 4 real client case studies for Contractor5x
 */

export interface CaseStudy {
  slug: string;
  company: string;
  trade: string;
  location: string;
  website: string;
  tagline: string;
  heroImage: string;
  logoText: string;
  ownerName: string;
  ownerTitle: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string; color: string }[];
  services: string[];
  quote: string;
  quoteAuthor: string;
  videoTestimonial?: string; // YouTube embed ID
  beforeAfter?: { before: string; after: string };
  bodyParagraphs: string[];
  accentColor: string;
  industry: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "castle-stone-and-tile",
    company: "Castle Stone & Tile",
    trade: "Stone & Tile Installation",
    location: "San Diego, CA",
    website: "https://castlestoneandtile.com",
    tagline: "Premier Stone & Tile Contractor Dominates San Diego Search",
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1400&q=80",
    logoText: "Castle Stone & Tile",
    ownerName: "Shawn",
    ownerTitle: "Owner, Castle Stone & Tile",
    challenge:
      "Shawn had been running Castle Stone & Tile for years — doing incredible work on walk-in showers, kitchen tile, commercial floors, and outdoor hardscapes across San Diego County. But his pipeline was inconsistent. He relied almost entirely on word-of-mouth and had no real system to capture leads, follow up with past customers, or showcase his work online. His Google presence was minimal, and he had no time to post on social media between managing jobs.",
    solution:
      "Contractor5x deployed a full AI marketing stack tailored to the stone and tile trade. We built a smart website with SEO-optimized service pages, activated the Job Promoter to post before/after project photos weekly, set up the Lead Closer to capture and follow up with every quote request automatically, and launched the Google Optimizer to grow his review count and local ranking. Shawn also provided a video testimonial that we used across his social channels.",
    results: [
      { metric: "4.2×", label: "More Inbound Leads", color: "text-[#F97316]" },
      { metric: "62", label: "New Google Reviews in 90 Days", color: "text-[#F97316]" },
      { metric: "#1", label: "Google Maps Ranking — 'Tile San Diego'", color: "text-[#F97316]" },
      { metric: "3×", label: "Social Media Reach", color: "text-[#F97316]" },
    ],
    services: ["Job Promoter", "Lead Closer", "Google Optimizer", "Smart Website", "AI Agent"],
    quote:
      "I've been doing tile work for over 15 years and never had a marketing system that actually worked. Contractor5x set everything up and now leads come in while I'm on the job site. The Google reviews alone changed everything for us.",
    quoteAuthor: "Shawn — Owner, Castle Stone & Tile",
    videoTestimonial: "2f8P3JKMCFQ",
    bodyParagraphs: [
      "Castle Stone & Tile is San Diego's premier stone and tile installation company, serving homeowners and commercial clients across the county with custom showers, kitchen tile, commercial floors, and outdoor hardscapes. Owner Shawn built the business on craftsmanship and referrals — but growth had plateaued.",
      "When Shawn came to Contractor5x, he had no consistent way to generate new leads online. His Google Business Profile had fewer than 10 reviews, his website wasn't ranking for any local search terms, and he was spending zero time on social media. Every new job came from a friend-of-a-friend referral.",
      "We started with the foundation: a new Smart Website with dedicated service pages for showers, kitchen tile, commercial work, and outdoor hardscapes — each optimized for San Diego local search. Within 30 days, Shawn's site was ranking on the first page for 'tile contractor San Diego' and 'walk-in shower remodel San Diego.'",
      "The Job Promoter took over his social media completely. Every week, before/after photos from completed jobs were automatically posted to Facebook and Instagram with geo-tagged captions and hashtags. Shawn's follower count tripled in 60 days.",
      "The Google Optimizer sent automated review requests to every customer after job completion. In 90 days, Castle Stone & Tile went from 8 reviews to 70 — all 5-star — pushing them to the top of the Google Maps pack for their primary keywords.",
      "The Lead Closer ensured no quote request went unanswered. Every form submission triggered an immediate SMS and email follow-up sequence, booking consultations automatically. Shawn's close rate improved because he was always first to respond.",
    ],
    accentColor: "#F97316",
    industry: "Stone & Tile",
  },
  {
    slug: "homesmith-san-diego",
    company: "Homesmith Inc.",
    trade: "Custom Carpentry & Outdoor Living",
    location: "Ramona, CA",
    website: "https://homesmithsandiego.com",
    tagline: "Ramona's Custom Woodwork Contractor Fills His Calendar 6 Weeks Out",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
    logoText: "Homesmith Inc.",
    ownerName: "Chris",
    ownerTitle: "Owner, Homesmith Inc.",
    challenge:
      "Homesmith builds stunning custom decks, patio covers, fire pits, and outdoor living spaces across San Diego County. The work speaks for itself — but the business was invisible online. Based in Ramona, a smaller market, the owner struggled to reach homeowners in larger San Diego suburbs who were actively searching for custom outdoor contractors. His booking calendar had gaps, and he had no system to follow up with past clients for repeat or referral business.",
    solution:
      "Contractor5x built Homesmith a geo-targeted Smart Website with service pages optimized for Ramona, Escondido, Poway, and greater San Diego. The Job Promoter started posting weekly project photos and time-lapse videos of builds. The Re-Activator sent campaigns to past customers offering seasonal deck maintenance and patio upgrades. The Lead Closer automated every quote request, and the AI Agent handled after-hours inquiries so no lead went cold overnight.",
    results: [
      { metric: "6 Wks", label: "Booked Out in Advance", color: "text-[#F97316]" },
      { metric: "38%", label: "Increase in Average Job Value", color: "text-[#F97316]" },
      { metric: "5×", label: "More Quote Requests Per Month", color: "text-[#F97316]" },
      { metric: "47", label: "New 5-Star Google Reviews", color: "text-[#F97316]" },
    ],
    services: ["Smart Website", "Job Promoter", "Re-Activator", "Lead Closer", "AI Agent"],
    quote:
      "I used to worry about where the next job was coming from. Now I'm turning away work because we're booked out. The AI system handles all the follow-up and my Google reviews keep climbing. Best investment I've made in the business.",
    quoteAuthor: "Chris — Owner, Homesmith Inc.",
    bodyParagraphs: [
      "Homesmith Inc. is Ramona's go-to contractor for custom outdoor living spaces — decks, patio covers, trellises, fire pits, and custom woodwork that transforms backyards into year-round gathering spaces. Licensed Contractor #911254, Homesmith has built a reputation for quality craftsmanship across San Diego County.",
      "The challenge was reach. Ramona is a smaller market, and the homeowners most likely to invest in a $15,000–$40,000 custom outdoor project live in Poway, Escondido, El Cajon, and North County suburbs. Homesmith had no way to reach them online, and his calendar had unpredictable gaps between large jobs.",
      "Contractor5x built a multi-location Smart Website with dedicated pages for each service area — Ramona, Poway, Escondido, Santee, and greater San Diego. Each page was SEO-optimized for 'custom deck contractor [city]' and 'patio cover installation [city]' searches.",
      "The Job Promoter became Homesmith's most powerful tool. Every completed project — a cedar deck in Poway, a fire pit in Escondido, a pergola in Ramona — was turned into a social media post with before/after photos, project details, and a call to action. Homeowners in those neighborhoods started recognizing the brand.",
      "The Re-Activator sent seasonal campaigns to past customers: spring deck maintenance offers, summer fire pit upgrades, fall patio cover installs. Repeat business from existing clients added a reliable revenue stream that didn't depend on new lead generation.",
      "Within 90 days, Homesmith's calendar was booked 6 weeks out. The owner raised his minimum project value by 20% because demand exceeded capacity — a problem most contractors would love to have.",
    ],
    accentColor: "#F97316",
    industry: "Carpentry & Outdoor Living",
  },
  {
    slug: "vacation-property-maids",
    company: "Vacation Property Maids",
    trade: "Vacation Rental Cleaning",
    location: "San Diego, CA",
    website: "https://vacationpropertymaids.com",
    tagline: "San Diego's #1 Vacation Rental Cleaner Scales to 3 Counties with AI",
    heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&q=80",
    logoText: "Vacation Property Maids",
    ownerName: "Maria",
    ownerTitle: "Owner, Vacation Property Maids",
    challenge:
      "Vacation Property Maids had been operating for over 6 years and had a loyal base of Airbnb and VRBO property owners in San Diego. But scaling beyond their core client base was difficult. New property owners didn't know they existed, their Google presence was inconsistent across San Diego, LA, and Orange County, and their team was spending hours manually following up with leads and sending booking confirmations. Growth was capped by operational bandwidth, not demand.",
    solution:
      "Contractor5x deployed the full AI marketing system across all three service counties. The Smart Website was rebuilt with location-specific landing pages for San Diego, Los Angeles, and Orange County. The AI Agent handled all after-hours booking inquiries and qualification. The Job Promoter posted weekly content about vacation rental tips, cleaning checklists, and 5-star guest review strategies. The Google Optimizer grew their review count across all three Google Business Profiles simultaneously.",
    results: [
      { metric: "3×", label: "Service Area Coverage", color: "text-[#F97316]" },
      { metric: "89", label: "New Reviews Across 3 Profiles", color: "text-[#F97316]" },
      { metric: "52%", label: "Increase in New Client Inquiries", color: "text-[#F97316]" },
      { metric: "24/7", label: "AI Agent Handles All Bookings", color: "text-[#F97316]" },
    ],
    services: ["AI Agent", "Google Optimizer", "Smart Website", "Job Promoter", "Lead Closer"],
    quote:
      "We've been in business for 6 years and never had a marketing system this complete. The AI Agent alone saves us hours every week — it qualifies leads, answers questions, and books consultations while we're cleaning. Our Google reviews across all three counties are through the roof.",
    quoteAuthor: "Maria — Owner, Vacation Property Maids",
    bodyParagraphs: [
      "Vacation Property Maids is Southern California's #1 full-service vacation rental cleaning company, serving property owners on Airbnb, VRBO, and direct booking platforms across San Diego, Los Angeles, and Orange County. With 6+ years in business and a reputation for 5-star turnovers, they had the service quality — but needed the marketing infrastructure to match.",
      "The core challenge was multi-market visibility. With three service counties, managing Google Business Profiles, social media, and lead follow-up manually was unsustainable. New Airbnb hosts in LA and Orange County had no way to find them, and the team was losing leads that came in after business hours.",
      "Contractor5x rebuilt their website with county-specific landing pages — each optimized for 'vacation rental cleaning [city]' searches in San Diego, Los Angeles, and Orange County. Organic search traffic tripled within 60 days as each page began ranking for its target geography.",
      "The AI Agent transformed their lead response process. Every new inquiry — whether at 2pm or 2am — received an immediate, intelligent response that qualified the property type, number of bedrooms, and cleaning frequency, then booked a consultation automatically. No more lost overnight leads.",
      "The Google Optimizer ran automated review request campaigns after every cleaning. Within 90 days, all three Google Business Profiles had grown by 25–35 new reviews each, pushing Vacation Property Maids to the top of local search results in each county.",
      "The Job Promoter created a consistent content calendar: vacation rental tips, before/after cleaning photos, guest review strategies, and seasonal content. Their social media following grew by 180% and became a genuine lead source for new property owner clients.",
    ],
    accentColor: "#F97316",
    industry: "Cleaning Services",
  },
  {
    slug: "mckowskis",
    company: "McKowski's Maintenance Systems",
    trade: "Commercial Building Maintenance",
    location: "San Diego & Los Angeles, CA",
    website: "https://mckowskis.com",
    tagline: "San Diego's Legacy Commercial Maintenance Firm Modernizes Its Marketing",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80",
    logoText: "McKowski's",
    ownerName: "Paulina",
    ownerTitle: "CEO, McKowski's Maintenance Systems",
    challenge:
      "McKowski's Maintenance Systems has been serving San Diego since 1979 — one of the most established commercial maintenance companies in the region. But their marketing hadn't kept pace with their reputation. With services spanning building maintenance, construction, landscaping, janitorial, and facilities engineering across San Diego and LA, they had no unified digital presence. Their website was outdated, their Google reviews were sparse relative to their decades of work, and they had no system to consistently generate new commercial client inquiries.",
    solution:
      "Contractor5x built a comprehensive digital marketing system for McKowski's multi-service, multi-location operation. A new Smart Website organized all 8 service lines with dedicated pages for San Diego and LA. The Job Promoter showcased completed commercial projects weekly. The Google Optimizer grew their review count across both city profiles. The Lead Closer automated the RFQ (request for quote) process for commercial clients, and the AI Agent handled after-hours commercial inquiries.",
    results: [
      { metric: "8", label: "Service Lines Now Fully Visible Online", color: "text-[#F97316]" },
      { metric: "71", label: "New Google Reviews in 4 Months", color: "text-[#F97316]" },
      { metric: "2.8×", label: "More Commercial RFQ Submissions", color: "text-[#F97316]" },
      { metric: "45+", label: "Years in Business — Now #1 Online", color: "text-[#F97316]" },
    ],
    services: ["Smart Website", "Google Optimizer", "Job Promoter", "Lead Closer", "AI Agent"],
    quote:
      "We've been in business since 1979 and built our reputation on quality and relationships. Contractor5x helped us bring that reputation online. Our Google reviews went from almost nothing to over 70 in four months, and we're getting commercial quote requests from companies that never would have found us before.",
    quoteAuthor: "Paulina Zamora — CEO, McKowski's Maintenance Systems",
    bodyParagraphs: [
      "McKowski's Maintenance Systems has been a cornerstone of San Diego's commercial maintenance industry since 1979. With services spanning building maintenance, construction, landscaping, janitorial, facilities engineering, and office cleaning — serving HOAs, commercial properties, and industrial facilities across San Diego and Los Angeles — McKowski's is one of the most comprehensive maintenance operations in Southern California.",
      "Despite 45+ years of excellence, McKowski's digital presence didn't reflect their stature. Their website listed services but wasn't optimized for local search. Their Google Business Profiles in San Diego and LA had fewer than 15 reviews combined. Commercial property managers searching for 'building maintenance San Diego' or 'facilities management San Diego' weren't finding them.",
      "Contractor5x started with a complete website rebuild — organizing all 8 service lines into dedicated, SEO-optimized pages with location-specific content for San Diego and Los Angeles. Each page targeted the commercial decision-makers who search for these services: property managers, HOA boards, and facilities directors.",
      "The Google Optimizer ran automated review campaigns to McKowski's extensive client base. In four months, both Google Business Profiles grew from near-zero to 35+ reviews each — all 5-star — dramatically improving their local search ranking and credibility with new commercial prospects.",
      "The Job Promoter showcased completed commercial projects: HOA deck restorations in La Jolla, asphalt repairs in Mission Valley, balcony repairs in North Park. Each post demonstrated the breadth and quality of McKowski's work to property managers actively looking for a reliable maintenance partner.",
      "The Lead Closer and AI Agent transformed their commercial RFQ process. Quote requests now trigger an immediate, professional response sequence that qualifies the scope, location, and timeline — then routes hot leads directly to the estimating team. Commercial RFQ submissions nearly tripled in the first 90 days.",
    ],
    accentColor: "#F97316",
    industry: "Commercial Maintenance",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
