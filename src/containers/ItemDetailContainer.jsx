import { doc, getDoc, getFirestore } from "firebase/firestore";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import ItemDetail from "../components/ItemDetail";
import "../styles/Loading.scss";
import loadingGif from "../assets/img/loading.gif";

const ItemDetailContainer = () => {
  const [producto, setProduct] = useState({});
  const { detalleId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const querydb = getFirestore();
    const queryProd = doc(querydb, "productos", detalleId);
    getDoc(queryProd)
      .then((resp) => setProduct({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [detalleId]);

  return (
    <>
      {loading ? (
        <div id="spinner" className="container-loading">
          <img src={loadingGif} className="gif" alt="loading" />
        </div>
      ) : (
        <>
          <section className="productSection">
            {producto ? (
              <ItemDetail key={producto.id} producto={producto} />
            ) : (
              <h2>Obtaining product...</h2>
            )}
          </section>
        </>
      )}
    </>
  );
};

export default ItemDetailContainer;
