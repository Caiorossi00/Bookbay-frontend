import React from "react";
import "../assets/styles/SearchGenres.scss";

const genres = [
  "Todos",
  "Romance",
  "Filosofia",
  "Política",
  "Ficção",
  "Clássico",
  "Curiosidades",
];

const SearchGenres = ({ selectedGenre, onGenreChange }) => {
  return (
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
  );
};

export default SearchGenres;
