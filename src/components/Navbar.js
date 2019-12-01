import React from 'react';
import Logout from './Logout'

const Navbar = () => {
  return (
    <div className="ui secondary pointing menu">
      <div className="right menu">
        <Logout />
      </div>
    </div>
  );
}

export default Navbar;
