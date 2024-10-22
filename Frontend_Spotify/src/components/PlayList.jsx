import React, { useState, useEffect } from 'react';
import PlaylistCard from './PlaylistCard';
// AIzaSyBNH1UHCUDHYJhAFeELYxYnC-k_xt7hZGI
// AIzaSyCgpfXz0BfiUUhwlEPI257Vx1QlRH4_nXc
const API_KEY = '';
const GENRES = ['House', 'Funk', 'Salsa', 'Rock', 'Jazz'];

const PlayList = () => {
    const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [playlistSongs, setPlaylistSongs] = useState([]);

  // Obtener playlists al montar el componente
  useEffect(() => {
    const fetchPlaylists = async () => {
      const newPlaylists = [];

      for (const genre of GENRES) {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=playlist&q=${genre}&maxResults=1&key=${API_KEY}`
        );
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          newPlaylists.push({
            genre,
            playlistId: data.items[0].id.playlistId,
            title: data.items[0].snippet.title,
            description: data.items[0].snippet.description,
            imgSrc: data.items[0].snippet.thumbnails.high.url,
          });
        }
      }

      setPlaylists(newPlaylists);
    };

    fetchPlaylists();
  }, []);

  // Limpiar canciones cuando seleccionas una nueva playlist
  const handlePlaylistClick = (playlist) => {
    setSelectedPlaylist(playlist);
    fetchPlaylistSongs(playlist.playlistId);
    setPlaylistSongs([]); // Limpiar canciones antes de cargar nuevas
  };

  // Obtener las canciones de una playlist específica
  const fetchPlaylistSongs = async (playlistId) => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=10&key=${API_KEY}`
    );
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      setPlaylistSongs(
        data.items.map((item) => ({
          title: item.snippet.title,
          videoId: item.snippet.resourceId.videoId,
          thumbnail: item.snippet.thumbnails.default.url,
          author: item.snippet.videoOwnerChannelTitle,
        }))
      );
    } else {
      setPlaylistSongs([]); // Limpiar si no hay canciones en la playlist
    }
  };

  // Limpiar estado de canciones al cambiar de playlist o recargar el componente
  useEffect(() => {
    setPlaylistSongs([]); // Limpiar canciones al montar o cambiar playlist
  }, [selectedPlaylist]);

  return (
    <section className="main-content">
      <div className="container-name-spotify-playlists">
        <h1 className="title-playlist">Géneros Musicales</h1>
        <div className="container-card-spotify-playlists cursor-pointer">
          {playlists.map((playlist, index) => (
            <PlaylistCard
              key={index}
              imgSrc={playlist.imgSrc}
              title={playlist.genre}
              description={playlist.description}
              onClick={() => handlePlaylistClick(playlist)}
            />
          ))}
        </div>
      </div>

      {/* Si hay una playlist seleccionada, muestra sus canciones */}
      {selectedPlaylist && playlistSongs.length > 0 && (
        <div className="playlist-songs cursor-pointer">
          <h2 className='text-4xl font-bold my-8'>{selectedPlaylist.title}</h2>
          <div className="song-cards">
            {playlistSongs.map((song, index) => (
              <div key={index} className="song-card">
                <img src={song.thumbnail} alt={song.title} />
                <h3>{song.title}</h3>
                <p>{song.author}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default PlayList;    