import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';

import Payments from './components/Payments';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Payments />
    </ThemeProvider>
  );
}

export default App;
