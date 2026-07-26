import { clientLogos } from '../data/content';

/**
 * Infinite logo marquee. The list is rendered twice and the track is
 * translated by -50%, which loops seamlessly at any content width.
 */
export function ClientLogos() {
  if (clientLogos.length === 0) return null;

  const loop = [...clientLogos, ...clientLogos];

  return (
    <div className="marquee">
      <div className="container-zf overflow-hidden">
        <p className="text-center font-inter text-[14px] font-medium uppercase leading-none text-white">
          Trusted by Industry Leaders &amp; Fast-Growing Startups
        </p>

        <div className="mt-6 py-5" aria-label="Clients we have worked with">
          <div className="marquee-track">
            {loop.map((logo, i) => (
              <div
                className="marquee-item"
                key={`${logo.alt}-${i}`}
                aria-hidden={i >= clientLogos.length}
              >
                <img
                  src={logo.src}
                  alt={i < clientLogos.length ? logo.alt : ''}
                  width={logo.width}
                  height={32}
                  loading="lazy"
                  decoding="async"
                  className="h-8 w-auto max-w-none object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
