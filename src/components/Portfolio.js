import React, { Component } from 'react';
import axios from 'axios';
import Order from './Order';
import io from 'socket.io-client';
const url = 'https://ws-api.iextrading.com/1.0/last'



class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolio: []
    }
  }

  componentDidMount() {
    let tickerList = ''
    const name = this.props.name
    axios.get('http://localhost:3001/portfolio', { params: {name} })
        .then(response => this.setState({portfolio: response.data}))
        .then(() => {
          tickerList = this.state.portfolio.map(e => e.ticker)
                                        .join(',')
                                        .toLowerCase()
          //fetch open price of each stock
          return axios.get(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${tickerList}&types=quote`)
        })
        .then(response => {
          const openPriceTickers = Object.keys(response.data)
          const portfolio = this.state.portfolio
          for(let i = 0; i < portfolio.length; i++) {
            if(openPriceTickers.includes(portfolio[i].ticker)){
              portfolio[i].open = response.data[portfolio[i].ticker].quote.open
            }
          }
          return this.setState({portfolio: portfolio})
        })
        .then(() => {
          const socket = io(url)
          //connect to the IEX channel
          socket.emit('subscribe', tickerList)
          //Listen to the IEX channel's messages
          socket.on('message', message => {
            const data = JSON.parse(message)
            const portfolio = this.state.portfolio
            for(let i = 0; i < portfolio.length; i++) {
              if(data.symbol === portfolio[i].ticker){
                portfolio[i].last = data.price
              }
            }
            this.setState({portfolio})
            })
        })
        .catch(err => console.log(err))
  }

  render() {
    const portfolio = this.state.portfolio || []
    // let price = this.state.price || []
    console.log('last price', portfolio)

    return (
      <article className="cf">
        <div className="fl w-60 tc">
          <article className="center pa3 pa5-ns">
          {
            portfolio.length === 0
            ? <h1>{`Your portfolio is empty`}</h1>
            : (
                <div>
                  <h1 className='tc'>Portfolio ($5000.00)</h1>
                  <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
                    {
                        portfolio.map(trx => (
                          <li key={trx.id} className="ph3 pv3 bb b--light-silver">{`${trx.ticker} - ${trx.quantity} Shares - Current Values: $${trx.last ?(trx.last*trx.quantity).toFixed(2) : ''}`}</li>
                        ))
                    }
                  </ul>
                </div>
              )
          }
          </article>
        </div>
        <div className="fl w-40 tc">
          <Order />
        </div>
      </article>
    )
  }
}

export default Portfolio
