import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { FaAlignJustify, FaWindowClose } from "react-icons/fa";

import "../styles/Header.scss";

import Cart from "./Cart";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="navbar" style={{ height: '100px' }}>
      <Link to="/">
        <img src={"https://www.narita-airport.jp/img/original/3786"} alt="logo" className="nav-logo" style={{ width: '120px', borderTop: 'none' }} />
      </Link>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        {(isMobile || screenWidth > 768) && (
          <>
            <Link to="/" className="all">
              <li className="hover-nav">All</li>
            </Link>

            <Link to="/categoria/fire" className="fire">
              <li className="hover-nav">Fire</li>
            </Link>

            <Link to="/categoria/water" className="water">
              <li className="hover-nav">Water</li>
            </Link>

            <Link to="/categoria/ground" className="ground">
              <li className="hover-nav">Ground</li>
            </Link>

            <Link to="/categoria/pokedex" className="pokedex">
              <li className="hover-nav">More Pokes</li>
            </Link>
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
      <div className="navbar-right">
        <ul>
          <Cart />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
