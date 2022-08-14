import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';
import Playlist from '../Playlist/Playlist';
import { useState, useEffect } from 'react';

const App = () => {
  const [searchResults, setSearchResults] = useState([
    { name: 'name', artist: 'artist', album: 'album', id: 'id' },
    { name: 'name2', artist: 'artist2', album: 'album2', id: 'id2' },
  ]);
useEffect(() => {
  console.log(searchResults)
}, []);
  return (
    <div>
      <h1>
        Ja<span className='highlight'>mmm</span>ing
      </h1>
      <div className='App'>
        <SearchBar />
        <div className='App-playlist'>
          <SearchResults searchResults={searchResults} />
          <Playlist />
        </div>
      </div>
    </div>
  );
};

export default App;
