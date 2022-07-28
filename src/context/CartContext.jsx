// import {  } from 'react';
import { createContext, useState, useContext } from 'react';

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContexProvider = ({ children }) => {
    // estados y funciones acá
    const [cartList, setCartList] = useState([])

    const agregarCarrito = (objProducto) => {
        setCartList([
            ...cartList,
            objProducto
        ])
    }

    const vaciarCarrito = () => {
        setCartList([])
    }


    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContexProvider

