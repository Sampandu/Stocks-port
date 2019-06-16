import React from 'react';
import { totalValue, currencyNumberFormat } from '../util';

const Stocklist = ({ portfolio }) => {
  return (
    <div>
      <h1 className="tc">{`Portfolio (${currencyNumberFormat(
        totalValue(portfolio)
      )})`}</h1>
      <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
        {portfolio.map(trx => (
          <li key={trx.id} className="ph3 pv3 bb b--light-silver">{`${
            trx.ticker
          } - ${trx.quantity} Shares - Current Values: ${
            trx.latest
              ? currencyNumberFormat(trx.latest * Number(trx.quantity))
              : ''
          }`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Stocklist;
