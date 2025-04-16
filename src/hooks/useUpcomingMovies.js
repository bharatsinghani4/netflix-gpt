import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../store/moviesSlice";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const fetchUpcomingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();

    dispatch(addUpcomingMovies(data?.results));
  };

  useEffect(() => {
    fetchUpcomingMovies();
  }, []);
};
