import React, { Component } from 'react';
import axios from 'axios';
import FormValidation from './FormValidation';
import { currencyNumberFormat } from '../util';

class Order extends Component {
  state = {
    ticker: '',
    quantity: '',
    isOrdered: false,
    notEnoughCash: false,
    balance: 0,
    tickersList: [],
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onOrderSubmit = () => {
    axios
      .post('http://localhost:3001/order', {
        name: this.props.name,
        ticker: this.state.ticker,
        quantity: Number(this.state.quantity),
      })
      .then(response => response.data)
      .then(result => {
        result === 'not enough cash' && this.setState({ notEnoughCash: true });
        result.id &&
          this.setState({ isOrdered: true, balance: result.balance });
        this.setState({ ticker: '', quantity: '' });
      })
      .then(() => {
        setTimeout(
          () =>
            this.setState({
              notEnoughCash: false,
              isOrdered: false,
            }),
          2000
        );
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    const balance = this.props.balance;
    axios
      .get('http://localhost:3001/tickersList')
      .then(response => response.data)
      .then(tickersList => this.setState({ tickersList, balance }))
      .catch(err => console.log(err));
  }

  render() {
    const {
      ticker,
      quantity,
      isOrdered,
      notEnoughCash,
      balance,
      tickersList,
    } = this.state;

    return (
      <main className="pa4 black-80 center">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0 center">
              {`Cash - ${currencyNumberFormat(balance)}`}
            </legend>
            <div className="mt3">
              <input
                onChange={this.handleChange}
                className="br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                placeholder="ticker"
                name="ticker"
                id="ticker"
                value={ticker}
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
                value={quantity}
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
          <FormValidation
            ticker={ticker}
            quantity={quantity}
            isOrdered={isOrdered}
            notEnoughCash={notEnoughCash}
            // id={id}
            tickersList={tickersList}
          />
        </div>
      </main>
    );
  }
}

export default Order;
