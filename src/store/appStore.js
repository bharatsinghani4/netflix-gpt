import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";

export const appStore = configureStore({
  reducer: {
    config: configReducer,
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});
