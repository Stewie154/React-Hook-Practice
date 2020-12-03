import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  
  const [count, setCount] = useState(0);
  const [country, setCountry] = useState('England');

  const increaseCount = (prevCount) => {
    setCount(prevCount => prevCount + 1);
    setCountry('Turkey');
  }

  const decreaseCount = (prevCount) => {
    setCount(prevCount => prevCount - 1);
    setCountry('England');
  }

  const resetCount = () => {
    setCount(0);
    setCountry('England');
  };
    
    

  return (
    <div className="App">

      <button onClick={increaseCount}>+</button>
      <span>{count} / {country}</span>
      <button onClick={decreaseCount}>-</button>
      <button onClick={resetCount}>Reset Count</button>

    </div>
  );
}

export default App;
