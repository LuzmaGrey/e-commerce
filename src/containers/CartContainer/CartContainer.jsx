import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {
    const { cartList, vaciarCarrito } = useCartContext()

    return (
      <div>
        { cartList.map(producto => <li>
          {producto.name} {producto.price} {producto.cantidad}
          </li> )}
        <button onClick={vaciarCarrito}>Empty cart</button>
      </div>
    )
}

export default CartContainer