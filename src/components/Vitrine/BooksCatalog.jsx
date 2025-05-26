import React, { useState } from "react";
import BookItem from "./BookItem";
import "../../styles/BooksCatalog.scss";
import SearchBar from "../SearchBar";

const BooksCatalog = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter((book) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(lowerSearch) ||
      book.author.toLowerCase().includes(lowerSearch)
    );
  });

  return (
    <div className="book-list">
      <div className="featured-collection">
        <h1>Catálogo</h1>
      </div>

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="container-catalog">
        <div className="book-list-display">
          {filteredBooks.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksCatalog;
