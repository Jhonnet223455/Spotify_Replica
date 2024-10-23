import React, { useState } from 'react';
import './styles.css';  // Importa el archivo CSS
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isHome, setIsHome] = useState(true);  // Estado para controlar si estamos en "Inicio" o en "Resultados de búsqueda"

  // Función para actualizar los resultados de búsqueda
  const updateSearchResults = (results) => {
    setSearchResults(results);
    setIsHome(false); // Cambia a false para mostrar resultados de búsqueda
  };

  return (
    <div className="container">
      <TopBar onSearchResults={updateSearchResults} />
      <SideBar setIsHome={setIsHome} /> {/* Pasamos la función setIsHome */}
      <MainContent searchResults={searchResults} isHome={isHome} /> {/* Pasamos isHome */}
      <Footer />
    </div>
  );
};

export default App;
