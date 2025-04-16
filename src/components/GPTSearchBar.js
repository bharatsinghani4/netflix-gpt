import { useRef } from "react";
import lang from "../utils/languageConstants.js";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const inputRef = useRef();
  const selectedLang = useSelector((store) => store?.config?.lang);

  const handleSubmit = (e) => {
    e.preventDefault();

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
          className="flex-[1_0_auto] px-6 py-2 bg-black/70"
        />
        <button
          type="submit"
          className="cursor-pointer bg-red-500 text-white px-10 py-2 font-medium"
        >
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
