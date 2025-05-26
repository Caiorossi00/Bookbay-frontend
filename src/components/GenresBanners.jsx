import React from "react";
import hq from "../assets/genres/hq.png";
import terror from "../assets/genres/terror.png";
import filosofia from "../assets/genres/filosofia.png";
import code from "../assets/genres/code.png";
import "../styles/GenresBanners.scss";

const genres = [
  { src: hq, alt: "HQs" },
  { src: terror, alt: "Terror" },
  { src: code, alt: "Programação" },
];

const GenresBanners = () => {
  return (
    <div className="container-genres-banners">
      <div className="genres-title">
        <h1>Gêneros</h1>
      </div>
      <div className="genres-images">
        {genres.map((genre, index) => (
          <div key={index} className="genres-banner-wrapper">
            <img src={genre.src} alt={genre.alt} className="genres-banner" />
            <div className="genres-banner-text">{genre.alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenresBanners;
