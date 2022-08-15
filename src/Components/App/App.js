import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';
import Playlist from '../Playlist/Playlist';
import { useState, useEffect } from 'react';
import Spotify from '../../util/Spotify';

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
  function addTrack(track) {
    setPlaylistTracks((oldPlaylistTracks) => {
      if (oldPlaylistTracks.includes(track)) {
        console.log(`${track.name} is already in the playlist`);
        return oldPlaylistTracks;
      } else {
        console.log(track);
        return [...oldPlaylistTracks, track];
      }
    });
  }
  // remove track from playlist
  function removeTrack(track) {
    setPlaylistTracks((oldPlaylistTracks) =>
      oldPlaylistTracks.filter((t) => track !== t)
    );
  }

  // update playlist name
  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  function savePlaylist() {
    const trackURIs = playlistTracks.map((track) => track.uri);
    console.log('FUNCTION CALLLED');
    return trackURIs;
  }

  // search for a track
  function search(term) {
    let results = Spotify.search(term);
    setSearchResults(results);
  }

  return (
    <div>
      <h1>
        Ja<span className='highlight'>mmm</span>ing
      </h1>
      <div className='App'>
        <SearchBar onSearch={search} />
        <div className='App-playlist'>
          {/* render searchresults and playlist components, passing in state data as props */}
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
