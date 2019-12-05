import React from 'react';
import './Toolbar.css';
import { Link } from 'react-router-dom'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div></div>
      <div><Link to="/" className="toolbar-logo">LOGO</Link></div>
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