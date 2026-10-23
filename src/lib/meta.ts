import { caseStudies, getCaseStudy, type CaseStudy } from '../data/caseStudies';
import { SITE_NAME } from './assets';

/**
 * Single source of truth for page metadata.
 *
 * Used in two places:
 *  - at runtime (src/components/PageMeta.tsx) to keep <title>, description,
 *    canonical, robots and social tags correct when the visitor navigates;
 *  - at build time (scripts/prerender.mjs) to write a real HTML file per route
 *    with the same tags in the initial response, plus sitemap.xml.
 *
 * This file must stay free of browser-only code.
 */

export interface PageMeta {
  /** Full <title>. Keep under ~60 characters. */
  title: string;
  /** Meta description, aim for 120 to 155 characters. */
  description: string;
  /** Canonical path, e.g. "/services/seo". */
  path: string;
  /** Path or absolute URL of the social share image. */
  image?: string;
  imageAlt?: string;
  /** Indexable pages appear in the sitemap; others get noindex. */
  indexable: boolean;
  /** Breadcrumb trail (excluding Home), used for BreadcrumbList. */
  breadcrumbs?: { name: string; path: string }[];
  /** Set for service pages to emit Service structured data. */
  service?: { name: string; type: string };
  /** HTTP-style status the page represents (404 for the not-found page). */
  notFound?: boolean;
}

export const DEFAULT_OG_IMAGE = '/og-image.png';
export const DEFAULT_OG_ALT =
  'Varoq: branding, web design, development, SEO and automation';

const home: PageMeta = {
  path: '/',
  title: 'Varoq | Branding, Web Design, SEO & Automation Agency',
  description:
    'Varoq is a digital agency for branding, UI/UX design, web and no-code development, SEO and automation. See our work and book a free discovery call.',
  indexable: true,
};

const staticPages: PageMeta[] = [
  home,
  {
    path: '/about',
    title: 'About Varoq | A Small Team for Design, Web and SEO',
    description:
      'Meet Varoq: how we work, what we believe and the services we offer across branding, UI/UX, web development, no-code, automation and SEO.',
    indexable: true,
    breadcrumbs: [{ name: 'About', path: '/about' }],
  },
  {
    path: '/services',
    title: 'Services | Branding, UI/UX, Web Development & SEO | Varoq',
    description:
      'Everything Varoq offers in one place: branding, UI/UX design, web development, no-code builds, automation and SEO, with clear deliverables for each.',
    indexable: true,
    breadcrumbs: [{ name: 'Services', path: '/services' }],
  },
  {
    path: '/services/branding',
    title: 'Branding & Visual Identity Design | Varoq',
    description:
      'Logo, colour and typography systems and brand guidelines that make your business look credible from the first impression. See what we deliver.',
    indexable: true,
    breadcrumbs: [
      { name: 'Services', path: '/services' },
      { name: 'Branding', path: '/services/branding' },
    ],
    service: { name: 'Branding and visual identity design', type: 'Branding' },
  },
  {
    path: '/services/ui-ux-design',
    title: 'UI/UX & Product Design Services | Varoq',
    description:
      'Research-led UI/UX design for websites and apps: user flows, wireframes, prototypes and polished interfaces ready for development.',
    indexable: true,
    breadcrumbs: [
      { name: 'Services', path: '/services' },
      { name: 'UI/UX design', path: '/services/ui-ux-design' },
    ],
    service: { name: 'UI/UX and product design', type: 'UI/UX design' },
  },
  {
    path: '/services/web-development',
    title: 'Website Design & Development Services | Varoq',
    description:
      'Fast, accessible, search-friendly websites and web apps, built to be easy to use and easy for your team to maintain.',
    indexable: true,
    breadcrumbs: [
      { name: 'Services', path: '/services' },
      { name: 'Web development', path: '/services/web-development' },
    ],
    service: { name: 'Website design and development', type: 'Web development' },
  },
  {
    path: '/services/no-code-development',
    title: 'Webflow, WordPress & No-Code Website Development | Varoq',
    description:
      'Webflow and other no-code builds you can edit yourself: CMS-driven pages, clean handover and a site that stays fast as it grows.',
    indexable: true,
    breadcrumbs: [
      { name: 'Services', path: '/services' },
      { name: 'No-code development', path: '/services/no-code-development' },
    ],
    service: { name: 'No-code and Webflow development', type: 'No-code development' },
  },
  {
    path: '/services/automation',
    title: 'Workflow Automation & n8n Integrations | Varoq',
    description:
      'Connect your forms, CRM, email and spreadsheets so routine work runs itself. Practical workflow automation and integrations, built around how you work.',
    indexable: true,
    breadcrumbs: [
      { name: 'Services', path: '/services' },
      { name: 'Automation', path: '/services/automation' },
    ],
    service: { name: 'Workflow automation and integrations', type: 'Automation' },
  },
  {
    path: '/services/seo',
    title: 'SEO Services: Technical, Content & Local SEO | Varoq',
    description:
      'Search engine optimisation that fixes what holds your site back: technical SEO, content that answers real questions and local search visibility.',
    indexable: true,
    breadcrumbs: [
      { name: 'Services', path: '/services' },
      { name: 'SEO', path: '/services/seo' },
    ],
    service: { name: 'Search engine optimisation', type: 'SEO' },
  },
  {
    path: '/ai-solutions',
    title: 'AI Solutions: Chat Assistants & Automation | Varoq',
    description:
      'Practical AI for your business: chat assistants, document and lead workflows with people kept in the loop. Start with one small workflow.',
    indexable: true,
    breadcrumbs: [{ name: 'AI Solutions', path: '/ai-solutions' }],
    service: { name: 'AI solutions for business workflows', type: 'AI solutions' },
  },
  {
    path: '/work',
    title: 'Our Work | Websites, Branding & UI/UX Projects | Varoq',
    description:
      'Selected websites, brand identities and UI/UX projects by Varoq, with the role we played and what we delivered on each.',
    indexable: true,
    breadcrumbs: [{ name: 'Work', path: '/work' }],
  },
  {
    path: '/contact',
    title: 'Contact Varoq | Start a Project',
    description:
      'Tell us about your project. Reach Varoq by the enquiry form, WhatsApp or email and we will point you in the right direction.',
    indexable: true,
    breadcrumbs: [{ name: 'Contact', path: '/contact' }],
  },
];

export const notFoundMeta: PageMeta = {
  path: '/404',
  title: `Page not found | ${SITE_NAME}`,
  description: 'The page you were looking for does not exist. Try our services, work or contact page.',
  indexable: false,
  notFound: true,
};

/**
 * Only real client projects are indexed. Concepts (original work, written up
 * like a project but not made for a named client) and imported Behance covers
 * stay noindex and out of the sitemap, so search results show verifiable work.
 * To index a concept later, return true for it here.
 */
export const isIndexableStudy = (s: CaseStudy) => !s.isConcept || Boolean(s.liveUrl);

/** Trim to a meta-description length on a word boundary. */
function clip(text: string, max = 155) {
  const t = text.replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  return t.slice(0, max).replace(/\s+\S*$/, '').replace(/[.,;:\s]+$/, '') + '…';
}

function studyMeta(s: CaseStudy): PageMeta {
  const kind = s.isConcept ? 'Concept' : 'Case study';
  return {
    path: `/work/${s.slug}`,
    title: `${s.name}: ${s.category} | ${SITE_NAME}`,
    description: clip(`${kind}: ${s.brief} ${s.approach}`),
    image: s.image,
    imageAlt: s.alt,
    indexable: isIndexableStudy(s),
    breadcrumbs: [
      { name: 'Work', path: '/work' },
      { name: s.name, path: `/work/${s.slug}` },
    ],
  };
}

/** Every real route, in sitemap order. */
export const allPageMeta = (): PageMeta[] => [
  ...staticPages,
  ...caseStudies.map(studyMeta),
];

const normalise = (pathname: string) => {
  const p = pathname.split('?')[0].split('#')[0];
  return p.length > 1 ? p.replace(/\/+$/, '') : p || '/';
};

/** Metadata for a URL path; unknown paths get the not-found metadata. */
export function metaForPath(pathname: string): PageMeta {
  const path = normalise(pathname);
  const fixed = staticPages.find((p) => p.path === path);
  if (fixed) return fixed;
  const m = path.match(/^\/work\/([^/]+)$/);
  if (m) {
    const study = getCaseStudy(m[1]);
    if (study) return studyMeta(study);
  }
  return notFoundMeta;
}
