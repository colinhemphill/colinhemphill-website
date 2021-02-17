export const storageKey = 'theme';

export const supportsTheme = (): boolean =>
  window.matchMedia('(prefers-color-scheme)').media !== 'not all';

export const getMediaQuery = (): MediaQueryList =>
  window.matchMedia('(prefers-color-scheme: dark)');

export const usingSystemTheme = (): boolean => {
  return supportsTheme() && localStorage.getItem(storageKey) === null;
};
