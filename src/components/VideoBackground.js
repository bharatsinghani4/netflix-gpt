import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store?.movies?.trailer);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&loop=1&mute=1&showinfo=0&controls=0&modestbranding=1`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
