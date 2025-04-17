import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    <div className="relative md:-mt-[250px] z-20 pb-[50px]">
      {movies?.nowPlayingMovies.length && (
        <MovieList
          title={"Now Playing"}
          movies={movies?.nowPlayingMovies}
        />
      )}
      {movies?.popularMovies.length && (
        <MovieList
          title={"Popular"}
          movies={movies?.popularMovies}
        />
      )}
      {movies?.topRatedMovies.length && (
        <MovieList
          title={"Top rated"}
          movies={movies?.topRatedMovies}
        />
      )}
      {movies?.upcomingMovies.length && (
        <MovieList
          title={"Upcoming"}
          movies={movies?.upcomingMovies}
        />
      )}
    </div>
  );
};

export default SecondaryContainer;
