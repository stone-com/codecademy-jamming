import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

const Playlist = ({ playlistName, playlistTracks }) => {
  return (
    <div className='Playlist'>
      <input defaultValue={'New Playlist'} />
      {/* render tracklist, passing in playlistTracks as props to be rendered */}
      <TrackList tracks={playlistTracks}/>
      <button className='Playlist-save'>SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
