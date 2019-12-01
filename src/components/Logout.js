import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser';

const Logout = ({ logout }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    logout()
  }

  return (
    <div className="item">
      <div className="ui button primary tiny" onClick={handleSubmit}>
        <i className="user icon" />
        Log out
      </div>
    </div>
  );

}

export default connect(null, { logout })(Logout);