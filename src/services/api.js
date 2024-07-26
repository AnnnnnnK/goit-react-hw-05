import axios from "axios";
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTk4ZjA4OWM0MmNkYWY5NjkyZGEzZThjZTYxZjE0YSIsIm5iZiI6MTcyMTgxODQxNC43NTU5MzMsInN1YiI6IjY2YTBkOWFhM2VhYWU0YTFlM2JmNjQwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cynkAFPkqqxGQysvR1774tlCu8wQmhBxQcTXc-hDY6k",
  },
});

const apiKey = "1998f089c42cdaf9692da3e8ce61f14a";

export const getTrendMovies = async () => {
  const response = await api.get("/trending/movie/day");
  return response.data.results;
};

export const getSearchedMovie = async (query) => {
  const { data } = await api.get(`/search/movie`, {
    params: {
      api_key: apiKey,
      query,
    },
  });
  return data;
};

export const getMovieDetails = async (id) => {
  const { data } = await api.get(`/search/movie`, {
    params: {
      api_key: apiKey,
      movie_id: id,
    },
  });
  return data;
};
