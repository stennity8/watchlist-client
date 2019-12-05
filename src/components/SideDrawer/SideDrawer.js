import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';
import { connect } from 'react-redux';


const SideDrawer = ({ show, linkClickHandler, currentUser }) => {
  let drawerClasses = 'side-drawer'
  if (show) {
    drawerClasses = 'side-drawer open'
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li><Link to="/" onClick={linkClickHandler}><i className="ui icon home circle"></i>Home</Link></li>
        {currentUser ? <li><Link to="/watchlist" onClick={linkClickHandler}><i className="ui icon user circle"></i>My WatchList</Link></li> : null}
      </ul>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps)(SideDrawer);