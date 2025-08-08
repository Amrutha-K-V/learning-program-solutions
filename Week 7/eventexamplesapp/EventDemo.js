import React, { useState } from 'react';

const EventDemo = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    incrementCounter();
    sayHello();
  };

  const incrementCounter = () => {
    setCounter(prev => prev + 1);
  };

  const sayHello = () => {
    console.log('Hello! This is a static message.');
  };

  const handleDecrement = () => {
    setCounter(prev => prev - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleClick = (event) => {
    console.log('I was clicked');
  };

  return (
    <div style={{ marginBottom: '40px' }}>
      <h2>🎯 Event Handling Examples</h2>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} style={{ marginLeft: '10px' }}>Decrement</button>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => sayWelcome('Welcome!')}>Say Welcome</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={handleClick}>OnPress</button>
      </div>
    </div>
  );
};

export default EventDemo;