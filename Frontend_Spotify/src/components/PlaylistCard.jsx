// components/PlaylistCard.jsx
import React from 'react';

const PlaylistCard = ({ imgSrc, title, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-img">
        <img src={imgSrc} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PlaylistCard;
