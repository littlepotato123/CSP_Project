import React, { useState } from 'react';
import './App.css';
import Display from './Components/Display';
import Sample from './Components/Sample';
import './display.css';
import { pos } from './Lists';

const App: React.FC = () => {
  const [pos, setPos] = useState<pos>(
    {
      x: 2, 
      y: 3
    }
  );

  return (
    <div>
      <Display position={pos} />
      <Sample position={pos} setPosition={setPos} />
    </div>
  )
}

export default App;