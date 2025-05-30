import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import {
  DEFAULT_USER_PHOTO_URL,
  NETFLIX_LOGO_URL,
  SUPPORTED_LANGUAGES,
} from "../utils/constants";
import { toggleGPTSearchView } from "../store/gptSlice";
import { changeLanguage } from "../store/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store?.gpt?.showGPTSearch);
  const selectedLang = useSelector((store) => store?.config?.lang);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div
      className={`md:fixed w-full p-4 md:px-12 md:py-6 z-30 md:left-[50%] md:-translate-x-[50%] flex flex-col md:flex-row items-center justify-between ${
        !user
          ? "bg-none max-w-2/3"
          : "bg-black md:bg-linear-180 bg-gradient-to-b from-[rgba(0,0,0,.7)] from-10% to-transparent"
      }`}
    >
      <div
        className={`relative ${
          !user ? "h-[40px] w-[148px]" : "h-[32px] w-[96px]"
        }`}
      >
        <img
          className={`absolute left-0 ${
            !user ? "scale-125 -top-2.5" : "scale-130 -top-0.75"
          }`}
          src={NETFLIX_LOGO_URL}
          alt="Netflix Logo"
        />
      </div>
      {user && (
        <div className="flex items-center gap-2.5 mt-4 md:mt-0">
          {showGPTSearch && (
            <select
              className="font-medium text-white bg-gray-600 px-2 md:px-4 py-1 rounded-md cursor-pointer"
              defaultValue={selectedLang}
              onChange={handleChangeLanguage}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            type="button"
            className="font-bold text-white bg-gray-400 px-2 md:px-4 py-2 rounded-md leading-none cursor-pointer"
            onClick={handleGPTSearchClick}
          >
            {showGPTSearch ? "🏡 Home" : "🔍 GPT Search"}
          </button>
          <div className="rounded-md overflow-hidden h-8 w-8">
            <img
              className="h-full max-h-full"
              src={!user ? { DEFAULT_USER_PHOTO_URL } : user?.photoURL}
              alt="User image"
            />
          </div>
          <button
            className="font-bold text-white bg-red-400 px-4 py-2 rounded-md leading-none cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
