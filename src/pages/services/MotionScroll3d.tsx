import { Seo } from '../../components/Seo';
import { ServiceDetailPage } from '../../components/ServiceDetailPage';
import { serviceGroups } from '../../data/services';

const group = serviceGroups.find((g) => g.slug === 'motion-scroll-3d')!;

export default function MotionScroll3d() {
  return (
    <>
      <Seo
        title="Motion & Scroll-Driven 3D Design | Metron Studio"
        description="Logo and UI animation, Lottie integration, and scroll-triggered 3D product experiences built with Three.js and GSAP."
      />
      <ServiceDetailPage group={group} />
    </>
  );
}
