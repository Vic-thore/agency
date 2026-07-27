import { InfiniteSlider } from './ui/infinite-slider-horizontal';
import { projects } from '../data/content';

/**
 * Auto-scrolling strip of portfolio screenshots directly beneath the hero,
 * reusing the same project imagery as the Showcase section further down.
 * Pauses on hover so a project title stays readable if someone's looking.
 */
export function WorkSlider() {
  return (
    <section className="bg-ink py-10" aria-label="Selected work preview">
      <InfiniteSlider gap={24} duration={35} durationOnHover={70}>
        {projects.map((project) => (
          <div
            key={project.client}
            className="h-[220px] w-[320px] shrink-0 overflow-hidden rounded-2xl bg-ink-800"
          >
            <img
              src={project.image}
              alt={project.title}
              width={320}
              height={220}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </InfiniteSlider>
    </section>
  );
}
