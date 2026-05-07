import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, writeBatch } from "firebase/firestore";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBDFCr4cn2AD23JPBuSj7R_2XsC5C3IGUo",
  authDomain: "pokecommerce-294e5.firebaseapp.com",
  projectId: "pokecommerce-294e5",
  storageBucket: "pokecommerce-294e5.appspot.com",
  messagingSenderId: "666082055112",
  appId: "1:666082055112:web:74d42d02da9674613166fd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getRegionById = (id) => {
  if (id <= 151) return "Kanto";
  if (id <= 251) return "Johto";
  if (id <= 386) return "Hoenn";
  if (id <= 493) return "Sinnoh";
  if (id <= 649) return "Unova";
  if (id <= 721) return "Kalos";
  if (id <= 809) return "Alola";
  if (id <= 898) return "Galar";
  return "Paldea";
};

const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function deleteAllProducts() {
  console.log("Borrando productos antiguos...");
  const querySnapshot = await getDocs(collection(db, "productos"));
  let count = 0;
  for (const docSnapshot of querySnapshot.docs) {
    await deleteDoc(docSnapshot.ref);
    count++;
  }
  console.log(`Se borraron ${count} productos antiguos.`);
}

async function populateAll() {
  await deleteAllProducts();

  console.log("Iniciando migración masiva de 1025 Pokémon...");
  const limit = 1025;
  const listRes = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const listData = await listRes.json();

  let count = 0;

  for (let i = 0; i < listData.results.length; i++) {
    const pokemon = listData.results[i];
    const pokemonId = i + 1; // El ID suele coincidir con el index + 1 hasta el 1025.

    try {
      // Intentamos optimizar no pidiendo la "especie" para ahorrar 1025 peticiones extra,
      // usaremos un texto base genérico con su región.
      const region = getRegionById(pokemonId);
      
      const pokeResponse = await fetch(pokemon.url);
      const pokeData = await pokeResponse.json();

      const nombre = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1);
      const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData.id}.png`;
      const categoria = pokeData.types[0].type.name; // Tipo principal
      const descripcion = `A wild ${nombre} appeared from the ${region} region!`;
      
      const precio = Math.floor(Math.random() * (1000 - 50 + 1) + 50);
      const stock = Math.floor(Math.random() * (50 - 5 + 1) + 5);

      const nuevoProducto = {
        id_pokedex: pokemonId, // Guardamos el ID numérico para ordenar fácilmente
        nombre,
        descripcion,
        precio,
        stock,
        categoria,
        region,
        imagen
      };

      await addDoc(collection(db, "productos"), nuevoProducto);
      count++;
      
      if (count % 50 === 0) {
        console.log(`Progreso: ${count} / ${limit}`);
      }
      
      // Esperamos 50ms para no abusar de la PokeAPI
      await delay(50);

    } catch (error) {
      console.error(`Error con ${pokemon.name}:`, error);
    }
  }

  console.log("¡Migración completada! 1025 Pokémon inyectados.");
  process.exit(0);
}

populateAll();
