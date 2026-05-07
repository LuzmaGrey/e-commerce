import { useContext, useState, useRef, useEffect } from "react";

import { BiCart } from "react-icons/bi";

import MyOrders from "../containers/MyOrders";
import AppContext from "../context/AppContext";

const Cart = () => {
  const [toggleOrders, setToggleOrders] = useState(false);
  const { totalItemQuantity } = useContext(AppContext);
  const cartRef = useRef(null);

  // Close cart when clicking outside
  useEffect(() => {
    if (!toggleOrders) return;

    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setToggleOrders(false);
      }
    };

    // Small delay so the opening click doesn't immediately trigger the outside listener
    const timer = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleOrders]);

  return (
    <div ref={cartRef} style={{ position: "relative" }}>
      <BiCart
        className="iconCart"
        onClick={() => setToggleOrders(!toggleOrders)}
      />

      {totalItemQuantity !== 0 && (
        <div className="count">{totalItemQuantity}</div>
      )}
      {toggleOrders && <MyOrders />}
    </div>
  );
};
export default Cart;
