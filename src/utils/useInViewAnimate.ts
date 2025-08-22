import { animate, stagger } from 'motion';
import { useInView } from 'motion/react';
import { useEffect, useRef } from 'react';
import { delay, delayShort, duration, inViewAnimation } from './animations';
import usePrefersReducedMotion from './usePrefersReducedMotion';

export default function useInViewAnimate(
  name: string,
  speed: 'fast' | 'slow' = 'slow',
) {
  const viewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(viewRef, { margin: '-100px 0px' });
  const prefersReducedMotion = usePrefersReducedMotion();
  const staggerClassName = `${name}-stagger`;
  const staggerDelay = speed === 'fast' ? delayShort : delay;

  useEffect(() => {
    if (isInView) {
      animate(`.${staggerClassName}`, inViewAnimation(prefersReducedMotion), {
        duration,
        delay: stagger(staggerDelay, { startDelay: delay }),
      });
    }
  }, [name, prefersReducedMotion, staggerClassName, staggerDelay, isInView]);

  return { staggerClassName: `${staggerClassName} opacity-0`, viewRef };
}
