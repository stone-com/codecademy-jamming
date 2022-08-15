import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';
import { useEffect } from 'react';

const SearchResults = ({ searchResults, onAdd }) => {
  useEffect(() => {
    console.log(searchResults);
  }, []);
  return (
    <div className='SearchResults'>
      <h2>Results</h2>
      {/* render tracklist, passing down search results and onAdd function from props */}
      <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false} />
    </div>
  );
};

export default SearchResults;
