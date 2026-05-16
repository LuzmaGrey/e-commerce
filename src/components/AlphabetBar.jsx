import "../styles/AlphabetBar.scss";

const ALPHABET = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

const AlphabetBar = ({ activeLetter, onLetterChange }) => {
  return (
    <div className="alphabet-bar">
      {ALPHABET.map((letter) => (
        <button
          key={letter}
          className={`alpha-btn ${activeLetter === letter ? 'active' : ''}`}
          onClick={() => onLetterChange(letter === activeLetter ? 'All' : letter)}
          title={letter === 'All' ? 'Show all' : `Pokémon starting with ${letter}`}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default AlphabetBar;
