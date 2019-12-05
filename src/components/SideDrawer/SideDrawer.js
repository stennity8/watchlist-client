import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';
import { connect } from 'react-redux';
import { logout } from '../../actions/currentUser';



const SideDrawer = ({ show, linkClickHandler, currentUser, logout }) => {
  let drawerClasses = 'side-drawer'
  if (show) {
    drawerClasses = 'side-drawer open'
  }

  const userLinks = () => {
    if (currentUser) {
      return (
        <li><Link to="/logout" onClick={handleLogOut}><i className="ui icon sign-out circle"></i>Log Out</Link></li>
      )
    } else {
      return (
        <>
          <li><Link to="/login" onClick={linkClickHandler}><i className="ui icon sign-in circle"></i>Log In</Link></li>
          <li><Link to="/signup" onClick={linkClickHandler}><i className="ui icon edit circle"></i>Sign Up</Link></li>
        </>
      )
    }
  }

  const handleLogOut = () => {
    linkClickHandler()
    logout()
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li><Link to="/" onClick={linkClickHandler}><i className="ui icon home circle"></i>Home</Link></li>
        {currentUser ? <li><Link to="/watchlist" onClick={linkClickHandler}><i className="ui icon user circle"></i>My WatchList</Link></li> : null}
        {userLinks()}
      </ul>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps, { logout })(SideDrawer);