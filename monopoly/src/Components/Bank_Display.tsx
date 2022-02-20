import React from 'react';

interface Props {
    bank: number,
    account_1: number,
    account_2: number,
    account_3: number,
    account_4: number,
}

const Bank: React.FC<Props> = ({
    bank,
    account_1,
    account_2,
    account_3,
    account_4,
}) => {
    return (
        <div className="Balance_Display">
            <div className="bank_display">
                Bank Balance <br /> 
                ${bank}
            </div>
            <div className="account_displays">
                <div style={{ background: "#072227", color: "white" }}>
                    Player 1 <br />
                    ${account_1} <br />
                </div>
                <div style={{ background: "#35858B", color: "white"}}>
                    Player 2 <br />
                    ${account_2} <br />
                </div>
                <div style={{ background: "#4FBDBA" }}>
                    Player 3 <br />
                    ${account_3} <br />
                </div>
                <div style={{ background: "#AEFEFF" }}>
                    Player 4 <br />
                    ${account_4} <br />
                </div>
            </div>
        </div>
    )
}

export default Bank;