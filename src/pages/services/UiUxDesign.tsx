import { Seo } from '../../components/Seo';
import { ServiceDetailPage } from '../../components/ServiceDetailPage';
import { serviceGroups } from '../../data/services';

const group = serviceGroups.find((g) => g.slug === 'ui-ux-design')!;

export default function UiUxDesign() {
  return (
    <>
      <Seo
        title="UI/UX Design Services | Metron Studio"
        description="UX research, wireframing, high-fidelity UI design, and design systems for SaaS, dashboards, and mobile apps — built around how users actually behave."
      />
      <ServiceDetailPage group={group} />
    </>
  );
}
