import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/BookItem.scss";

const BookItem = ({ book }) => {
  return (
    <div className="book-container">
      {book.cover && (
        <Link to={`/livro/${book._id}`}>
          <img src={book.cover} alt={book.title} />
        </Link>
      )}
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p className="book-price">R$ {book.price}</p>
    </div>
  );
};

export default BookItem;
