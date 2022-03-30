// This file centralizes all components into one component, making the entire page
// This file also contains all of the central states, such as the state of the entire list of cards, the state of each player's position and bank account state.
// This file renders all CSS styling
import React, { useEffect, useState } from 'react';
import './App.css';
import Bank from './Components/Bank_Display';
import Display from './Components/Display';
import Turn from './Components/Turn';
import './display.css';
import { place, places, pos } from './Lists';

// Main Display Element (Functional Component)
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

  // Runs for the first render of the page to initiate all players to their starting locations
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
      {/* Displays all cards from the main list */}
      <Display 
        // List of all Cards and Function to change all the cards
        cards={cards} setCards={setCards} 
        // State to control and manage whose turn it is
        count={count} 
        // All of the positions and the previous position to check if the player has passed go
        previous={previous_pos} pos_1={pos_1} pos_2={pos_2} pos_3={pos_3} pos_4={pos_4} 
        // Bank Accounts of all players and the functions to change the bank accounts of the players
        account_1={account_1} account_2={account_2} account_3={account_3} account_4={account_4} 
        setAccount_1={setBank_1} setAccount_2={setBank_2} setAccount_3={setBank_3} setAccount_4={setBank_4} 
      />

      {/* Display All Current Bank Accounts */}
      <Bank 
        // Passing all of the current bank accounts parameters
        account_1={account_1} account_2={account_2} account_3={account_3} account_4={account_4} 
      />

      {/* Controls the turn and the dice roll */}
      <Turn 
        // List of all the cards and a function to change of all of the cards
        // Used to update all of the positions of the card by changing the boolean of each card
        cards={cards} setCards={setCards} 
        // Changing the previous position as the player's position is changing
        setPrevious={setPrevious} 
        // Changin the player's turn
        count={count} setCount={setCount} 
        // Positions of all of the players and the functions to change the players
        pos_1={pos_1} pos_2={pos_2} pos_3={pos_3} pos_4={pos_4} 
        setPos_1={setPos_1} setPos_2={setPos_2} setPos_3={setPos_3} setPos_4={setPos_4} 
      />
    </div>
  )
}

export default App;