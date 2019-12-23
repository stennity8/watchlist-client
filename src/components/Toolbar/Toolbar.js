import React from 'react';
import Logout from '../Logout/Logout'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import './Toolbar.css';
import { Link } from 'react-router-dom';
import ToggleButton from '../SideDrawer/ToggleButton';
import { connect } from 'react-redux'
import { clearSearchTvShow } from '../../actions/tvShows'


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
          <Link to="/" className="toolbar-logo-link" onClick={() => props.clearSearchTvShow()}>
            <i className="tv icon"></i>
            WatchList
          </Link>
        </div>
        <div className="spacer"> </div>
        <div className="toolbar-navigation-items">
          <ul>
            {props.currentUser ?
              <>
                <li><Link to="/"><i className="ui icon home circle"></i>Home</Link></li>
                <li><Link to="/watchlist"><i className="ui icon binoculars"></i>WatchList</Link></li>
                <li></li>
                <li><Link to="/watched"><i className="ui icon check circle outline"></i>Watched</Link></li>
                <li></li>
              </>
              : null}
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

export default connect(mapStateToProps, { clearSearchTvShow })(toolbar);