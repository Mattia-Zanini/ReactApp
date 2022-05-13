import React, { Component } from 'react'
import { Link } from "react-router-dom";

import '../style/navbar.css';

import logo from '../images/logo_CANDY_MARKET.png';
import user from '../images/uicons/user.svg';
import shopBag from '../images/uicons/shopping-bag.svg';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark sticky-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand mb-0 h1">
            <img src={logo} alt="..." className="nav-logo" />
          </Link>
          <div className="navbar-nav">
            <div className="row">
              <div className="col">
                <Link to="/shops" className="nav-link" style={{ color: 'black' }}>
                  <img src={shopBag} alt="..." className="nav-shop" />
                </Link>
              </div>
              <div className="col">
                <Link to="/user" className="nav-link" style={{ color: 'black' }}>
                  <img src={user} alt="..." className="nav-usr" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;