import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "../../assets/styles/BookItem.scss";

const BookItem = ({ book }) => {
  const { addToCart } = useCart();

  return (
    <div className="book-container">
      {book.cover && (
        <Link to={`/livro/${book._id}`}>
          <img src={book.cover} alt={book.title} />
        </Link>
      )}
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <div className="price-and-cart">
        <p className="book-price">R$ {book.price}</p>
        <button className="add-to-cart" onClick={() => addToCart(book)}>
          <FaShoppingCart size={13} color="#fff" />
        </button>
      </div>
    </div>
  );
};

export default BookItem;
