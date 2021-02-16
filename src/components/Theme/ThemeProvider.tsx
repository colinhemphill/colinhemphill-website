import React, { createContext, ReactNode, useState } from 'react';
import darkModeTheme from '../../styles/themeDark.module.scss';
import lightModeTheme from '../../styles/themeLight.module.scss';
import { themeProperties } from './themeProperties';

export const ThemeContext = createContext<{
  darkMode: boolean;
  theme: 'light' | 'dark';
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
}>(null);

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

  const setTheme = (newTheme: Theme) => {
    const root = window.document.documentElement;
    setCurrentTheme(newTheme);

    localStorage.setItem('theme', newTheme);

    Object.entries(themeProperties).forEach(([name, colorByTheme]) => {
      const cssVar = '--color-' + name;
      root.style.setProperty(cssVar, colorByTheme[newTheme]);
    });

    root.style.setProperty(
      '--color-text',
      newTheme === 'light' ? lightModeTheme.text : darkModeTheme.text,
    );
    root.style.setProperty(
      '--color-background-standard',
      newTheme === 'light'
        ? lightModeTheme.backgroundStandard
        : darkModeTheme.backgroundStandard,
    );
    root.style.setProperty(
      '--color-background-alternate',
      newTheme === 'light'
        ? lightModeTheme.backgroundAlternate
        : darkModeTheme.backgroundAlternate,
    );
  };

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
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
  );
};

export default ThemeProvider;
