import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
