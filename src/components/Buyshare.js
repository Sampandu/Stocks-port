import React from 'react';

const Buyshare = () => {
  return (
    <article className="br2 ba br3 shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
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

export default Buyshare
