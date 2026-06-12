import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const movieSections = {
    nowPlayingMovies: "Now Playing",
    topRatedMovies: "Top Rated",
    popularMovies: "Popular",
    upcomingMovies: "Upcoming Movies",
  };

  if (!movies) return null;
  return (
    
    <div className="bg-black">
        <div className="relative z-20 -mt-40 px-6 md:px-12">
          {Object.entries(movieSections).map(([key, title]) => (
            <MovieList key={key} title={title} movies={movies[key]} />
          ))}
        </div>
      </div>
  );
};

export default SecondaryContainer;
