import { useEffect, useState } from "react";
import { getTrendMovies, searchMovie } from "../../services/api";
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

  console.log(movies);
  return (
    <div>
      <MovieList arr={movies} />
    </div>
  );
};
