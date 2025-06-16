import React from "react";
import SearchBar from "../SearchBar";
import SearchGenres from "../SearchGenres";
import "../../assets/styles/SearchBook.scss";

const SearchBook = ({
  searchTerm,
  setSearchTerm,
  selectedGenre,
  setSelectedGenre,
}) => {
  return (
    <div className="container-searchBook">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <SearchGenres
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
      />
    </div>
  );
};

export default SearchBook;
