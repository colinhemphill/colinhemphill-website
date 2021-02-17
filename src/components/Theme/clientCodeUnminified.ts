import { stringifiedThemeProperties } from './themeProperties';

// this is an un-minified copy of the client code used
// in ThemeScriptTag.tsx
// if it needs to be modified, run it through terser by hand
// and update the script file
const forReferenceDoNotUse = `(function() {
  function getInitialTheme() {
    const persistedColorPreference = window.localStorage.getItem('theme');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';

    if (hasPersistedPreference) {
      return persistedColorPreference;
    }

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }

    return 'light';
  }

  const theme = getInitialTheme();
  const root = document.documentElement;

  Object.entries(${stringifiedThemeProperties}).forEach(([name, colorByTheme]) => {
    const cssVar = '--color-' + name;
    root.style.setProperty(cssVar, colorByTheme[theme]);
  });

  root.style.setProperty('--initial-theme', theme);
})()`;

export default null;
