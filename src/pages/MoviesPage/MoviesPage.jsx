import { useSearchParams } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { getSearchedMovie } from "../../services/api";
import { useEffect, useState } from "react";

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) {
      return;
    }
    const searchMovie = async (searchParams) => {
      try {
        const { results } = await getSearchedMovie(searchParams);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    };
    searchMovie(query);
  }, [searchParams]);

  const handleSubmit = (value) => {
    if (value.trim() === "") setSearchParams({});
    else setSearchParams({ query: value });
  };
  return <Form handleSubmit={handleSubmit} />;
};
