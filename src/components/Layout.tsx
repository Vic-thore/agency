import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
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
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
