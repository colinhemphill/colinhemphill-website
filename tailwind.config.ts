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
    },
  },
} satisfies Config;
