import React from 'react';

const FormValidation = ({
  ticker,
  quantity,
  isOrdered,
  notEnoughCash,
  tickersList,
  invalidEmail,
}) => {
  ticker = ticker || '';
  ticker = ticker.toUpperCase();
  quantity = Number(quantity) || 0;

  return (
    <div>
      {/* validation of order form */}
      {notEnoughCash && (
        <div className="flex items-center justify-center br3 ma3 pa3 bg-lightest-blue navy">
          <svg
            className="w1"
            data-icon="info"
            viewBox="0 0 32 32"
            style={{ fill: 'currentcolor' }}
          >
            <title>info icon</title>
            <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6" />
          </svg>
          <span className="lh-title ml3">Not enough cash</span>
        </div>
      )}
      {!Number.isInteger(quantity) && (
        <div className="flex items-center justify-center br3 ma3 pa3 bg-light-red navy">
          <svg
            className="w1"
            data-icon="info"
            viewBox="0 0 32 32"
            style={{ fill: 'currentcolor' }}
          >
            <title>info icon</title>
            <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6" />
          </svg>
          <span className="lh-title ml3">Invalid number</span>
        </div>
      )}
      {ticker.length !== 0 && !tickersList.includes(ticker) && (
        <div className="flex items-center justify-center br3 ma3 pa3 bg-light-red navy">
          <svg
            className="w1"
            data-icon="info"
            viewBox="0 0 32 32"
            style={{ fill: 'currentcolor' }}
          >
            <title>info icon</title>
            <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6" />
          </svg>
          <span className="lh-title ml3">Invalid ticker</span>
        </div>
      )}
      {isOrdered && (
        <div className="flex items-center justify-center br3 ma3 pa3 bg-lightest-blue navy">
          <svg
            className="w1"
            data-icon="info"
            viewBox="0 0 32 32"
            style={{ fill: 'currentcolor' }}
          >
            <title>info icon</title>
            <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6" />
          </svg>
          <span className="lh-title ml3">Ordered</span>
        </div>
      )}

      {/* validation of email in register form */}
      {invalidEmail && (
        <div className="flex items-center justify-center br3 ma3 pa3 bg-light-red navy">
          <svg
            className="w1"
            data-icon="info"
            viewBox="0 0 32 32"
            style={{ fill: 'currentcolor' }}
          >
            <title>info icon</title>
            <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6" />
          </svg>
          <span className="lh-title ml3">Email is registered</span>
        </div>
      )}
    </div>
  );
};

export default FormValidation;
