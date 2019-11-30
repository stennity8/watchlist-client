import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser';

const Logout = ({ logout }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    logout()
  }

  return (
    <div>
      <button className="ui button primary" onClick={handleSubmit}>Log out</button>
    </div>
  );

}

export default connect(null, { logout })(Logout);