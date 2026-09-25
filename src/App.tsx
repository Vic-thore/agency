import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToHash } from './components/ScrollToHash';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Branding from './pages/Branding';
import UiUx from './pages/UiUx';
import WebDevelopment from './pages/WebDevelopment';
import NoCodeDevelopment from './pages/NoCodeDevelopment';
import Automation from './pages/Automation';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/branding" element={<Branding />} />
          <Route path="services/ui-ux-design" element={<UiUx />} />
          <Route path="services/web-development" element={<WebDevelopment />} />
          <Route path="services/no-code-development" element={<NoCodeDevelopment />} />
          <Route path="services/automation" element={<Automation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
