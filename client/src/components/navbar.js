import React, { Component } from 'react'
import '../style/navbar.css';

import logo from '../images/logo_CANDY_MARKET.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <img src={logo} alt="..." className="nav-logo" />
          </span>
        </div>
      </nav>
    );
  }
}
export default Navbar;