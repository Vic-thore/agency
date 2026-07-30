import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToHash } from './components/ScrollToHash';
import Home from './pages/Home';
import About from './pages/About';
import UiUxDesign from './pages/services/UiUxDesign';
import BrandDesign from './pages/services/BrandDesign';
import WebDevelopment from './pages/services/WebDevelopment';
import MotionScroll3d from './pages/services/MotionScroll3d';
import WorkflowAutomation from './pages/services/WorkflowAutomation';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services/ui-ux-design" element={<UiUxDesign />} />
          <Route path="services/brand-design" element={<BrandDesign />} />
          <Route path="services/web-development" element={<WebDevelopment />} />
          <Route path="services/motion-scroll-3d" element={<MotionScroll3d />} />
          <Route path="services/workflow-automation" element={<WorkflowAutomation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
