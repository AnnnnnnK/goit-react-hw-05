import { useSearchParams } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { getSearchedMovie } from "../../services/api";
import { useEffect, useState } from "react";
import { MovieList } from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) {
      return;
    }
    const searchMovie = async (searchParams) => {
      try {
        const { results } = await getSearchedMovie(searchParams);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    searchMovie(query);
  }, [searchParams]);

  const handleSubmit = (value) => {
    if (!value) {
      return setSearchParams({});
    }

    searchParams.set("query", value);

    setSearchParams(searchParams);
    // if (value.trim() === "") setSearchParams({});
    // else setSearchParams({ query: value });
  };
  return (
    <>
      <Form handleSubmit={handleSubmit} />
      {movies.length > 0 && <MovieList movieList={movies} />}
    </>
  );
};
export default MoviesPage;
