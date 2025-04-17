import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    gptMovieNames: null,
    gptMovieResults: null,
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;

      state.gptMovieNames = movieNames;
      state.gptMovieResults = movieResults;
    },
  },
});

export const { toggleGPTSearchView, addGPTMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
