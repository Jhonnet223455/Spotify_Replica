import React, { useState } from 'react';

const TopBar = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const API_KEY = ''; // Agrega tu clave de API aquí.

  const handleSearch = async () => {
    if (searchTerm.trim()) {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchTerm}&maxResults=10&key=${API_KEY}`
        );
        const data = await response.json();
        console.log('Resultados de búsqueda:', data);

        // Llama a la función para actualizar los resultados en el componente padre
        onSearchResults(data.items); // Asegúrate de pasar solo los resultados que necesitas
      } catch (error) {
        console.error('Error en la búsqueda:', error);
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="topbar">
      <div className="container-arrows">
        <div className="container-arrow-left cursor-pointer">
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div className="container-arrow-right cursor-pointer">
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <div className="search-bar flex-grow ml-16 relative">
        <input
          type="text"
          placeholder="¿Qué quieres reproducir?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-4/5 h-14 px-6 pr-10 rounded-full bg-zinc-950 focus:outline-none text-white placeholder-zinc-400 text-xl focus:placeholder-zinc-300 focus:bg-zinc-900 transition-all"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.5em"
          height="2.5em"
          viewBox="0 0 24 24"
          className="search-btn absolute top-1/2 transform -translate-y-1/2 text-white cursor-pointer hover:color-white"
          onClick={handleSearch}
        >
          <path fill="currentColor" fillRule="evenodd" d="m16.31 15.561l4.114 4.115l-.848.848l-4.123-4.123a7 7 0 1 1 .857-.84M16.8 11a5.8 5.8 0 1 0-11.6 0a5.8 5.8 0 0 0 11.6 0"></path>
        </svg>
      </div>
      <div className="buttons-user">
        <a href="#" className="btn-register">Registrarte</a>
        <a href="#" className="btn-login btn-full">Iniciar sesión</a>
      </div>
    </div>
  );
};

export default TopBar;
