import { TMDB_IMAGE_SECURE_BASE_URL } from "../utils/constants";

const VideoInfo = ({ posterImage, title, overview }) => {
  return (
    <div className="md:absolute bg-black md:bg-transparent md:left-0 px-4 py-6 md:px-12 md:pt-[15%] md:pb-0 md:top-0 text-white w-screen aspect-video h-auto md:h-h-max">
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <div className="h-18 md:h-24 w-18 md:w-24 mr-2 md:mr-0 rounded-lg overflow-hidden">
          <img
            src={`${TMDB_IMAGE_SECURE_BASE_URL}/original/${posterImage}`}
            alt={`${title} poster image`}
          />
        </div>
        <h1 className="text-3xl font-bold my-4 md:hidden flex-[1_1_auto]">
          {title}
        </h1>
      </div>
      <div className="w-fit mb-4 md:mb-0">
        <h1 className="text-5xl font-bold my-4 hidden md:block">{title}</h1>
        <p className="text-md mb-4 sm-w-full md:w-3/4 w-full">{overview}</p>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="w-[50%] md:w-auto cursor-pointer font-medium rounded-md px-4 py-2 bg-white text-black hover:brightness-80"
        >
          ▶️ Play
        </button>
        <button
          type="button"
          className="w-[50%] md:w-auto cursor-pointer font-medium rounded-md px-4 py-2 text-white bg-gray-500 hover:brightness-80"
        >
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
