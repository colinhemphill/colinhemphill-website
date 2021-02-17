import React, { ReactNode, useEffect, useState } from 'react';
import { getMediaQuery, storageKey, usingSystemTheme } from './helpers';
import { ThemeContext } from './ThemeContext';
import { themeProperties } from './themeProperties';
import ThemeScriptTag from './ThemeScriptTag';

interface Props {
  children?: ReactNode;
}

const ThemeProvider = (props: Props): JSX.Element => {
  const { children } = props;
  const [currentTheme, setCurrentTheme] = useState(undefined);

  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue('--initial-theme');
    setCurrentTheme(initialColorValue);
  }, []);

  const setTheme = (newTheme: Theme, updateStorage = true) => {
    const root = window.document.documentElement;
    setCurrentTheme(newTheme);

    Object.entries(themeProperties).forEach(([name, colorByTheme]) => {
      const cssVar = '--color-' + name;
      root.style.setProperty(cssVar, colorByTheme[newTheme]);
    });

    if (updateStorage) {
      localStorage.setItem(storageKey, newTheme);
    }
  };

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme, true);
  };

  // listen for changes to localStorage to sync tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key !== storageKey) {
        return;
      }

      const newTheme = e.newValue as Theme;
      setTheme(newTheme, false);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // listen for changes to system theme
  useEffect(() => {
    const handleSystemThemeChange = (e) => {
      const isDark = e.matches;
      const systemTheme = isDark ? 'dark' : 'light';

      // ignore system change if user has set the theme manually
      if (usingSystemTheme()) {
        setTheme(systemTheme, false);
      }
    };

    const mediaQuery = getMediaQuery();
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () =>
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  return (
    <>
      <ThemeScriptTag />
      <ThemeContext.Provider
        value={{
          darkMode: currentTheme === 'dark',
          setTheme,
          theme: currentTheme,
          toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
