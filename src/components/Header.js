import React from "react";
import { signOut } from "@firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
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
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
      </div>
      {user && (
        <div className="flex items-center gap-2.5">
          <div className="rounded-md overflow-hidden h-8 w-8">
            <img
              className="h-full max-h-full"
              src={
                !user
                  ? "https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABSLtJu5FuInfurhiIngaVEwoB9iZUzF_e3ozJMPYOCJciUXDKO-GctpasbdpXaQkpuhTOX788SZYsqNlc7SPE3mpAyyIPB0.png?r=d99"
                  : user?.photoURL
              }
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
