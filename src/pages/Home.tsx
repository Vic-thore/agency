import { Hero } from '../components/Hero';
import { WorkSlider } from '../components/WorkSlider';
import { WorkPreviewHero } from '../components/WorkPreviewHero';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { Showcase } from '../components/Showcase';
import { CTASection } from '../components/CTASection';
import { FAQ } from '../components/FAQ';
import { Insights } from '../components/Insights';
import { Contact } from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSlider />
      <Services />
      <WorkPreviewHero />
      <Process />
      <Showcase />
      <CTASection />
      <FAQ />
      <Insights />
      <Contact />
    </>
  );
}
