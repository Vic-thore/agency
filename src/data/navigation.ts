import { ORIGIN, SVG, SERVICE_ICON } from '../lib/assets';

export interface NavItem {
  label: string;
  href: string;
}

export const primaryNav: NavItem[] = [
  { label: 'Home', href: `${ORIGIN}` },
  { label: 'About', href: `${ORIGIN}/about` },
];

export const trailingNav: NavItem[] = [
  { label: 'Work', href: `${ORIGIN}/work` },
  { label: 'Insights', href: `${ORIGIN}/insights` },
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
        href: `${ORIGIN}/services/ux-consultation`,
        icon: `${SERVICE_ICON}/product-sc.svg`,
      },
      {
        title: 'UX Research',
        description:
          'Uncover user needs and behaviors through research that drives design decisions.',
        href: `${ORIGIN}/services/ux-research`,
        icon: `${SERVICE_ICON}/new-icons/ux-research.svg`,
      },
      {
        title: 'UX Audit',
        description:
          'Align goals and deliverables into a strategic roadmap for market success.',
        href: `${ORIGIN}/services/ux-audit`,
        icon: `${SERVICE_ICON}/new-icons/ux-audit.svg`,
      },
      {
        title: 'Experience Architecture',
        description:
          'Design intuitive structures and user flows that make products effortless.',
        href: `${ORIGIN}/services/experience-architecture`,
        icon: `${SERVICE_ICON}/new-icons/experience-architecture.svg`,
      },
      {
        title: 'User Experience Design',
        description:
          'Information architecture, user flows, wireframes, and interaction design.',
        href: `${ORIGIN}/services/user-experience-design`,
        icon: `${SERVICE_ICON}/new-icons/user-experience.svg`,
      },
      {
        title: 'Web Design',
        description:
          'Deliver striking, functional interfaces that enhance user satisfaction.',
        href: `${ORIGIN}/services/web-design`,
        icon: `${SERVICE_ICON}/new-icons/web-design.svg`,
      },
      {
        title: 'Mobile Design',
        description:
          'Enrich experiences with animations that bring interfaces to life.',
        href: `${ORIGIN}/services/mobile-design`,
        icon: `${SERVICE_ICON}/new-icons/mobile-design.svg`,
      },
      {
        title: 'SaaS UI UX Design',
        description:
          'Modern, user-friendly SaaS interfaces for seamless digital experiences.',
        href: `${ORIGIN}/services/saas-ui-ux`,
        icon: `${SERVICE_ICON}/new-icons/saas-ui-ux.svg`,
      },
      {
        title: 'Figma UI UX Design',
        description:
          'Clean, responsive UI/UX designs in Figma for modern businesses.',
        href: `${ORIGIN}/services/figma-ui-ux-design`,
        icon: `${SERVICE_ICON}/new-icons/ux-research.svg`,
      },
      {
        title: 'Design Systems',
        description:
          'Develop scalable ecosystems that ensure brand consistency across platforms.',
        href: `${ORIGIN}/services/design-systems`,
        icon: `${SERVICE_ICON}/new-icons/design-systems.svg`,
      },
      {
        title: 'Prototyping & Usability Testing',
        description:
          'Turn ideas into prototypes, validate with users, and refine before launch.',
        href: `${ORIGIN}/services/prototyping-usability-testing`,
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
        href: `${ORIGIN}/services/brand-strategy`,
        icon: `${SERVICE_ICON}/new-icons/brand-identity.svg`,
      },
      {
        title: 'Visual Communication Design',
        description:
          'Deliver cohesive assets from social to campaigns, reinforcing consistency.',
        href: `${ORIGIN}/services/visual-communication-design`,
        icon: `${SERVICE_ICON}/new-icons/visual-communication.svg`,
      },
      {
        title: 'Motion Design',
        description:
          'Evolve brands with scalable systems that ensure clarity, consistency, and relevance.',
        href: `${ORIGIN}/services/motion-design`,
        icon: `${SERVICE_ICON}/new-icons/ux-research.svg`,
      },
      {
        title: 'Graphic Design',
        description: 'Creative graphic designs for impactful brand communication.',
        href: `${ORIGIN}/services/graphic-design`,
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
        href: `${ORIGIN}/services/loveable-agency`,
        icon: `${SERVICE_ICON}/new-icons/motion-design.svg`,
      },
      {
        title: 'Claude AI Development',
        description: 'Developing intelligent AI solutions powered by Claude models.',
        href: `${ORIGIN}/services/claude-ai-development`,
        icon: `${SERVICE_ICON}/new-icons/visual-communication.svg`,
      },
      {
        title: 'Flutter Development',
        description: 'Building fast, cross-platform mobile apps with Flutter.',
        href: `${ORIGIN}/services/flutter-development`,
        icon: `${SERVICE_ICON}/new-icons/visual-communication.svg`,
      },
      {
        title: 'Webflow Development',
        description:
          'Build responsive, scalable Webflow websites focused on performance, usability, and long-term flexibility.',
        href: `${ORIGIN}/services/webflow-development`,
        icon: `${SERVICE_ICON}/new-icons/brand-identity.svg`,
      },
      {
        title: 'Framer Development',
        description:
          'Build interactive Framer websites with smooth animations and modern experiences.',
        href: `${ORIGIN}/services/framer-development`,
        icon: `${SERVICE_ICON}/new-icons/ux-research.svg`,
      },
      {
        title: 'Vercel Development',
        description: 'Deploying high-performance web apps with Vercel infrastructure.',
        href: `${ORIGIN}/services/vercel-development`,
        icon: `${SERVICE_ICON}/new-icons/motion-design.svg`,
      },
    ],
  },
];
