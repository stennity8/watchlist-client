import React from 'react';
import history from '../../history'

const Signup = () => {
  const handleClick = () => {
    history.push('/signup')
  }

  return (
    <div className="item">
      <div className="ui button secondary tiny" onClick={handleClick}>
        <i className="edit outline icon" />
        Signup
      </div>
    </div>
  );
}

export default Signup;