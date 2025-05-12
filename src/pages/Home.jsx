import React, { useState, useEffect } from 'react';
import BookList from '../components/Vitrine/BookList';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h1>Vitrine de Livros</h1>
      <BookList books={books} />
    </div>
  );
};

export default Home;
