import React, { useState } from 'react';
import './Track.css';

const Track = ({track}) => {
//   const renderAction = (props) => {
//     return isRemoval ? '-' : '+';
//   };
  return (
    <div class='Track'>
      <div class='Track-information'>
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      <button class='Track-action'> + or - will go here </button>
    </div>
  );
};

export default Track;
