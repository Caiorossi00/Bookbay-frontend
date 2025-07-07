import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/Books.scss";
import { API_URL } from "../../config";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/books`)
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Erro ao buscar livros:", err));
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Você precisa estar logado para excluir um livro.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/books/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(
          `Erro ao excluir livro: ${errorData.error || response.statusText}`
        );
        return;
      }

      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
    } catch (error) {
      alert("Erro na conexão. Tente novamente mais tarde.");
      console.error(error);
    }
  };

  return (
    <>
      <Link to="/admin/book/new" className="add-book-link">
        Adicionar Novo Livro
      </Link>
      <div className="edit-book-list">
        {books.map((book) => (
          <div key={book._id} className="book-card">
            <h3>{book.title}</h3>
            <p>
              <strong>Autor:</strong> {book.author}
            </p>
            <div className="actions">
              <button onClick={() => handleDelete(book._id)}>Excluir</button>
              <Link to={`/admin/book/${book._id}`} className="edit-link">
                Editar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
