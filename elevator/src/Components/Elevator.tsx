import React, { useState } from 'react';
import Keypad from './KeyPad';

const Elevator: React.FC = () => {
    const [top, setTop] = useState<number>(2350);

    return (
        <div className="elevator" style={{ top: `${top}vh` }}>
            Elevator
            <Keypad top={top} setTop={setTop} />
        </div>
    )
}

export default Elevator;