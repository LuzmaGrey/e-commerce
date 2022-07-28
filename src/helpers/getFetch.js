let productos = [
    {
        id: '1',
        categoria: 'pokemon',
        name: "Dragapult", price: "$2002",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/887.png",
        description: "When it isn’t battling, it keeps Dreepy in the holes on its horns. Once a fight starts, it launches the Dreepy like supersonic missiles."
    },
    {
        id: '2',
        categoria: 'pokemon',
        name: "Ivysaur",
        price: "$100",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
        description: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs."
    },
    {
        id: '3',
        categoria: 'pokemon',
        name: "Charmander",
        price: "$150",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail."
    },
    {
        id: '4',
        categoria: 'pokemon',
        name: "Raichu",
        price: "$500",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
        description: "Its long tail serves as a ground to protect itself from its own high-voltage power."
    },
    {
        id: '5',
        categoria: 'special',
        name: "Kleavor",
        price: "$900",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/900.png",
        description: "A violent creature that fells towering trees with its crude axes and shields itself with hard stone. If one should chance upon this Pokémon in the wilds, one’s only recourse is to flee."
    },
    {
        id: '6',
        categoria: 'special',
        name: "Spectrier",
        price: "$897",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/897.png",
        description: "It probes its surroundings with all its senses save one—it doesn’t use its sense of sight. Spectrier’s kicks are said to separate soul from body."
    },
    {
        id: '7',
        categoria: 'special',
        name: "Wyrdeer",
        price: "$899",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/899.png",
        description: "The black orbs shine with an uncanny light when the Pokémon is erecting invisible barriers. The fur shed from its beard retains heat well and is a highly useful material for winter clothing."
    },
    {
        id: '8',
        categoria: 'pokemon',
        name: "Zarude",
        price: "$890",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/893.png",
        description: "Within dense forests, this Pokémon lives in a pack with others of its kind. It's incredibly aggressive, and the other Pokémon of the forest fear it."
    },
    {
        id: '9',
        categoria: 'special',
        name: "Zamazenta",
        price: "$1200",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/889.png",
        description: "In times past, it worked together with a king of the people to save the Galar region. It absorbs metal that it then uses in battle."
    },
    {
        id: '10',
        categoria: 'special',
        name: "Kubfu",
        price: "$2000",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/891.png",
        description: "Kubfu trains hard to perfect its moves. The moves it masters will determine which form it takes when it evolves."
    },
    {
        id: '10',
        categoria: 'special',
        name: "Eternatus",
        price: "$3000",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/890.png",
        description: "The core on its chest absorbs energy emanating from the lands of the Galar region. This energy is what allows Eternatus to stay active."
    },
    {
        id: '10',
        categoria: 'special',
        name: "Alcremie",
        price: "$20000",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/869.png",
        description: "When it trusts a Trainer, it will treat them to berries it's decorated with cream."
    }

]

export const getFetch = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
                resolve(productos.find(prod => prod.id === id))
            } else {
                resolve(productos)
            }
        }, 2)
    })
}

