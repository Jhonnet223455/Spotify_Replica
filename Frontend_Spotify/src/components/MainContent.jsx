import React from 'react';
import PlayList from './PlayList'; 
import Search from './Search';

const MainContent = ({ searchResults, isHome }) => {
  const hasResults = searchResults.length > 0;

  return (
    <div className="main-wrapper">
      {/* Mostrar PlayList si estamos en el inicio o no hay resultados de búsqueda */}
      {isHome ? (
        <div className="playlists">
          <PlayList />
        </div>
      ) : (
        <div className={`search ${hasResults ? '' : 'overflow-hidden'}`}>
          {hasResults ? <Search searchResults={searchResults} /> : <p>No hay resultados de búsqueda.</p>}
        </div>
      )}
    </div>
  );
};

export default MainContent;
