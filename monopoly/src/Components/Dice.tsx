// Element used to implement the Dice Roll and directly moving the player to the new position
import React, { useState } from 'react';
// Place: The type of each card to get type inference
// Pos: A type that has an x and y value used to represent the position of each player
import { place, pos } from '../Lists';


// Creating Parameters
interface Props {
    // Count is used to check whose turn it is
    count: number,
    // setCount is used to change the count variable, therefore going on to the next player's turn
    setCount: React.Dispatch<React.SetStateAction<number>>,
    // Current position of the corresponding player
    position: pos,
    // Function used to change the ositino of the corresponding player
    setPos: React.Dispatch<React.SetStateAction<pos>>,
    // Used in storing the previous position of the corresponding player to determine whether they have passed "GO"
    setPrevious: React.Dispatch<React.SetStateAction<pos>>,

    cards: place[][],
    setCards: React.Dispatch<React.SetStateAction<place[][]>>
}

const Dice: React.FC<Props> = ({
    // Implementing Parameters
    count, 
    setCount,
    setPos,
    position,
    setPrevious,
    cards,
    setCards
}) => {
    // Initializing the dice variables and the functions used to chang ethe dice values
    const [dice_one, setDice_1] = useState(1);
    const [dice_two, setDice_2] = useState(1);

    // Determines whether the player has clicked roll button
    // Used to prevent a player from rolling twice in one turn
    const [clicked, setClicked] = useState<boolean>(false);

    // Function to move the player based on the dice roll
    // Parameters: the random dice values
    const move = (dice_1: number, dice_2: number) => {
        let cur_cards = cards;
        // Current position of the player
        let x = position.x;
        let y = position.y;

        // Setting the previous position to the current position because position is about to change
        setPrevious({x, y});

        // Example of Selection

        // Switch statement to determine which player it is
        switch(count % 4) {
            // Player 1
            case 1:
                // Accessing the card at the player's position and removing the player from that card
                cur_cards[x][y].player_1 = false;
                break;
            
            // Player 2
            case 2:
                // Accessing the card at the player's position and removing the player from that card
                cur_cards[x][y].player_2 = false;
                break;
            
            // Player 3
            case 3:
                // Accessing the card at the player's position and removing the player from that card
                cur_cards[x][y].player_3 = false;
                break;

            // Player 4
            case 0:
                // Accessing the card at the player's position and removing the player from that card
                cur_cards[x][y].player_4 = false;
                break;
        }

        // Sum of dice values
        const sum = dice_1 + dice_2
        
        // Special If statement because for rows 0 and 1, the card order is backwards
        if(x === 0 || x === 1) {
            // (y-sum) because card order is backwards
            if(sum > y) {
                const diff = 10 - (sum - y);
                if(x === 0) {
                    // If the difference is greater than 0 and the player is in the list 0, move player to list 1
                    x = 1;
                    // Setting the y-position to 10 - (difference) because list is backwards  
                    y = diff
                    setPos({
                        x,
                        y
                    })
                } else {
                    // If the difference is less than 0 and the player is in the list 1, move player to list 2
                    x = 2;
                    // List is offset by 1 (starting at 0) and the 
                    y = diff
                    setPos({
                        x,
                        y
                    })
                }
            } else {
                // If the difference is greater than 0, then the player remains in the same row and the y-value becomes the difference
                y -= sum
                setPos({
                    x,
                    y
                });
            }
        } else {
            // If the sum + y is greater than 10, the player moves on to the next row
            if(sum + y >= 10) {
                const dif = sum - (10 - y);
                if(x === 3) {
                    // If the player is at row 3, they must go back to row 0
                    x = 0;
                    // Considering the offset of the movement in row 3 and row 0
                    // Row 0 is backwards as well
                    y = 10 - dif;
                    setPos({
                        x,
                        y
                    });
                } else {
                    // 
                    // Moving to the next row
                    x += 1
                    // Considering the offset of the movement in the starting row and the next row
                    y = dif
                    setPos({
                        x,
                        y
                    });
                }
            } else {
                // If the sum + y is less than 10, the player remains on the same row
                
                // Y-value becomes the new sum
                y += sum
                setPos({
                    // X-value (row) stays the same
                    x,
                    y
                });
            }
        }

        // Example of Selection 

        // Depending on the player's turn, the temporary deck of cards is updated to change to the new position of the corresponding player
        switch(count % 4) {
            case 0:
                // Adding the corresponding player to their new positioned card
                cur_cards[x][y].player_4 = true;
                break;

            case 1:
                // Adding the corresponding player to their new positioned card
                cur_cards[x][y].player_1 = true;
                break;

            case 2:
                // Adding the corresponding player to their new positioned card
                cur_cards[x][y].player_2 = true;
                break;

            case 3:
                // Adding the corresponding player to their new positioned card
                cur_cards[x][y].player_3 = true;
        }

        // Updating the state of the cards with the new temporary and changed list of cards
        setCards(cur_cards);
    }

    return (
        <div>
            {/* Used to display the current dice values */}
            <div style={{ background: 'black', color: 'white' }}>
                {dice_one} 
                <br />
                {dice_two}
            </div>
            
            {/* Roll Button */}
            {/* This button is the way a user can interact with the interface buy click this button, which allows them to roll the dice and move to the designated
                spot 
            */}
            <button 
                // The boolean "clicked" controls the disabled value, when true the button cannot be clicked
                // Used to prevent a player from rolling the dice twice
                disabled={clicked} 
                onClick={() => {
                    // Temporary Random values
                    // Math.random() returns a random double between 0 and 1
                    // Adding 1 because minimum is 1 for the dice
                    // Multiplying 6 because maximum is 6 for the dice
                    // Must Math.floor() the total value because Math.random() returns a double and the dice value must be an integer
                    const val_1 = Math.floor(Math.random() * 6) + 1;
                    const val_2 = Math.floor(Math.random() * 6) + 1;

                    // Changing the dice value displayed
                    setDice_1(val_1);
                    setDice_2(val_2);
                    // Once the roll button is clicked, setting "clicked"to true will disable the butotn and not be clicked while it is still the same player's turn
                    setClicked(true)
                    // Moving the player's position based on the random number values
                    move(val_1,val_2);
                }}
            >
                Roll
            </button>

            {/* This button is another way the user can interact with the interface by moving to the next player's turn */}
            <button 
                onClick={() => {
                    // Moving to tjhe next player's turn
                    setCount(count + 1);
                    // Resetting the disabled because it iis a new player's turn
                    setClicked(false)
                }}
            >
                Next
            </button>
        </div>
    )
}

export default Dice;