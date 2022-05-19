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
  // inizializza lo stato di default.
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  //fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };
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
        <p className="App-intro">{this.state.data}</p>
      </>
    );
  }
}
export default App;