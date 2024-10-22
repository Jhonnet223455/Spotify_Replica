// MainContent.jsx
import React from 'react';
import PlayList from './PlayList'; 
import Search from './Search';

const MainContent = ({ searchResults }) => {
  const hasResults = searchResults.length > 0;

  return (
    <div className="main-wrapper">
      <div className={`playlists ${hasResults ? 'overflow-hidden' : ''}`}>
        <PlayList />
      </div>
      <div className={`search ${hasResults ? '' : 'overflow-hidden'}`}>
        {hasResults && <Search searchResults={searchResults} />}
      </div>
    </div>
  );
};

export default MainContent;
