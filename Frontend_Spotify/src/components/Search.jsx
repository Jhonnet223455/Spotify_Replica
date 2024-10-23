import React, { useState } from 'react';

const Search = ({ searchResults }) => {
  const [currentVideo, setCurrentVideo] = useState(null); // Estado para la canción seleccionada

  // Función que se ejecuta cuando se hace clic en una tarjeta de búsqueda
  const handleVideoClick = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div className="main-content">
      <h1 className='text-4xl font-bold mt-7'>Resultados de Búsqueda</h1>

      {searchResults.length > 0 ? (
        <div className="search-results grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {searchResults.map((video) => (
            <div 
              key={video.id.videoId} 
              className="search-card bg-zinc-800 p-4 rounded-lg shadow-md hover:bg-zinc-700 transition-all cursor-pointer"
              onClick={() => handleVideoClick(video)} // Asignamos la función al hacer clic
            >
              <img
                className="rounded-lg w-full h-40 object-cover"
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
              />
              <h2 className="text-lg font-semibold text-white mt-4">
                {video.snippet.title}
              </h2>
              <p className="text-sm text-zinc-400 mt-2">
                {video.snippet.channelTitle}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-zinc-400 text-xl mt-6">No hay resultados de búsqueda.</p>
      )}

      {/* Si hay un video seleccionado, mostramos el iframe del reproductor */}
      {currentVideo && (
        <div className="video-player mt-10">
          <h3 className='text-4xl font-bold my-7'>Reproduciendo: {currentVideo.snippet.title}</h3>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${currentVideo.id.videoId}?autoplay=1`}
            title={currentVideo.snippet.title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Search;
