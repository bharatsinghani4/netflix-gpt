import { TMDB_IMAGE_SECURE_BASE_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const { title, poster_path } = movie;

  if (!poster_path) return null;

  return (
    <div className="w-48 max-h-72 cursor-pointer rounded-md overflow-hidden">
      <img
        className="h-full object-cover"
        src={`${TMDB_IMAGE_SECURE_BASE_URL}/original/${poster_path}`}
        alt={`${title} movie card`}
      />
    </div>
  );
};

export default MovieCard;
