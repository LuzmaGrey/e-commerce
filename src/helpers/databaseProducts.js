const productList = [
  {
    id: "1",
    imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/245.png",
    nombre: "Suicune",
    descripcion: "Suicune embodies the compassion of a pure spring of water. It runs across the land with gracefulness. This Pokémon has the power to purify dirty water.",
    precio: 40284,
    stock: 2,
    categoria: "water",
  },
  {
    id: "2",
    imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/445.png",
    nombre: "Garchomp",
    descripcion: "Garchomp makes its home in volcanic mountains. It flies through the sky as fast as a jet airplane, hunting down as much prey as it can.",
    precio: 10999,
    stock: 15,
    categoria: "ground",
  },
  {
    id: "3",
    imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/645.png",
    nombre: "Landorus",
    descripcion: "Lands visited by Landorus grant such bountiful crops that it has been hailed as “The Guardian of the Fields.”",
    precio: 10999,
    stock: 15,
    categoria: "ground",
  },
  {
    id: "4",
    imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/655.png",
    nombre: "Delphox",
    descripcion: "It gazes into the flame at the tip of its branch to achieve a focused state, which allows it to see into the future.",
    precio: 14999,
    stock: 15,
    categoria: "fire",
  },
  {
    id: "5",
    imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/419.png",
    nombre: "Floatzel",
    descripcion: "It floats using its well-developed flotation sac. It assists in the rescues of drowning people.",
    precio: 11499,
    stock: 15,
    categoria: "water",
  },
  {
    id: "6",
    imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png",
    nombre: "Cloyster",
    descripcion: "Its shell is extremely hard. It cannot be shattered, even with a bomb. The shell opens only when it is attacking.",
    precio: 12499,
    stock: 15,
    categoria: "water",
  },
  {
    id: "7",
    imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/646.png",
    nombre: "Kyurem",
    descripcion: "This legendary ice Pokémon waits for a hero to fill in the missing parts of its body with truth or ideals.",
    precio: 12499,
    stock: 15,
  },
  {
    id: "8",
    imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/710.png",
    nombre: "Pumpkaboo",
    descripcion: "Spirits that wander this world are placed into Pumpkaboo’s body. They’re then moved on to the afterlife.",
    precio: 13999,
    stock: 15,
    categoria: "pokedex",
  },
  {
    id: "9",
    imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/888.png",
    nombre: "Zacian",
    descripcion: "Known as a legendary hero, this Pokémon absorbs metal particles, transforming them into a weapon it uses to battle.",
    precio: 8.999,
    stock: 15,
    categoria: "pokedex",
  },
  {
    id: "10",
    imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png",
    nombre: "Alakazam",
    descripcion: "It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.",
    precio: 10.499,
    stock: 15,
    categoria: "pokedex",
  },
];
export const getProducts = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(productList);
    }, 2000);
  } else {
    reject("404 not found");
  }
});
const getById = (id, array) => array.find((el) => el.id === id);

export const getProductById = async (id, setState) => {
  try {
    const result = await getProducts;
    setState(getById(id, result));
  } catch (error) {
    console.log(error);
  }
};
