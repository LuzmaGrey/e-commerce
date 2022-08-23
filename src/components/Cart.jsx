import { useContext, useState } from "react";

import { BiCart } from "react-icons/bi";

import MyOrders from "../containers/MyOrders";
import AppContext from "../context/AppContext";

const Cart = () => {
  const [toggleOrders, setToggleOrders] = useState(false);
  const { totalItemQuantity } = useContext(AppContext);

  return (
    <>
      <BiCart
        className="iconCart"
        onClick={() => setToggleOrders(!toggleOrders)}
      ></BiCart>

      {totalItemQuantity() !== 0 && (
        <div className="count">{totalItemQuantity()}</div>
      )}
      {toggleOrders && <MyOrders />}
    </>
  );
};
export default Cart;
