import React from "react";
import "../../styles/BookItem.scss";

const BookItem = ({ book }) => {
  return (
    <div className="book-container">
      {book.cover && <img src={book.cover} alt={book.title} />}
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p className="book-price">R$ {book.price}</p>
    </div>
  );
};

export default BookItem;
