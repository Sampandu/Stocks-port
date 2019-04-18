import React, { Component } from 'react';
import axios from 'axios';

class Transactions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transaction: []
    }
  }

  componentDidMount() {
    const name = this.props.name
    axios.get('http://localhost:3001/transaction', { params: {name} })
        .then(response =>
          this.setState({transaction: response.data})
        )
        .catch(err => console.log(err))
  }

  render() {
    const transaction = this.state.transaction || []

    return (
      <div>
        <article className="center pa3 pa5-ns">
        {
          transaction.length === 0
          ? <h1>{`Your transaction history is empty`}</h1>
          : (
              <div>
                <h1 className='tc'>Transactions</h1>
                <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
                  {
                    transaction.map(trx => (
                      <li key={trx.id} className="ph3 pv3 bb b--light-silver">{`Buy (${trx.ticker}) - ${trx.quantity} Shares @ ${trx.price} `}</li>
                    ))
                  }
                </ul>
              </div>
            )
        }
        </article>
      </div>
    )
  }
}

export default Transactions
