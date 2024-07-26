import { useEffect, useState } from "react";
import { getMovieDetails, getTrendMovies } from "../../services/api";
import { MovieList } from "../../components/MovieList/MovieList";
import { container, title } from "./HomePage.module.css";
const HomePage = () => {
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
    <div className={container}>
      <div>
        <h2 className={title}>Trending today</h2>
      </div>

      <MovieList movieList={movies} />
    </div>
  );
};

export default HomePage;
