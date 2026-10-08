/**
 * Layout artwork (photos, background art, icon sets) is still served from the
 * source site's public CDN path rather than re-hosted locally. Every consumer
 * of these URLs sets an explicit width/height (or a fixed-height container),
 * so a failed request leaves a coloured box instead of shifting the layout.
 * This is purely an asset host, not a link out — nothing on the page should
 * ever navigate a visitor to `ORIGIN` itself; in-page anchors and `#`
 * placeholders are used for that instead (see navigation.ts / content.ts).
 */
export const ORIGIN = 'https://zeeframes.com';
export const IMG = `${ORIGIN}/frontend-assets/images`;
export const SVG = `${IMG}/svgs`;
export const SERVICE_ICON = `${IMG}/services-icons`;

export const SITE_NAME = 'Varoq';

/**
 * WhatsApp contact number in international format, digits only, no "+"
 * (e.g. '2348012345678'). The WhatsApp button stays hidden until this is set.
 */
export const WHATSAPP_NUMBER = '';
export const WHATSAPP_MESSAGE = `Hi ${SITE_NAME}, I'd like to talk about a project.`;
export const whatsappHref = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
