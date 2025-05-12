import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Preço:</strong> R$ {book.price}</p>
      {book.cover && <img src={book.cover} alt={book.title}/>}
      <p>{book.description}</p>
    </div>
  );
};

export default BookItem;
