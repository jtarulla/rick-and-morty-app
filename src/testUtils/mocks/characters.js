const characterList = [
    {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
            name: "Earth (C-137)",
            url: "https://rickandmortyapi.com/api/location/1"
        },
        location: {
            name: "Citadel of Ricks",
            url: "https://rickandmortyapi.com/api/location/3"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        episode: [],
        url: "https://rickandmortyapi.com/api/character/1",
        created: "2017-11-04T18:48:46.250Z"
    },
    {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
            name: "unknown",
            url: ""
        },
        location: {
            name: "Citadel of Ricks",
            url: "https://rickandmortyapi.com/api/location/3"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        episode: [],
        url: "https://rickandmortyapi.com/api/character/2",
        created: "2017-11-04T18:50:21.651Z"
    },
    {
        id: 3,
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Female",
        origin: {
            name: "Earth (Replacement Dimension)",
            url: "https://rickandmortyapi.com/api/location/20"
        },
        location: {
            name: "Earth (Replacement Dimension)",
            url: "https://rickandmortyapi.com/api/location/20"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        episode: [],
        url: "https://rickandmortyapi.com/api/character/3",
        created: "2017-11-04T19:09:56.428Z"
    }
]

const info = {
    count: 826,
    pages: 42,
    next: "https://rickandmortyapi.com/api/character/?page=5",
    prev: "https://rickandmortyapi.com/api/character/?page=4"
}

const loading ={
    true: true,
    false: false
}

export {characterList, loading, info};