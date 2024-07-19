const fCurrency = (inputValue: string | number | null) => {
  if (!inputValue) return '';

  const number = Number(inputValue);

  const fm = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number);

  return fm;
};

export { fCurrency };
