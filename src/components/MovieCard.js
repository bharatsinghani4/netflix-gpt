import { TMDB_IMAGE_SECURE_BASE_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const { title, poster_path } = movie;

  return (
    <div className="w-48">
      <img
        src={`${TMDB_IMAGE_SECURE_BASE_URL}/original/${poster_path}`}
        alt={`${title} movie card`}
      />
    </div>
  );
};

export default MovieCard;
