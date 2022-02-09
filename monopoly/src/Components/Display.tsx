import React, { useEffect, useState } from 'react';
import { place, places, pos } from '../Lists';

interface Props {
    position: pos
}

const Display: React.FC<Props> = ({
    position
}) => {
    const [cards, setCards] = useState(places);
    const [player, setPlayer] = useState<pos>({ x: 0, y: 0});

    const [bottom, left, top, right] = cards;


    useEffect(() => {
        setPlayer(position);
        const cur_cards = cards;
        cur_cards[player.x][player.y].player = false;
        cur_cards[position.x][position.y].player = true;
        setCards(cur_cards);
    }, [position])
    
    return (
        <div>
            <div className="top-grid">
                {
                    top.map((p: place, i) => {
                        if(p.player) {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                                <br />
                                <p>Player</p>
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
                        if(p.player) {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                                <br />
                                <p>Player</p>
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
                        if(p.player) {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                                <br />
                                <p>Player</p>
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
                        if(p.player) {
                            return (<div key={p.name}>
                                {p.name}
                                <br />
                                {p.price}
                                <br />
                                <p>Player</p>
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