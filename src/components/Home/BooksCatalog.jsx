import React, { useEffect, useState, useMemo } from "react";
import { FiLoader } from "react-icons/fi";
import BookItem from "./BookItem";
import SearchBook from "./SearchBook";
import "../../assets/styles/BooksCatalog.scss";

const BooksCatalog = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 60;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!books || books.length === 0) {
      setLoading(true);
    } else {
      const timer = setTimeout(() => setLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [books]);

  const filteredBooks = useMemo(() => {
    if (!books) return [];

    const lowerSearch = searchTerm.toLowerCase();

    return books.filter((book) => {
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
  }, [books, searchTerm, selectedGenre]);

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

  const currentBooks = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredBooks.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredBooks, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedGenre]);

  const goToPage = (page) => setCurrentPage(page);

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

export default React.memo(BooksCatalog);
