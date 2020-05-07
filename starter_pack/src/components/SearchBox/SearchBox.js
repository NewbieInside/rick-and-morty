import React from 'react';
import './SearchBox.css';

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="searchbox-container">
      <input
        className="search"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
