import { useEffect, useState } from "react";
import { getMovieDetails, getTrendMovies } from "../../services/api";
import { MovieList } from "../../components/MovieList/MovieList";

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      const getMovie = async () => {
        const data = await getTrendMovies();
        setMovies(data);
      };
      getMovie();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <MovieList movieList={movies} />
    </div>
  );
};
