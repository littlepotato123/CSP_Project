import React from 'react';
import { Floors_ } from '../Lists';

const Floors: React.FC = () => {
    return (
        <div>
            {/* <div id="up" className="links">
                {
                    Floors_.map((val, i) => {
                        return (
                            <div id={i.toString()}>
                                <a href={`#${val.name.split(' ').join('')}`}>{val.name}</a>
                            </div>
                        )
                    })
                }
            </div> */}
            <div className="floors">
                {
                    Floors_.map((val, i) => {
                        return (
                            <div className="floor" id={val.name.split(' ').join('')}>
                                <h1>{val.name}</h1>
                                <a style={{ textDecoration: 'none', color: 'white'}} href="/#up">UP</a>
                            </div>
                        );
                    }) 
                }
            </div>
        </div>
    )
}

export default Floors;