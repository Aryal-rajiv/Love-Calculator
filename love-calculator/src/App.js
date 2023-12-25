import React from 'react';
import Navbar from './components/navigation.js';
import Calculator from './components/calculator.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.aryalrajiv.com.np/">
          Visit my portfolio site
        </a>
        <Navbar/>
      </header>
      <body>
      <Calculator/>
      </body>
    </div>
  );
}

export default App;
