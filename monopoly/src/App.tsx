import React, { useState } from 'react';
import './App.css';
import Bank from './Components/Bank_Display';
import Display from './Components/Display';
import Turn from './Components/Turn';
import './display.css';
import { pos } from './Lists';

const App: React.FC = () => {
  const [pos_1, setPos_1] = useState<pos>(
    {
      x: 0, 
      y: 9
    }
  );
  const [pos_2, setPos_2] = useState<pos>(
    {
      x: 0,
      y: 9
    }
  );
  const [pos_3, setPos_3] = useState<pos>(
    {
      x: 0,
      y: 9
    }
  );
  const [pos_4, setPos_4] = useState<pos>(
    {
      x: 0, 
      y: 9
    }
  );

  const [bank, setBank] = useState<number>(20580);
  const [account_1, setBank_1] = useState<number>(1500);
  const [account_2, setBank_2] = useState<number>(1500);
  const [account_3, setBank_3] = useState<number>(1500);
  const [account_4, setBank_4] = useState<number>(1500);

  return (
    <div>
      <Display pos_1={pos_1} pos_2={pos_2} pos_3={pos_3} pos_4={pos_4} />
      <Bank bank={bank} account_1={account_1} account_2={account_2} account_3={account_3} account_4={account_4} />
      <Turn pos_1={pos_1} pos_2={pos_2} pos_3={pos_3} pos_4={pos_4} setPos_1={setPos_1} setPos_2={setPos_2} setPos_3={setPos_3} setPos_4={setPos_4} />
    </div>
  )
}

export default App;