import React from "react";
import SearchBar from "../SearchBar";
import SearchGenres from "../SearchGenres";

const SearchBook = ({
  searchTerm,
  setSearchTerm,
  selectedGenre,
  setSelectedGenre,
}) => {
  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <SearchGenres
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
      />
    </div>
  );
};

export default SearchBook;
