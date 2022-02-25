import React, { useEffect, useState } from 'react';
import { places, pos } from '../Lists';

interface Props {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    setPos: React.Dispatch<React.SetStateAction<pos>>,
    position: pos,
    player: number
}

const Dice: React.FC<Props> = ({
    count, 
    setCount,
    setPos,
    position,
    player
}) => {
    const [dice_one, setDice_1] = useState(1);
    const [dice_two, setDice_2] = useState(1);
    const [clicked, setClicked] = useState<boolean>(false);

    const move = (dice_1: number, dice_2: number) => {
        let x = position.x;
        let y = position.y;
        switch(player) {
            case 1:
                places[x][y].player_1 = false;
                break;
            
            case 2:
                places[x][y].player_2 = false;
                break;
            
            case 3:
                places[x][y].player_3 = false;
                break;

            case 4:
                places[x][y].player_4 = false;
                break;
        }
        const sum = dice_1 + dice_2
        if(x === 0 || x === 1) {
            if(y - sum < 0) {
                if(x === 0) {
                    setPos({
                        x: 1,
                        y: 10 - (sum - y)
                    })
                } else {
                    setPos({
                        x: 2,
                        y: sum - y - 1
                    })
                }
            } else {
                setPos({
                    x,
                    y: y - sum
                });
            }
        } else {
            if(sum + y >= 10) {
                if(x === 3) {
                    const dif = sum - (10-position.y);
                    setPos({
                        x: 0,
                        y: 10 - dif
                    });
                } else {
                    const dif = sum - (10 - position.y);
                    setPos({
                        x: x + 1,
                        y: dif
                    });
                }
            } else {
                setPos({
                    x,
                    y: y + sum
                });
            }
        }
    }

    useEffect(() => {
        setDice_1(1);
        setDice_2(1);
        setClicked(false);
    }, [])

    return (
        <div>
            <div style={{ background: 'black', color: 'white' }}>
                {dice_one} <br />
                {dice_two}
            </div>
            <button disabled={clicked} onClick={() => {

                const val_1 = Math.floor(Math.random() * 6) + 1;
                const val_2 = Math.floor(Math.random() * 6) + 1;

                setDice_1(val_1);
                setDice_2(val_2);
                setClicked(true)
                move(val_1,val_2);
            }}>
                Roll
            </button>
            <button onClick={() => {
                setClicked(false)
                setCount(count + 1);
            }}>
                Next
            </button>
        </div>
    )
}

export default Dice;