import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorkSlider } from './components/WorkSlider';
import SmoothScrollHero from './components/ui/smooth-scroll-hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Showcase } from './components/Showcase';
import { CTASection } from './components/CTASection';
import { FAQ } from './components/FAQ';
import { Insights } from './components/Insights';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[2000] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <WorkSlider />
        <Services />
        <SmoothScrollHero
          video="/videos/hero-showreel.mp4"
          scrollHeight={600}
          initialClipPercentage={25}
          finalClipPercentage={75}
        />
        <Process />
        <Showcase />
        <CTASection />
        <FAQ />
        <Insights />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
