import { useState, useCallback, useMemo } from "react";
import toast from "react-hot-toast";

const useInitialState = () => {
  const [state, setState] = useState([]);

  const addToCart = useCallback((item) => {
    setState((prevState) => {
      const idX = prevState.findIndex((prod) => item.id === prod.id);
      toast.success(`Added ${item.cantidad} ${item.nombre}`);
      if (idX !== -1) {
        const newArray = [...prevState];
        const newCant = prevState[idX].cantidad + item.cantidad;
        newArray[idX].cantidad = newCant;
        return newArray;
      } else {
        return [...prevState, item];
      }
    });
  }, []);

  const emptyCart = useCallback(() => {
    setState([]);
  }, []);

  const removeFromCart = useCallback((indexValue) => {
    setState((prevState) => prevState.filter((prod, index) => index !== indexValue));
  }, []);

  const totalPrice = useMemo(() => {
    return state.reduce((acum, prod) => acum + prod.cantidad * prod.precio, 0);
  }, [state]);

  const totalItemQuantity = useMemo(() => {
    return state.reduce((acum, prod) => acum + prod.cantidad, 0);
  }, [state]);

  return {
    state,
    addToCart,
    emptyCart,
    removeFromCart,
    totalPrice,
    totalItemQuantity,
  };
};

export default useInitialState;
