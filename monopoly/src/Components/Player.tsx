import React from 'react';
import { places, pos } from '../Lists';

interface Props {
    cur_pos: pos
}

const Player: React.FC<Props>= ({
    cur_pos
}) => {
    const name = places[cur_pos.x][cur_pos.y].name;
    const e = document.getElementById(name);
    
    return (
        <div>
            Player
        </div>
    )
}

export default Player;