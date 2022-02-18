import React, { useEffect, useState } from 'react';
import { place, places, pos } from '../Lists';

interface Props {
    pos_1: pos,
    pos_2: pos,
    pos_3: pos,
    pos_4: pos
}

const Display: React.FC<Props> = ({
    pos_1,
    pos_2, 
    pos_3,
    pos_4
}) => {
    const [cards, setCards] = useState(places);
    const [_, setPlayer_1] = useState<pos>({ x: 0, y: 0});
    const [__, setPlayer_2] = useState<pos>({ x: 0, y: 0});
    const [___, setPlayer_3] = useState<pos>({ x: 0, y: 0});
    const [____, setPlayer_4] = useState<pos>({ x: 0, y: 0});

    const [bottom, left, top, right] = cards;


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
                        if(p.player_1) {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                                <br />
                                <p>Player 1</p>
                            </div>)
                        } else if(p.player_2) {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                                <br />
                                <p>Player 2</p>
                            </div>)
                        } else if(p.player_3) {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                                <br />
                                <p>Player 3</p>
                            </div>)
                        } else if(p.player_4) {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                                <br />
                                <p>Player 4</p>
                            </div>)
                        } else {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                            </div>)
                        }
                    })
                }
            </div>
            <br />
            <div className="left-grid">
                {
                    left.map((p: place, i) => {
                        if(p.player_1) {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                                <br />
                                <p>Player 1</p>
                            </div>)
                        } else if(p.player_2) {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                                <br />
                                <p>Player 2</p>
                            </div>)
                        } else if(p.player_3) {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                                <br />
                                <p>Player 3</p>
                            </div>)
                        } else if(p.player_4) {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                                <br />
                                <p>Player 4</p>
                            </div>)
                        } else {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                            </div>)
                        }
                    })
                }
            </div>
            <br />
            <div className="right-grid">
                {
                    right.map((p: place, i) => {
                        if(p.player_1) {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                                <br />
                                <p>Player 1</p>
                            </div>)
                        } else if(p.player_2) {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                                <br />
                                <p>Player 2</p>
                            </div>)
                        } else if(p.player_3) {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                                <br />
                                <p>Player 3</p>
                            </div>)
                        } else if(p.player_4) {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                                <br />
                                <p>Player 4</p>
                            </div>)
                        } else {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                            </div>)
                        }
                    })
                }
            </div>
            <br />
            <div className="bottom-grid">
                {
                    bottom.map((p: place, i) => {
                        if(p.player_1) {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                                <br />
                                <p>Player 1</p>
                            </div>)
                        } else if(p.player_2) {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                                <br />
                                <p>Player 2</p>
                            </div>)
                        } else if(p.player_3) {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                                <br />
                                <p>Player 3</p>
                            </div>)
                        } else if(p.player_4) {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                                <br />
                                <p>Player 4</p>
                            </div>)
                        } else {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                            </div>)
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Display;