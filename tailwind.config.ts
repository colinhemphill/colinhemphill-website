import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import autoColorMode from './colors/autoColorMode';

// @ts-ignore
import tailwindHighlight from 'tailwind-highlightjs';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './mdx-components.tsx',
    './content/**/*.{md,mdx}',
  ],
  darkMode: 'media',
  plugins: [
    autoColorMode({
      neutral: 'zinc',
      primary: 'cyan',
    }),
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('group-hocus', [
        ':merge(.group):hover &',
        ':merge(.group):focus &',
      ]);
    }),
    tailwindHighlight,
  ],
  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
  theme: {
    hljs: {
      theme: 'atom-one-dark',
      custom: {
        base: {
          background: 'transparent',
        },
      },
    },
    extend: {
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)'],
        sans: ['var(--font-inter)'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '2rem',
          lg: '4rem',
          xl: '6rem',
          '2xl': '10rem',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
} satisfies Config;
