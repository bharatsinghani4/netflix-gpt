import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    <div className="relative md:-mt-[325px] lg:-mt-[250px] z-20 pb-[50px]">
      <MovieList
        title={"Now Playing"}
        movies={movies?.nowPlayingMovies}
      />
      <MovieList
        title={"Popular"}
        movies={movies?.popularMovies}
      />
      <MovieList
        title={"Top rated"}
        movies={movies?.topRatedMovies}
      />
      <MovieList
        title={"Upcoming"}
        movies={movies?.upcomingMovies}
      />
    </div>
  );
};

export default SecondaryContainer;
