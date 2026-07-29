import { SVG, SERVICE_ICON } from '../lib/assets';

export interface NavItem {
  label: string;
  href: string;
}

// Home/About are real routes; Work/Insights anchor to sections on the
// homepage (ScrollToHash handles the cross-page case).
export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
];

export const trailingNav: NavItem[] = [
  { label: 'Work', href: '/#work' },
  { label: 'Insights', href: '/#insights' },
];

export interface MegaService {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface MegaTab {
  id: string;
  label: string;
  icon: string;
  services: MegaService[];
}

export const megaMenuTabs: MegaTab[] = [
  {
    id: 'design',
    label: 'UI UX Design',
    icon: `${SVG}/bulb.svg`,
    services: [
      {
        title: 'UX Consultation',
        description:
          'Shape your product vision with insights, market analysis, and growth strategies.',
        href: '#',
        icon: `${SERVICE_ICON}/product-sc.svg`,
      },
      {
        title: 'UX Research',
        description:
          'Uncover user needs and behaviors through research that drives design decisions.',
        href: '#',
        icon: `${SERVICE_ICON}/new-icons/ux-research.svg`,
      },
      {
        title: 'UX Audit',
        description:
          'Align goals and deliverables into a strategic roadmap for market success.',
        href: '#',
        icon: `${SERVICE_ICON}/new-icons/ux-audit.svg`,
      },
      {
        title: 'Experience Architecture',
        description:
          'Design intuitive structures and user flows that make products effortless.',
        href: '#',
        icon: `${SERVICE_ICON}/new-icons/experience-architecture.svg`,
      },
      {
        title: 'User Experience Design',
        description:
          'Information architecture, user flows, wireframes, and interaction design.',
        href: '#',
        icon: `${SERVICE_ICON}/new-icons/user-experience.svg`,
      },
      {
        title: 'Web Design',
        description:
          'Deliver striking, functional interfaces that enhance user satisfaction.',
        href: '#',
        icon: `${SERVICE_ICON}/new-icons/web-design.svg`,
      },
      {
        title: 'Mobile Design',
        description:
          'Enrich experiences with animations that bring interfaces to life.',
        href: '#',
        icon: `${SERVICE_ICON}/new-icons/mobile-design.svg`,
      },
      {
        title: 'SaaS UI UX Design',
        description:
          'Modern, user-friendly SaaS interfaces for seamless digital experiences.',
        href: '#',
        icon: `${SERVICE_ICON}/new-icons/saas-ui-ux.svg`,
      },
      {
        title: 'Figma UI UX Design',
        description:
          'Clean, responsive UI/UX designs in Figma for modern businesses.',
        href: '#',
        icon: `${SERVICE_ICON}/new-icons/ux-research.svg`,
      },
      {
        title: 'Design Systems',
        description:
          'Develop scalable ecosystems that ensure brand consistency across platforms.',
        href: '#',
        icon: `${SERVICE_ICON}/new-icons/design-systems.svg`,
      },
      {
        title: 'Prototyping & Usability Testing',
        description:
          'Turn ideas into prototypes, validate with users, and refine before launch.',
        href: '#',
        icon: `${SERVICE_ICON}/new-icons/prototyping.svg`,
      },
    ],
  },
  {
    id: 'branding',
    label: 'Brand Design',
    icon: `${SVG}/pen.svg`,
    services: [
      {
        title: 'Brand Strategy',
        description:
          'Define brand direction through strategy, positioning, and guiding decisions.',
        href: '#',
        icon: `${SERVICE_ICON}/new-icons/brand-identity.svg`,
      },
      {
        title: 'Visual Communication Design',
        description:
          'Deliver cohesive assets from social to campaigns, reinforcing consistency.',
        href: '#',
        icon: `${SERVICE_ICON}/new-icons/visual-communication.svg`,
      },
      {
        title: 'Motion Design',
        description:
          'Evolve brands with scalable systems that ensure clarity, consistency, and relevance.',
        href: '#',
        icon: `${SERVICE_ICON}/new-icons/ux-research.svg`,
      },
      {
        title: 'Graphic Design',
        description: 'Creative graphic designs for impactful brand communication.',
        href: '#',
        icon: `${SERVICE_ICON}/new-icons/motion-design.svg`,
      },
    ],
  },
  {
    id: 'development',
    label: 'No-Code Development',
    icon: `${SVG}/dev.svg`,
    services: [
      {
        title: 'Lovable Agency',
        description:
          'Building AI-powered apps with Lovable for rapid product development.',
        href: '#',
        icon: `${SERVICE_ICON}/new-icons/motion-design.svg`,
      },
      {
        title: 'Claude AI Development',
        description: 'Developing intelligent AI solutions powered by Claude models.',
        href: '#',
        icon: `${SERVICE_ICON}/new-icons/visual-communication.svg`,
      },
      {
        title: 'Flutter Development',
        description: 'Building fast, cross-platform mobile apps with Flutter.',
        href: '#',
        icon: `${SERVICE_ICON}/new-icons/visual-communication.svg`,
      },
      {
        title: 'Webflow Development',
        description:
          'Build responsive, scalable Webflow websites focused on performance, usability, and long-term flexibility.',
        href: '#',
        icon: `${SERVICE_ICON}/new-icons/brand-identity.svg`,
      },
      {
        title: 'Framer Development',
        description:
          'Build interactive Framer websites with smooth animations and modern experiences.',
        href: '#',
        icon: `${SERVICE_ICON}/new-icons/ux-research.svg`,
      },
      {
        title: 'Vercel Development',
        description: 'Deploying high-performance web apps with Vercel infrastructure.',
        href: '#',
        icon: `${SERVICE_ICON}/new-icons/motion-design.svg`,
      },
    ],
  },
];
