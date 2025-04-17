import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 md:px-12 pb-4">
      <h1 className="text-2xl md:text-3xl text-white font-medium md:py-4 pt-0 pb-4">
        {title}
      </h1>
      <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
