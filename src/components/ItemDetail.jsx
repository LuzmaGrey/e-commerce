import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AppContext from "../context/AppContext";
import ItemCount from "./ItemCount";
import KeepBuying from "./KeepBuying";

import "../styles/ItemCountStyle.scss";
import "../styles/Main.scss";
import "../styles/ProductsDetails.scss";
import "../styles/PokemonStats.scss";

const ItemDetail = ({ producto }) => {
  const [exchange, setExchange] = useState("button-fw");
  const { addToCart } = useContext(AppContext);
  
  // New States for Pokedex Pro
  const [mainImage, setMainImage] = useState(producto.imagen);
  const [sprites, setSprites] = useState([]);
  const [weaknesses, setWeaknesses] = useState([]);
  const [strengths, setStrengths] = useState([]);
  const [pokemonDescription, setPokemonDescription] = useState(producto.descripcion);
  const [loadingStats, setLoadingStats] = useState(true);

  const onAdd = (cant) => {
    addToCart({ ...producto, cantidad: cant });
  };
  const handleInter = () => {
    setExchange("change");
  };

  useEffect(() => {
    setMainImage(producto.imagen);
    setLoadingStats(true);

    const fetchPokemonData = async () => {
      try {
        // Fetch detailed pokemon info using the name
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${producto.nombre.toLowerCase()}`);
        if (!res.ok) throw new Error("Pokemon not found");
        const data = await res.json();

        // Fetch TCG Cards
        const newSprites = [{ url: producto.imagen, name: "Default" }]; // Keep High res artwork
        try {
          const tcgRes = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${producto.nombre.toLowerCase()}`);
          if (tcgRes.ok) {
            const tcgData = await tcgRes.json();
            // Take up to 5 cards
            const cards = tcgData.data.slice(0, 5);
            cards.forEach(card => {
              newSprites.push({ 
                url: card.images.large, 
                thumb: card.images.small, 
                name: card.name,
                isShiny: card.rarity && card.rarity.toLowerCase().includes("rare")
              });
            });
          }
        } catch (e) {
          console.error("Error fetching TCG cards:", e);
        }

        setSprites(newSprites);

        // Fetch Species Lore
        try {
          const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${producto.nombre.toLowerCase()}`);
          if (speciesRes.ok) {
            const speciesData = await speciesRes.json();
            const entries = speciesData.flavor_text_entries;
            const esEntry = entries.find(e => e.language.name === "es");
            const enEntry = entries.find(e => e.language.name === "en");
            
            let rawText = "";
            if (esEntry) rawText = esEntry.flavor_text;
            else if (enEntry) rawText = enEntry.flavor_text;
            
            if (rawText) {
              // Clean up newlines and form feeds from PokeAPI
              const cleanText = rawText.replace(/[\n\f]/g, ' ');
              setPokemonDescription(cleanText);
            }
          }
        } catch (e) {
          console.error("Error fetching species lore:", e);
        }

        // Fetch Type Matchups
        // Taking the primary type (or category) to calculate weaknesses/strengths
        const typeRes = await fetch(`https://pokeapi.co/api/v2/type/${data.types[0].type.name}`);
        const typeData = await typeRes.json();
        
        const doubleDamageFrom = typeData.damage_relations.double_damage_from.map(t => t.name);
        const doubleDamageTo = typeData.damage_relations.double_damage_to.map(t => t.name);

        setWeaknesses(doubleDamageFrom);
        setStrengths(doubleDamageTo);
      } catch (error) {
        console.error("Error fetching extra Pokedex data:", error);
      } finally {
        setLoadingStats(false);
      }
    };

    if (producto.nombre) {
      fetchPokemonData();
    }
  }, [producto]);

  return (
    <div className="content">
      <section className={`product glass-panel type-bg-${producto.categoria}`} id={`${producto.id}`}>
        
        <div className="product-left">
          <div className="image poke-detail-image-wrapper">
            <img 
              src={mainImage} 
              alt={producto.nombre} 
              className="poke-detail-image"
            />
          </div>

          {!loadingStats && sprites.length > 1 && (
            <div className="gallery-container">
              <div className="stats-title">Versions & Cards</div>
              <div className="gallery-thumbnails">
                {sprites.map((sprite, index) => (
                  <div 
                    key={index} 
                    className={`thumbnail-wrapper ${mainImage === sprite.url ? 'active' : ''} ${sprite.isShiny ? 'shiny-card' : ''}`}
                    onClick={() => setMainImage(sprite.url)}
                    title={sprite.name}
                  >
                    <img src={sprite.thumb || sprite.url} alt={`${producto.nombre} ${sprite.name}`} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="product-right">
          <div className="title">{producto.nombre}</div>
          <div className="company-name poke-category">
            Type: {producto.categoria}
          </div>
          <div className="description">{pokemonDescription}</div>
          
          <div className="price-wrapper">
            <div className="group">
              <div className="price">${producto.precio}</div>
            </div>
          </div>

          {exchange === "button-fw" ? (
            <div className="productActions">
              <ItemCount
                producto={producto}
                key={producto.id}
                onAdd={onAdd}
                stock={producto.stock}
                countInitial={1}
                handleInter={handleInter}
              />
            </div>
          ) : (
            <div className="productActions">
              <Link to="/cart">
                <button className="button-fw" onClick={handleInter}>
                  Go To Pay
                </button>
              </Link>
              <KeepBuying handleInter={handleInter} />
            </div>
          )}

          {!loadingStats && (
            <div className="pokemon-stats-container">
              {strengths.length > 0 && (
                <div className="strength-section">
                  <div className="stats-title subtitle">🔥 Strong Against (Advantage)</div>
                  <div className="type-tags-container">
                    {strengths.map(type => (
                      <span key={type} className={`type-tag ${type}`}>{type}</span>
                    ))}
                  </div>
                </div>
              )}

              {weaknesses.length > 0 && (
                <div className="weakness-section">
                  <div className="stats-title subtitle">⚠️ Weak Against (Danger)</div>
                  <div className="type-tags-container">
                    {weaknesses.map(type => (
                      <span key={type} className={`type-tag ${type}`}>{type}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

      </section>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#fff",
            color: "#141414",
            fontWeight: 600,
            border: "2px solid #141414",
          },
        }}
      />
    </div>
  );
};

export default ItemDetail;
