import React from 'react';
import CalculateScore from './Components/CalculatorScore';

function App() {
  return (
    <div className="App">
      <CalculateScore name="Steeve" school="DNV Public School" total={450} goal={5} />
    </div>
  );
}

export default App;
