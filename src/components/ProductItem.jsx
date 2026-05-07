import { Link } from "react-router-dom";

import "../styles/Button.scss";
import "../styles/ProductList.scss";

const Item = ({ producto }) => {
  return (
    <article className="sunglass">
      <img
        src={producto.imagen}
        className="sunglass__img"
        alt={producto.nombre}
        loading="lazy"
      />
      <span className="sunglass__name">{producto.nombre}</span>
      <span className="sunglass__price">${producto.precio}</span>
      <Link className={`button-outline btn-pokemon type-${producto.categoria}`} to={`/detalle/${producto.id}`}>
        View Pokémon
      </Link>
    </article>
  );
};

export default Item;
