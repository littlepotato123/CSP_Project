import React, { useState } from 'react';
import './App.css';
import Display from './Components/Display';
import Turn from './Components/Turn';
import './display.css';
import { pos } from './Lists';

const App: React.FC = () => {
  const [pos_1, setPos_1] = useState<pos>(
    {
      x: 2, 
      y: 3
    }
  );
  const [pos_2, setPos_2] = useState<pos>(
    {
      x: 1,
      y:8
    }
  );
  const [pos_3, setPos_3] = useState<pos>(
    {
      x: 2,
      y: 6
    }
  );
  const [pos_4, setPos_4] = useState<pos>(
    {
      x: 3, 
      y: 8
    }
  );

  return (
    <div>
      <Display pos_1={pos_1} pos_2={pos_2} pos_3={pos_3} pos_4={pos_4} />
      <Turn pos_1={pos_1} pos_2={pos_2} pos_3={pos_3} pos_4={pos_4} setPos_1={setPos_1} setPos_2={setPos_2} setPos_3={setPos_3} setPos_4={setPos_4} />
    </div>
  )
}

export default App;