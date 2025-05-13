import React, { useState, useEffect } from 'react';
import BookList from '../components/Vitrine/BookList';
import "../styles/Home.scss"

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className='container-home'>
      <img
        src="https://images.unsplash.com/photo-1744029829181-ad19c2ee248b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Livros"
      />
      <BookList books={books} />
    </div>
  );
};

export default Home;
