import React, { useEffect, useState } from 'react';
import { pos } from '../Lists';
import Dice from './Dice';

interface Props {
    setPos_1: React.Dispatch<React.SetStateAction<pos>>,
    setPos_2: React.Dispatch<React.SetStateAction<pos>>,
    setPos_3: React.Dispatch<React.SetStateAction<pos>>,
    setPos_4: React.Dispatch<React.SetStateAction<pos>>,
    pos_1: pos,
    pos_2: pos,
    pos_3: pos,
    pos_4: pos,
}

const Turn: React.FC<Props> = (
    {
        setPos_1,
        setPos_2,
        setPos_3,
        setPos_4,
        pos_1,
        pos_2,
        pos_3,
        pos_4
    }
) => {
    const [count, setCount] = useState<number>(1);
    const [val, setVal] = useState<any>(null);
    const [dice, setDice] = useState<number>(0);
    
    const movement = () => {
        switch(count % 4) {
            case 1: 
                break;
            
            case 2:
                break;
            
            case 3:
                break;
            
            case 0:
                break;
        }
    }

    const player_1 = (
        <div>
            Player 1
            <Dice count={count} setCount={setCount} setDice={setDice} />
        </div>
    )

    const player_2 = (
        <div>
            Player 2
            <Dice count={count} setCount={setCount} setDice={setDice} />
        </div>
    )

    const player_3 = (
        <div>
            Player 3
            <Dice count={count} setCount={setCount} setDice={setDice} />
        </div>
    )

    const player_4 = (
        <div>
            Player 4
            <Dice count={count} setCount={setCount} setDice={setDice} />
        </div>
    )

    useEffect(() => {
        console.log(dice);
    }, [dice])

    useEffect(() => {
        switch(count % 4) {
            case 1:
                setVal(player_1);
                break;
                
            case 2:
                setVal(player_2);
                break;
            
            case 3:
                setVal(player_3);
                break;
            
            case 0:
                setVal(player_4);
                break;
        }
    }, [count])
    
    return (
        <div className="turn">
            {val}
        </div>
    )
}

export default Turn;