import { BiShoppingBag } from "react-icons/bi";

import { Link } from "react-router-dom";

import "../styles/EmptyCart.scss";

const EmptyCart = () => {
  return (
    <div className="containerEmptyCart">
      <BiShoppingBag className="bigIConCart" />
      <h2 className="titleEmptyCart">Your cart is empty</h2>
      <p className="descriptionEmptyCart">
        Once you add something to your cart, it will appear here. Ready to get started?
        get started?
      </p>
      <Link to="/">
        <button className="button-fw ">Start</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
