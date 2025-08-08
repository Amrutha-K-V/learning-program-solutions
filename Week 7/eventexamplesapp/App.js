import React from 'react';
import EventDemo from './EventDemo';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>🚀 Event Examples App</h1>
      <EventDemo />
      <CurrencyConvertor />
    </div>
  );
}

export default App;