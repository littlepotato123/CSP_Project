// Display.tsx
// This file displays all of the cards from the main list of cards in Lists.ts
import React, { /* useEffect is a function used to run a function whenever the page re-renders or a central state is changed */ useEffect } from 'react';
import {
    // List of all the chance and ocmmunity chest cards
    chance,
    community,
    // The type of each card to get type inference
    place,
    // The enumarator for displaying which card is owned by which player
    PLAYERS,
    // The type of the positions of each player to get type inference
    pos
} from '../Lists';

// List of all parameters for the Display component
interface Props {
    // Current Position of all players
    pos_1: pos,
    pos_2: pos,
    pos_3: pos,
    pos_4: pos,
    // Used to determine whose turn it is
    count: number,
    // Bank Balances of each player
    account_1: number,
    account_2: number,
    account_3: number,
    account_4: number,
    // Function to change corresponding player's bank balances
    setAccount_1: React.Dispatch<React.SetStateAction<number>>,
    setAccount_2: React.Dispatch<React.SetStateAction<number>>,
    setAccount_3: React.Dispatch<React.SetStateAction<number>>,
    setAccount_4: React.Dispatch<React.SetStateAction<number>>,

    // List of all of the cards for display
    cards: place[][],
    // Function to manipulate specific properties of each card in the list
    setCards: React.Dispatch<React.SetStateAction<place[][]>>
    
    // Previous position of corresponding player to check if they passed "GO"
    previous: pos
}

const Display: React.FC<Props> = ({
    // Implementing Parameters
    pos_1,
    pos_2, 
    pos_3,
    pos_4,
    count,
    account_1,
    account_2,
    account_3,
    account_4,
    setAccount_1,
    setAccount_2,
    setAccount_3,
    setAccount_4,
    cards,
    setCards,
    previous
}) => {
    // Deconstructing the 2D array into all of the different rows
    const [bottom, left, top, right] = cards;

    // Function that runs when a player buys the card that they land on
    const buy = () => {
        // Temporary list of cards to manipulate
        const cur_cards = cards;
        // Card is a temporary variable to store the card that the player has landed on
        // Price is the price of the card that the corresponding player has landed on
        let card, price: number | undefined ;

        // Example of Selection
        
        // Determines whose turn it is using the count variable
        // Count % 4 because there are 4 players
        switch(count % 4) {
            // Player 4
            case 0:
                // Updating the card variable to what the corresponding player has landed on
                // Using temporary list
                card = cur_cards[pos_4.x][pos_4.y];
                price = card.price;
                // Checking whether the card is a type to be able to be bought 
                if(price) {
                    // Manipulating the bought property to change to the corresponding player that bought the card
                    // PLAYERS is the enumarator
                    card.bought = PLAYERS.PLAYER_4;
                    // Changing the bank account to subtract the card price
                    setAccount_4(account_4 - price)
                }
                break;
            
            // Player 1
            case 1:
                card = cur_cards[pos_1.x][pos_1.y];
                card.bought = PLAYERS.PLAYER_1;
                price = card.price;
                if(price) {
                    setAccount_1(account_1 - price)
                }
                break;
            
            // Player 2
            case 2:
                card = cur_cards[pos_2.x][pos_2.y];
                card.bought = PLAYERS.PLAYER_2;
                price = card.price;
                if(price) {
                    setAccount_2(account_2 - price);
                }
                break;
            
            // Player 3
            case 3:
                card = cur_cards[pos_3.x][pos_3.y];
                card.bought = PLAYERS.PLAYER_3;
                price = card.price;
                if(price) {
                    setAccount_3(account_3 - price);
                }
                break;
        }

        // Updating the primary list of all the cards after the changes of the properties of specific cards being bought
        setCards(cur_cards);
    }

    // Function that runs if a player lands on the "Income Tax" card
    const tax = () => {
        // Alerting the user
        window.alert(`Player Must pay tax. \n $200`)

        // Example of Selection
        
        // Determining whose turn it is
        switch(count % 4) {
            // Player 4
            case 0: 
                // Tax is a flat fee of $200
                // Using the SetAccount function to remove 200 from the corresponding player's bank account
                setAccount_4(account_4 - 200);
                break;
            
            // Player 1
            case 1:
                setAccount_1(account_1 - 200);
                break;

            // Player 2
            case 2:
                setAccount_2(account_2 - 200);
                break;

            // Player 3
            case 3:
                setAccount_3(account_3 - 200);
                break;
        }
    }

    // Function runs when a player lands on a community chest card to select a random card from the list of community chest cards and run the special function for each card
    const community_func = (): void => {
        // "community" is imported from the Lists.ts which includes a list of all the community chest cards and their functions

        // Select Random Card
        // community.length - 1 is the maximum index
        // Minimum is 0
        // Math.floor() because it must be a whole number since it is an index
        const card = community[Math.floor(Math.random() * (community.length - 1))]

        // Example of Selection

        // Determining whose turn it is
        switch(count % 4) {
            // Player 4
            case 0:
                // Alert Player
                alert(`Player 4: ${card.name}`)
                // Passing the bank account and function to manipulate the bank account into the function of the special card
                card.func(account_4, setAccount_4)
                break;

            // Player 1
            case 1:
                alert(`Player 1: ${card.name}`)
                card.func(account_1, setAccount_1)
                break;

            // Player 2
            case 2:
                alert(`Player 2: ${card.name}`)
                card.func(account_2, setAccount_2)
                break;

            // Player 3
            case 3:
                alert(`Player 3: ${card.name}`)
                card.func(account_3, setAccount_3)
                break;
        }
    }

    // Function runs when a player lands on a chance card to select a random card from the list of chance cards and run the special function for each card
    const chance_func = (): void => {

        // Selecting Random Card
        // Maximum index is chance.length - 1
        // Minimum index is 0
        // Math.floor() because idex must be a whole number

        // "chance" is imported from Lists.ts which includes a list of all the change cards and their functions
        const card = chance[Math.floor(Math.random() * (chance.length - 1))]

        // Example of Selection 

        // Determining whose turn it is
        switch(count % 4) {
            // Player 4
            case 0:
                // Alerting Player
                alert(`Player 4: ${card.name}`)
                // Passing Bank account and function to manipulate bank account to the function of the special card
                card.func(account_4, setAccount_4)
                break;

            // Player 1
            case 1:
                alert(`Player 1: ${card.name}`)
                card.func(account_1, setAccount_1)
                break;

            // Player 2
            case 2:
                alert(`Player 2: ${card.name}`)
                card.func(account_2, setAccount_2)
                break;

            // Player 3
            case 3:
                alert(`Player 3: ${card.name}`)
                card.func(account_3, setAccount_3)
                break;
        }
    }

    // When a player lands on another player's property, this function decides how much to pay and handles the money transaction
    const rent_func = (p: place) => {
        // Checking whether this card is available to rent

        // Example of Selection
        if(p.price) {
            // Rent Price is regular price divided by 10
            const rent_price = p.price / 10;

            // Example of Selection

            // Deciding whose turn it is
            switch(count % 4) {
                // Player 4 Turn
                case 0:
                    // Finding who the owner of the property is
                    switch(p.bought) {
                        // Player 1 owns the card and Player 4 landed on it
                        case PLAYERS.PLAYER_1:
                            // Player 4 subtracts the rent_price from total 
                            setAccount_4(account_4 - rent_price);
                            // Player 1 adds the rent_price
                            setAccount_1(account_1 + rent_price);
                            // Alerts both players
                            alert(`Player 4 must pay Player 1 $${rent_price} of rent for ${p.name}`)
                            break;

                        case PLAYERS.PLAYER_2:
                            setAccount_4(account_4 - rent_price);
                            setAccount_2(account_2 + rent_price);
                            alert(`Player 4 must pay Player 2 $${rent_price} of rent for ${p.name}`)
                            break;

                        case PLAYERS.PLAYER_3:
                            setAccount_4(account_4 - rent_price);
                            setAccount_3(account_3 + rent_price);
                            alert(`Player 4 must pay Player 3 $${rent_price} of rent for ${p.name}`)
                            break;
                    }
                    break;

                // Player 1 Turn
                case 1:
                    switch(p.bought) {
                        case PLAYERS.PLAYER_2:
                            setAccount_1(account_1 - rent_price);
                            setAccount_2(account_2 + rent_price);
                            alert(`Player 1 must pay Player 2 $${rent_price} of rent for ${p.name}`)
                            break;

                        case PLAYERS.PLAYER_3:
                            setAccount_1(account_1 - rent_price);
                            setAccount_3(account_3 + rent_price);
                            break;

                        case PLAYERS.PLAYER_4:
                            setAccount_1(account_1 - rent_price);
                            setAccount_4(account_4 + rent_price);
                            break;
                    }
                    break;

                // Player 2 Turn
                case 2:
                    switch(p.bought) {
                        case PLAYERS.PLAYER_1:
                            setAccount_2(account_2 - rent_price);
                            setAccount_1(account_1 + rent_price);
                            break;

                        case PLAYERS.PLAYER_3:
                            setAccount_2(account_2 - rent_price);
                            setAccount_3(account_3 + rent_price);
                            break;

                        case PLAYERS.PLAYER_4:
                            setAccount_2(account_2 - rent_price);
                            setAccount_4(account_4 + rent_price);
                            break;
                    }
                    break;

                // Player 3 Turn
                case 3:
                    switch(p.bought) {
                        case PLAYERS.PLAYER_1:
                            setAccount_3(account_3 - rent_price);
                            setAccount_1(account_1 + rent_price);
                            break;

                        case PLAYERS.PLAYER_2:
                            setAccount_3(account_3 - rent_price);
                            setAccount_2(account_2 + rent_price);
                            break;

                        case PLAYERS.PLAYER_4:
                            setAccount_3(account_3 - rent_price);
                            setAccount_4(account_4 + rent_price);
                            break;
                    }
                    break;
            }
        }
    }
    
    // Function is iterated through every single card
    // Parameter: "p" is for every single card and type is place
    const display_button = (p: place) => {
        // Button Initial Value
        let button = <div></div>;
        let rent = <div></div>;

        // Example of Selection
        if(p.bought) {
            // If the card is already bought, other players must pay rent if they land on the card
            rent = <button onClick={() => {
                rent_func(p)
            }}>Rent</button>
        } else if(p.tax) {
            // If the card is a "income tax" card
            button = <button onClick={tax}>Pay Tax</button>
        } else if(p.community) {
            // Community Chest Cards
            button = <button onClick={community_func}>Draw Card</button>
        } else if(p.chance) {
            // Chance cards
            button = <button onClick={chance_func}>Draw Card</button>
        } else if(p.jail || p.go || p.park) {
            // If the card is a jail, go, or park card there is no corresponding button for them
            button = <div></div>
        }
        else {
            // If the card is a regular place, there must be a "buy" button
            button = <button onClick={buy}>Buy</button>
        }

        // Returns the corresponding buttons depending on the properties of the card
        return (
            <div>
                {button}
                {rent}
            </div>
        )
    }

    // Function to check if any of the player's have passed go on their turn
    const check_go = () => {
        // Example of Selection
        
        // Using count % 4 to determine whose turn it is
        switch(count % 4) {
            // Player 4
            case 0:
                // Checks if the previous row was 3 and the current is 0, meaning the player has passed GO
                if(previous.x == 3 && pos_4.x == 0) {
                    // Creates an alert to inform all players
                    alert("Player 4 Passed Go \n Collect $200")
                    // Adds $200 to their bank balance
                    setAccount_4(account_4 + 200);
                }
                break

            // Player 1
            case 1:
                if(previous.x == 3 && pos_1.x == 0) {
                    alert("Player 1 Passed Go \n Collect $200");
                    setAccount_1(account_1 + 200);
                }
                break;

            // Player 2
            case 2:
                if(previous.x == 3 && pos_2.x == 0) {
                    alert("Player 2 Passed Go \n Collect $200")
                    setAccount_2(account_2 + 200);
                }
                break;

            // Player 3
            case 3:
                if(previous.x == 3 && pos_3.x == 0) {
                    alert("Player 3 Passed Go \n Collect $200")
                    setAccount_3(account_3 + 200);
                }
                break;
        }
    }

    // Runs the function anytime any of the player's position changes
    useEffect(() => {
        // Checks if the current player has passed go on their turn
        check_go();
    }, [pos_1, pos_2, pos_3, pos_4])
    
    return (
        <div>
            <div className="top-grid">
                {
                    // Loop through the deconstructed row of cards from the 2D array of all of the cards
                    // Example of Procedure that includes sequencing, selection, and iteration
                    // Iteration
                    top.map((card: place) => {
                        return (
                            // Class name is a variable that chnages the color of the card based on who owns the card
                            // If the card does have a bought property, then the class name, which controls the styling will be either "player_1" or etc. or undefined
                            <div className={card.bought ? card.bought : undefined }>
                                {/* Iteration */}
                                {card.name} <br />
                                {card.price} <br />
                                {/* Depending on whether the corresponding player has landed on this card, the card will display that player or nothing */}
                                {/* Selection */}
                                {card.player_1 ? (<div>Player 1 <br /></div>) : null}                                 
                                {card.player_2 ? (<div>Player 2 <br /></div>) : null}                                 
                                {card.player_3 ? (<div>Player 3 <br /></div>) : null}                                 
                                {card.player_4 ? (<div>Player 4 <br /></div>) : null}                                 
                                {/* The display_button method uses the card's properties to determine which buttons if any should be displayed on the card */}
                                {/* User must click this button to interact with the card, including buying the card, repaying rent to another player,
                                selecting a random chance or community chest card, or paying income tax 
                                */}
                                {display_button(card)}
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <div className="left-grid">
                {
                    left.map((card: place) => {
                        return (
                            <div className={card.bought ? card.bought : undefined }>
                                {card.name} <br />
                                {card.price} <br />
                                {card.player_1 ? (<div>Player 1 <br /></div>) : null}                                 
                                {card.player_2 ? (<div>Player 2 <br /></div>) : null}                                 
                                {card.player_3 ? (<div>Player 3 <br /></div>) : null}
                                {card.player_4 ? (<div>Player 4 <br /></div>) : null}                                 
                                {display_button(card)}
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <div className="right-grid">
                {
                    right.map((card: place) => {
                        return (
                            <div className={card.bought ? card.bought : undefined }>
                                {card.name} <br />
                                {card.price} <br />
                                {card.player_1 ? (<div>Player 1 <br /></div>) : null}                                 
                                {card.player_2 ? (<div>Player 2 <br /></div>) : null}                                 
                                {card.player_3 ? (<div>Player 3 <br /></div>) : null}                                 
                                {card.player_4 ? (<div>Player 4 <br /></div>) : null}                                 
                                {display_button(card)}
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <div className="bottom-grid">
                {
                    bottom.map((card: place) => {
                        return (
                            <div className={card.bought ? card.bought : undefined}>
                                {card.name} <br />
                                {card.price} <br />
                                {card.player_1 ? (<div>Player 1 <br /></div>) : null}                                 
                                {card.player_2 ? (<div>Player 2 <br /></div>) : null}                                 
                                {card.player_3 ? (<div>Player 3 <br /></div>) : null}                                 
                                {card.player_4 ? (<div>Player 4 <br /></div>) : null}                                 
                                {display_button(card)}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Display;
