import { useState } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { v4 as uuidv4 } from 'uuid';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Installment from './components/Installment';
import {
  AddButtonStyled,
  ButtonContainer,
  CardStyled,
  ContainerStyled,
} from './styles';

function Payments({ receivable, currency }) {
  const [payments, setPayments] = useState({
    currency,
    installments: [
      {
        amount: receivable,
        name: 'Anticipo',
        id: uuidv4(),
        paid: false,
        paymentDate: format(Date.now(), 'd MMM, yyyy', { locale: es }),
      },
    ],
    total: receivable,
  });
  const [editIsOpen, setIsEditOpen] = useState(false);

  return (
    <>
      {payments && (
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
                    <Typography as="span" mr={1}>
                      Editar
                    </Typography>{' '}
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
          <CardContent>
            <ContainerStyled>
              <ButtonContainer>
                <AddButtonStyled className="first">+</AddButtonStyled>
              </ButtonContainer>
              <Stack
                alignItems="flex-start"
                direction="row"
                sx={{ overflow: 'auto' }}
              >
                {payments?.installments?.map((installment) => (
                  <Stack key={installment.id} direction="row">
                    <Installment
                      currency={payments.currency}
                      installment={installment}
                      total={payments.total}
                    />
                    <ButtonContainer>
                      <AddButtonStyled>+</AddButtonStyled>
                    </ButtonContainer>
                  </Stack>
                ))}
              </Stack>
            </ContainerStyled>
          </CardContent>
        </CardStyled>
      )}
    </>
  );
}

export default Payments;
