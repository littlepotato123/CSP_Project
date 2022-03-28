import React, { useEffect, useState } from 'react';
import { chance, collect_tax, community, place, places, PLAYERS, pos } from '../Lists';

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
    // A position of the previous position of the current player
    // Used to determine whether the player has passed "GO"
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
    previous
}) => {
    // A temporary state that stores all of the cards
    // A function that can change the temporary state of all of the cards
    const [cards, setCards] = useState<place[][]>(places);

    
    const [_, setPlayer_1] = useState<pos>({ x: 0, y: 0});
    const [__, setPlayer_2] = useState<pos>({ x: 0, y: 0});
    const [___, setPlayer_3] = useState<pos>({ x: 0, y: 0});
    const [____, setPlayer_4] = useState<pos>({ x: 0, y: 0});

    const [bottom, left, top, right] = cards;

    const buy = () => {
        const cur_cards = cards;
        let card;
        let price: number | undefined = 0;
        switch(count % 4) {
            case 0:
                card = cur_cards[pos_4.x][pos_4.y];
                card.bought = PLAYERS.PLAYER_4;
                price = card.price;
                if(price) {
                    setAccount_4(account_4 - price)
                }
                break;
            
            case 1:
                card = cur_cards[pos_1.x][pos_1.y];
                card.bought = PLAYERS.PLAYER_1;
                price = card.price;
                if(price) {
                    setAccount_1(account_1 - price)
                }
                break;
            
            case 2:
                card = cur_cards[pos_2.x][pos_2.y];
                card.bought = PLAYERS.PLAYER_2;
                price = card.price;
                if(price) {
                    setAccount_2(account_2 - price);
                }
                break;
            
            case 3:
                card = cur_cards[pos_3.x][pos_3.y];
                card.bought = PLAYERS.PLAYER_3;
                price = card.price;
                if(price) {
                    setAccount_3(account_3 - price);
                }
                break;
        }
        setCards(cur_cards);
    }

    const tax = () => {
        window.alert(`Player Must pay tax. \n $200}`)
        if(collect_tax) {
            switch(count % 4) {
                case 0: 
                    collect_tax(account_4, setAccount_4);
                    break;
                
                case 1:
                    collect_tax(account_1, setAccount_1);
                    break;

                case 2:
                    collect_tax(account_2, setAccount_2);
                    break;

                case 3:
                    collect_tax(account_3, setAccount_3);
                    break;
            }

        }
    }

    const community_func = (): void => {
        const card = community[Math.floor(Math.random() * (community.length - 1) + 1)]
        switch(count % 4) {
            case 0:
                alert(`Player 4: ${card.name}`)
                card.func(account_4, setAccount_4)
                break;

            case 1:
                alert(`Player 1: ${card.name}`)
                card.func(account_1, setAccount_1)
                break;

            case 2:
                alert(`Player 2: ${card.name}`)
                card.func(account_2, setAccount_2)
                break;

            case 3:
                alert(`Player 3: ${card.name}`)
                card.func(account_3, setAccount_3)
                break;
        }
    }

    const chance_func = (): void => {
        const card = chance[Math.floor(Math.random() * (chance.length - 1) + 1)]
        switch(count % 4) {
            case 0:
                alert(`Player 4: ${card.name}`)
                card.func(account_4, setAccount_4)
                break;

            case 1:
                alert(`Player 1: ${card.name}`)
                card.func(account_1, setAccount_1)
                break;

            case 2:
                alert(`Player 2: ${card.name}`)
                card.func(account_2, setAccount_2)
                break;

            case 3:
                alert(`Player 3: ${card.name}`)
                card.func(account_3, setAccount_3)
                break;
        }
    }

    const rent_func = (p: place) => {
        if(p.price) {
            // Alert who has to pay rent to who
            const rent_price = p.price / 10;
            switch(count % 4) {
                case 0:
                    switch(p.bought) {
                        case PLAYERS.PLAYER_1:
                            setAccount_4(account_4 - rent_price);
                            setAccount_1(account_1 + rent_price);
                            break;

                        case PLAYERS.PLAYER_2:
                            setAccount_4(account_4 - rent_price);
                            setAccount_2(account_2 + rent_price);
                            break;

                        case PLAYERS.PLAYER_3:
                            setAccount_4(account_4 - rent_price);
                            setAccount_3(account_3 + rent_price);
                            break;
                    }
                    break;

                case 1:
                    switch(p.bought) {
                        case PLAYERS.PLAYER_2:
                            setAccount_1(account_1 - rent_price);
                            setAccount_2(account_2 + rent_price);
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
    
    const display_b = (p: place) => {
        let but = <div></div>;
        let rent = <div></div>;
        if(p.bought) {
            rent = <button onClick={() => {
                rent_func(p)
            }}>Rent</button>
        } else if(p.tax) {
            but = <button onClick={tax}>Pay Tax</button>
        } else if(p.community) {
            but = <button onClick={community_func}>Draw Card</button>
        } else if(p.chance) {
            but = <button onClick={chance_func}>Draw Card</button>
        } else if(p.jail || p.go) {
            but = <div></div>
        }
        else if(p.park) {
            but = <div></div>
        }
        else {
            but = <button onClick={buy}>Buy</button>
        }

        return (
            <div>
                {but}
                {rent}
            </div>
        )
    }

    // Function to check if any of the player's have passed go on their turn
    const check_go = () => {
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
        // Updates the new positions of the players
        setPlayer_1(pos_1);
        setPlayer_2(pos_2);
        setPlayer_3(pos_3);
        setPlayer_4(pos_4);
        // Creates a temporary list of all of the cards
        const cur_cards = cards;
        // Updates the position of the players on the temporary list of cards
        cur_cards[pos_1.x][pos_1.y].player_1 = true;
        cur_cards[pos_2.x][pos_2.y].player_2 = true;
        cur_cards[pos_3.x][pos_3.y].player_3 = true;
        cur_cards[pos_4.x][pos_4.y].player_4 = true;
        // Updates the real cards by setting it to the temporary list
        setCards(cur_cards);
    }, [pos_1, pos_2, pos_3, pos_4])
    
    return (
        <div>
            <div className="top-grid">
                {
                    top.map((p: place, i) => {
                        return (
                            <div className={p.bought ? p.bought : undefined }>
                                {p.name} <br />
                                {p.price} <br />
                                {p.player_1 ? (<div>Player 1 <br /></div>) : null}                                 
                                {p.player_2 ? (<div>Player 2 <br /></div>) : null}                                 
                                {p.player_3 ? (<div>Player 3 <br /></div>) : null}                                 
                                {p.player_4 ? (<div>Player 4 <br /></div>) : null}                                 
                                {display_b(p)}
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <div className="left-grid">
                {
                    left.map((p: place, i) => {
                        return (
                            <div className={p.bought ? p.bought : undefined }>
                                {p.name} <br />
                                {p.price} <br />
                                {p.player_1 ? (<div>Player 1 <br /></div>) : null}                                 
                                {p.player_2 ? (<div>Player 2 <br /></div>) : null}                                 
                                {p.player_3 ? (<div>Player 3 <br /></div>) : null}                                 
                                {p.player_4 ? (<div>Player 4 <br /></div>) : null}                                 
                                {display_b(p)}
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <div className="right-grid">
                {
                    right.map((p: place, i) => {
                        return (
                            <div className={p.bought ? p.bought : undefined }>
                                {p.name} <br />
                                {p.price} <br />
                                {p.player_1 ? (<div>Player 1 <br /></div>) : null}                                 
                                {p.player_2 ? (<div>Player 2 <br /></div>) : null}                                 
                                {p.player_3 ? (<div>Player 3 <br /></div>) : null}                                 
                                {p.player_4 ? (<div>Player 4 <br /></div>) : null}                                 
                                {display_b(p)}
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <div className="bottom-grid">
                {
                    bottom.map((p: place, i) => {
                        return (
                            <div className={p.bought ? p.bought : undefined}>
                                {p.name} <br />
                                {p.price} <br />
                                {p.player_1 ? (<div>Player 1 <br /></div>) : null}                                 
                                {p.player_2 ? (<div>Player 2 <br /></div>) : null}                                 
                                {p.player_3 ? (<div>Player 3 <br /></div>) : null}                                 
                                {p.player_4 ? (<div>Player 4 <br /></div>) : null}                                 
                                {display_b(p)}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Display;