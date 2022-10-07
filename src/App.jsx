import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Payments from './components/Payments';
import { theme } from './theme';

// mock data
const RECEIVABLE = 182;
const CURRENCY = 'UF';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box my={4}>
          <Payments receivable={RECEIVABLE} currency={CURRENCY} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
