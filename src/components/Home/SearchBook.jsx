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
      <SearchGenres
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
      />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
    </div>
  );
};

export default SearchBook;
