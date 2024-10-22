import React from 'react';
import Slider from './Slider';

const MusicPlayer = () => {
 
  return (
    <div className="music-player">
      {/* Información de la canción */}
      <div className="flex items-center space-x-4">
        <img src="/music-flayer.png" alt="Cover" className="size-16 object-cover rounded" />
        <div>
          <p className="text-xl font-semibold">Glizzy Walk 2.5</p>
          <p className="text-base text-gray-400">YOVNGCHIMI, Eladio Carrion, Hydro</p>
        </div>
      </div>

      {/* Agregar a favoritos */}
      <button className="flex items-center space-x-4 text-gray-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </button>

      {/* Abrir video */}
      <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-file-play" viewBox="0 0 16 16">
          <path d="M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z"/>
          <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
        </svg>
      </button>

      {/* Controles */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-400 hover:text-white">
          {/* Botón de retroceso */}
          <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M7 6a1 1 0 0 1 2 0v4l6.4-4.8A1 1 0 0 1 17 6v12a1 1 0 0 1-1.6.8L9 14v4a1 1 0 1 1-2 0V6Z" clipRule="evenodd"/>
          </svg>
        </button>
        <button className="bg-white text-black p-2 rounded-full">
          {/* Botón de play */}
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </button>
        <button className="text-gray-400 hover:text-white">
          {/* Botón de avance */}
          <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M17 6a1 1 0 1 0-2 0v4L8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8L15 14v4a1 1 0 1 0 2 0V6Z" clipRule="evenodd"/>
          </svg>
        </button>
      </div>

      {/* Barra de progreso */}
      <div className="flex items-center space-x-2 w-2/5">
        <span className="text-base text-gray-400">0:39</span>
        <Slider />
        <span className="text-base text-gray-400">3:44</span>
      </div>

      {/* Volumen */}
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
        </svg>
        <input className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-1.5 w-1/2" type="range" min="0" max="100" step="1" defaultValue="15" />
      </div>
    </div>
  );
};

export default MusicPlayer;