import React from 'react';

const Order = () => {
  return (
    <article className="center pa3 pa5-ns">
        <main className="pa4 black-80 center">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f3 fw6 ph0 mh0 center">Cash - $5000.00</legend>
              <div className="mt3">
                <input
                  className="br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  placeholder="ticker"
                  name="ticker"
                  id="ticker"
                />
              </div>
              <div className="mt3">
                <input
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
                value="Buy" />
            </div>
          </div>
        </main>
      </article>
  )
}

export default Order
