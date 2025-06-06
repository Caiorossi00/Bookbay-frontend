import React from "react";
import "../styles/SearchBar.scss";

const genres = [
  "Todos",
  "HQs",
  "Terror",
  "Romance",
  "Fantasia",
  "Programação",
  "Aventura",
];

const SearchBar = ({
  searchTerm,
  onSearchChange,
  selectedGenre,
  onGenreChange,
}) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Buscar por título ou autor..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="searchbar__input"
      />

      <div className="genresbar">
        {genres.map((genre) => (
          <button
            key={genre}
            className={`genresbar__item ${
              selectedGenre === genre ? "active" : ""
            }`}
            onClick={() => onGenreChange(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
