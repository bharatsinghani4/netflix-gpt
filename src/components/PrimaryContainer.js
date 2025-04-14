import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoInfo from "./VideoInfo";
import { getRandomIndex } from "../utils/constants";

const PrimaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies.length) return;

  const mainMovie = movies[getRandomIndex(0, movies.length - 1)];

  const { id, poster_path, original_title, overview } = mainMovie;

  return (
    <div className="relative h-[75vh]">
      <VideoBackground movieId={id} />
      <VideoInfo
        posterImage={poster_path}
        title={original_title}
        overview={overview}
      />
    </div>
  );
};

export default PrimaryContainer;
