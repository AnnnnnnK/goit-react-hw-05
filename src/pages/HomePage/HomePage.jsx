import { useEffect, useState } from "react";
import { getTrendMovies } from "../../services/api";
import { MovieList } from "../../components/MovieList/MovieList";
import { container, title } from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await getTrendMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getMovie();
  }, []);

  return (
    <div className={container}>
      {error && <Error />}
      <div>
        <h2 className={title}>Trending today</h2>
        {loading && <Loader />}
      </div>

      <MovieList movieList={movies} />
    </div>
  );
};

export default HomePage;
