import { useEffect, useState } from "react"
import { getFetch } from "../../helpers/getFetch"
import { Link, useParams } from 'react-router-dom'
import ItemList from "../../components/ItemList/ItemList"
import Loading from "../../components/Loading/Loading"



const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [bool, setBool] = useState(true)
    const { categoriaId } = useParams()

    useEffect(() => {
        if (categoriaId) {
            getFetch()
                .then(resp => setProducts(resp.filter(product => product.categoria === categoriaId)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            getFetch()
                .then(resp => setProducts(resp))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }

    }, [categoriaId])


    //ejemplo de evento
    const handleClick = (e) => {
        e.preventDefault()
        setBool(!bool)
    }

    const handleAgregar = () => {
        setProducts([
            ...products,
            { id: products.length + 1, name: "Gorra 7", url: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', categoria: "remera", price: 2 }
        ])
    }


    console.log('ItemListContainer')

    return (
        <>
            <button onClick={handleClick}>Cambiar estado </button>
            <button onClick={handleAgregar}>Agregar Item </button>
            {loading ?
                <Loading />
                :
                <ItemList products={products} />}
        </>
    )
}

export default ItemListContainer