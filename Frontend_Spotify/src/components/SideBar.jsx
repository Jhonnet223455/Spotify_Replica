import React from 'react';
import spotifyLogo from 'C:/Users/jhonm/Desktop/Spotify_Replica/Frontend_Spotify/src/assets/SpotifyLogo.svg'; // Asegúrate de que la ruta sea correcta

const SideBar = () => {
  return (
    <nav className="navbar">
      <div className="container-logo">
        {/* Logo de Spotify */}
        <a href="#" className="link-logo">
          {/* Aquí usamos una imagen del logo de Spotify */}
          <img src={spotifyLogo} viewBox="0 0 1134 340" className="logo-svg" />
        </a>
      </div>
      <ul className="nav-main">
        <li><a href="#"><i className="fa-solid fa-house"></i>Inicio</a></li>
        <li><a href="#"><i className="fa-solid fa-magnifying-glass"></i>Buscar</a></li>
        <li><a href="#"><i className="fa-solid fa-bookmark"></i>Tu biblioteca</a></li>
      </ul>
      <div className="extra-options">
        <button className="btn-create-list"><i className="fa-solid fa-plus"></i>Crear Lista</button>
        <button className="btn-favorite-songs"><i className="fa-solid fa-heart"></i>Canciones que te gustan</button>
      </div>
      <div className="container-links">
        <div className="container-links-legal">
          <a href="https://www.spotify.com/ec/legal/">Legal</a>
          <a href="https://www.spotify.com/ec/privacy/">Centro de Privacidad</a>
          <a href="https://www.spotify.com/ec/legal/privacy-policy/">Política de Privacidad</a>
          <a href="https://www.spotify.com/ec/legal/cookies-policy/">Cookies</a>
          <a href="https://www.spotify.com/ec/legal/privacy-policy/#s3">Información sobre los anuncios</a>
        </div>
        <button className="btn-language"><i className="fa-solid fa-globe"></i>Español de España</button>
      </div>
    </nav>
  );
};

export default SideBar;
