import { useEffect, useState } from "react";
import { getMovieDetails, getTrendMovies } from "../../services/api";
import { MovieList } from "../../components/MovieList/MovieList";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const backLink = location.state?.from ?? "/";

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
      <MovieList movieList={movies} location={location} />
    </div>
  );
};

export default HomePage;
