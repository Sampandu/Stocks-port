import React, { Component } from 'react';
import Order from './Order';
import Stocklist from './Stocklist';
import Loading from './Loading';
import ErrorBoundry from './ErrorBoundry';
import { totalValue, currencyNumberFormat } from '../util';

import { Dimmer, Segment } from 'semantic-ui-react';
import axios from 'axios';

export default class Portfolio extends Component {
  state = {
    portfolio: [],
    isPending: false,
  };

  componentDidMount() {
    const name = this.props.name;
    this.setState({ isPending: true });
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
        this.setState({ isPending: false });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { name, balance } = this.props;
    const { portfolio, isPending } = this.state;

    return (
      <Dimmer.Dimmable as={Segment} dimmed={isPending}>
        <Loading isPending={isPending} />

        <article className="cf">
          <legend className="w-60 pl5 f3 fw6 ml5">{`Welcome ${name}`}</legend>
          {!portfolio.length ? (
            <legend className="w-60 pl5 f3 fw6 ml5 mt4">{`Your portfolio is empty`}</legend>
          ) : (
            <legend className="w-60 pl5 f3 fw6 ml5 mt4">{`Portfolio (${currencyNumberFormat(
              totalValue(portfolio)
            )})`}</legend>
          )}
          <div className="fl w-60 center pl4 ml5 b--transparent">
            <ErrorBoundry>
              <Stocklist name={name} portfolio={portfolio} />
            </ErrorBoundry>
          </div>
          <div className="fl w-40 tc vl b--transparent">
            <Order name={name} balance={balance} />
          </div>
        </article>
      </Dimmer.Dimmable>
    );
  }
}
