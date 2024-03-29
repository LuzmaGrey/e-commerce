import { useContext } from "react";

import { BiTrash } from "react-icons/bi";

import AppContext from "../context/AppContext";
import "../styles/ItemCheckout.scss";

const ItemCheckout = (props) => {
  const { producto, indexValue } = props;
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (index) => {
    removeFromCart(index);
  };
  return (
    <div className="itemCheckoutContainer">
      <figure>
        <img src={producto.imagen} alt={producto.nombre} />
      </figure>
      <div className="itemCheckout">
        <div className="itemCheckoutInfo">
          <h2 className="itemInfo">Product</h2>
          <p>{producto.nombre}</p>
        </div>
        <div className="itemCheckoutInfo">
          <h2 className="itemInfo">Amount</h2>
          <p>{producto.cantidad}</p>
        </div>
        <div className="itemCheckoutInfo">
          <h2 className="itemInfo">Price</h2>
          <p>${producto.precio}</p>
        </div>
        <div className="itemCheckoutInfo">
          <h2 className="itemInfo">Remove</h2>
          <BiTrash
            className="btnDelete"
            onClick={() => handleRemove(indexValue)}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCheckout;
