import React, { Component } from 'react'
import '../style/navbar.css';

import logo from '../images/logo_CANDY_MARKET.png';
import user from '../images/uicons/user.svg';
import shopBag from '../images/uicons/shopping-bag.svg';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark sticky-top">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <img src={logo} alt="..." className="nav-logo" />
          </span>
          <div class="navbar-nav">
            <div className="row">
              <div className="col">
                <a class="nav-link" href="" style={{ color: 'black' }}>
                  <img src={shopBag} alt="..." className="nav-shop" />
                </a>
              </div>
              <div className="col">
                <a class="nav-link" href="" style={{ color: 'black' }}>
                  <img src={user} alt="..." className="nav-usr" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;