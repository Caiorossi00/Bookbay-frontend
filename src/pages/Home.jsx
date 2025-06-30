import React, { useState, useEffect } from "react";
import FeaturedBooks from "../components/Home/FeaturedBooks.jsx";
import BooksCatalog from "../components/Home/BooksCatalog.jsx";
import GenresBanners from "../components/Home/GenresBanners.jsx";
import ".././assets/styles/Home.scss";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://bookbay-backend.onrender.com/books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="container-home">
      <img
        src="https://images.unsplash.com/photo-1630873273144-cfa9079fdd72?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Livros"
      />
      <div>
        <FeaturedBooks books={books} />
      </div>
      <div>
        <GenresBanners />
      </div>
      <div>
        <BooksCatalog books={books} />
      </div>
    </div>
  );
};

export default Home;
