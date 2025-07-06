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

  return (
    <div className="genre-container">
      {loading && <p className="loading">Carregando...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <div className="book-list">
          {books.map((book) => (
            <BookItem key={book._id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}
