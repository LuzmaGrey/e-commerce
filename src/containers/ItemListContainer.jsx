import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where, limit, startAfter, orderBy } from "firebase/firestore";

import CoverPage from "../components/CoverPage.jsx";
import ItemList from "../components/ItemList.jsx";
import FiltersBar from "../components/FiltersBar.jsx";
import "../styles/Main.scss";
import "../styles/ProductList.scss";
import loadingGif from "../assets/img/loading.gif";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [allFilteredProducts, setAllFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const [filters, setFilters] = useState({
    search: "",
    region: "All",
    type: "All"
  });

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let allProds = [];
        const cached = localStorage.getItem('pokedex_cache');
        
        // Use cache to prevent exhausting Firebase free tier reads
        if (cached) {
          allProds = JSON.parse(cached);
        } else {
          const querydb = getFirestore();
          const queryCollection = collection(querydb, "productos");
          const q = query(queryCollection, orderBy("id_pokedex"));
          const snapshot = await getDocs(q);
          allProds = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          if (allProds.length > 0) {
            localStorage.setItem('pokedex_cache', JSON.stringify(allProds));
          }
        }

        // Apply Filters Locally
        let filtered = allProds;
        
        if (filters.region && filters.region !== "All") {
          filtered = filtered.filter(p => p.region === filters.region);
        }
        if (filters.type && filters.type !== "All") {
          filtered = filtered.filter(p => p.categoria === filters.type);
        }
        if (filters.search) {
          const lowerSearch = filters.search.toLowerCase();
          filtered = filtered.filter(p => p.nombre.toLowerCase().startsWith(lowerSearch));
        }

        setAllFilteredProducts(filtered);
        setProductos(filtered.slice(0, 20));
        setCurrentPage(1);
        setHasMore(filtered.length > 20);

      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters]);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    const newItems = allFilteredProducts.slice(0, nextPage * 20);
    setProductos(newItems);
    setCurrentPage(nextPage);
    if (newItems.length >= allFilteredProducts.length) {
      setHasMore(false);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <CoverPage />
      <FiltersBar onFilterChange={handleFilterChange} />
      
      {loading ? (
        <div id="spinner" className="container-loading">
          <div className="css-pokeball"></div>
          <span className="loading-text">Catching data...</span>
        </div>
      ) : (
        <>
          {productos.length === 0 ? (
            <h2 className="empty-pokemon-msg">No Pokémon found for these filters.</h2>
          ) : (
            <ItemList productos={productos} />
          )}

          {hasMore && productos.length > 0 && (
            <div className="load-more-wrapper">
              <button 
                className="button-fw btn-pokemon load-more-btn" 
                onClick={loadMore}
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ItemListContainer;
