import React from 'react';
import Order from './Order';

const Portfolio = () => {
  return (
    <article className="cf">
      <div className="fl w-60 tc">
        <article className="center pa3 pa5-ns">
          <h1 className='tc'>Portfolio ($5000.00)</h1>
          <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
            <li className="ph3 pv3 bb b--light-silver">Mackeral Tabby</li>
            <li className="ph3 pv3 bb b--light-silver">Burmese</li>
            <li className="ph3 pv3 bb b--light-silver">Orange Tabby</li>
            <li className="ph3 pv3 bb b--light-silver">Maine Coon</li>
            <li className="ph3 pv3 bb b--light-silver">Siamese</li>
            <li className="ph3 pv3 bb b--light-silver">Scottish Fold</li>
            <li className="ph3 pv3">American Bobtail</li>
          </ul>
        </article>
      </div>
      <div className="fl w-40 tc">
        <Order />
      </div>
    </article>
  )
}

export default Portfolio
