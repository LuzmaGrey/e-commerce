import { memo } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const Item = memo(
    ({ prod }) => {
        console.log('item')
        return (
            <div
                key={prod.id}
                className='col-md-4 p-1'
            >
                <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {`${prod.name}`}
                    </div>
                    <div className="card-body">
                        <center>
                            <img src={prod.foto} alt='' className='w-50' />

                        </center>
                        <label > Price: {prod.price}</label>

                    </div>
                    <div className="card-footer">
                        <Link to={`/detalle/${prod.id}`}>
                            <button className="btn btn-outline-primary btn-block">
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
)

export default Item