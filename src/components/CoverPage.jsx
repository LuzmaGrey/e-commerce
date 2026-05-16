import { useNavigate } from "react-router-dom";
import "../styles/CoverPage.scss";

const CoverPage = () => {
  const navigate = useNavigate();

  const scrollToPokedex = () => {
    const filtersBar = document.querySelector('.filters-bar-container');
    if (filtersBar) {
      filtersBar.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToRandomPokemon = () => {
    const cached = localStorage.getItem('pokedex_cache');
    if (cached) {
      const all = JSON.parse(cached);
      const random = all[Math.floor(Math.random() * all.length)];
      navigate(`/detalle/${random.id}`);
    } else {
      // fallback: random number 1-1025
      const randomId = Math.floor(Math.random() * 1025) + 1;
      navigate(`/detalle/${randomId}`);
    }
  };

  return (
    <section className="cover">
      <div className="cover-container">
        <div className="hero-content">
          <h1 className="hero-title">The Ultimate Pokédex</h1>
          <p className="hero-subtitle">Discover all 1025 Pokémon from every region.</p>
          <div className="hero-stats">
            <div className="stat-box">
              <span className="stat-num">1025</span>
              <span className="stat-text">Species</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">9</span>
              <span className="stat-text">Regions</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">18</span>
              <span className="stat-text">Types</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="hero-cta btn-pokemon type-electric" onClick={scrollToPokedex}>
              Start Exploring
            </button>
            <button className="hero-cta-random" onClick={goToRandomPokemon} title="Go to a random Pokémon!">
              🎲 Who's that Pokémon?
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Pokeballs for background animation */}
      <div className="poke-particles">
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
      </div>
    </section>
  );
};
export default CoverPage;
