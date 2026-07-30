import type { LucideIcon } from 'lucide-react';
import {
  Search,
  PenTool,
  LayoutGrid,
  Boxes,
  FlaskConical,
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

export interface WhoWeHelpItem {
  title: string;
  description: string;
}

export interface ProcessStep {
  phase: string;
  description: string;
}

export interface ServiceGroup {
  slug: string;
  tabLabel: string;
  heroTitle: string;
  heroBody: string;
  comingSoon?: boolean;
  cards: ServiceCard[];
  whoWeHelp: WhoWeHelpItem[];
  theGap: string[];
  process: ProcessStep[];
  stack: string[];
  useCases: string[];
  whyUs: string[];
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
        title: 'High-fidelity UI design in Figma',
        description: 'Pixel-level screens ready to hand to engineering.',
      },
      {
        icon: Boxes,
        title: 'Design systems',
        description: 'Reusable components and tokens that keep every screen consistent.',
      },
      {
        icon: FlaskConical,
        title: 'Usability testing',
        description: 'Test real flows with real users before anything ships.',
      },
    ],
    whoWeHelp: [
      { title: 'Startups & Founders', description: 'Validate an idea before building it.' },
      { title: 'SaaS Companies', description: "Interfaces that don't confuse new users." },
      { title: 'Product Teams', description: 'Design debt slowing down releases.' },
      { title: 'Agencies', description: 'Extra design capacity without hiring.' },
    ],
    theGap: [
      'Users drop off before finishing key flows.',
      'Your team keeps redesigning the same screen.',
      'Support tickets are mostly "how do I..." questions.',
      'Design and dev disagree on how something should work.',
      "You're guessing what users want instead of testing it.",
      "The product has grown but the UI hasn't kept up.",
    ],
    process: [
      { phase: 'Discovery', description: 'Stakeholder interviews, competitor review, user research.' },
      { phase: 'Design', description: 'Wireframes, high-fidelity screens, interactive prototype.' },
      { phase: 'Validation', description: 'Usability testing, refinement, developer handoff docs.' },
    ],
    stack: ['Figma', 'FigJam', 'Framer', 'Maze'],
    useCases: [
      'Pre-launch product design',
      'Confusing dashboard redesign',
      'Design system for a scaling team',
      'Mobile app UI overhaul',
      'Design-only engagement',
      'Ongoing design retainer',
    ],
    whyUs: [
      'One team designs and builds, so nothing gets lost in handoff.',
      'Research before visuals, always.',
      'Direct access to the person doing the work.',
      'Every past project is real, linkable work.',
      'Honest scoping.',
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
        title: 'Brand guideline documentation',
        description: 'A reference doc so your brand stays on-brand without you in the room.',
      },
    ],
    whoWeHelp: [
      { title: 'Pre-launch startups', description: 'Naming and identity before you launch, not after.' },
      { title: 'Rebranding companies', description: 'Outgrown a name, look, or identity that no longer fits.' },
      { title: 'Multi-product companies', description: 'One brand system that scales across several products.' },
      { title: 'Agencies needing white-label brand support', description: 'Extra brand capacity under your own name.' },
    ],
    theGap: [
      "Your name might already be trademarked and no one's checked.",
      'Your logo looks like three other companies in your space.',
      'Nobody can explain what your brand actually stands for.',
      "Visual identity changes depending on who's designing that week.",
      'You picked colors because they "looked nice," not for a reason.',
      "Brand guidelines don't exist.",
    ],
    process: [
      { phase: 'Discovery', description: 'Positioning, competitor & trademark research.' },
      { phase: 'Design', description: 'Name shortlist, logo concepts, color/type system.' },
      { phase: 'Documentation', description: 'Guidelines, usage rules, handoff files.' },
    ],
    stack: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    useCases: [
      'New company naming & identity',
      'Visual rebrand',
      'Logo refresh without a full rebrand',
      'Brand guideline documentation',
      'Multi-brand architecture',
    ],
    whyUs: [
      'We run a real trademark/conflict check before you commit to a name.',
      'Every mark is built to be ownable, not a modified template.',
      'You get real guideline documentation, not just a logo file.',
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
        description: 'Security, backups, updates, and SEO maintenance after launch.',
      },
    ],
    whoWeHelp: [
      { title: 'Small businesses', description: 'A site that works as hard as you do.' },
      { title: 'Ecommerce brands', description: 'Storefronts built around checkout, not just browsing.' },
      { title: 'Startups', description: 'A fast, credible site to launch behind.' },
      { title: 'Agencies needing white-label build capacity', description: 'Extra build capacity under your own name.' },
    ],
    theGap: [
      'Your site takes over 5 seconds to load.',
      'It looks fine on desktop, broken on mobile.',
      "You can't edit your own content without calling a developer.",
      'Your checkout has more steps than it needs.',
      'SEO basics were never set up at launch.',
      "The design and the built site don't actually match.",
    ],
    process: [
      { phase: 'Design', description: 'UI/UX in Figma, approved before build starts.' },
      { phase: 'Build', description: 'Development on the right platform for your needs.' },
      { phase: 'Launch & Care', description: 'QA, SEO setup, ongoing maintenance.' },
    ],
    stack: ['Webflow', 'WordPress', 'Shopify', 'WooCommerce'],
    useCases: [
      'New business website',
      'Ecommerce store launch',
      'Website redesign & rebuild',
      'Landing page for a product launch',
      'Ongoing care plan',
    ],
    whyUs: [
      'Same team designs and builds.',
      'You get a site your own team can actually edit after launch.',
      'Platform chosen based on your actual needs, not our default.',
      'Care plans keep the site working after launch.',
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
        title: 'Lottie micro-interaction integration',
        description: 'Lightweight, scalable animation shipped straight into your product.',
      },
      {
        icon: Box,
        title: 'Scroll-driven 3D product experiences (Three.js + GSAP)',
        description: 'Scenes tied to scroll position for a real showcase moment.',
      },
    ],
    whoWeHelp: [
      { title: 'Product brands', description: 'Show how something works, not just what it looks like.' },
      { title: 'Agencies wanting a technical differentiator', description: 'Offer motion and 3D without building the capability in-house.' },
      { title: 'Startups launching a flagship product', description: 'One standout moment for a launch that matters.' },
      { title: 'Anyone whose site looks generic', description: 'Stand out from templated competitors.' },
    ],
    theGap: [
      'Your homepage looks like a dozen others in your space.',
      "Static images aren't communicating how your product works.",
      'Your logo just sits there, no motion.',
      'Competitors feel more premium with less content.',
      "You want interactive but don't know what's possible.",
    ],
    process: [
      { phase: 'Concept', description: 'What story does the motion need to tell.' },
      { phase: 'Build', description: '3D modeling/animation, scroll-trigger choreography.' },
      { phase: 'Optimize', description: 'Performance tuning.' },
    ],
    stack: ['Three.js', 'GSAP (ScrollTrigger)', 'LottieFiles', 'Adobe After Effects'],
    useCases: [
      'Exploded-view product reveal',
      'Scroll-triggered storytelling homepage',
      'Animated logo for brand refresh',
      'Micro-interactions for a SaaS dashboard',
      'One standout hero moment',
    ],
    whyUs: [
      'Our sharpest technical differentiator, not an afterthought.',
      'Performance-tuned, not just impressive-but-laggy.',
      'We show working prototypes early, not just concept renders.',
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
    whoWeHelp: [
      { title: 'Growing teams doing manual data entry', description: 'Free up time spent copying data between tools.' },
      { title: 'Agencies routing leads by hand', description: 'Automatic routing instead of manual triage.' },
      { title: 'Companies with disconnected CRM/site/tools', description: 'One connected system instead of several separate ones.' },
      { title: 'Anyone duplicating work across platforms', description: 'Do the work once, not three times.' },
    ],
    theGap: [
      'Leads sit in your inbox before anyone follows up.',
      'Data gets copied manually between site, CRM, and spreadsheet.',
      'The same task gets done differently depending on who does it.',
      "You've outgrown manual processes but haven't automated yet.",
    ],
    process: [
      { phase: 'Map', description: 'Document the current manual process.' },
      { phase: 'Build', description: 'n8n workflow construction & tool connections.' },
      { phase: 'Monitor', description: 'Testing, error handling, handoff.' },
    ],
    stack: ['n8n', 'CRM platforms', 'Google Sheets', 'Slack', 'Email tools'],
    useCases: [
      'Lead-to-CRM automation',
      'Internal reporting automation',
      'Cross-tool data sync',
      'Notification & alert workflows',
    ],
    whyUs: [
      'Built by the same team that designed your site.',
      'Currently in honest development, not overclaiming readiness.',
      'Early access available for clients wanting to help shape it.',
    ],
  },
];
