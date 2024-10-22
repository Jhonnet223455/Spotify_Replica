// Search.jsx
import React from 'react';

const Search = ({ searchResults }) => {
  return (
    <div className="main-content">
      <h1 className='text-xl font-bold'>Resultados de Búsqueda</h1>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((video) => (
            <li key={video.id.videoId}>
              <h2>{video.snippet.title}</h2>
              <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay resultados de búsqueda.</p>
      )}
    </div>
  );
};

export default Search;
