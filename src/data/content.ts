import { SVG, ORIGIN, SITE_NAME } from '../lib/assets';

/* ---------------- Hero ---------------- */
export const typewriterWords = [
  'stunning',
  'intuitive',
  'scalable',
  'human',
  'bold',
];

export const heroToolIcons = [
  { src: `${SVG}/figma.svg`, alt: 'Figma', width: 12, height: 16 },
  { src: `${SVG}/sketch.svg`, alt: 'Sketch', width: 16, height: 16 },
  { src: `${SVG}/adobe-xd.svg`, alt: 'Adobe XD', width: 18, height: 16 },
  { src: `${SVG}/framer.svg`, alt: 'Framer', width: 12, height: 16 },
  { src: `${SVG}/framer2.svg`, alt: 'Webflow', width: 16, height: 10 },
  { src: `${SVG}/loveable.svg`, alt: 'Lovable', width: 14, height: 14 },
];

/* ---------------- Client logos ---------------- */
// Emptied out: the original list was real companies (Nissan Motor
// Corporation, Bank of Namibia, a government ministry, etc.) that are
// clients of the site this was cloned from, not of Metron Studio. Showing
// their logos under a "trusted by" banner here would falsely claim them as
// Metron's clients — same reasoning as the testimonials placeholder.
export const clientLogos: { src: string; alt: string; width: number; height: number }[] = [];

/* ---------------- Service rows ---------------- */
export interface ServiceRow {
  eyebrow: string;
  title: string;
  href: string;
}

export const serviceRows: ServiceRow[] = [
  {
    eyebrow: 'FOR DIGITAL EXPERIENCES',
    title: 'Saas UI UX Design',
    href: '#contact',
  },
  {
    eyebrow: 'For Startups & Existing Companies',
    title: 'Product Revamp',
    href: '#contact',
  },
  {
    eyebrow: 'FOR VISUAL STORYTELLERS',
    title: 'Brand Design',
    href: '#contact',
  },
  {
    eyebrow: 'FOR RAPID APP BUILDERS',
    title: 'No Code Development',
    href: '#contact',
  },
  {
    eyebrow: 'FOR STARTUPS & FOUNDERS',
    title: 'MVP Design',
    href: '#contact',
  },
  {
    eyebrow: 'Dedicated ux ui Team',
    title: 'Team Extension',
    href: '#contact',
  },
];

/* ---------------- Process ---------------- */
export interface ProcessStepData {
  index: string;
  title: string;
  tag: string;
  description: string;
  image: string;
}

export const processSteps: ProcessStepData[] = [
  {
    index: '01',
    title: 'Discovery',
    tag: 'Research & Domain Analysis',
    description:
      "Don't ignore the crucial step of Research & Development in the UX Design Process! Discover and solve user problems to launch a successful product. Gather data on the target audience and analyze customer feedback. Improve user experience",
    image: '/images/process/discovery.jpg',
  },
  {
    index: '02',
    title: 'Flows',
    tag: 'User Journey Map Sitemap',
    description:
      'Create successful user flows for your product in the UX design process by mapping user journeys and interactions. Define product ideas and goals, tailored to user needs, behavior, and expectations. Test with real users for optimization.',
    image: '/images/process/flows.jpg',
  },
  {
    index: '03',
    title: 'Wireframes',
    tag: 'Low - Fidelity Design',
    description:
      'Define the content and functionality of your product with wireframes in the UX Design process. Brainstorm multiple ideas, get feedback, and refine for high fidelity wireframes. Enhance the user interface for a natural and intuitive look.',
    image: '/images/process/wireframes.jpg',
  },
  {
    index: '04',
    title: 'Mockups',
    tag: 'High - Fidelity Design',
    description:
      "Visualize your product's appearance with mockups in the UX Design. Detailed design for every screen gets reviewed by stakeholders and the design team. Get it tested with users for improved design based on their needs and expectations.",
    image: '/images/process/mockups.jpg',
  },
  {
    index: '05',
    title: 'Prototyping',
    tag: 'Interaction Design',
    description:
      'UX Designers create clickable prototypes for your product using tools like Invision to assess product functionality. Gather user feedback and collaborate with development team to create improved version of the design for implementation.',
    image: '/images/process/prototyping.jpg',
  },
  {
    index: '06',
    title: 'Testing',
    tag: 'Usability Testing',
    description:
      'UX designers focus on improving product usability by testing with real users. Define the testing goals and scenarios and recruit a target audience. Conduct usability tests, analyze results, and make changes for optimal user experience.',
    image: '/images/process/testing.jpg',
  },
];

/* ---------------- Portfolio ---------------- */
export interface ProjectData {
  client: string;
  title: string;
  image: string;
}

export const projects: ProjectData[] = [
  {
    client: 'Gig Desk',
    title: 'All-in-one dashboard to manage gigs, tours, venues, and payrolls.',
    image: `${ORIGIN}/storage/280/3.png`,
  },
  {
    client: 'Ship Track',
    title:
      'Real-time shipment tracking and delivery management at your fingertips',
    image: `${ORIGIN}/storage/278/2.png`,
  },
  {
    client: 'Villa Vault',
    title: "Discover and book the world's finest luxury villas with ease",
    image: `${ORIGIN}/storage/277/1-%282%29.png`,
  },
  {
    client: 'Bloom Money',
    title: 'Empowering communities with financial solutions.',
    image: `${ORIGIN}/storage/275/Rectangle-6338.png`,
  },
];

/* ---------------- FAQ ---------------- */
export interface FaqData {
  question: string;
  answer: string[];
}

export const faqs: FaqData[] = [
  {
    question: 'What is UI UX design, and why is it important?',
    answer: [
      'UX design, or user experience design, is designing digital products that are easy to use and provide a positive experience for the user. It is important because a good UX design can increase user satisfaction, engagement, and conversions.',
    ],
  },
  {
    question: 'What is the UX design process, and how long does it take?',
    answer: [
      "UI design, or user interface design, is the visual design of digital products, including the layout, colors, typography, and other elements. It differs from UX design, focusing more on the product's aesthetic appeal and visual aspects. In contrast, UX design focuses on the overall experience of the user.",
    ],
  },
  {
    question: 'What types of UX design services do you offer?',
    answer: [
      'We offer various UX design services, including UX research, wireframing, prototyping, usability testing, and graphics design. We work closely with our clients to understand their unique needs and goals and provide customized solutions to help them achieve their objectives.',
    ],
  },
  {
    question: `How does ${SITE_NAME} differ from other design studios?`,
    answer: [
      `${SITE_NAME} treats every engagement as a data-driven partnership rather than a template. We start by digging into the actual problem your users have, not just the brief, and we close the loop with real user testing instead of guessing at what "good" looks like.`,
      "That means user research, flows, wireframes, and prototypes are all treated as one continuous conversation with your users, not separate hand-offs, so the final product actually matches how people want to use it.",
    ],
  },
  {
    question: `Can I see ${SITE_NAME}'s past work or client feedback?`,
    answer: [
      `Yes — a sample of our case studies is in the Showcase section above, and a few client quotes are further down the page. We're happy to walk through more detail on a call once we understand what you're building.`,
    ],
  },
];

/* ---------------- Insights ---------------- */
export interface InsightData {
  category: string;
  title: string;
  excerpt: string;
  href: string;
  image: string;
}

export const insights: InsightData[] = [
  {
    category: 'Artificial Intelligence',
    title: 'OpenAI vs Anthropic in 2026: Consumer King or Enterprise Challenger?',
    excerpt:
      'OpenAI vs Anthropic 2026: founding stories, valuations, revenue, products, safety philosophy, and a clear pick for consumers, developers, and enterprise teams.',
    href: '#',
    image: `${ORIGIN}/storage/363/openai-vs-anthropic-in-2026-consumer-king-or-enterprise-challenger-%282%29_upscaled.webp`,
  },
  {
    category: 'Artificial Intelligence',
    title: 'Cursor vs OpenAI Codex 2026: Which AI Coding Agent Wins?',
    excerpt:
      'Cursor vs OpenAI Codex in 2026: full comparison for custom development, and which AI coding tool wins for solo developers, teams, and enterprise.',
    href: '#',
    image: `${ORIGIN}/storage/368/cursor-vs-openai-codex-2026-which-ai-coding-agent-wins-%284%29_upscaled.webp`,
  },
  {
    category: 'Web Design',
    title: "WordPress vs Webflow 2026: The Startup Founder's Decision Guide",
    excerpt:
      'WordPress vs Webflow in 2026 for startup founders and businesses. 10 key differences, library ecosystems, security incidents, cost analysis, and risk map.',
    href: '#',
    image: `${ORIGIN}/storage/372/wordpress-vs-webflow-2026-the-startup-founder-s-decision-guide-%284%29_upscaled.webp`,
  },
];

/* ---------------- Testimonials ---------------- */
// Placeholder copy only — no real clients yet, so these are clearly example
// quotes (fictional names/companies) rather than attributed endorsements.
export interface TestimonialData {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: TestimonialData[] = [
  {
    quote:
      '"This is example testimonial copy. Swap it out for a real client quote once you have one — short, specific praise reads far better than generic marketing language."',
    name: 'Client Name',
    role: 'Founder, Example Co.',
  },
  {
    quote:
      '"Another placeholder quote. A good testimonial names the specific problem that got solved, not just that the team was great to work with."',
    name: 'Client Name',
    role: 'Product Lead, Sample Inc.',
  },
  {
    quote:
      '"Third placeholder slot, kept so the slider still has something to autoplay through before real reviews are in."',
    name: 'Client Name',
    role: 'CEO, Placeholder Ltd.',
  },
];

/* ---------------- Offices ---------------- */
// Placeholder locations/numbers — replace with Metron Studio's real office
// details; the `tel` links are inert ('#') until then.
export const offices = [
  {
    region: 'North America',
    address: 'Address on request',
    phone: 'Available on request',
    tel: '#',
    icon: `${SVG}/address-north-america.svg`,
  },
  {
    region: 'Europe',
    address: 'Address on request',
    phone: 'Available on request',
    tel: '#',
    icon: `${SVG}/address-europe.svg`,
  },
  {
    region: 'Asia',
    address: 'Address on request',
    phone: 'Available on request',
    tel: '#',
    icon: `${SVG}/address-asia.svg`,
  },
];

/* ---------------- Footer ---------------- */
export const footerColumns = [
  {
    heading: 'Company',
    links: [
      { label: 'Home', href: '#hero' },
      { label: 'About', href: '#' },
      { label: 'Work', href: '#work' },
      { label: 'Contact', href: '#contact' },
      { label: 'Insights', href: '#insights' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'UI UX Design', href: '#services' },
      { label: 'UX Research', href: '#services' },
      { label: 'Design System', href: '#services' },
      { label: 'Web App Design', href: '#services' },
      { label: 'Mobile App Design', href: '#services' },
    ],
  },
];

export const industries = [
  'Technology',
  'Education',
  'FinTch',
  'Crypto',
  'HealthCare',
  'Real Estate',
];

// Third-party certification/review badges (ISO, Clutch, GoodFirms, etc.)
// were removed here — those accreditations belong to the site this was
// cloned from, not to Metron Studio, so showing them would misrepresent
// credentials Metron doesn't actually hold.
export const awards: { src: string; alt: string; width: number; height: number }[] = [];

// Placeholder until Metron Studio's real social accounts exist.
export const socialLinks = [
  { label: 'Dribbble', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
];
