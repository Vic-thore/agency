/**
 * The original site serves its artwork from a public CDN path. We point at it
 * directly rather than re-hosting the files. Every consumer of these URLs sets
 * an explicit width/height (or a fixed-height container), so a failed request
 * leaves a coloured box instead of shifting the layout.
 */
export const ORIGIN = 'https://zeeframes.com';
export const IMG = `${ORIGIN}/frontend-assets/images`;
export const SVG = `${IMG}/svgs`;
export const SERVICE_ICON = `${IMG}/services-icons`;

export const CALENDLY =
  'https://calendly.com/contact-zeeframes/30min?month=2025-11';

export const FIGMA_PROTO =
  'https://www.figma.com/proto/Wvc5EAdw0leAMdlJ3tF6Be/ZeeFrames-Portfolio-New-Branding';
