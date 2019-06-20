import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ isSignin, handleSignout }) => {
  if (isSignin) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to="/portfolio">
          <p className="f3 pa3 link black dim pointer">Portfolio</p>
        </Link>
        <Link to="/transactions">
          <p className="f3 pa3 link black dim pointer">Transaction</p>
        </Link>
        <Link to="/">
          <p className="f3 pa3 link black dim pointer" onClick={handleSignout}>
            Sign Out
          </p>
        </Link>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to="/">
          <p className="f3 pa3 link black dim pointer">Sign in</p>
        </Link>
        <Link to="/register">
          <p className="f3 pa3 link black dim pointer">Register</p>
        </Link>
      </nav>
    );
  }
};

export default Navigation;
