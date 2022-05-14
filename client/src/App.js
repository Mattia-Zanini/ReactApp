import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Switch è stato sostituito da Routes

import Shops from './pages/Shops';
import User from './pages/User';

import './App.css';
import './style/scrollBar.css';

import Navbar from './components/navbar';
import Carousel from './components/carousel';
import ParallaxSection from './components/parallax';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <div className="App container-fluid">
            <Routes>
              <Route exact path="/" element={<ParallaxSection />} />
              <Route exact path="/shops" element={<Shops />} />
              <Route exact path="/user" element={<User />} />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
export default App;