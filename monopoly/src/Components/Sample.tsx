import React from 'react';
import { pos } from '../Lists';

interface Props {
    position: pos,
    setPosition: React.Dispatch<React.SetStateAction<pos>>
}

const Sample: React.FC<Props> = (
    {
        setPosition
    }
) => {
    return (
        <div>
            <button onClick={() => {
                setPosition({x:3,y:4});
            }}>
                Click</button>        
        </div>
    )
}

export default Sample;