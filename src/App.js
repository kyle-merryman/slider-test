import React, { Component } from 'react';
//import Header from './components/Header';
import Nav from './components/Nav';
import Header from './components/Header';
//import logo from './logo.svg';
import 'normalize.css/normalize.css';

import './App.css';
import './slider-animations.css';

class App extends Component {
  render() {
    return (
      <div>
      <Header></Header>
      <Nav></Nav>

      </div>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       ryloth <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
