import { NETFLIX_BACKGROUND_IMAGE_URL } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <div className="p-12 pt-28 min-h-[100vh] text-white flex justify-center bg-black/50">
      <div className="absolute h-[100vh] w-full left-0 top-0 -z-20">
        <img
          className="h-full max-w-full w-full object-cover scale"
          src={NETFLIX_BACKGROUND_IMAGE_URL}
          alt="Netflix Background image"
        />
      </div>
      <div className="rounded-3xl flex-[1_0_100%] p-12">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
