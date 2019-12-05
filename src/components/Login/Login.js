import React from 'react';
import history from '../../history'

const Login = () => {
  const handleClick = () => {
    history.push('/login')
  }

  return (
    <div className="item">
      <div className="ui button primary tiny" onClick={handleClick}>
        <i className="sign-in icon" />
        Log In
      </div>
    </div>
  );
}

export default Login;
