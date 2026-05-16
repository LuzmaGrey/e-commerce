import { useContext, useState } from "react";

import EmptyCart from "../components/EmptyCart";
import FinishBuying from "../components/FinishBuying";
import ItemCheckout from "../components/ItemCheckout";
import AppContext from "../context/AppContext";
import "../styles/Checkout.scss";

const Checkout = () => {
  const { state, totalPrice } = useContext(AppContext);
  // Track if the order was just confirmed so we don't show EmptyCart prematurely
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const date = new Date();

  // Show empty cart only if cart is empty AND order is NOT just completed
  if (state.length === 0 && !orderConfirmed) {
    return (
      <div className="Checkout">
        <EmptyCart />
      </div>
    );
  }

  return (
    <div className="Checkout">
      <h1 className="title">{orderConfirmed ? "Order Confirmed! 🎉" : "Your Cart"}</h1>
      <div className="Checkout-container">
        {/* Only show items list while order is pending */}
        {!orderConfirmed && (
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
              <p>${totalPrice !== 0 && totalPrice}</p>
            </div>
          </div>
        )}
        <FinishBuying onOrderConfirmed={() => setOrderConfirmed(true)} />
      </div>
    </div>
  );
};

export default Checkout;

