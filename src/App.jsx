import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Payments from './components/Payments';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2f308b',
      light: '#3f56a1',
      dark: '#2f2474',
      contrastText: '#d9d9f3',
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Payments />
    </ThemeProvider>
  );
}

export default App;
