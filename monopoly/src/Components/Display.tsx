import React, { useEffect, useState } from 'react';
import { place, places, PLAYERS, pos } from '../Lists';

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
    setAccount_4: React.Dispatch<React.SetStateAction<number>>
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
    setAccount_4
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
                console.log("4");
                card = cur_cards[pos_4.x][pos_4.y];
                card.bought = PLAYERS.PLAYER_4;
                price = card.price;
                if(price) {
                    setAccount_4(account_4 - price)
                }
                break;
            
            case 1:
                console.log('1');
                card = cur_cards[pos_1.x][pos_1.y];
                card.bought = PLAYERS.PLAYER_1;
                price = card.price;
                if(price) {
                    setAccount_1(account_1 - price)
                }
                break;
            
            case 2:
                console.log('2')
                card = cur_cards[pos_2.x][pos_2.y];
                card.bought = PLAYERS.PLAYER_2;
                price = card.price;
                if(price) {
                    setAccount_2(account_2 - price);
                }
                break;
            
            case 3:
                console.log("4")
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
    
    const display_b = (p: place) => {
        if(p.bought) {
            // Rent
            return null;
        } else if(p.community || p.go || p.chance || p.tax || p.jail || p.park) {
            return null
        } else {
            return (<div>
                <button onClick={() => {
                    buy();
                }}>Buy</button>
            </div>)
        }
    }


    useEffect(() => {
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