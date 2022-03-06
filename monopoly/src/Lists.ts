import React from "react";

export enum PLAYERS {
    PLAYER_1 = "player_1",
    PLAYER_2 = "player_2",
    PLAYER_3 = "player_3",
    PLAYER_4 = "player_4"
}

export type place= {
    name: string,
    price?: number,
    community?: boolean,
    chance?: boolean,
    go?: boolean,
    jail?: boolean,
    tax?: boolean,
    park?: boolean,
    player_1?: boolean,
    player_2?: boolean,
    player_3?: boolean,
    player_4?: boolean,
    bought?: PLAYERS | null
};


export type pos = {
    x: number,
    y: number
}

export type special = {
    name: string,
    balance_func?: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => void,
    position_func?: (current_pos: pos, setPos: React.Dispatch<React.SetStateAction<pos>>, balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => void,
    pay_all_func?: (balance_1: number, setBalance_1: React.Dispatch<React.SetStateAction<number>>, balance_2: number, setBalance_2: React.Dispatch<React.SetStateAction<number>>, balance_3: number, setBalance_3: React.Dispatch<React.SetStateAction<number>>, balance_4: number, setBalance_4: React.Dispatch<React.SetStateAction<number>>) => void
}

export const collect_tax: special = {
    name: "Collect Tax. Pay $200",
    balance_func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
        setBalance(balance - 200);
    }
}

export const chance: Array<special> = [
    {
        name: "Advance to Boardwalk",
        position_func: (current_pos: pos, setPos: React.Dispatch<React.SetStateAction<pos>>, balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setPos({
                x: 3,
                y: 9
            })
        }
    },
    {
        name: "Advance to Illinois Avenue. If you pass Go, collect $200",
        position_func: (current_pos: pos, setPos: React.Dispatch<React.SetStateAction<pos>>, balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            if(current_pos.x == 3) {
                // Pass Go
                setBalance(balance + 200);
            }
            setPos({
                x: 2,
                y: 4
            })
        }
    },
    {
        name: "Advance to St. Charles Place. If you pass Go, collect $200",
        position_func: (current_pos: pos, setPos: React.Dispatch<React.SetStateAction<pos>>, balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            if(current_pos.x == 3 || current_pos.x == 2) {
                setBalance(balance + 200);
            }
            setPos({
                x: 1,
                y: 8
            })
        }
    },
    {
        name: "Bank pays you dividend of $50",
        balance_func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance + 12);
        }
    },
    // {
    //     name: "Get Out of Jail Free",
    //     func: () => {}
    // },
    // {
    //     name: "Go Back 3 Spaces",
    //     position_func: (current_pos: pos, setPos: React.Dispatch<React.SetStateAction<pos>>) => {
    //         // Checks
    //     }
    // },
    {
        name: "Speeding fine $15",
        balance_func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance - 15);
        }
    },
    {
        name: "Take a trip to Reading Railroad",
        position_func: (current_pos: pos, setPos: React.Dispatch<React.SetStateAction<pos>>, balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            if(current_pos.x == 3 || current_pos.x == 2 || current_pos.x == 1 || (current_pos.x == 0 && current_pos.y > 4)) {
                setBalance(balance + 200)
            }
            setPos({
                x: 0, 
                y: 4
            });
        }
    },
    {
        name:"You have been elected chairman of the Board. Pay each player $50",
        pay_all_func: (balance_1: number, setBalance_1: React.Dispatch<React.SetStateAction<number>>, balance_2: number, setBalance_2: React.Dispatch<React.SetStateAction<number>>, balance_3: number, setBalance_3: React.Dispatch<React.SetStateAction<number>>, balance_4: number, setBalance_4: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance_1(balance_1 - 200);
            setBalance_2(balance_2 + 50);
            setBalance_3(balance_3 + 50);
            setBalance_4(balance_4 + 50);
        }
    },
    {
        name: "Your building loan matures. Collect $150",
        balance_func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance + 150);
        }
    }
];

export const community: Array<special> = [
    {
        name: "Advance to Go (Collect $200)",
        position_func: (current_pos: pos, setPos: React.Dispatch<React.SetStateAction<pos>>, balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance + 200);
            setPos({
                x: 0,
                y: 9
            })
        }
    },
    {
        name: "Bank error in your favor. Collect $200",
        balance_func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance + 200);
        }
    },
    {
        name: "Doctor’s fee. Pay $50",
        balance_func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance - 50);
        }
    },
    {
        name: "From sale of stock you get $50",
        balance_func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance + 50);
        }
    },
    {
        name: "Holiday fund matures. Receive $100",
        balance_func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance + 100);
        }
    },
    {
        name: "Income tax refund. Collect $20",
        balance_func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance + 20);
        }
    },
    {
        name: "It is your birthday. Collect $10 from every player",
        pay_all_func: (balance_1: number, setBalance_1: React.Dispatch<React.SetStateAction<number>>, balance_2: number, setBalance_2: React.Dispatch<React.SetStateAction<number>>, balance_3: number, setBalance_3: React.Dispatch<React.SetStateAction<number>>, balance_4: number, setBalance_4: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance_1(balance_1 + 40);
            setBalance_2(balance_2 - 10);
            setBalance_2(balance_2 - 10);
            setBalance_2(balance_2 - 10);
        }
    },
    {
        name: "Life insurance matures. Collect $100",
        balance_func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance + 100);
        }
    },
    {
        name: "Pay hospital fees of $100",
        balance_func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance - 100);
        }
    },
    {
        name: "Pay school fees of $50",
        balance_func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance - 50);
        }
    },
    {
        name: "Receive $25 consultancy fee",
        balance_func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance + 25);
        }
    },
    {
        name: "You have won second prize in a beauty contese. Collect $10",
        balance_func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance + 10);
        }
    },
    {
        name: "You inherit $100",
        balance_func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance + 100);
        }
    }
];


export const places: Array<Array<place>> = [
    [
        {
            name: "Connecticut Avenue",
            price: 120
        },
        {
            name: "Vermont Avenue",
            price: 100
        },
        {
            name: "Chance",
            chance: true
        },
        {
            name: "Oriental Avenue",
            price: 100
        },
        {
            name: "Reading Railroad",
            price: 200
        },
        {
            name: "Income Tax",
            price: 200,
            tax: true
        },
        {
            name: "Baltic Avenue",
            price: 60
        },
        {
            name: "Community Chest",
            community: true
        },
        {
            name: "Mediterranean Avenue",
            price: 60
        },
        {
            name: "GO!",
            go: true,
        },
    ],
    [
        {
            name: "New York Avenue",
            price: 200,
        },
        {
            name: "Tennesse Avenue",
            price: 180
        },
        {
            name: "Community Chest",
            community: true
        },
        {
            name: "St. James Place",
            price: 200
        },
        {
            name: "Pennsylnvania Railroad",
            price: 200
        },
        {
            name: "Virginia Avenue",
            price: 160
        },
        {
            name: "States Avenue",
            community: true
        },
        {
            name: "Electric Company",
            price: 150
        },
        {
            name: "St. Charles Place",
            price: 140
        },
        {
            name: "Visiting Jail",
            jail: true
        }
    ],
    [
        {
            name: "Free Parking",
            park: true
        },
        {
            name: "Kentucky Avenue",
            price: 220
        },
        {
            name: "Chance",
            chance: true
        },
        {
            name: "Indiana Avenue",
            price: 220
        },
        {
            name: "Illinois Avenue",
            price: 240
        },
        {
            name: "B. & O. Railroad",
            price: 200
        },
        {
            name: "Atlantic Avenue",
            price: 260
        },
        {
            name: "Ventor Avenue",
            price: 260
        },
        {
            name: "Water Works",
            price: 150
        },
        {
            name: "Marvin Gardens",
            price: 280
        }
    ],
    [
        {
            name: "Visiting Jail",
            jail: true
        },
        {
            name: "Pacific Avenue",
            price: 300
        },
        {
            name: "North Carolina Avenue",
            price: 300
        },
        {
            name: "Community Chest",
            community: true
        },
        {
            name: "Pennsylvania Avenue",
            price: 320
        },
        {
            name: "Short Line",
            price: 200
        },
        {
            name: "Chance",
            chance: true
        },
        {
            name: "Park Place",
            price: 350
        },
        {
            name: "Luxury Tax",
            price: 100
        },
        {
            name: "BoardWalk",
            price: 400
        }
    ]
];
