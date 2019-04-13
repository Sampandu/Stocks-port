import React from 'react';

const Signin = () => {
  return (
    <div>
      <div>
        <label>Email</label>
        <input
          type='email'
          name='email'
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
        />
      </div>
      <div>
        <input
          type="submit"
          value="Sign in"
        />
      </div>
    </div>
  )
}

export default Signin;
