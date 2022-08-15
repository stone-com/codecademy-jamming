import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

const Playlist = ({ playlistName, playlistTracks, onRemove, onNameChange }) => {
  function handleNameChange(e) {
    onNameChange(e.target.value);
  }

  return (
    <div className='Playlist'>
      <input defaultValue={'New Playlist'} onChange={handleNameChange} />
      {/* render tracklist, passing in playlistTracks as props to be rendered */}
      <TrackList tracks={playlistTracks} isRemoval={true} onRemove={onRemove} />
      <button className='Playlist-save'>SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
