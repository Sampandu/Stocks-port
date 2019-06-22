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
  _isMounted = false;

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

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
    const name = this.props.name;
    this._isMounted = true;
    //get the full list of tickers supported by the third party API, and check if the user's ticker is valid.
    const getTickersList = () => {
      return axios
        .get('http://localhost:3001/tickersList')
        .then(res => res.data);
    };

    //get the latest balance
    const getBalance = () => {
      return axios
        .get(`http://localhost:3001/balance?name=${name}`)
        .then(res => res.data);
    };

    axios
      .all([getTickersList(), getBalance()])
      .then(
        axios.spread((tickersList, balance) => {
          if (this._isMounted) {
            this.setState({ tickersList, balance });
          }
        })
      )
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    this._isMounted = false;
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
    const buttonDisabled = ticker.length === 0 || quantity <= 0 ? true : false;

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
                id="quantity"
                value={quantity}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b br3 ph3 pv2 input-reset ba bg-moon-gray grow pointer f6 dib center"
              type="submit"
              onClick={this.onOrderSubmit}
              value="Buy"
              disabled={buttonDisabled}
            />
          </div>
          <FormValidation
            ticker={ticker}
            quantity={quantity}
            isOrdered={isOrdered}
            notEnoughCash={notEnoughCash}
            tickersList={tickersList}
          />
        </div>
      </main>
    );
  }
}

export default Order;
