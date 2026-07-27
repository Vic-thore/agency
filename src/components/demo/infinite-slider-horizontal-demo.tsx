import { InfiniteSlider } from '@/components/ui/infinite-slider-horizontal';

// Standalone reference demo. Not mounted anywhere in this single-page app
// (there's no router) — kept for reference/preview purposes. `next/image`
// from the original snippet is swapped for a plain <img>, since this is a
// Vite app rather than Next.js.
const images = [
  {
    title: 'Image 1',
    image: 'https://cdn.pixabay.com/photo/2024/09/20/05/39/panda-9060543_640.jpg',
  },
  {
    title: 'Image 2',
    image: 'https://cdn.pixabay.com/photo/2024/04/12/18/18/ai-generated-8692405_1280.jpg',
  },
  {
    title: 'Image 3',
    image: 'https://cdn.pixabay.com/photo/2024/01/10/03/29/ai-generated-8498790_1280.jpg',
  },
  {
    title: 'Image 4',
    image: 'https://cdn.pixabay.com/photo/2024/05/30/17/23/bicycle-8798997_640.jpg',
  },
  {
    title: 'Image 5',
    image: 'https://cdn.pixabay.com/photo/2024/05/26/10/26/ai-generated-8788505_960_720.jpg',
  },
];

export function InfiniteSliderHorizontal() {
  return (
    <div className="flex h-[400px] flex-col justify-center gap-4">
      <div className="mx-auto flex w-full max-w-max items-center space-x-4">
        <InfiniteSlider direction="horizontal">
          {images.map((image) => (
            <div key={image.title} className="aspect-square w-[120px] rounded-[4px]">
              <img
                src={image.image}
                alt={image.title}
                width={1200}
                height={1200}
                className="h-full w-full rounded-[4px] object-cover"
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
      <div className="mx-auto flex w-full max-w-max items-center space-x-4">
        <InfiniteSlider direction="horizontal" reverse>
          {images.map((image) => (
            <div key={image.title} className="aspect-square w-[120px] rounded-[4px]">
              <img
                src={image.image}
                alt={image.title}
                width={1200}
                height={1200}
                className="h-full w-full rounded-[4px] object-cover"
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}
