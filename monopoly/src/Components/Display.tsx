import React, { useEffect, useState } from 'react';
import { collect_tax, place, places, PLAYERS, pos } from '../Lists';

interface Props {
    pos_1: pos,
    pos_2: pos,
    pos_3: pos,
    pos_4: pos,
    count: number,
    account_1: number,
    account_2: number,
    account_3: number,
    account_4: number,
    setAccount_1: React.Dispatch<React.SetStateAction<number>>,
    setAccount_2: React.Dispatch<React.SetStateAction<number>>,
    setAccount_3: React.Dispatch<React.SetStateAction<number>>,
    setAccount_4: React.Dispatch<React.SetStateAction<number>>,
    setPos_1: React.Dispatch<React.SetStateAction<pos>>,
    setPos_2: React.Dispatch<React.SetStateAction<pos>>,
    setPos_3: React.Dispatch<React.SetStateAction<pos>>,
    setPos_4: React.Dispatch<React.SetStateAction<pos>>,
    previous: pos
}

const Display: React.FC<Props> = ({
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
    setPos_1,
    setPos_2,
    setPos_3,
    setPos_4,
    previous
}) => {
    const [cards, setCards] = useState(places);

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
    
    const display_b = (p: place) => {
        let but = <div></div>;
        if(p.bought) {
            return null;
        } else if(p.tax) {
            but = <button onClick={tax}>Pay Tax</button>
        } else if(p.community) {
            but = <button onClick={() => {}}>Draw Card</button>
        } else if(p.chance) {
            but = <button onClick={() => {}}>Draw Card</button>
        } else if(p.jail || p.go) {
            but = <div></div>
        }
         else {
            but = <button onClick={buy}>Buy</button>
        }

        return (
            <div>
                {but}
            </div>
        )
    }

    const check_go = () => {
        switch(count % 4) {
            case 0:
                if(previous.x == 3 && pos_4.x == 0) {
                    alert("Player 4 Passed Go \n Collect $200")
                    setAccount_4(account_4 + 200);
                }
                break

            case 1:
                if(previous.x == 3 && pos_1.x == 0) {
                    alert("Player 1 Passed Go \n Collect $200");
                    setAccount_1(account_1 + 200);
                }
                // Player 1
                break;

            case 2:
                if(previous.x == 3 && pos_2.x == 0) {
                    alert("Player 2 Passed Go \n Collect $200")
                    setAccount_2(account_2 + 200);
                }
                //Player 2
                break;

            case 3:
                if(previous.x == 3 && pos_3.x == 0) {
                    alert("Player 3 Passed Go \n Collect $200")
                    setAccount_3(account_3 + 200);
                }
                //Player 3
                break;
        }
    }

    useEffect(() => {
        if(count > 4) {
            check_go();
        }
        setPlayer_1(pos_1);
        setPlayer_2(pos_2);
        setPlayer_3(pos_3);
        setPlayer_4(pos_4);
        const cur_cards = cards;
        cur_cards[pos_1.x][pos_1.y].player_1 = true;
        cur_cards[pos_2.x][pos_2.y].player_2 = true;
        cur_cards[pos_3.x][pos_3.y].player_3 = true;
        cur_cards[pos_4.x][pos_4.y].player_4 = true;
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