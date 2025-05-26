import React from "react";
import "../styles/SearchBar.scss";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Buscar por título ou autor..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="searchbar__input"
      />
    </div>
  );
};

export default SearchBar;
