import React, { Component } from 'react'
import './App.css';
import Navbar from './components/navbar';
import ItemList from './components/itemList';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <ItemList />
        </div>
      </>
    );
  }
}
export default App;