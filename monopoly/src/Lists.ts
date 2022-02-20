enum PLAYERS {
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

export const places: Array<Array<place>> = [
    [
        {
            name: "Connecticut Avenue",
            price: 120,
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
            price: 200
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
            go: true
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
            name: "JAIL!"
        }
    ],
    [
        {
            name: "Free Parking"
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
