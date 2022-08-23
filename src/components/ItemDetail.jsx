import { isDisabled } from "@testing-library/user-event/dist/utils";

import { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import AppContext from "../context/AppContext";
import "../styles/ItemCountStyle.scss";
import "../styles/Main.scss";
import "../styles/ProductsDetails.scss";

import ItemCount from "./ItemCount";
import KeepBuying from "./KeepBuying";

const ItemDetail = ({ producto }) => {
  const [exchange, setExchange] = useState("button-fw");
  const { addToCart } = useContext(AppContext);

  const onAdd = (cant) => {
    addToCart({ ...producto, cantidad: cant });
  };
  const handleInter = () => {
    setExchange("change");
  };

  return (
    <div className="content">

      <section className="product" id={`${producto.id}`}>

        <div className="image">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>

        <div className="title">{producto.nombre}</div>
        <div className="company-name">
          {producto.categoria} • {producto.uso}
        </div>
        <div className="description">{producto.descripcion}</div>
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
