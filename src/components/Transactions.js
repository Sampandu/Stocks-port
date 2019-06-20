import React, { Component } from 'react';
import Loading from './Loading';
import Scroll from './Scroll';
import { Dimmer, Segment } from 'semantic-ui-react';
import axios from 'axios';

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction: [],
      isPending: false,
    };
  }

  componentDidMount() {
    const name = this.props.name;
    this.setState({ isPending: true });
    axios
      .get(`http://localhost:3001/transaction?name=${name}`)
      .then(response =>
        this.setState({ transaction: response.data, isPending: false })
      )
      .catch(err => console.log(err));
  }

  render() {
    const transaction = this.state.transaction || [];
    const isPending = this.state.isPending;

    return (
      <Scroll>
        <Dimmer.Dimmable as={Segment} dimmed={isPending}>
          <Loading isPending={isPending} />

          <article className="center pa3 pa5-ns">
            {transaction.length === 0 ? (
              <legend className="f3 fw6 ph0 mh0 tc">{`Your transaction history is empty`}</legend>
            ) : (
              <div>
                <ul className="list pl0 measure center">
                  <legend className="f3 fw6 ph0 mh0 tc">Transactions</legend>
                  {transaction.map(trx => (
                    <li
                      key={trx.id}
                      className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30"
                    >{`Buy (${trx.ticker}) - ${trx.quantity} Shares @ ${
                      trx.price
                    } `}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </Dimmer.Dimmable>
      </Scroll>
    );
  }
}

export default Transactions;
