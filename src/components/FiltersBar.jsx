import { useState } from "react";
import "../styles/FiltersBar.scss";

const REGIONS = [
  "All", "Kanto", "Johto", "Hoenn", "Sinnoh", 
  "Unova", "Kalos", "Alola", "Galar", "Paldea"
];

const TYPES = [
  "All", "normal", "fire", "water", "electric", "grass", "ice",
  "fighting", "poison", "ground", "flying", "psychic", "bug",
  "rock", "ghost", "dragon", "dark", "steel", "fairy"
];

const FiltersBar = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onFilterChange({ search: e.target.value, region: selectedRegion, type: selectedType });
  };

  const handleRegion = (e) => {
    setSelectedRegion(e.target.value);
    onFilterChange({ search: searchTerm, region: e.target.value, type: selectedType });
  };

  const handleType = (e) => {
    setSelectedType(e.target.value);
    onFilterChange({ search: searchTerm, region: selectedRegion, type: e.target.value });
  };

  return (
    <div className="filters-bar-container">
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Search Pokémon..." 
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
      <div className="filter-group">
        <label>Region:</label>
        <select value={selectedRegion} onChange={handleRegion}>
          {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>

      <div className="filter-group">
        <label>Type:</label>
        <select value={selectedType} onChange={handleType} className="poke-type-select">
          {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
    </div>
  );
};

export default FiltersBar;
