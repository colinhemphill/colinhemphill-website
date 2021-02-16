import darkModeTheme from '../../styles/themeDark.module.scss';
import lightModeTheme from '../../styles/themeLight.module.scss';

interface ThemeProperty {
  dark: string;
  light: string;
}

export const themeProperties: { [name: string]: ThemeProperty } = {
  'background-alternate': {
    dark: darkModeTheme.backgroundAlternate,
    light: lightModeTheme.backgroundAlternate,
  },
  'background-standard': {
    dark: darkModeTheme.backgroundStandard,
    light: lightModeTheme.backgroundStandard,
  },
  card: { dark: darkModeTheme.card, light: lightModeTheme.card },
  primary: {
    dark: darkModeTheme.primary,
    light: lightModeTheme.primary,
  },
  text: {
    dark: darkModeTheme.text,
    light: lightModeTheme.text,
  },
};

export const stringifiedThemeProperties = JSON.stringify(themeProperties);
