import React from 'react';
import "../../styles/BookItem.scss"

const BookItem = ({ book }) => {
  return (
    <div className='book-container'>
      <h3>{book.title}</h3>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Preço:</strong> R$ {book.price}</p>
      {book.cover && <img src={book.cover} alt={book.title}/>}
      <p>{book.description}</p>
    </div>
  );
};

export default BookItem;
