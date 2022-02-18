import React, { useEffect, useState } from 'react';

interface Props {
    setDice: React.Dispatch<React.SetStateAction<number>>,
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
}

const Dice: React.FC<Props> = ({
    setDice,
    count, 
    setCount
}) => {
    const [dice_1, setDice_1] = useState<number>(0);
    const [dice_2, setDice_2] = useState<number>(0);

    const [clicked, setClicked] = useState<boolean>(false);

    useEffect(() => {
        setDice_1(0);
        setDice_2(0);
        setClicked(false);
    }, [])

    return (
        <div>
        <div style={{ background: 'black', color: 'white' }}>
            {dice_1} <br />
            {dice_2}
        </div>
        <button disabled={clicked} onClick={() => {

            const val_1 = Math.floor(Math.random() * 6) + 1;
            const val_2 = Math.floor(Math.random() * 6) + 1;

            setDice_1(val_1);
            setDice_2(val_2);
            setDice(val_1 + val_2);
            setClicked(true)
        }}>
            Roll
        </button>
        <button onClick={() => {
            setDice_1(1);
            setDice_2(1);
            setClicked(false)
            setCount(count + 1);
        }}>
            Next
        </button>
        </div>
    )
}

export default Dice;