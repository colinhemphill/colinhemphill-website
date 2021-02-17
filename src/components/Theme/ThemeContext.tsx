import { createContext } from 'react';

export const ThemeContext = createContext<{
  darkMode: boolean;
  theme: Theme;
  setTheme: (theme: Theme, updateStorage?: boolean) => void;
  toggleTheme: () => void;
}>(null);
