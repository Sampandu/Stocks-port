//calculate the total value of a portfolio
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
  }).format(Number(num));
};

//change the font color of a stock according to the latest price and open price
const colorIndicator = (latest, open) => {
  if (latest === open) {
    return 'grey';
  } else if (latest > open) {
    return 'green';
  } else {
    return 'red';
  }
};

export { totalValue, currencyNumberFormat, colorIndicator };
