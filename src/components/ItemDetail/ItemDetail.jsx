
import { useState } from "react"
import { Link } from "react-router-dom"
import { Input } from "../../clases/clase9/Input"
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ producto = {} }) => {
    const [isCount, setIsCount] = useState(true)
    const { agregarCarrito, cartList } = useCartContext() // useContext(CartContext)
    // onAdd función
    const onAdd = (count) => {
        console.log(count)
        agregarCarrito({ ...producto, cantidad: count })
        setIsCount(false)
    }
    console.log(cartList)
    return (
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <img src={producto.foto} alt={producto.name} className="w-100" />
                    </div>
                    <div className="col">
                        <h2>Name: {producto.name}</h2>
                        <p>Category: {producto.categoria}</p>
                        <p>Price: {producto.price}</p>
                        <p>Description: {producto.description}</p>
                    </div>
                </div>
            </div>
            <div className="col">
                {isCount ?
                    <ItemCount initial={1} stock={8} onAdd={onAdd} />
                    :
                    <Link to='/cart'>
                        <button className="btn btn-outline-primary">Go to Cart</button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default ItemDetail