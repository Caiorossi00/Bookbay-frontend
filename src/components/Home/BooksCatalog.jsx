import React, { useState } from "react";
import BookItem from "./BookItem";
import SearchBook from "./SearchBook";
import "../../assets/styles/BooksCatalog.scss";

const BooksCatalog = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Todos");

  const filteredBooks = books.filter((book) => {
    const lowerSearch = searchTerm.toLowerCase();
    const matchesSearch =
      book.title.toLowerCase().includes(lowerSearch) ||
      book.author.toLowerCase().includes(lowerSearch);

    const matchesGenre =
      selectedGenre === "Todos" ||
      (Array.isArray(book.genres) &&
        book.genres.some(
          (g) => g.toLowerCase() === selectedGenre.toLowerCase()
        ));

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="book-list">
      <div className="featured-collection">
        <h1>Catálogo</h1>
      </div>

      <SearchBook
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />

      <div className="container-catalog">
        <div className="book-list-display">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => <BookItem key={book.id} book={book} />)
          ) : (
            <p className="no-results">Nenhum livro encontrado.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BooksCatalog;
