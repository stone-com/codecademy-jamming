import React, { useState } from 'react';
import './Track.css';

const Track = ({ track, onAdd, isRemoval }) => {
  // method to render plus or minus button depending on isRemoval state.
  const renderAction = () => {
    return isRemoval ? (
      <button class='Track-action' onClick={addTrack(track)}>
        +
      </button>
    ) : (
      <button class='Track-action'>-</button>
    );
  };

  // method to add track to playlist, uses onAdd function and passes in track prop
  const addTrack = (track) => {
    console.log(track);
    onAdd(track);
  };
  return (
    <div class='Track'>
      <div class='Track-information'>
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
