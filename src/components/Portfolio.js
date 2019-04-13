import React from 'react';
import Buyshare from './Buyshare';

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio ($5000.00)</h1>
      <article class="pa3 pa5-ns">
        <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
          <li class="ph3 pv3 bb b--light-silver">Mackeral Tabby</li>
          <li class="ph3 pv3 bb b--light-silver">Burmese</li>
          <li class="ph3 pv3 bb b--light-silver">Orange Tabby</li>
          <li class="ph3 pv3 bb b--light-silver">Maine Coon</li>
          <li class="ph3 pv3 bb b--light-silver">Siamese</li>
          <li class="ph3 pv3 bb b--light-silver">Scottish Fold</li>
          <li class="ph3 pv3">American Bobtail</li>
        </ul>
      </article>
      <Buyshare />
    </div>
  )
}

export default Portfolio
