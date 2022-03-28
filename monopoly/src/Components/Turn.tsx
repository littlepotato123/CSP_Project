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
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    setPrevious: React.Dispatch<React.SetStateAction<pos>>,
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
        pos_4,
        count,
        setCount,
        setPrevious
    }
) => {
    const [val, setVal] = useState<any>(null);
    
    const player_1 = (
        <div>
            Player 1
            <Dice position={pos_1} setPos={setPos_1}  count={count} setCount={setCount} setPrevious={setPrevious} />
        </div>
    )

    const player_2 = (
        <div>
            Player 2
            <Dice position={pos_2} setPos={setPos_2} count={count} setCount={setCount}  setPrevious={setPrevious}/>
        </div>
    )

    const player_3 = (
        <div>
            Player 3
            <Dice position={pos_3} setPos={setPos_3} count={count} setCount={setCount} setPrevious={setPrevious}/>
        </div>
    )

    const player_4 = (
        <div>
            Player 4
            <Dice position={pos_4} setPos={setPos_4} count={count} setCount={setCount} setPrevious={setPrevious}/>
        </div>
    )

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