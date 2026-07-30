import type { LucideIcon } from 'lucide-react';
import {
  Search,
  PenTool,
  LayoutGrid,
  Boxes,
  Fingerprint,
  Shapes,
  Palette,
  BookOpen,
  Rocket,
  Building2,
  ShoppingCart,
  LifeBuoy,
  Sparkles,
  Film,
  Box,
  GitBranch,
  Database,
  Workflow,
} from 'lucide-react';

export interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceGroup {
  slug: string;
  tabLabel: string;
  heroTitle: string;
  heroBody: string;
  comingSoon?: boolean;
  cards: ServiceCard[];
}

export const serviceGroups: ServiceGroup[] = [
  {
    slug: 'ui-ux-design',
    tabLabel: 'UI/UX Design',
    heroTitle: 'Interfaces designed around how people actually work.',
    heroBody:
      'We design digital products for SaaS, dashboards, and mobile apps, starting with how real users behave, not assumptions.',
    cards: [
      {
        icon: Search,
        title: 'UX research & flows',
        description: 'Understand real user behavior before a single screen gets drawn.',
      },
      {
        icon: PenTool,
        title: 'Wireframing',
        description: 'Low-fidelity structure that locks in flow before visual design starts.',
      },
      {
        icon: LayoutGrid,
        title: 'High-fidelity UI design',
        description: 'Pixel-level screens ready to hand to engineering.',
      },
      {
        icon: Boxes,
        title: 'Design systems',
        description: 'Reusable components and tokens that keep every screen consistent.',
      },
    ],
  },
  {
    slug: 'brand-design',
    tabLabel: 'Brand Design',
    heroTitle: 'A brand that holds up under scrutiny.',
    heroBody:
      'Naming, logo design, and color systems built to survive a real trademark check, not just look good in a moodboard.',
    cards: [
      {
        icon: Fingerprint,
        title: 'Brand naming & trademark screening',
        description: 'Names checked for availability before you fall in love with one.',
      },
      {
        icon: Shapes,
        title: 'Logo & monogram design',
        description: 'A mark that still works at 16px and on a truck.',
      },
      {
        icon: Palette,
        title: 'Color & typography systems',
        description: 'A palette and type scale built for consistency across every touchpoint.',
      },
      {
        icon: BookOpen,
        title: 'Brand guidelines',
        description: 'A reference doc so your brand stays on-brand without you in the room.',
      },
    ],
  },
  {
    slug: 'web-development',
    tabLabel: 'Web Development',
    heroTitle: 'Websites built to convert, not just look good.',
    heroBody:
      'Custom sites on Webflow, WordPress, and Shopify. Every build starts with UI/UX design in Figma, so you approve the design before a single page gets built.',
    cards: [
      {
        icon: Rocket,
        title: 'Landing pages',
        description: 'Focused, fast-loading pages built to move one metric.',
      },
      {
        icon: Building2,
        title: 'Business & corporate sites',
        description: 'Multi-page sites that hold up to scrutiny from a real buyer.',
      },
      {
        icon: ShoppingCart,
        title: 'Ecommerce stores',
        description: 'Shopify builds designed around checkout, not just browsing.',
      },
      {
        icon: LifeBuoy,
        title: 'Website care plans',
        description: 'Ongoing updates, fixes, and monitoring after launch.',
      },
    ],
  },
  {
    slug: 'motion-scroll-3d',
    tabLabel: 'Motion & Scroll-Driven 3D',
    heroTitle: 'Motion that makes a site memorable.',
    heroBody:
      'Logo animation, Lottie micro-interactions, and scroll-triggered 3D experiences built with Three.js and GSAP, our sharpest technical differentiator.',
    cards: [
      {
        icon: Sparkles,
        title: 'Logo & UI animation',
        description: 'Small motion details that make an interface feel considered.',
      },
      {
        icon: Film,
        title: 'Lottie integration',
        description: 'Lightweight, scalable animation shipped straight into your product.',
      },
      {
        icon: Box,
        title: 'Scroll-driven 3D product experiences',
        description: 'Three.js scenes tied to scroll position for a real showcase moment.',
      },
    ],
  },
  {
    slug: 'workflow-automation',
    tabLabel: 'Workflow Automation (n8n)',
    heroTitle: 'Connecting your site to the rest of your business.',
    heroBody:
      'n8n-powered automation linking your website, CRM, and internal tools. Currently in development, client-ready builds launching soon.',
    comingSoon: true,
    cards: [
      {
        icon: GitBranch,
        title: 'Lead routing',
        description: 'New leads routed to the right inbox or rep automatically.',
      },
      {
        icon: Database,
        title: 'CRM sync',
        description: 'Keep your CRM updated without manual data entry.',
      },
      {
        icon: Workflow,
        title: 'Internal workflow automation',
        description: 'Connect the tools your team already uses.',
      },
    ],
  },
];
