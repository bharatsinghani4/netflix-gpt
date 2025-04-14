import { TMDB_IMAGE_SECURE_BASE_URL } from "../utils/constants";

const VideoInfo = ({ posterImage, title, overview }) => {
  return (
    <div className="absolute left-0 px-12 pt-[20%] top-0 text-white w-screen aspect-video">
      <div className="h-24 w-24 rounded-lg overflow-hidden">
        <img
          src={`${TMDB_IMAGE_SECURE_BASE_URL}/original/${posterImage}`}
          alt={`${title} poster image`}
        />
      </div>
      <div className="w-fit">
        <h1 className="text-6xl font-bold my-4">{title}</h1>
        <p className="text-md w-1/2 mb-4">{overview}</p>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="cursor-pointer font-medium rounded-md px-4 py-2 bg-white text-black hover:brightness-80"
        >
          ▶️ Play
        </button>
        <button
          type="button"
          className="cursor-pointer font-medium rounded-md px-4 py-2 text-white bg-gray-500 hover:brightness-80"
        >
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
