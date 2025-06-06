import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GenrePage() {
  const { genero } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBooksByGenre() {
      try {
        const response = await fetch(
          `http://localhost:3000/books/genero/${genero}`
        );
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

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="genre-container">
      <h2>Livros do gênero: {genero}</h2>
      <div className="book-list">
        {books.map((book) => (
          <div key={book._id} className="book-card">
            <img src={book.cover} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
