import React from 'react';
import Order from './Order';
import Stocklist from './Stocklist';

export default function Portfolio({ name, balance }) {
  return (
    <div>
      <article className="cf">
        <div className="fl w-60 tc">
          <Stocklist name={name} />
        </div>
        <div className="fl w-40 tc">
          <Order name={name} balance={balance} />
        </div>
      </article>
    </div>
  );
}
