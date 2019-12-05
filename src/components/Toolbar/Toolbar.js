import React from 'react';
import Logout from '../Logout/Logout'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import './Toolbar.css';
import { Link } from 'react-router-dom';
import ToggleButton from '../SideDrawer/ToggleButton';
import { connect } from 'react-redux'


const toolbar = props => {
  const renderLogButton = () => {
    if (props.currentUser) {
      return (
        <li><Logout /></li>
      )
    } else {
      return (
        <>
          <li><Login /></li>
          <li><Signup /></li>
        </>
      )
    }
  }

  return (
    <header className="toolbar">
      <nav className="toolbar-navigation">
        <div className="toolbar-toggle-button">
          <ToggleButton onClick={props.drawerClickHandler} />
        </div>
        <div className="toolbar-logo">
          <Link to="/" className="toolbar-logo-link">
            <i className="binoculars icon"></i>
            WatchList
          </Link>
        </div>
        <div className="spacer"> </div>
        <div className="toolbar-navigation-items">
          <ul>
            {props.currentUser ? <li><Link to="/watchlist">My WatchList</Link></li> : null}
            {renderLogButton()}
          </ul>
        </div>
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps)(toolbar);