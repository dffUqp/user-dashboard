'use client';

import { FC, PropsWithChildren, useMemo } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
} from '@mui/material/styles';

import { createContrast } from './options/contrast';
import { createPresets } from './options/presets';
import { componentsOverrides } from './overrides';
import { palette } from './palette';
import { typography } from './typography';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const presets = createPresets('default');

  const contrast = createContrast('default', 'dark');

  const memoizedValue = useMemo(
    () => ({
      palette: {
        ...palette('dark'),
        ...presets.palette,
        ...contrast.palette,
      },
      shape: { borderRadius: 8 },
      typography,
    }),
    [presets.palette, contrast.palette],
  );

  const theme = createTheme(memoizedValue as ThemeOptions);

  theme.components = componentsOverrides(theme);

  const themeWithLocale = useMemo(() => createTheme(theme), [theme]);

  return (
    <MuiThemeProvider theme={themeWithLocale}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export { ThemeProvider };
