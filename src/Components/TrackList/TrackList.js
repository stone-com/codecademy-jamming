import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

const TrackList = ({ tracks, onAdd, isRemoval, onRemove }) => {
  return (
    <div className='TrackList'>
      {tracks && tracks?.map((track) => (
        <Track
          key={track.id}
          track={track}
          onAdd={onAdd}
          isRemoval={isRemoval}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default TrackList;
