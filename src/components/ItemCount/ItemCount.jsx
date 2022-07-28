import { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setcount] = useState(initial)

    const sumar = () => {
        if (count < stock) {
            setcount(count+1)
        }
    }
    const restar = () => {
        if (count > initial) {
            setcount(count-1)
        }
    }

    return (
        <div>
            { count }<br/>
            <button onClick={sumar} className="btn btn-primary">+</button>
            <button onClick={restar} className="btn btn-primary">-</button><br/>
            <button onClick={()=> onAdd(count)} className="btn btn-primary">Add to cart</button>
        </div>
    )
}

export default ItemCount