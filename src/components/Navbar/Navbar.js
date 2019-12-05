import React from 'react';
import Logout from '../Logout/Logout'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const renderLogButton = () => {
    if (props.currentUser) {
      return <Logout />
    } else {
      return (
        <>
          <Login />
          <Signup />
        </>
      )
    }
  }

  return (
    <div className="ui secondary pointing menu" >
      <Link to="/" className="item">
        Home
      </Link>
      {props.currentUser ? <Link to="/watchlist" className="item">My WatchList</Link> : null}
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