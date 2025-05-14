import React from "react";
import BookItem from "./BookItem";
import "../../styles/FeaturedBooks.scss";

const BooksCatalog = ({ books }) => {
  return (
    <div className="book-list">
      <div className="featured-collection">
        <h1> Catálogo</h1>
      </div>
      <div className="book-list-display">
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksCatalog;
