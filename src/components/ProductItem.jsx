import { Link } from "react-router-dom";

import "../styles/Button.scss";
import "../styles/ProductList.scss";

const TYPE_COLORS = {
  normal: "#A8A77A", fire: "#EE8130", water: "#6390F0",
  electric: "#F7D02C", grass: "#7AC74C", ice: "#96D9D6",
  fighting: "#C22E28", poison: "#A33EA1", ground: "#E2BF65",
  flying: "#A98FF3", psychic: "#F95587", bug: "#A6B91A",
  rock: "#B6A136", ghost: "#735797", dragon: "#6F35FC",
  dark: "#705848", steel: "#B7B7CE", fairy: "#D685AD"
};

const Item = ({ producto }) => {
  const typeColor = TYPE_COLORS[producto.categoria?.toLowerCase()] || "#A8A77A";
  const pokedexNum = producto.id_pokedex
    ? `#${String(producto.id_pokedex).padStart(3, "0")}`
    : "";

  return (
    <article
      className="poke-card"
      style={{
        background: `linear-gradient(145deg, ${typeColor}22 0%, ${typeColor}11 60%, #fff 100%)`
      }}
    >
      {/* Pokédex Number Badge */}
      {pokedexNum && (
        <span className="poke-card__dex-num">{pokedexNum}</span>
      )}

      <div className="poke-card__img-wrapper">
        <img
          src={producto.imagen}
          className="poke-card__img"
          alt={producto.nombre}
          loading="lazy"
        />
      </div>

      <div className="poke-card__info">
        <span className="poke-card__name">{producto.nombre}</span>

        {/* Type Badge */}
        <span
          className="poke-card__type-badge"
          style={{ background: typeColor, color: ["electric","ice","steel","ground"].includes(producto.categoria) ? "#333" : "#fff" }}
        >
          {producto.categoria}
        </span>

        <span className="poke-card__price">${producto.precio}</span>

        <Link
          className={`button-outline btn-pokemon type-${producto.categoria} poke-card__btn`}
          to={`/detalle/${producto.id}`}
        >
          View Pokémon
        </Link>
      </div>
    </article>
  );
};

export default Item;
