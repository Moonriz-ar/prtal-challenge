import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { calculatePercentage } from '../../../../utils';
import { Circle } from './styles';

function Installment({ currency, installment, total }) {
  return (
    <Stack alignItems="center" justifyContent="center" spacing={1}>
      <Circle />
      <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1">
        {installment.name}
      </Typography>
      <Typography variant="body2">
        <Typography as="span" sx={{ fontWeight: 'bold' }} variant="body2">
          {installment.amount} {currency}
        </Typography>{' '}
        {`(${calculatePercentage(installment.amount, total)})%`}
      </Typography>
      <Typography variant="body2">{installment.paymentDate}</Typography>
    </Stack>
  );
}

export default Installment;
