import { Link } from "react-router-dom";
import "../styles/Header.scss";

import Cart from "./Cart";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="navbar poke-navbar">
      {/* Logo */}
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="Pokémon logo"
          className="nav-logo poke-logo"
        />
      </Link>

      {/* Nav links — visible on all screens, collapse to icons on mobile */}
      <ul className="nav-links">
        <Link to="/" className="poke-nav-link">
          <li>Pokédex</li>
        </Link>
        {currentUser && (
          <Link to="/cart" className="poke-nav-link">
            <li>Mis Órdenes</li>
          </Link>
        )}
      </ul>

      {/* Right side: user + cart */}
      <div className="navbar-right poke-navbar-right">
        {currentUser ? (
          <>
            <span className="nav-user-email">{currentUser.email}</span>
            <button className="nav-logout-btn" onClick={handleLogout}>
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login" className="nav-login-btn">Log In</Link>
        )}
        <div className="cart-wrapper">
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default Header;
