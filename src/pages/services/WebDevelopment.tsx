import { Seo } from '../../components/Seo';
import { ServiceDetailPage } from '../../components/ServiceDetailPage';
import { serviceGroups } from '../../data/services';

const group = serviceGroups.find((g) => g.slug === 'web-development')!;

export default function WebDevelopment() {
  return (
    <>
      <Seo
        title="Web Development Services | Metron Studio"
        description="Custom Webflow, WordPress, and Shopify builds — landing pages, corporate sites, ecommerce stores, and ongoing care plans, designed in Figma first."
      />
      <ServiceDetailPage group={group} />
    </>
  );
}
