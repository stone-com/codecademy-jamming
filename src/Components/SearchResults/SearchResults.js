import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';
import { useEffect } from 'react';

const SearchResults = ({searchResults}) => {
  useEffect(() => {
    console.log(searchResults)
  }, []);
  return (
    <div className='SearchResults'>
      <h2>Results</h2>
      <p>{searchResults[1].album}</p>
      <TrackList tracks={searchResults} />
    </div>
  );
};

export default SearchResults;
