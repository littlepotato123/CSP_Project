// Element to display all of the current bank accounts of the players
import React from 'react';

// Creating a parameter for each of the bank accounts
interface Props {
    account_1: number,
    account_2: number,
    account_3: number,
    account_4: number,
}

const Bank: React.FC<Props> = ({
    // Implementing the Parameters
    account_1,
    account_2,
    account_3,
    account_4,
}) => {
    return (
        <div className="Balance_Display">
            {/* Each Color corresponds to a player and is also used to determine who owns which card */}
            <div className="account_displays">
                <div style={{ background: "#072227", color: "white" }}>
                    Player 1 <br />
                    {/* Displaying the passed in parameter */}
                    ${account_1} <br />
                </div>
                <div style={{ background: "#35858B", color: "white"}}>
                    Player 2 <br />
                    {/* Displaying the passed in parameter */}
                    ${account_2} <br />
                </div>
                <div style={{ background: "#4FBDBA" }}>
                    Player 3 <br />
                    {/* Displaying the passed in parameter */}
                    ${account_3} <br />
                </div>
                <div style={{ background: "#AEFEFF" }}>
                    Player 4 <br />
                    {/* Displaying the passed in parameter */}
                    ${account_4} <br />
                </div>
            </div>
        </div>
    )
}

export default Bank;