import type { CaseStudy } from './caseStudies';

/**
 * Real past projects. Images are served from the original Webflow portfolio's
 * CDN; download them into /public/images/projects and swap the paths to
 * self-host (the site then no longer depends on the Webflow project).
 */
const CDN = 'https://cdn.prod.website-files.com/65058336ffd1d227c018972b';

type Past = Omit<CaseStudy, 'slug' | 'isConcept'>;

const web = { serviceId: 'web-development', serviceLabel: 'Web', href: '/services/web-development' };
const nocode = { serviceId: 'no-code-development', serviceLabel: 'No-code', href: '/services/no-code-development' };
const uiux = { serviceId: 'ui-ux-design', serviceLabel: 'UI/UX', href: '/services/ui-ux-design' };

export const pastProjects: Past[] = [
  {
    ...web,
    name: 'Everscribn',
    category: 'Legal SEO content agency',
    image: `${CDN}/6a55117e59bcad2488974e66_Frame%202147226848.png`,
    alt: 'Screenshot of the Everscribn website, a legal SEO content agency for law firms',
    brief: 'A website for a legal SEO content agency that serves law firms and the agencies that work with them.',
    approach:
      'Everscribn builds keyword architecture for legal practice areas and content made to rank. The site presents that service clearly to law firms and marketing agencies.',
    delivered: ['Web development'],
    role: 'Web Developer',
    year: '2026',
    liveUrl: 'https://everscribn.com/',
    approachLabel: 'The project',
  },
  {
    ...nocode,
    name: 'Groupaway',
    category: 'Travel platform',
    image: `${CDN}/6a4a561f6049f1518184a72a_Frame%202147226846.png`,
    alt: 'Screenshot of the Groupaway website, a travel platform for adventure and community trips',
    brief: 'A travel platform for adventure and community-driven group trips.',
    approach:
      'Webflow development of the platform: CMS-powered pages, responsive components and dynamic content structures, built around trip discovery, host onboarding and traveler engagement.',
    delivered: ['CMS-powered pages', 'Responsive components', 'Dynamic content structures', 'Discovery and onboarding journeys'],
    tools: ['Webflow'],
    role: 'Webflow Developer',
    year: '2025',
    liveUrl: 'https://www.groupaway.nl/',
    approachLabel: 'The project',
  },
  {
    ...web,
    name: 'Faprint Studio',
    category: 'Ecommerce store',
    image: `${CDN}/6a4a6e19d276e034c3c88acb_Frame%202147226847.png`,
    alt: 'Screenshot of the Faprint Studio online store',
    brief: 'A WordPress online store with a bold, expressive look that matches the brand.',
    approach:
      'A complete ecommerce build with a working cart, checkout, customer accounts and store policy pages, tuned for speed, accessibility and ease of use.',
    delivered: ['Shopping cart and checkout', 'Customer account pages', 'Store policy pages', 'Speed and accessibility tuning'],
    tools: ['WordPress'],
    role: 'Web Developer',
    year: '2025',
    approachLabel: 'The project',
  },
  {
    ...web,
    name: 'GameDevEssentials',
    category: 'Content platform',
    image: `${CDN}/6a4a4a9c0b17a51efeae0385_Frame%20720njnjnjn.png`,
    alt: 'Screenshot of the GameDevEssentials website, a learning platform for game developers',
    brief: 'A content platform that helps aspiring game developers find tutorials, tools and industry insight in one place.',
    approach:
      'A WordPress build that presents concepts as short, digestible modules, guiding people from foundational topics to advanced techniques.',
    delivered: ['WordPress build', 'Modular content structure'],
    tools: ['WordPress'],
    role: 'Web Developer',
    year: '2025',
    liveUrl: 'https://gamedevessentials.com/',
    approachLabel: 'The project',
  },
  {
    ...nocode,
    name: 'ArkBM',
    category: 'Freelance project management',
    image: `${CDN}/66ae474ac6c2ad9398c3aee8_6479c3ee0cda53e3cb498964_3.jpg`,
    alt: 'Screenshot of the ArkBM website, a freelance project management service',
    brief: 'A website for a freelance project management service for creatives, freelancers and small businesses.',
    approach:
      'A Webflow site with an intuitive, user-friendly interface that explains the value of ArkBM’s planning, organization, budgeting and quality services.',
    delivered: ['Website development', 'Clear service presentation'],
    tools: ['Webflow'],
    role: 'Junior Web Developer',
    year: '2025',
    liveUrl: 'https://www.arkbm.com/',
    approachLabel: 'The project',
  },
  {
    ...uiux,
    name: 'Dente',
    category: 'Dental care',
    image: `${CDN}/66ae28b90cb9e4274b78aef9_664bcf8818ab4aa8648e7528_Mockup%20Preview%20(11).png`,
    alt: 'Mockup preview of the Dente dental care website',
    brief: 'A bilingual website for a dental provider focused on personalized care.',
    approach:
      'Designed in Figma and built in Webflow: a welcoming, user-friendly site that reflects the brand and presents the services, with Spanish and English support through Weglot.',
    delivered: ['UI/UX design', 'Webflow development', 'Spanish and English support'],
    tools: ['Webflow', 'Figma', 'Weglot'],
    role: 'Lead designer and developer',
    year: '2024',
    liveUrl: 'https://www.mydente.com/',
    approachLabel: 'The project',
  },
  {
    ...nocode,
    name: 'Stache.haus',
    category: 'Creative agency',
    image: `${CDN}/663d46055345d145f13c3930_Screenshot%20(287)%20(1).png`,
    alt: 'Screenshot of the Stache.haus website, a video and photography creative agency',
    brief: 'A website for a creative agency that produces video and photography for brand storytelling.',
    approach:
      'A responsive Webflow build with complex interactions, performance optimization and cross-browser compatibility, delivered in collaboration with the design and development team.',
    delivered: ['Responsive Webflow build', 'Complex interactions', 'Performance optimization', 'Cross-browser compatibility'],
    tools: ['Webflow'],
    role: 'Co-Webflow Developer',
    year: '2024',
    liveUrl: 'https://www.stache.haus/',
    approachLabel: 'The project',
  },
  {
    ...uiux,
    name: 'The Padel Club',
    category: 'Sports club',
    image: `${CDN}/6628494a2d7c97284a9263a6_hero%20section%20(2).png`,
    alt: 'Hero section of The Padel Club website',
    brief: 'A website for a padel club serving players of every level.',
    approach:
      'A design and Webflow build that promotes the club’s courts, professional coaching and community, shaped around what players need and what the club wants to achieve.',
    delivered: ['UI/UX design', 'Webflow development'],
    tools: ['Webflow'],
    role: 'UI/UX Designer and Webflow Developer',
    year: '2024',
    liveUrl: 'https://www.thepadelclubfe.it/',
    approachLabel: 'The project',
  },
  {
    ...nocode,
    name: 'Mrcreative Social',
    category: 'Web design agency',
    image: `${CDN}/65b2dee9544296ba2a481070_Screenshot%20(266).png`,
    alt: 'Screenshot of the Mrcreative Social agency website',
    brief: 'A full website redesign for an agency that helps businesses build a strong online presence.',
    approach:
      'Webflow development as part of the Crafted Studios team, turning design concepts into a responsive site, followed by ongoing maintenance.',
    delivered: ['Website redesign build', 'Responsive implementation', 'Ongoing maintenance'],
    tools: ['Webflow'],
    role: 'Webflow Developer (Crafted Studios team)',
    year: '2023',
    liveUrl: 'http://mrcreativesocial.com',
    approachLabel: 'The project',
  },
  {
    ...uiux,
    name: 'Yahweh Yasad Nursing Home',
    category: 'Senior care',
    image: `${CDN}/653308572070401a856430db_Instagram%20post%20-%201%20(10).png`,
    alt: 'Promotional image for the Yahweh Yasad Nursing Home website',
    brief: 'A website for a single-story nursing home built around comfort, care and community.',
    approach:
      'A design that pairs modern accessibility with a classic feel, showing warm interiors, private rooms, accessible facilities and a landscaped garden in support of residents’ well-being.',
    delivered: ['UI/UX design', 'Web development'],
    role: 'UI/UX Designer and Web Developer',
    year: '2023',
    liveUrl: 'https://yahwehyasad.com/',
    approachLabel: 'The project',
  },
];
