import { Link } from "react-router-dom";
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="content-wrapper">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">A wild Snorlax blocks your path!</h2>
        <p className="error-text">
          The page you are looking for doesn't exist or has been moved. 
          You'll need a Poké Flute to wake up Snorlax, or you can just return safely to the Pokédex.
        </p>
        <Link to="/" className="btn-pokemon type-normal return-btn">
          Return to Pokédex
        </Link>
      </div>
      <div className="snorlax-image">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png" alt="Snorlax" />
      </div>
    </div>
  );
};

export default NotFound;
