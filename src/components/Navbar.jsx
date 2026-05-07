import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

import Cart from "./Cart";
import { useAuth } from "../context/AuthContext";

import { FaWindowClose, FaAlignJustify } from "react-icons/fa";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="navbar poke-navbar">
      <Link to="/">
        <img src={"https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"} alt="logo" className="nav-logo poke-logo" />
      </Link>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        {(isMobile || screenWidth > 768) && (
          <>
            <Link to="/" className="poke-nav-link">
              <li>Pokédex</li>
            </Link>

            {currentUser && (
              <Link to="/cart" className="poke-nav-link">
                <li>Mis Órdenes</li>
              </Link>
            )}
          </>
        )}
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <FaWindowClose alt="icon-close" className="icon-close" />
        ) : (
          <FaAlignJustify alt="icon-menu" className="menu" />
        )}
      </button>
      <div className="navbar-right poke-navbar-right">
        {currentUser ? (
          <div className="nav-user-info">
            <span className="user-email">{currentUser.email}</span>
            <span className="nav-logout-btn" onClick={handleLogout}>Log Out</span>
          </div>
        ) : (
          <Link to="/login" className="nav-login-btn">Log In</Link>
        )}
        <ul>
          <Cart />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
