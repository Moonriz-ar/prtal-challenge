import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(52, 96, 220, 1)',
      light: 'rgba(126, 152, 233, 1)',
      dark: 'rgba(21, 67, 208, 1)',
      contrastText: 'rgba(232, 238, 255, 1)',
    },
    secondary: {
      main: '#00f297',
      light: '#9affe8',
      dark: '#0dc07c',
      contrastText: '#033f29',
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
  },
});
