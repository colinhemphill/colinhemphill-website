import useEventListener from '@use-it/event-listener';
import { useLocalStorage } from 'haversack';
import { createContext, useEffect, useState } from 'react';
import {
  darkModeMediaQuery,
  mediaQueryEventTarget,
  preferredColorScheme,
} from './helpers';

export const ColorSchemeContext = createContext<{
  colorScheme: ColorScheme;
  setColorScheme: (colorScheme: ColorScheme) => void;
}>(null);

interface UseColorSchemeReturn {
  colorScheme: ColorScheme;
  darkMode: boolean;
  toggle: () => void;
}

/**
 * A React hook to determine whether the app should be using a "light" or a "dark" color scheme
 */
const useColorScheme = (): UseColorSchemeReturn => {
  const { value: colorScheme, setValue: setColorScheme } = useLocalStorage(
    'colorScheme',
    preferredColorScheme() || 'light',
  );
  const [darkMode, setDarkMode] = useState<boolean>(colorScheme === 'dark');

  const toggle = () => {
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (colorScheme === 'dark') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [colorScheme]);

  useEventListener(
    'change',
    (e) => {
      const useDarkMode = e.matches;
      setColorScheme(useDarkMode ? 'dark' : 'light');
    },
    mediaQueryEventTarget,
  );

  return {
    colorScheme,
    darkMode,
    toggle,
  };
};

export default useColorScheme;
