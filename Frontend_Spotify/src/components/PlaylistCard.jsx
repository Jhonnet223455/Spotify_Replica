// components/PlaylistCard.jsx
import React from 'react';

const PlaylistCard = ({ imgSrc, title, description }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={imgSrc} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PlaylistCard;
