import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ".././assets/styles/AdminDashboard.scss";

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE",
    });
    setBooks(books.filter((book) => book._id !== id));
  };

  return (
    <div className="admin-dashboard">
      <h1>Área Administrativa</h1>
      <Link to="/admin/book/new" className="add-book-link">
        Adicionar Novo Livro
      </Link>
      <div className="book-list">
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
    </div>
  );
};

export default AdminDashboard;
