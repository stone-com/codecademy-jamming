import React, { useState } from 'react';
import './Track.css';

const Track = ({ track, onAdd, isRemoval, onRemove }) => {
  // method to render plus or minus button depending on isRemoval state.
  const renderAction = () => {
    return isRemoval ? (
      <button
        class='Track-action'
        onClick={() => {
          onRemove(track);
        }}
      >
        -
      </button>
    ) : (
      <button
        class='Track-action'
        onClick={() => {
          onAdd(track);
        }}
      >
        +
      </button>
    );
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
