import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/books/${id}`, {
      method: 'DELETE',
    });
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>Área Administrativa</h1>
      <Link to="/admin/book/new">Adicionar Novo Livro</Link>
      <div>
        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p><strong>Autor:</strong> {book.author}</p>
            <button onClick={() => handleDelete(book.id)}>Excluir</button>
            <Link to={`/admin/book/${book.id}`}>Editar</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
