import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';
import { useEffect } from 'react';


const TrackList = ({ tracks }) => {
  useEffect(() => {
    console.log(tracks);
  }, []);
  return (
    <div className='TrackList'>
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
};

export default TrackList;
