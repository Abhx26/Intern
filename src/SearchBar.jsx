import React from 'react';

function SearchBar({ search, handleSearch }) {
  return (
    <input
      type="text"
      value={search}
      onChange={handleSearch}
      placeholder="Search for a beer..."
      style={{ margin: '20px', padding: '10px', width: '95%' }}
    />
  );
}

export default SearchBar;
