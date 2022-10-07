import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { CardStyled } from './styles';

function Payments({ receivable, currency }) {
  const [payments, setPayments] = useState();
  const [editIsOpen, setIsEditOpen] = useState(false);

  return (
    <CardStyled>
      <CardActions>
        <Box sx={{ width: '100%' }}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" alignItems="center" color="primary.main">
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Pagos
              </Typography>
              <KeyboardArrowDownIcon />
            </Stack>
            <Stack alignItems="center" direction="row" spacing={2}>
              <Button color="primary" sx={{ textTransform: 'none' }}>
                Editar
                <EditIcon fontSize="small" />
              </Button>
              <Typography color="text.secondary" variant="subtitle1">
                Por cobrar{' '}
                <Typography
                  as="span"
                  color="text.primary"
                  variant="subtitle1"
                  sx={{ fontWeight: 'bold' }}
                >
                  {receivable} {currency}
                </Typography>
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </CardActions>
      <Divider />
      <CardContent></CardContent>
    </CardStyled>
  );
}

export default Payments;
