import "./styles/Movie.css";
import favoriteIcon from "../components/styles/icons/favorite.png";

export default function Movie(props) {
  const {
    selectedMovie,
    favoriteMovies,
    setFavoriteMovies
  } = props;

  const isFavoriteMovie = (selectedMovie, movies) => {
    for (const movie of movies)
      if (movie.title === selectedMovie.title)
        return true;
    return false;
  }

  return (
    <div id="details-container">
      <div id="fav-section">
        {
          selectedMovie && isFavoriteMovie(selectedMovie, favoriteMovies) ? (
            <img id="fav-icon"
                 alt="favorite icon"
                 src={favoriteIcon}
                 onClick={() => {
                   setFavoriteMovies(favoriteMovies.filter((movie) => movie.title !== selectedMovie.title));
                 }}

            />
          ) : (
            <div id="fav-text"
                 onClick={() => {
                   setFavoriteMovies([...favoriteMovies, selectedMovie]);
                 }}>
              Add to Favorites
            </div>
          )
        }
      </div>
      <p className="title">
        {selectedMovie.title}
      </p>
      <p className="abstract">
        {selectedMovie.opening_crawl}
      </p>
    </div>
  )
}