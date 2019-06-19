import React from 'react';
import { totalValue, currencyNumberFormat, colorIndicator } from '../util';

export default function Stocklist({ name, portfolio }) {
  return (
    <article className="center pa3 pa5-ns">
      <h1>{`Welcome ${name}`}</h1>
      {!portfolio.length ? (
        <h1>{`Your portfolio is empty`}</h1>
      ) : (
        <div>
          <h1 className="tc">{`Portfolio (${currencyNumberFormat(
            totalValue(portfolio)
          )})`}</h1>
          <div className="pa1 pa2-ns">
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
                  {` @ ${trx.quantity} Shares       Values: ${
                    trx.latest
                      ? currencyNumberFormat(trx.latest * Number(trx.quantity))
                      : ''
                  }`}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}
