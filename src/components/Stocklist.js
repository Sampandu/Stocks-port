import React from 'react';
import { currencyNumberFormat, colorIndicator } from '../util';

export default function Stocklist({ name, portfolio }) {
  return (
    <div className="pa3 pa2-ns">
      <ul className="list pl0 measure center">
        {portfolio.map(trx => (
          <li
            key={trx.id}
            className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30"
          >
            <strong
              style={{
                color: colorIndicator(trx.latest, trx.open),
              }}
            >
              {trx.ticker}
            </strong>
            {` @ ${trx.quantity} Shares`}
            <label className="tr">
              {trx.latest
                ? currencyNumberFormat(trx.latest * Number(trx.quantity))
                : ''}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
