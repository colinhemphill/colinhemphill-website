import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: no-preference)';

export default function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQueryList = globalThis.matchMedia(QUERY);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPrefersReducedMotion(!globalThis.matchMedia(QUERY).matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(!event.matches);
    };

    mediaQueryList.addEventListener('change', listener);
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, []);

  return prefersReducedMotion;
}
