import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';
import CalculatorApi from './CalculatorApi';

const obj = new CalculatorApi()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
        <p>by</p> <p id="style"><em>Himadri</em>, <em>Hiteshi</em> and <em>Himanshi</em> </p>
        <Calculator CalculatorApi={obj} />
      </header>
    </div>
  );
}

export default App;
