import React from 'react';
import './App.css';
import Elevator from './Components/Elevator';
import Floors from './Components/Floors';

const App: React.FC = () => {
  return(
    <div>
      <Elevator />
      <Floors />
    </div>
  )
};

export default App;