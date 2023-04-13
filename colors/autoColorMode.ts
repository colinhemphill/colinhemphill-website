import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

type Neutrals = 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone';

type Accents =
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose';

interface AutoColorModeProps {
  danger?: Accents;
  neutral: Neutrals;
  primary: Accents;
  success?: Accents;
  warning?: Accents;
}

interface Color {
  [shade: string]: string;
}

interface Colors {
  [varName: string]: any;
}

const rootSelector = ':root';
const lightShades = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
];
const darkShades = [
  '950',
  '900',
  '800',
  '700',
  '600',
  '500',
  '400',
  '300',
  '200',
  '100',
  '50',
];

const autoColorMode = plugin.withOptions(
  ({
    danger = 'red',
    neutral,
    primary,
    success = 'green',
    warning = 'amber',
  }: AutoColorModeProps) => {
    const lightModeColors: Colors = {};
    const darkModeColors: Colors = {};

    lightShades.forEach((shade, step) => {
      const dangerColor = colors[danger] as Color;
      const neutralColor = colors[neutral] as Color;
      const primaryColor = colors[primary] as Color;
      const successColor = colors[success] as Color;
      const warningColor = colors[warning] as Color;
      lightModeColors[`--${danger}-${step}`] = dangerColor[shade];
      lightModeColors[`--${neutral}-${step}`] = neutralColor[shade];
      lightModeColors[`--${primary}-${step}`] = primaryColor[shade];
      lightModeColors[`--${success}-${step}`] = successColor[shade];
      lightModeColors[`--${warning}-${step}`] = warningColor[shade];
    });
    darkShades.forEach((shade, step) => {
      const dangerColor = colors[danger] as Color;
      const neutralColor = colors[neutral] as Color;
      const primaryColor = colors[primary] as Color;
      const successColor = colors[success] as Color;
      const warningColor = colors[warning] as Color;
      darkModeColors[`--${danger}-${step}`] = dangerColor[shade];
      darkModeColors[`--${neutral}-${step}`] = neutralColor[shade];
      darkModeColors[`--${primary}-${step}`] = primaryColor[shade];
      darkModeColors[`--${success}-${step}`] = successColor[shade];
      darkModeColors[`--${warning}-${step}`] = warningColor[shade];
    });

    return ({ addBase, config }) => {
      const [darkMode, className = '.dark'] = [].concat(
        config('darkMode') || 'media',
      );

      if (darkMode === 'class') {
        addBase({
          [rootSelector]: lightModeColors,
          [className]: darkModeColors,
        });
      } else {
        addBase({
          [rootSelector]: lightModeColors,
          '@media (prefers-color-scheme: dark)': {
            [rootSelector]: darkModeColors,
          },
        });
      }
    };
  },
  ({
    danger = 'red',
    neutral,
    primary,
    success = 'green',
    warning = 'amber',
  }) => {
    const themeColors = {
      // base colors
      current: 'currentColor',
      black: '#000000',
      transparent: 'transparent',
      white: '#ffffff',

      // semantic colors
      danger: lightShades.reduce((acc, shade, step) => {
        return { ...acc, [step]: `var(--${danger}-${step})` };
      }, {}),
      neutral: lightShades.reduce((acc, shade, step) => {
        return { ...acc, [step]: `var(--${neutral}-${step})` };
      }, {}),
      primary: lightShades.reduce((acc, shade, step) => {
        return { ...acc, [step]: `var(--${primary}-${step})` };
      }, {}),
      success: lightShades.reduce((acc, shade, step) => {
        return { ...acc, [step]: `var(--${success}-${step})` };
      }, {}),
      warning: lightShades.reduce((acc, shade, step) => {
        return { ...acc, [step]: `var(--${warning}-${step})` };
      }, {}),
    };

    return {
      theme: {
        colors: themeColors,
      },
    };
  },
);

export default autoColorMode;
