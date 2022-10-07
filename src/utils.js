export const calculatePercentage = (installment, total) => {
  return ((installment / total) * 100).toFixed(1);
};
