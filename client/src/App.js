import React, { Component } from 'react'
import './App.css';
import './style/scrollBar.css';

import Navbar from './components/navbar';
import ItemList from './components/itemList';
import Carousel from './components/carousel';
import ParallaxSection from './components/parallax';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="App container-fluid">
          <ParallaxSection />
        </div>
      </>
    );
  }
}
export default App;