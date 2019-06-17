import React, { Component } from 'react';
import axios from 'axios';
import FormValidationError from './FormValidationError';

class Order extends Component {
  state = {
    ticker: '',
    quantity: 0,
    tickersList: [],
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log('++++', this.state.ticker);
    console.log('---', this.state.tickersList.includes(this.state.ticker));
  };

  onOrderSubmit = () => {
    axios
      .post('http://localhost:3001/order', {
        name: this.props.name,
        ticker: this.state.ticker,
        quantity: Number(this.state.quantity),
      })
      .then(response => response.data)
      .then(result => console.log('-----', result))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    axios
      .get('http://localhost:3001/tickersList')
      .then(response => response.data)
      .then(tickersList => this.setState({ tickersList }))
      .catch(err => console.log(err));
  }

  render() {
    const ticker = this.state.ticker;
    const quantity = Number(this.state.quantity);
    const tickersList = this.state.tickersList;

    return (
      <div>
        <article className="center pa3 pa5-ns">
          <main className="pa4 black-80 center">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f3 fw6 ph0 mh0 center">
                  Cash - $5000.00
                </legend>
                <div className="mt3">
                  <input
                    onChange={this.handleChange}
                    className="br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    placeholder="ticker"
                    name="ticker"
                    id="ticker"
                  />
                </div>
                <div className="mt3">
                  <input
                    onChange={this.handleChange}
                    className="br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="quantity"
                    placeholder="Qty"
                    name="quantity"
                    id="email-address"
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  className="b br3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center"
                  type="submit"
                  onClick={this.onOrderSubmit}
                  value="Buy"
                />
              </div>
            </div>
          </main>
        </article>
        <FormValidationError
          ticker={ticker}
          quantity={quantity}
          tickersList={tickersList}
        />
      </div>
    );
  }
}

export default Order;
