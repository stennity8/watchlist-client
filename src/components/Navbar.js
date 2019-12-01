import React from 'react';
import Logout from './Logout'
import Login from './Login'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const renderLogButton = () => {
    if (props.currentUser) {
      return <Logout />
    } else {
      return <Login />
    }
  }

  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Home
      </Link>
      <div className="right menu">
        {renderLogButton()}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps)(Navbar);
