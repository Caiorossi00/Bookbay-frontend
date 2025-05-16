import React from "react";
import "../../styles/GenreFilter.scss";

const GenreFilter = () => {
  return (
    <div className="genre-list">
      <ul>
        <li>Todos</li>
        <li>Ficção</li>
        <li>Filosofia</li>
        <li>Romance</li>
        <li>Fantasia</li>
        <li>Terror</li>
      </ul>
    </div>
  );
};

export default GenreFilter;
