import { lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToHash } from './components/ScrollToHash';
import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Branding = lazy(() => import('./pages/Branding'));
const UiUx = lazy(() => import('./pages/UiUx'));
const WebDevelopment = lazy(() => import('./pages/WebDevelopment'));
const NoCodeDevelopment = lazy(() => import('./pages/NoCodeDevelopment'));
const Automation = lazy(() => import('./pages/Automation'));
const Seo = lazy(() => import('./pages/Seo'));
const Work = lazy(() => import('./pages/Work'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const AiSolutions = lazy(() => import('./pages/AiSolutions'));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
          <Route path="work/:slug" element={<CaseStudy />} />
          <Route path="services" element={<Services />} />
          <Route path="services/branding" element={<Branding />} />
          <Route path="services/ui-ux-design" element={<UiUx />} />
          <Route path="services/web-development" element={<WebDevelopment />} />
          <Route path="services/no-code-development" element={<NoCodeDevelopment />} />
          <Route path="services/automation" element={<Automation />} />
          <Route path="services/seo" element={<Seo />} />
          <Route path="ai-solutions" element={<AiSolutions />} />
          <Route path="services/ai-solutions" element={<Navigate to="/ai-solutions" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
