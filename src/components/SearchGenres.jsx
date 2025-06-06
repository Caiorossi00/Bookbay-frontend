import React from "react";

const genres = [
  "Todos",
  "HQs",
  "Terror",
  "Romance",
  "Fantasia",
  "Programação",
  "Aventura",
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
