import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/styles/GenrePage.scss";
import BookItem from "../components/Home/BookItem";
import { API_URL } from "../config";

export default function GenrePage() {
  const { genero } = useParams();
  const [books, setBooks] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBooksByGenre() {
      try {
        const response = await fetch(`${API_URL}/books/genero/${genero}`);
        if (!response.ok)
          throw new Error("Nenhum livro encontrado para esse gênero");

        const data = await response.json();
        setBooks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchBooksByGenre();
  }, [genero]);

  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  const getMessageByGenre = (genre) => {
    switch (genre.toLowerCase()) {
      case "terror":
        return "Feeling spooky? Aqui estão as melhores histórias de terror que você pode encontrar.";
      case "hqs":
        return "A seleção de melhores histórias dos quadrinhos e graphic novels.";
      case "programação":
        return "Princípios e práticas que todo programador deveria conhecer.";

      default:
        return "Esses são os livros do nosso catálogo selecionados para você.";
    }
  };

  return (
    <div className="genre-container">
      {loading && <p className="loading no-orders">Carregando...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <>
          <h1 className="genrepage-title">{capitalizeFirstLetter(genero)}</h1>
          <p className="genrepage-message">{getMessageByGenre(genero)}</p>
          <div className="book-list">
            {books.map((book) => (
              <BookItem key={book._id} book={book} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
