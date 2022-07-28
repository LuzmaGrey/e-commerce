import { useEffect } from "react"
import { useParams } from "react-router-dom"

import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { getFetch } from "../../helpers/getFetch"
import { useState } from "react"
import { TextComponent, TextComponent2, TextComponent3, TextComponent4, TextComponent5, TextComponent6, TextComponent7 } from "../../clases/clase11/ComponenteEjemplosCondicionales"

const ItemDetailConteiner = () => {
    const [producto, setProducto] = useState({})
    const { productId } = useParams()

    useEffect(() => {
        getFetch(productId)
            .then(data => setProducto(data))
    }, [productId])

    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailConteiner