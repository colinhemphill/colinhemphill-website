const plugin = require('tailwindcss/plugin');
const { generate } = require('@k-vyn/coloralgorithm');

const rootSelector = ':root';

const colorboxTailwindPlugin = plugin.withOptions(
  (config) => {
    let rootColors = {};
    let darkModeColors = {};

    config.forEach((colorConfig) => {
      const results = generate(colorConfig.properties, colorConfig.options);
      results.forEach((result) => {
        const colorMap = result.inverted === true ? darkModeColors : rootColors;
        result.colors.forEach((color, step) => {
          const cssVarName = `--${result.name}-${step}`;
          colorMap[cssVarName] = color.hex;
        });
      });
    });

    return ({ addBase, config }) => {
      const [darkMode, className = '.dark'] = [].concat(
        config('darkMode', 'media'),
      );

      if (darkMode === 'class') {
        addBase({
          [rootSelector]: rootColors,
          [className]: darkModeColors,
        });
      } else {
        addBase({
          [rootSelector]: rootColors,
          '@media (prefers-color-scheme: dark)': {
            [rootSelector]: darkModeColors,
          },
        });
      }
    };
  },
  (config) => {
    const themeColors = {};

    config.forEach((colorConfig) => {
      const [result] = generate(colorConfig.properties, colorConfig.options);

      const themeColor = {};
      result.colors.forEach((color, step) => {
        const cssVarName = `--${result.name}-${step}`;
        themeColor[step] = `var(${cssVarName})`;
      });

      themeColors[result.name] = themeColor;
    });

    return {
      theme: {
        extend: {
          colors: themeColors,
        },
      },
    };
  },
);

module.exports = colorboxTailwindPlugin;
