import React from 'react';
import './Toolbar.css';
import { Link } from 'react-router-dom';
import ToggleButton from '../SideDrawer/ToggleButton';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div className="toolbar-toggle-button">
        <ToggleButton onClick={props.drawerClickHandler} />
      </div>
      <div className="toolbar-logo">
        <Link to="/" className="toolbar-logo-link">LOGO</Link>
      </div>
      <div className="spacer"> </div>
      <div className="toolbar-navigation-items">
        <ul>
          <li><Link to="/watchlist">WatchList</Link></li>
          <li><Link to="/logout">Log Out</Link></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;