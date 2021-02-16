export const isLocal = (): boolean => typeof window !== 'undefined';

export const darkModeMediaQuery = (): MediaQueryList => {
  if (!isLocal()) {
    return null;
  }
  return window.matchMedia('(prefers-color-scheme: dark)');
};

export const preferredColorScheme = (): ColorScheme => {
  if (!isLocal()) {
    return 'light';
  } else if (darkModeMediaQuery().matches) {
    return 'dark';
  }
  return 'light';
};

const preferDarkQuery = '(prefers-color-scheme: dark)';

const mql = global.matchMedia ? global.matchMedia(preferDarkQuery) : null;

export const mediaQueryEventTarget = {
  addEventListener: (_, handler) =>
    mql.addEventListener && mql.addEventListener('change', handler),
  removeEventListener: (_, handler) =>
    mql.removeEventListener && mql.removeEventListener('change', handler),
};
