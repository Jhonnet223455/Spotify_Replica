// components/MainContent.jsx
import React from 'react';
import PlaylistCard from './PlaylistCard';

const MainContent = () => {
  return (
    <section className="main-content">
      {/* Concentración Section */}
      <div className="container-name-concentracion">
        <h1 className="title-playlist">Concentración</h1>
        <div className="container-card-concentracion">
          <PlaylistCard
            imgSrc="img/concentracion/peacefulpiano.jpg"
            title="Peaceful Piano"
            description="Relax and indulge with beautiful piano pieces"
          />
          {/* Agregar más <PlaylistCard> según sea necesario */}
        </div>
      </div>

      {/* Spotify Playlists Section */}
      <div className="container-name-spotify-playlists">
        <h1 className="title-playlist">Spotify Playlists</h1>
        <div className="container-card-spotify-playlists">
          <PlaylistCard
            imgSrc="img/spotify playlists/today top hits.jpg"
            title="Today's Top Hits"
            description="Miley Cyrus is on top of the Hottest 50!"
          />
          {/* Agregar más <PlaylistCard> según sea necesario */}
        </div>
      </div>
    </section>
  );
};

export default MainContent;

