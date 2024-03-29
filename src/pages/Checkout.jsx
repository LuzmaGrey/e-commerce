import { useContext } from "react";

import EmptyCart from "../components/EmptyCart";
import FinishBuying from "../components/FinishBuying";
import ItemCheckout from "../components/ItemCheckout";
import AppContext from "../context/AppContext";
import "../styles/Checkout.scss";

const Checkout = () => {
  const { state, totalPrice } = useContext(AppContext);

  const date = new Date();

  return (
    <div className="Checkout">
      {state.length > 0 ? (
        <>
          <h1 className="title">Your Cart</h1>
          <div className="Checkout-container">
            <div className="Checkout-content">
              <div className="order">
                <p>
                  <span>{date.toLocaleDateString()}</span>
                </p>
              </div>
              {state.map((producto, index) => (
                <ItemCheckout
                  producto={producto}
                  key={producto.id}
                  indexValue={index}
                />
              ))}
              <div className="order">
                <p>
                  <span>TOTAL</span>
                  <span>({state.length} Products)</span>
                </p>
                <p>${totalPrice() !== 0 && totalPrice()}</p>
              </div>
            </div>
            <FinishBuying />
          </div>
        </>
      ) : (
        <>
          <EmptyCart />
        </>
      )}
    </div>
  );
};

export default Checkout;
