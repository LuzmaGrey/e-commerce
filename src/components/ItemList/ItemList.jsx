import { memo } from 'react'
import Item from "../Item/Item"

// 1- memo(componente) -> React // 2- memo(componente, fnComparadora)

const ItemList = memo(
        ({ products }) => {
        
            console.log('ItemList')
            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }} >
                        { products?.map( prod => <Item key={prod.id} prod={prod} /> )
                        }
                </div>
            )
        }
// , (prevProps, nextProps) => prevProps.products === nextProps.products
)

export default ItemList