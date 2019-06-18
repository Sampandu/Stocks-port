import React, { Component } from 'react';
import axios from 'axios';
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

export default class Stocklist extends Component {
  state = {
    portfolio: [],
  };

  componentDidMount() {
    const name = this.props.name;
    this.updateFrequence = setInterval(() => this.fetchedPofolio(name), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.updateFrequence);
  }

  fetchedPofolio(name) {
    axios
      .get(`http://localhost:3001/portfolio?name=${name}`)
      .then(response => response.data)
      .then(data => {
        data.length > 0 && this.setState({ portfolio: data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const portfolio = this.state.portfolio;
    const name = this.props.name;
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
            <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
              {portfolio.map(trx => {
                const fontColor = colorIndicator(trx.latest, trx.open);
                return (
                  <li key={trx.id} className="ph3 pv3 bb b--light-silver">
                    <strong style={{ color: fontColor }}>{trx.ticker}</strong>
                    {` - ${trx.quantity} Shares - Current Values: ${
                      trx.latest
                        ? currencyNumberFormat(
                            trx.latest * Number(trx.quantity)
                          )
                        : ''
                    }`}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </article>
    );
  }
}
