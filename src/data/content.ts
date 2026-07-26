import { IMG, SVG, ORIGIN } from '../lib/assets';

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
export const clientLogos = [
  { src: `${SVG}/trafilea.svg`, alt: 'Trafilea', width: 138, height: 32 },
  { src: `${SVG}/yallaMotor.svg`, alt: 'YallaMotor', width: 152, height: 32 },
  {
    src: `${SVG}/nissan-motor-corporation.svg`,
    alt: 'Nissan Motor Corporation',
    width: 143,
    height: 32,
  },
  { src: `${SVG}/repurpose.svg`, alt: 'Repurpose', width: 198, height: 32 },
  { src: `${SVG}/handshake.svg`, alt: 'Handshake', width: 176, height: 30 },
  { src: `${SVG}/METutors.svg`, alt: 'METutors', width: 149, height: 24 },
  { src: `${SVG}/tree.svg`, alt: 'Tree', width: 68, height: 24 },
  {
    src: `${SVG}/BankofNamibia.svg`,
    alt: 'Bank of Namibia',
    width: 94,
    height: 80,
  },
  {
    src: `${SVG}/Ministry-of-Human-Resources-and-Emiratisation.svg`,
    alt: 'Ministry of Human Resources and Emiratisation',
    width: 137,
    height: 40,
  },
];

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
    href: `${ORIGIN}/services/saas-ui-ux-design-agency`,
  },
  {
    eyebrow: 'For Startups & Existing Companies',
    title: 'Product Revamp',
    href: `${ORIGIN}/services/product-revamp`,
  },
  {
    eyebrow: 'FOR VISUAL STORYTELLERS',
    title: 'Brand Design',
    href: `${ORIGIN}/services/brand-design`,
  },
  {
    eyebrow: 'FOR RAPID APP BUILDERS',
    title: 'No Code Development',
    href: `${ORIGIN}/services/no-code-development`,
  },
  {
    eyebrow: 'FOR STARTUPS & FOUNDERS',
    title: 'MVP Design',
    href: `${ORIGIN}/services/mvp-design`,
  },
  {
    eyebrow: 'Dedicated ux ui Team',
    title: 'Team Extension',
    href: `${ORIGIN}/services/team-extension`,
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
    image: `${IMG}/home-process-mob-1.webp`,
  },
  {
    index: '02',
    title: 'Flows',
    tag: 'User Journey Map Sitemap',
    description:
      'Create successful user flows for your product in the UX design process by mapping user journeys and interactions. Define product ideas and goals, tailored to user needs, behavior, and expectations. Test with real users for optimization.',
    image: `${IMG}/home-process-mob-2.webp`,
  },
  {
    index: '03',
    title: 'Wireframes',
    tag: 'Low - Fidelity Design',
    description:
      'Define the content and functionality of your product with wireframes in the UX Design process. Brainstorm multiple ideas, get feedback, and refine for high fidelity wireframes. Enhance the user interface for a natural and intuitive look.',
    image: `${IMG}/home-process-mob-3.webp`,
  },
  {
    index: '04',
    title: 'Mockups',
    tag: 'High - Fidelity Design',
    description:
      "Visualize your product's appearance with mockups in the UX Design. Detailed design for every screen gets reviewed by stakeholders and the design team. Get it tested with users for improved design based on their needs and expectations.",
    image: `${IMG}/home-process-mob-4.webp`,
  },
  {
    index: '05',
    title: 'Prototyping',
    tag: 'Interaction Design',
    description:
      'UX Designers create clickable prototypes for your product using tools like Invision to assess product functionality. Gather user feedback and collaborate with development team to create improved version of the design for implementation.',
    image: `${IMG}/home-process-mob-5.webp`,
  },
  {
    index: '06',
    title: 'Testing',
    tag: 'Usability Testing',
    description:
      'UX designers focus on improving product usability by testing with real users. Define the testing goals and scenarios and recruit a target audience. Conduct usability tests, analyze results, and make changes for optimal user experience.',
    image: `${IMG}/home-process-mob-6.webp`,
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
    question:
      'How does ZeeFrames UI UX Design differ from other design solutions?',
    answer: [
      'At ZeeFrames, we believe in the power of Human-Computer Interaction and leverage it to make informed, data-driven design decisions that set us apart from the competition. As a leading UI UX design studio in Pakistan, we follow a design strategy that begins with discovering the needs and pain points of users and ends with real user testing for direct feedback. This approach enables us to create user-centric designs that enhance usability, accessibility, and overall user satisfaction.',
      "Our design philosophy is simple: put users at the center of everything we do. Whether it's UX research or designing User Flows, Wireframing or Prototyping our team of expert UI UX designers ensure that your users are considered in every phase of designing to deliver outstanding results that meet the unique needs of your business.",
    ],
  },
  {
    question:
      'Are there any customer reviews or case studies available for ZeeFrames UI UX Design?',
    answer: [
      "At ZeeFrames, we take pride in our customer reviews and case studies that showcase our expertise in the UI UX design industry. You can easily access them on our website to get a glimpse of our work and the impact it has had on our clients' businesses. As a top-class UI UX design firm, we have worked with a diverse range of clients worldwide, helping them create engaging and intuitive digital experiences for their customers. With our expertise and user-centered design approach, you can be rest assured as we will take your website design to the next level.",
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
    href: `${ORIGIN}/insights/openai-vs-anthropic-in-2026-consumer-king-or-enterprise-challenger`,
    image: `${ORIGIN}/storage/363/openai-vs-anthropic-in-2026-consumer-king-or-enterprise-challenger-%282%29_upscaled.webp`,
  },
  {
    category: 'Artificial Intelligence',
    title: 'Cursor vs OpenAI Codex 2026: Which AI Coding Agent Wins?',
    excerpt:
      'Cursor vs OpenAI Codex in 2026: full comparison for custom development, and which AI coding tool wins for solo developers, teams, and enterprise.',
    href: `${ORIGIN}/insights/cursor-vs-openai-codex-2026-which-ai-coding-agent-wins`,
    image: `${ORIGIN}/storage/368/cursor-vs-openai-codex-2026-which-ai-coding-agent-wins-%284%29_upscaled.webp`,
  },
  {
    category: 'Web Design',
    title: "WordPress vs Webflow 2026: The Startup Founder's Decision Guide",
    excerpt:
      'WordPress vs Webflow in 2026 for startup founders and businesses. 10 key differences, library ecosystems, security incidents, cost analysis, and risk map.',
    href: `${ORIGIN}/insights/wordpress-vs-webflow-2026-the-startup-founder-s-decision-guide`,
    image: `${ORIGIN}/storage/372/wordpress-vs-webflow-2026-the-startup-founder-s-decision-guide-%284%29_upscaled.webp`,
  },
];

/* ---------------- Testimonials ---------------- */
export interface TestimonialData {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export const testimonials: TestimonialData[] = [
  {
    quote:
      '"ZeeFrames delivered on time with exceptional commitment and dedication. The team managed the project exemplarily, provided daily updates, and responded swiftly to every need. Their innovative, user-centric approach and ability to blend modern design trends with intuitive functionality results in seamless digital experiences that truly impressed us"',
    name: 'Manuel J.',
    role: 'Founder, Dot.simple',
    avatar: `${IMG}/manuel.png`,
  },
  {
    quote:
      '"What impressed me most about ZeeFrames was their ability to truly understand my vision. They delivered the complete design within the agreed timeline, and users responded positively to the app\'s ease of use and visual appeal during testing. The team demonstrated excellent project management and stayed highly organized throughout the entire engagement."',
    name: 'Daahir Ibraahim',
    role: 'Project Managemer, E Salaax',
    avatar: `${IMG}/daahir.png`,
  },
  {
    quote:
      '"The designers at ZeeFrames are always responsive and quick to react. They successfully designed our buyer and seller side chat sections, maintaining perfect consistency with our website\'s theme. Their attention to detail, friendly approach, and cost-effective pricing made them a standout partner."',
    name: 'Hisham Taha',
    role: 'Founder & CEO, Kobray',
    avatar: `${IMG}/hisham.png`,
  },
  {
    quote:
      '"We were impressed with their quickness. ZeeFrames delivered high-quality wireframes that met our expectations, demonstrating professionalism and solid project management throughout. Their fast turnaround and clear communication via Figma made the entire engagement a positive experience."',
    name: 'Armando Jimeno',
    role: 'Founder, TropicDrive',
    avatar: `${IMG}/armando.png`,
  },
  {
    quote:
      '"The abilities of the UX designer were impressive. ZeeFrames delivered high-quality wireframes with an excellent understanding of our needs, resulting in a truly successful engagement. The team was professional, timely, and brought a positive attitude their UX/UI expertise genuinely stood out throughout the collaboration."',
    name: 'Philip Leth-Sørensen',
    role: 'CEO, PredictHire',
    avatar: `${IMG}/philip.jpg`,
  },
];

/* ---------------- Offices ---------------- */
export const offices = [
  {
    region: 'North America',
    address: '1832 Norfolk st Houston Texas 77098',
    phone: '+1 (480) 920-1123',
    tel: 'tel:+17372775447',
    icon: `${SVG}/address-north-america.svg`,
  },
  {
    region: 'Europe',
    address: 'West Tower, 371 Deansgate, Manchester M15 4UP, United Kingdom',
    phone: '+44 (746) 0766-922',
    tel: 'tel:+447460766922',
    icon: `${SVG}/address-europe.svg`,
  },
  {
    region: 'Asia',
    address: '144/2, Block B, Bankers Society Near DHA Phase 4, Lahore, 54792',
    phone: '+1 (737) 277 5447',
    tel: 'tel:+17372775447',
    icon: `${SVG}/address-asia.svg`,
  },
];

/* ---------------- Footer ---------------- */
export const footerColumns = [
  {
    heading: 'Company',
    links: [
      { label: 'Home', href: `${ORIGIN}` },
      { label: 'About', href: `${ORIGIN}/about` },
      { label: 'Work', href: `${ORIGIN}/work` },
      { label: 'Contact', href: `${ORIGIN}/work-with-us` },
      { label: 'Insights', href: `${ORIGIN}/insights` },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'UI UX Design', href: `${ORIGIN}/services/ui-ux-design` },
      { label: 'UX Research', href: `${ORIGIN}/services/ux-research-insights` },
      {
        label: 'Design System',
        href: `${ORIGIN}/services/design-systems-guidelines`,
      },
      { label: 'Web App Design', href: `${ORIGIN}/services/web-design` },
      { label: 'Mobile App Design', href: `${ORIGIN}/services/mobile-design` },
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

export const awards = [
  { src: `${SVG}/iso.svg`, alt: 'ISO certified', width: 62, height: 62 },
  { src: `${SVG}/top_clutch.svg`, alt: 'Top Clutch', width: 57, height: 62 },
  { src: `${SVG}/goodfirm.svg`, alt: 'GoodFirms', width: 62, height: 62 },
  {
    src: `${SVG}/custom-software-development.svg`,
    alt: 'Custom software development award',
    width: 62,
    height: 62,
  },
];

export const socialLinks = [
  { label: 'Dribbble', href: 'https://dribbble.com/zeeframes' },
  { label: 'YouTube', href: 'https://youtube.com/@zeeframes.design' },
  { label: 'Facebook', href: 'https://www.facebook.com/zeeframes.design' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/zeeframes/' },
  { label: 'Instagram', href: 'https://www.instagram.com/zeeframes.design/' },
];
