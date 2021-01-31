import { useEffect, useState } from 'react';

import { dark, light, Theme } from '../theme';
import { hasWindow } from '../utils';

const getInitialTheme = (): Theme => {
  return hasWindow() &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? dark
    : light;
};

export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    window
      ?.matchMedia('(prefers-color-scheme: dark)')
      ?.addEventListener('change', handleThemeChange);

    return () => {
      window
        ?.matchMedia('(prefers-color-scheme: dark)')
        ?.removeEventListener('change', handleThemeChange);
    };
  }, []);

  const handleThemeChange = (event: MediaQueryListEvent): void => {
    if (event.matches) {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  };

  return {
    theme
  } as const;
};
