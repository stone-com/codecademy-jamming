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
  // method to add track to playlist
  const addTrack = (track) => {
    // check to make sure track id is not already in tracklist, return if it is.
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      console.log(`${track.name} is already in your playlist`);
      return;
    } else {
      // add track to playlist
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  // method to remove track from playlist
  const removeTrack = (track) => {
    // filter the playlist and remove the matching ID
    const filteredList = playlistTracks.filter((selectedTrack) => {
      return selectedTrack.id !== track.id;
    });
    setPlaylistTracks(filteredList);
  };
  return (
    <div>
      <h1>
        Ja<span className='highlight'>mmm</span>ing
      </h1>
      <div className='App'>
        <SearchBar />
        <div className='App-playlist'>
          {/* render searchresults and playlist components, passing in state data as props */}
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
