import { storageKey } from './helpers';
import { stringifiedThemeProperties } from './themeProperties';

const clientCode = `(function() {
  function getInitialTheme() {
    const persistedColorPreference = window.localStorage.getItem(${storageKey});
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

const ThemeScriptTag = (): JSX.Element => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <script dangerouslySetInnerHTML={{ __html: clientCode }} />;
};

export default ThemeScriptTag;
