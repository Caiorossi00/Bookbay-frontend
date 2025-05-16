import React from "react";
import "../../styles/GenreFilter.scss";

const GenreFilter = () => {
  return (
    <div className="container-genres">
      <h2>Gêneros</h2>
      <div className="genre-list">
        <div className="genre-item">Ficção</div>
        <div className="genre-item">Não-ficção</div>
        <div className="genre-item">Romance</div>
        <div className="genre-item">Aventura</div>
        <div className="genre-item">Fantasia</div>
        <div className="genre-item">Mistério</div>
        <div className="genre-item">Histórico</div>
        <div className="genre-item">Biografia</div>
      </div>
    </div>
  );
};

export default GenreFilter;
