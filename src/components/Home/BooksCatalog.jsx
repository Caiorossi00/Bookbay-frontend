import React, { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
import BookItem from "./BookItem";
import SearchBook from "./SearchBook";
import "../../assets/styles/BooksCatalog.scss";

const BooksCatalog = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!books || books.length === 0) {
      setLoading(true);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [books]);

  const filteredBooks = (books || []).filter((book) => {
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

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBooks = filteredBooks.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedGenre]);

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
          {loading ? (
            <div className="loading-spinner">
              <FiLoader className="spinner-icon" />
            </div>
          ) : (
            currentBooks.map((book) => <BookItem key={book.id} book={book} />)
          )}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={currentPage === i + 1 ? "active" : ""}
                onClick={() => goToPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BooksCatalog;
