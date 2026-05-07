import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import ItemListContainer from "../containers/ItemListContainer";
import AppContext from "../context/AppContext";
import Checkout from "../pages/Checkout";
import useInitialState from "../hooks/useInitialState";
import "../styles/Loading.scss";
import Footer from "../components/Footer";
import { AuthProvider } from "../context/AuthContext";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

const App = () => {
  const initialState = useInitialState();

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContext.Provider value={initialState}>
          <Layout>
            <Home />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />

              <Route
                path="/detalle/:detalleId"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
          </Layout>
        </AppContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
