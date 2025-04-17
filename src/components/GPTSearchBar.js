import { useRef } from "react";
import lang from "../utils/languageConstants.js";
import { ai } from "../utils/gemini.js";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants.js";
import { addGPTMovieResults } from "../store/gptSlice.js";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const selectedLang = useSelector((store) => store?.config?.lang);

  const searchMovieTMDB = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();

    return data?.results;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const gptQuery =
      "Act as a movie recommendation system and suggest some mobvies for the query: " +
      inputRef.current.value +
      ". Only give me comma separated names of 10 movies like the example result given ahead. Example Result:- Golmaal, Dhol, Bhagam Bhag, Welcome";

    const gptResults = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: gptQuery,
    });

    if (!gptResults?.candidates) {
      inputRef.current.value = "";

      return <p>Something went wrong</p>;
    }

    const gptMovies = gptResults?.candidates[0]?.content?.parts[0]?.text
      .replace(" ", "")
      .split(",");

    const promiseArray = gptMovies.map((gptMovie) => searchMovieTMDB(gptMovie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGPTMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );

    inputRef.current.value = "";
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="border-1 border-red-500 flex items-center rounded-2xl overflow-hidden"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder={lang[selectedLang].searchPlaceholder}
          className="flex-[1_0_auto] px-3 md:px-6 py-2 bg-black/70"
        />
        <button
          type="submit"
          className="cursor-pointer bg-red-500 text-white px-4 md:px-10 py-2 font-medium"
        >
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
