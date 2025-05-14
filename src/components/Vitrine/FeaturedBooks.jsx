import React from "react";
import BookItem from "./BookItem";
import "../../styles/BookList.scss";

const BookList = ({ books }) => {
  const featuredBooks = books.filter((book) => book.isDestaque);

  return (
    <div className="book-list">
      <div className="featured-collection">
        <h1>Featured Collection</h1>
      </div>
      <div className="book-list-display">
        {featuredBooks.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
