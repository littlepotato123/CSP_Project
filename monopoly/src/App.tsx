import React, { useEffect, useState } from 'react';
import './App.css';
import Bank from './Components/Bank_Display';
import Display from './Components/Display';
import Turn from './Components/Turn';
import './display.css';
import { place, places, pos } from './Lists';

// Main Display Element
// Functional Component
const App: React.FC = () => {
  // Variable of all the cards and function to change the cards
  const [cards, setCards] = useState<place[][]>(places)

  // Used to check whether a player has passed the "GO" on the board 
  const [previous_pos, setPrevious] = useState<pos>({
    x: 0,
    y: 0
  });

  // Initializing all players positions and function to change the corresponding player's position
  // 0, 9 corresponds to the "GO" card in  the lists
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

  // Initializing all players bank accounts to $1500 and the functions to change the corresponiding bank accounts
  const [account_1, setBank_1] = useState<number>(1500);
  const [account_2, setBank_2] = useState<number>(1500);
  const [account_3, setBank_3] = useState<number>(1500);
  const [account_4, setBank_4] = useState<number>(1500);
  // Used to determine whose turn it is
  const [count, setCount] = useState<number>(1);

  // Runs for the first render
  useEffect(() => {
    let cur_cards = cards;
    // Displays each player at the corresponding starting position 
    cur_cards[0][9].player_1 = true;
    cur_cards[0][9].player_2 = true;
    cur_cards[0][9].player_3 = true;
    cur_cards[0][9].player_4 = true;
    setCards(cur_cards);
  }, [])

  return (
    <div>
      <Display cards={cards} setCards={setCards} previous={previous_pos} setPos_1={setPos_1} setPos_2={setPos_2} setPos_3={setPos_3} setPos_4={setPos_4} count={count} pos_1={pos_1} pos_2={pos_2} pos_3={pos_3} pos_4={pos_4} account_1={account_1} account_2={account_2} account_3={account_3} account_4={account_4} setAccount_1={setBank_1} setAccount_2={setBank_2} setAccount_3={setBank_3} setAccount_4={setBank_4} />
      <Bank account_1={account_1} account_2={account_2} account_3={account_3} account_4={account_4} />
      <Turn cards={cards} setCards={setCards} setPrevious={setPrevious} count={count} setCount={setCount} pos_1={pos_1} pos_2={pos_2} pos_3={pos_3} pos_4={pos_4} setPos_1={setPos_1} setPos_2={setPos_2} setPos_3={setPos_3} setPos_4={setPos_4} />
    </div>
  )
}

export default App;