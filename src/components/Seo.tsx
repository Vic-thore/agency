import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
}

/** Sets per-page <title> and meta description on mount/update. */
export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [title, description]);

  return null;
}
