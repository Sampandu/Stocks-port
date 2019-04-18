import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({isSignin}) => {
  if (isSignin) {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Link to="/portfolio">
          <p className='f3 pa3 link underline black dim pointer'>Portfolio</p>
        </Link>
        <Link to="/portfolio">
          <p className='f3 pa3 link underline black dim pointer'>Transaction</p>
        </Link>
      </nav>
    )
  } else {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Link to="/">
          <p className='f3 pa3 link underline black dim pointer'>Sign in</p>
        </Link>
        <Link to="/register">
          <p className='f3 pa3 link underline black dim pointer'>Register</p>
        </Link>
      </nav>
    )
  }
}

export default Navigation
