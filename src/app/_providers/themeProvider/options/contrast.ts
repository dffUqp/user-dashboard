import { grey } from '../palette';

export function createContrast(
  contrast: 'default' | 'bold',
  mode: 'light' | 'dark',
) {
  const theme = {
    ...(contrast === 'bold' &&
      mode === 'light' && {
        palette: {
          background: {
            default: grey[200],
          },
        },
      }),
  };

  return theme;
}
