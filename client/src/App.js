import React, { Component } from 'react'
import './App.css';
import './style/scrollBar.css';

import Navbar from './components/navbar';
import ItemList from './components/itemList';
//import ParallaxSection from './components/parallax';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="App container-fluid">
          <ItemList />
        </div>
      </>
    );
  }
}
export default App;