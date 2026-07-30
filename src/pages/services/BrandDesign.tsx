import { Seo } from '../../components/Seo';
import { ServiceDetailPage } from '../../components/ServiceDetailPage';
import { serviceGroups } from '../../data/services';

const group = serviceGroups.find((g) => g.slug === 'brand-design')!;

export default function BrandDesign() {
  return (
    <>
      <Seo
        title="Brand Design Services | Metron Studio"
        description="Brand naming with trademark screening, logo and monogram design, color and typography systems, and brand guidelines built to hold up under scrutiny."
      />
      <ServiceDetailPage group={group} />
    </>
  );
}
