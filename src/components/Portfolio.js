import React, { Component } from 'react';
import axios from 'axios';
import Order from './Order';
import Stocklist from './Stocklist';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: [],
    };
  }

  componentDidMount() {
    const name = this.props.name;
    axios
      .get(`http://localhost:3001/portfolio?name=${name}`)
      .then(response => response.data)
      .then(data => {
        if (data.length > 0) this.setState({ portfolio: data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const portfolio = this.state.portfolio || [];

    return (
      <div>
        <article className="cf">
          <div className="fl w-60 tc">
            <article className="center pa3 pa5-ns">
              {portfolio.length === 0 ? (
                <h1>{`Your portfolio is empty`}</h1>
              ) : (
                <Stocklist portfolio={portfolio} />
              )}
            </article>
          </div>
          <div className="fl w-40 tc">
            <Order />
          </div>
        </article>
        <footer>
          <a href="https://iexcloud.io">Data provided by IEX Cloud</a>
        </footer>
      </div>
    );
  }
}

export default Portfolio;
