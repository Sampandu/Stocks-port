import React from 'react';
import { totalValue, currencyNumberFormat } from '../util';

function colorIndicator(latest, open) {
  if (latest === open) {
    return 'grey';
  } else if (latest > open) {
    return 'green';
  } else {
    return 'red';
  }
}

const Stocklist = ({ portfolio }) => {
  return (
    <div>
      <h1 className="tc">{`Portfolio (${currencyNumberFormat(
        totalValue(portfolio)
      )})`}</h1>
      <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
        {portfolio.map(trx => {
          const fontColor = colorIndicator(trx.latest, trx.open);
          return (
            <li
              key={trx.id}
              className="ph3 pv3 bb b--light-silver"
              // style={{ color: fontColor }}
            >
              <strong style={{ color: fontColor }}>{trx.ticker}</strong>
              {` - ${trx.quantity} Shares - Current Values: ${
                trx.latest
                  ? currencyNumberFormat(trx.latest * Number(trx.quantity))
                  : ''
              }`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Stocklist;
