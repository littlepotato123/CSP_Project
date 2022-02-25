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
    func: () => void
}

export const chance: Array<special> = [
    {
        name: "Advance to Boardwalk",
        func: () => {}
    },
    {
        name: "Advance to GO!",
        func: () => {// Collect 200
        }
    },
    {
        name: "Advance to Illinois Avenue. If you pass Go, collect $200",
        func: () => {}
    },
    {
        name: "Advance to St. Charles Place. If you pass Go, collect $200",
        func: () => {}
    },
    {
        name: "Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay wonder twice the rental to which they are otherwise entitled",
        func: () => {}
    },
    {
        name: "Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay wonder twice the rental to which they are otherwise entitled",
        func: () => {}
    },
    {
        name: "Bank pays you dividend of $50",
        func: () => {}
    },
    {
        name: "Get Out of Jail Free",
        func: () => {}
    },
    {
        name: "Go Back 3 Spaces",
        func: () => {}
    },
    {
        name: "Go to Jail. Go Directly to Jail, do not pass Go, do not collect $200",
        func: () => {}
    },
    {
        name: "Speeding fine $15",
        func: () => {}
    },
    {
        name: "Take a trip to Reading Railroad. If you pass Go, collect $200",
        func: () => {}
    },
    {
        name:"You have been elected chairman of the Board. Pay each player $50",
        func: () => {}
    },
    {
        name: "Your building loan matures.",
        func: () => {}
    }
];

export const community: Array<special> = [
    {
        name: "Advance to Go (Collect $200)",
        func: () => {}
    },
    {
        name: "Bank error in your favor. Collect $200",
        func: () => {}
    },
    {
        name: "Doctor’s fee. Pay $50",
        func: () => {}
    },
    {
        name: "From sale of stock you get $50",
        func: () => {}
    },
    {
        name: "Holiday fund matures. Receive $100",
        func: () => {}
    },
    {
        name: "Income tax refund. Collect $20",
        func: () => {}
    },
    {
        name: "It is your birthday. Collect $10 from every player",
        func: () => {}
    },
    {
        name: "Life insurance matures. Collect $100",
        func: () => {}
    },
    {
        name: "Pay hospital fees of $100",
        func: () => {}
    },
    {
        name: "Pay school fees of $50",
        func: () => {}
    },
    {
        name: "Receive $25 consultancy fee",
        func: () => {}
    },
    {
        name: "You have won second prize in a beauty contese. Collect $10",
        func: () => {}
    },
    {
        name: "You inherit $100",
        func: () => {}
    }
]


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
            name: "JAIL!",
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
            name: "Go To Jail",
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
