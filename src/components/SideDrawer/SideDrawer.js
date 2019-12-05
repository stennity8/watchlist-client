import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';


const SideDrawer = props => (
  <nav className="side-drawer">
    <ul>
      <li><Link to="/watchlist">WatchList</Link></li>
    </ul>
  </nav>
);

export default SideDrawer;