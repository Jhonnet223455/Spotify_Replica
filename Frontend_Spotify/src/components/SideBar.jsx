import React from 'react';

const SideBar = () => {
  return (
    <nav className="navbar h-screen">
      <div className="container-logo ">
        {/* Logo de Spotify */}
        <a href="#" className="link-logo">
          {/* Aquí usamos una imagen del logo de Spotify */}
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" className='logo-svg'>
            <path fill="white" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"></path>
          </svg>      
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
        {/* <div className="container-links-legal">
          <a href="https://www.spotify.com/ec/legal/">Legal</a>
          <a href="https://www.spotify.com/ec/privacy/">Centro de Privacidad</a>
          <a href="https://www.spotify.com/ec/legal/privacy-policy/">Política de Privacidad</a>
          <a href="https://www.spotify.com/ec/legal/cookies-policy/">Cookies</a>
          <a href="https://www.spotify.com/ec/legal/privacy-policy/#s3">Información sobre los anuncios</a>
        </div> */}
        {/* <button className="btn-language"><i className="fa-solid fa-globe"></i>Español de España</button> */}
      </div>
    </nav>
  );
};

export default SideBar;
