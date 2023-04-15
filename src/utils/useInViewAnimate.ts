import { animate, inView, stagger } from 'motion';
import { useEffect, useRef } from 'react';
import {
  delay,
  delayShort,
  duration,
  easeOut,
  inViewAnimation,
} from './animations';
import usePrefersReducedMotion from './usePrefersReducedMotion';

export default function useInViewAnimate(
  name: string,
  speed: 'fast' | 'slow' = 'slow',
) {
  const viewRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const staggerClassName = `${name}-stagger`;
  const staggerDelay = speed === 'fast' ? delayShort : delay;

  useEffect(() => {
    inView(viewRef.current as Element, () => {
      animate(`.${staggerClassName}`, inViewAnimation(prefersReducedMotion), {
        duration,
        easing: easeOut,
        delay: stagger(staggerDelay, { start: delay }),
      });
    });
  }, [name, prefersReducedMotion, staggerClassName, staggerDelay]);

  return { staggerClassName: `${staggerClassName} opacity-0`, viewRef };
}
