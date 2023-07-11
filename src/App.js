import React, { useState } from 'react';
import './App.css';

function App() {
  const [previous, setPrevious] = useState('');
  const [current, setCurrent] = useState('');

  const handleNumberClick = (number) => {
    setCurrent(current + number);
  };

  const handleOperatorClick = (operator) => {
    if (current !== '') {
      setPrevious(current);
      setCurrent(operator);
    } else if (previous !== '') {
      setCurrent(operator);
    }
  };

  const handleClearClick = () => {
    setPrevious('');
    setCurrent('');
  };

  const handleDeleteClick = () => {
    setCurrent(current.slice(0, -1));
  };

  const handleEqualClick = () => {
    if (previous !== '' && current !== '') {
      const result = eval(previous + current);
      setCurrent(result.toString());
      setPrevious('');
    }
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous">{previous}</div>
        <div className="current-typing">{current}</div>
      </div>

      <button className="span-two" onClick={handleClearClick}>
        AC
      </button>
      <button onClick={handleDeleteClick}>DEL</button>
      <button onClick={() => handleOperatorClick('/')}>/</button>
      <button onClick={() => handleNumberClick('1')}>1</button>
      <button onClick={() => handleNumberClick('2')}>2</button>
      <button onClick={() => handleNumberClick('3')}>3</button>
      <button onClick={() => handleOperatorClick('*')}>*</button>
      <button onClick={() => handleNumberClick('4')}>4</button>
      <button onClick={() => handleNumberClick('5')}>5</button>
      <button onClick={() => handleNumberClick('6')}>6</button>
      <button onClick={() => handleOperatorClick('+')}>+</button>
      <button onClick={() => handleNumberClick('7')}>7</button>
      <button onClick={() => handleNumberClick('8')}>8</button>
      <button onClick={() => handleNumberClick('9')}>9</button>
      <button onClick={() => handleOperatorClick('-')}>-</button>
      <button onClick={() => handleNumberClick('.')}>.</button>
      <button onClick={() => handleNumberClick('0')}>0</button>
      <button className="span-two" onClick={handleEqualClick}>
        =
      </button>
    </div>
  );
}

export default App;
