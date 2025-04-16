import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-12 mb-4">
      <h1 className="text-3xl text-white font-medium py-4">{title}</h1>
      <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        <div className="flex items-center gap-5">
          {!!movies.length &&
            movies.map((movie) => (
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
