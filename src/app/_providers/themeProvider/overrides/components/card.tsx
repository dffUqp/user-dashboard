import { Theme } from '@mui/material/styles';

export function card(theme: Theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          position: 'relative',
          borderRadius: theme.shape.borderRadius * 2,
          zIndex: 0,
          border: '1px solid',
          borderColor: theme.palette.grey[700],
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3),
        },
      },
    },
  };
}
