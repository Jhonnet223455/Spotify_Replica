import React, { useState } from 'react';
import './styles.css';  // Importa el archivo CSS
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  // Función para actualizar los resultados de búsqueda
  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="container">
      <TopBar onSearchResults={updateSearchResults} />
      <SideBar />
      <MainContent searchResults={searchResults} />
      <Footer />
    </div>
  );
};

export default App;
