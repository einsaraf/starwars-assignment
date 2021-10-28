import {useState, useEffect, useRef} from 'react';

import MovieThumbnail from "./MovieThumbnail";
import Movie from "./Movie";

export default function App() {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies"));
    return favoriteMovies && favoriteMovies.length > 0 ? favoriteMovies : [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  const selectedElement = useRef(null);

  useEffect(() => {
    if (movies.length <= 0) {
      fetch('https://swapi.dev/api/films')
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
          setSelectedMovie(data.results[0]);
        });
    }
  }, [movies]);

  return (
    <div className="App">
      <div id="side-bar">
        {
          movies && movies.map((movie, index) => (
              <MovieThumbnail setSelectedMovie={setSelectedMovie}
                              selectedElement={selectedElement}
                              movies={movies}
                              title={movie.title}
                              index={index}
                              key={index}

              />
            )
          )
        }
      </div>
      <div id="main-container">
        {
          selectedMovie && (
            <Movie setFavoriteMovies={setFavoriteMovies}
                   favoriteMovies={favoriteMovies}
                   selectedMovie={selectedMovie}
            />
          )
        }
      </div>
    </div>
  );
}