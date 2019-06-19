import React, { Component } from 'react';
import Order from './Order';
import Stocklist from './Stocklist';
import Loading from './Loading';
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
          <div className="fl w-60 tc">
            <Stocklist name={name} portfolio={portfolio} />
          </div>
          <div className="fl w-40 tc">
            <Order name={name} balance={balance} />
          </div>
        </article>
      </Dimmer.Dimmable>
    );
  }
}
