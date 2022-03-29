// Used for the "bought" property in each card
export enum PLAYERS {
    PLAYER_1 = "player_1",
    PLAYER_2 = "player_2",
    PLAYER_3 = "player_3",
    PLAYER_4 = "player_4"
}

// The type of every card
export type place= {
    name: string,
    price?: number,
    // Determines whether the card is a community chest card
    community?: boolean,
    // Determines whether the card is a chance card
    chance?: boolean,
    // Determines whether the card is the "GO!" card
    go?: boolean,
    // Determines whether the card is the "JAIL" card
    jail?: boolean,
    // Determines whether the card is the "Income Tax" card
    tax?: boolean,
    // Determines whether the card is the "Free Parking" card
    park?: boolean,
    // These booleans are used to determine whether any player is currently landed on the card
    // This is used in Display.tsx to actually display the player on the card
    player_1?: boolean,
    player_2?: boolean,
    player_3?: boolean,
    player_4?: boolean,
    // Used to determine which player owns the card
    bought?: PLAYERS | null
};

// Type used to determine the position of a player
export type pos = {
    // Which row in the 2D array of all of the cards
    x: number,
    // Which element in the row in the 2D array of all the cards
    y: number
}

// The type of the speical cards such as the chance and community chest cards
type special = {
    name: string,
    // All cards are money related special cards so they require the correponding player's bank account current value and the function to change that variable
    func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => void
}

// All Chance Cards
// Array of Special Cards
export const chance: special[] = [
    {
        name: "Speeding Fine",
        func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance - 15);
        }
    },
    {
        name: "Building Loan Matures. Collect $150",
        func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance - 150);
        }
    },
    {
        name: "Doctor's Fee. Pay $50",
        func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance - 50);
        }
    },
    {
        name: "Pay Hospital Fees of $100",
        func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance- 100);
        }
    },
    {
        name: "Pay School Fees of $50",
        func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance - 50);
        }
    }
]

// All Community Chest Cards
// Array of Special Cards
export const community: special[] = [
    {
        name: "You inherit $100",
        func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance + 100);
        }
    },
    {
        name: "You have won second prize in a beauty contest. Collect $10",
        func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance + 10);
        }
    },
    {
        name: "Receive $25 consultancy fee",
        func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance + 25);
        }
    },
    {
        name: "It is your birthday. Collect $200",
        func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance + 200);
        }
    },
    {
        name: "Life Insurance Matures. Collect $100",
        func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance + 100);
        }
    },
    {
        name: "Income Tax Refund. Collect $20",
        func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance + 20);     
        }
    },
    {
        name: "Your building loan matures. Collect $150",
        func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance + 150)
        }
    },
    {
        name: "Bank error in your favor. Collect $200",
        func: (balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>) => {
            setBalance(balance + 200);
        }
    }
]

// 2D array of all of the cards
// Organized into 4 different arrays, each array corresponds to a row of cards
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
            price: 160
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
