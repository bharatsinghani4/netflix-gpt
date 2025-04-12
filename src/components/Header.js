import React from "react";

const Header = () => {
  return (
    <div className="absolute max-w-2/3 w-full px-12 py-6 z-20 left-[50%] -translate-x-[50%]">
      <div className="h-[40px] w-[148px] relative">
        <img
          className="absolute left-0 -top-2.5 scale-125"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
      </div>
    </div>
  );
};

export default Header;
