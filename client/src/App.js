import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // inizializza lo stato di default.
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  //preleverà i dati dall'API e memorizzerà la risposta su this.state.apiResponse.
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  //metodo del ciclo di vita di reazione chiamato componentDidMount(), che eseguirà il metodo callAPI() dopo il montaggio del componente.
  componentWillMount() {
    this.callAPI();
  }
  /*
  <p className="App-intro">{this.state.apiResponse}</p>
  visualizza un paragrafo sulla nostra pagina client, 
  con il testo che abbiamo recuperato dall'API.
  */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Edit <code>src/App.js</code> and save to reload. </p>
          <p className="App-intro"> {this.state.apiResponse} </p>
        </header>
      </div>
    );
  }
}

export default App;
