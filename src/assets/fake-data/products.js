const products = [
  {
    id: "006",
    title: "Charizard",
    price: 24.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    category: "Dragon",

    desc: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
  },

  {
    id: "445",
    title: "Garchomp",
    price: 115.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/445.png",
    category: "Dragon",

    desc: "Garchomp makes its home in volcanic mountains. It flies through the sky as fast as a jet airplane, hunting down as much prey as it can.",
  },

  {
    id: "355",
    title: "Duskull",
    price: 110.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/355.png",
    category: "Ghost",

    desc: "If it finds bad children who won’t listen to their parents, it will spirit them away—or so it’s said.",
  },

  {
    id: "429",
    title: "Mismagius",
    price: 110.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/429.png",
    category: "Ghost",

    desc: "Feared for its wrath and the curses it spreads, this Pokémon will also, on a whim, cast spells that help people.",
  },

  {
    id: "680",
    title: "Doublade",
    price: 24.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/680.png",
    category: "Ghost",

    desc: "Honedge evolves into twins. The two blades rub together to emit a metallic sound that unnerves opponents.",
  },
  {
    id: "710",
    title: "Pumpkaboo",
    price: 24.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/710.png",
    category: "Ghost",

    desc: "Spirits that wander this world are placed into Pumpkaboo’s body. They’re then moved on to the afterlife.",
  },

  {
    id: "151",
    title: "Mew",
    price: 115.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
    category: "Psychic",

    desc: "When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen.",
  },

  {
    id: "330",
    title: "Flygon",
    price: 110.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/330.png",
    category: "Dragon",

    desc: "This Pokémon hides in the heart of sandstorms it creates and seldom appears where people can see it.",
  },

  {
    id: "203",
    title: "Girafairig",
    price: 110.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/203.png",
    category: "Psychic",

    desc: "Girafarig’s rear head also has a brain, but it is small. The rear head attacks in response to smells and sounds. Approaching this Pokémon from behind can cause the rear head to suddenly lash out and bite.",
  },

  {
    id: "655",
    title: "Delphox",
    price: 24.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/655.png",
    category: "Fire",

    desc: "It gazes into the flame at the tip of its branch to achieve a focused state, which allows it to see into the future.",
  },

  {
    id: "654",
    title: "Braixen",
    price: 35.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/654.png",
    category: "Fire",

    desc: "It has a twig stuck in its tail. With friction from its tail fur, it sets the twig on fire and launches into battle.",
  },

  {
    id: "791",
    title: "Solgaleo",
    price: 35.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/791.png",
    category: "Psychic",

    desc: "Sometimes the result of its opening an Ultra Wormhole is that energy and life-forms from other worlds are called here to this world.",
  },

  {
    id: "792",
    title: "Lunala",
    price: 35.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/792.png",
    category: "Ghost",

    desc: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames."
  },
  {
    id: "016",
    title: "Pidgey",
    price: 35.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
    category: "Electric",

    desc: "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
  },

  {
    id: "024",
    title: "Arbok",
    price: 35.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
    category: "Poison",

    desc: "The frightening patterns on its belly have been studied. Six variations have been confirmed.",
  },

  {
    id: "038",
    title: "Ninetales",
    price: 35.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
    category: "Ghost",

    desc: "It is said to live 1,000 years, and each of its tails is loaded with supernatural powers."
  },
  {
    id: "052",
    title: "Meowth",
    price: 35.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
    category: "Normal",

    desc: "It loves to collect shiny things. If it’s in a good mood, it might even let its Trainer have a look at its hoard of treasures."
  },
  {
    id: "073",
    title: "Tentacruel",
    price: 35.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png",
    category: "Water",

    desc: "When the red orbs on Tentacruel’s head glow brightly, watch out. The Pokémon is about to fire off a burst of ultrasonic waves.",
  },

  {
    id: "130",
    title: "Gyarados",
    price: 35.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
    category: "Water",

    desc: "It has an extremely aggressive nature. The Hyper Beam it shoots from its mouth totally incinerates all targets.",
  },

  {
    id: "134",
    title: "Vaporeon",
    price: 35.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png",
    category: "Water",

    desc: "When Vaporeon’s fins begin to vibrate, it is a sign that rain will come within a few hours."
  },
  {
    id: "385",
    title: "Jirachi",
    price: 35.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/385.png",
    category: "Steel",

    desc: "A legend states that Jirachi will make true any wish that is written on notes attached to its head when it awakens. If this Pokémon senses danger, it will fight without awakening."
  },
  {
    id: "448",
    title: "Lucario",
    price: 35.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png",
    category: "Steel",

    desc: "It controls waves known as auras, which are powerful enough to pulverize huge rocks. It uses these waves to take down its prey.",
  },

  {
    id: "638",
    title: "Cobalion",
    price: 35.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/638.png",
    category: "Steel",

    desc: "This Pokémon appears in a legend alongside Terrakion and Virizion, fighting against humans in defense of the Unova region’s Pokémon.",
  },

  {
    id: "884",
    title: "Duraludon",
    price: 35.0,
    image01: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/884.png",
    category: "Steel",

    desc: "Its body resembles polished metal, and it’s both lightweight and strong. The only drawback is that it rusts easily."
  },
];

export default products;
