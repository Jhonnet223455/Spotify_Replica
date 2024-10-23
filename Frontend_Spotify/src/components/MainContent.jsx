// MainContent.jsx
import React from 'react';
import PlayList from './PlayList'; 
import Search from './Search';

const MainContent = ({ searchResults }) => {
  const hasResults = searchResults.length > 0;

  return (
    <div className="main-wrapper">
      <PlayList />
    </div>
  );
};

export default MainContent;
