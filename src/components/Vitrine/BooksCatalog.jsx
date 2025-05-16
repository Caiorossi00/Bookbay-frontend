import React from "react";
import BookItem from "./BookItem";
import "../../styles/BooksCatalog.scss";
import GenreFilter from "./GenreFilter";

const BooksCatalog = ({ books }) => {
  return (
    <div className="book-list">
      <div className="featured-collection">
        <h1> Catálogo</h1>
      </div>

      <div className="container-catalog">
        <div>
          <GenreFilter />
        </div>
        <div className="book-list-display">
          {books.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksCatalog;
