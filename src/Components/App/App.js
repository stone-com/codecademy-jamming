import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';
import Playlist from '../Playlist/Playlist';
import { useState, useEffect } from 'react';

const App = () => {
  // setting states for searchresults, playlistname, and playlist tracks.
  // will be passed down to components that render them.
  const [searchResults, setSearchResults] = useState([
    { name: 'name', artist: 'artist', album: 'album', id: 'id' },
    { name: 'name2', artist: 'artist2', album: 'album2', id: 'id2' },
  ]);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([
    { name: 'name3', artist: 'artist3', album: 'album3', id: 'id3' },
    { name: 'name4', artist: 'artist4', album: 'album4', id: 'id4' },
  ]);
  useEffect(() => {
    console.log(searchResults);
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
