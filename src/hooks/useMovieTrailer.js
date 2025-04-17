import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../store/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const fetchMovieTrailer = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await response.json();
    const trailers = data?.results?.filter(
      (trailer) => trailer.type === "Trailer"
    );
    const filteredTrailer = trailers.length ? trailers[0] : data?.results[0];

    dispatch(addTrailer(filteredTrailer));
  };

  useEffect(() => {
    fetchMovieTrailer();
  }, []);
};
