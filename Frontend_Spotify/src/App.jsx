// App.jsx
import React from 'react';
import './styles.css';  // Importa el archivo CSS
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import BannerBottom from './components/BannerBottom';

const App = () => {
  return (
    <div className="container">
      <TopBar />
      <SideBar />
      <MainContent />
      <Footer />
      <BannerBottom />
    </div>
  );
};

export default App;
