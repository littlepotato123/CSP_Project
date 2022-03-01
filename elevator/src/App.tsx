import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [top, setTop] = useState<number>(0);

  return(
    <div>
      <div style={{ top:`${top}px` }} className="elevator">
        Hi
      </div>
      <button onClick={() => {
        setTop(100);
      }}>
        Click
      </button>
    </div>
  )
};

export default App;