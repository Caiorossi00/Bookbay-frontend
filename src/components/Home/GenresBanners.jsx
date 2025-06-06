import React from "react";
import { Link } from "react-router-dom";
import hq from "../../assets/genres/hq.png";
import terror from "../../assets/genres/terror.png";
import code from "../../assets/genres/code.png";
import "../../assets/styles/GenresBanners.scss";

const genres = [
  { src: hq, alt: "HQs", path: "hqs" },
  { src: terror, alt: "Terror", path: "terror" },
  { src: code, alt: "Programação", path: "programação" },
];

const GenresBanners = () => {
  return (
    <div className="container-genres-banners">
      <div className="genres-title">
        <h1>Gêneros</h1>
      </div>
      <div className="genres-images">
        {genres.map((genre, index) => (
          <Link
            to={`/genero/${genre.path}`}
            key={index}
            className="genres-banner-wrapper"
          >
            <img src={genre.src} alt={genre.alt} className="genres-banner" />
            <div className="genres-banner-text">{genre.alt}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenresBanners;
