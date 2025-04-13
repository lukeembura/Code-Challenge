import React from 'react';

function SearchBar({ searchTerm, handleSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search your expenses..."
      value={searchTerm}
      onChange={handleSearchChange}
      className="search-bar"
    />
  );
}

export default SearchBar;
