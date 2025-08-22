import { BezierDefinition, StyleKeyframesDefinition } from 'motion';

export const easeOut: BezierDefinition = [0, 0, 0.2, 1];

export const delay = 0.5;
export const delayShort = 0.1;

export const duration = 0.7;

export const inViewAnimation = (
  prefersReducedMotion: boolean,
): StyleKeyframesDefinition => ({
  opacity: [0.0, 1.0],
  y: prefersReducedMotion ? [0.0] : [16.0, 0.0],
});
