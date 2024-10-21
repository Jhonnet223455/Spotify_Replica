// components/TopBar.jsx
import React from 'react';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container-arrows">
        <div className="container-arrow-left">
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div className="container-arrow-right">
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <div className="buttons-user">
        <a href="#" className="btn-register">Registrarte</a>
        <a href="#" className="btn-login btn-full">Iniciar sesión</a>
      </div>
    </div>
  );
};

export default TopBar;
