import React from 'react';

interface Props {
    top: number,
    setTop: React.Dispatch<React.SetStateAction<number>>
}

const Keypad: React.FC<Props> = ({
    top,
    setTop
}) => {
    const delay = (milliseconds: number) => {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }

    const move = async () => {
        let cur = top;
        while (cur < 1000) {
            cur += 1;
            await delay(10);
            setTop(cur);
        }
    }

    return (
        <div>
            <button onClick={move}>Move</button>
        </div>
    )
}

export default Keypad;