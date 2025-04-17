export const NETFLIX_LOGO_URL =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const NETFLIX_BACKGROUND_IMAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg";

export const DEFAULT_USER_PHOTO_URL =
  "https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABSLtJu5FuInfurhiIngaVEwoB9iZUzF_e3ozJMPYOCJciUXDKO-GctpasbdpXaQkpuhTOX788SZYsqNlc7SPE3mpAyyIPB0.png?r=d99";

export const USER_PHOTO_URL =
  "https://avatars.githubusercontent.com/u/20641276?v=4";

export const TMDB_IMAGE_SECURE_BASE_URL = "https://image.tmdb.org/t/p/";

export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const API_READ_ACCESS_TOKEN =
  process.env.REACT_APP_TMDB_API_READ_ACCESS_TOKEN;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + API_READ_ACCESS_TOKEN,
  },
};

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "english",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
];

export const getRandomIndex = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
