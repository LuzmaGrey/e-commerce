import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, orderBy } from "firebase/firestore";

import CoverPage from "../components/CoverPage.jsx";
import ItemList from "../components/ItemList.jsx";
import FiltersBar from "../components/FiltersBar.jsx";
import AlphabetBar from "../components/AlphabetBar.jsx";
import "../styles/Main.scss";
import "../styles/ProductList.scss";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [allFilteredProducts, setAllFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [activeLetter, setActiveLetter] = useState("All");
  const PAGE_SIZE = 20;

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
        if (activeLetter && activeLetter !== "All") {
          filtered = filtered.filter(p => p.nombre.toUpperCase().startsWith(activeLetter));
        }

        setAllFilteredProducts(filtered);
        setProductos(filtered.slice(0, PAGE_SIZE));
        setCurrentPage(1);
        setHasMore(filtered.length > PAGE_SIZE);

      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters, activeLetter]);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    const newItems = allFilteredProducts.slice(0, nextPage * PAGE_SIZE);
    setProductos(newItems);
    setCurrentPage(nextPage);
    if (newItems.length >= allFilteredProducts.length) {
      setHasMore(false);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setActiveLetter("All");
  };

  const handleLetterChange = (letter) => {
    setActiveLetter(letter);
  };

  const shown = productos.length;
  const total = allFilteredProducts.length;

  return (
    <>
      <CoverPage />
      <FiltersBar onFilterChange={handleFilterChange} />
      <AlphabetBar activeLetter={activeLetter} onLetterChange={handleLetterChange} />

      {loading ? (
        <div id="spinner" className="container-loading">
          <div className="css-pokeball"></div>
          <span className="loading-text">Catching data...</span>
        </div>
      ) : (
        <>
          {total > 0 && (
            <p className="results-counter">
              Showing <strong>{shown}</strong> of <strong>{total}</strong> Pokémon
              {activeLetter !== "All" && <span className="letter-badge">{activeLetter}</span>}
            </p>
          )}

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
                Load More Pokémon ({total - shown} remaining)
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ItemListContainer;
