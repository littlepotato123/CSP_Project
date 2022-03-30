// Turn.tsx
// This file manages the player's turn and displays the Dice.tsx which allows the users to move and roll the dice
import React, { useEffect, useState } from 'react';
import { place, pos } from '../Lists';
import Dice from './Dice';

interface Props {
    // All Parameters are passed to Dice.tsx as a props
    setPos_1: React.Dispatch<React.SetStateAction<pos>>,
    setPos_2: React.Dispatch<React.SetStateAction<pos>>,
    setPos_3: React.Dispatch<React.SetStateAction<pos>>,
    setPos_4: React.Dispatch<React.SetStateAction<pos>>,
    pos_1: pos,
    pos_2: pos,
    pos_3: pos,
    pos_4: pos,
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    setPrevious: React.Dispatch<React.SetStateAction<pos>>,
    cards: place[][],
    setCards: React.Dispatch<React.SetStateAction<place[][]>>
}

const Turn: React.FC<Props> = (
    {
        // Implementing Parameters
        setPos_1,
        setPos_2,
        setPos_3,
        setPos_4,
        pos_1,
        pos_2,
        pos_3,
        pos_4,
        count,
        setCount,
        setPrevious,
        cards,
        setCards
    }
) => {
    // "display" is used to display whose turn it is and the current dice values.
    // Holds the return of Dice.tsx as a component rendered
    // Initializing value is <div></div> to represent nothing
    const [display, setDisplay] = useState<JSX.Element>(<div></div>);
    
    // JSX code for the display if it is the corresponding player's turn
    const player_1 = (
        <div>
            Player 1
            {/* Parameters 
                pos: Position of the corresponding player 
                setPos: Function to change the correponding player's position
                count: Used to determine whose turn it is
                setCount: Used to change whose turn it is
                setPrevious: Used to check if any player passed go
            */}
            <Dice position={pos_1} setPos={setPos_1} cards={cards} setCards={setCards} count={count} setCount={setCount} setPrevious={setPrevious} />
        </div>
    )

    const player_2 = (
        <div>
            Player 2
            <Dice position={pos_2} setPos={setPos_2} cards={cards} setCards={setCards} count={count} setCount={setCount}  setPrevious={setPrevious}/>
        </div>
    )

    const player_3 = (
        <div>
            Player 3
            <Dice position={pos_3} setPos={setPos_3} cards={cards} setCards={setCards} count={count} setCount={setCount} setPrevious={setPrevious}/>
        </div>
    )

    const player_4 = (
        <div>
            Player 4
            <Dice position={pos_4} setPos={setPos_4} cards={cards} setCards={setCards} count={count} setCount={setCount} setPrevious={setPrevious}/>
        </div>
    )

    // Re-renders this element any time the value of count changes, therefore changes everytime the turn moves onto the next player's turn
    useEffect(() => {
        // Example of Seelection

        // Count % 4 because there are 4 players and it is repeating so depending on the remainder of 4, it accurately represents whose turn it is
        switch(count % 4) {
            // Player 1
            case 1:
                // Depending on the value of count % 4, the value of display is changed to the corresponding player's JSX code
                setDisplay(player_1);
                break;
                
            // Player 2
            case 2:
                setDisplay(player_2);
                break;
            
            // Player 3
            case 3:
                setDisplay(player_3);
                break;
            
            // Player 4
            case 0:
                setDisplay(player_4);
                break;
        }
    }, [count])
    
    return (
        <div className="turn">
            {/* Renders the current value of display and updates everytime count is changed (player's turn is changed) */}
            {display}
        </div>
    )
}

export default Turn;
