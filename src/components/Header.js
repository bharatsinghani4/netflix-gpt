import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { DEFAULT_USER_PHOTO_URL, NETFLIX_LOGO_URL } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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
      className={`absolute w-full px-12 py-6 z-30 left-[50%] -translate-x-[50%] flex items-center justify-between ${
        !user
          ? "bg-none max-w-2/3"
          : "bg-linear-180 bg-gradient-to-b from-[rgba(0,0,0,.7)] from-10% to-transparent"
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
        <div className="flex items-center gap-2.5">
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
