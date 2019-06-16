const totalValue = arr => {
  var result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].quantity * arr[i].latest;
  }
  return result;
};

const currencyNumberFormat = num => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num);
};

export { totalValue, currencyNumberFormat };
