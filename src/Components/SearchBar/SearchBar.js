import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  function search(term) {
    onSearch(term);
  }

  function handleTermChange(e) {
    search(e.target.value);
  }
  return (
    <div className='SearchBar'>
      <input
        placeholder='Enter A Song, Album, or Artist'
        onChange={handleTermChange}
      />
      <button className='SearchButton'>SEARCH</button>
    </div>
  );
};

export default SearchBar;
