import { useSelector } from "react-redux";
import MovieList from "./MovieList.js";

const GPTMovieSuggestions = () => {
  const { gptMovieNames, gptMovieResults } = useSelector((store) => store?.gpt);

  if (!gptMovieNames?.length) return null;

  return (
    <div className="bg-black/70 mt-6 md:mt-12 py-4 md:pb-8 rounded-lg">
      {gptMovieNames?.map((movieName, index) => {
        if (gptMovieResults[index].length) {
          return (
            <MovieList
              key={movieName}
              title={movieName}
              movies={gptMovieResults[index]}
            />
          );
        }
      })}
    </div>
  );
};

export default GPTMovieSuggestions;
