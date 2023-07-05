export const formatMoney = Intl.NumberFormat('pt-pt', {
  style: 'currency',
  currency: 'EUR',
});

export const formatDate = Intl.DateTimeFormat('pt-pt', {
  dateStyle: 'medium',
  timeStyle: 'short',
});

export const formatNumber = Intl.NumberFormat('pt-pt', {
  minimumFractionDigits: 2,
});
