import axios from "axios";

// const url =
//   "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const url = "https://api.themoviedb.org/3/trending/movie";
const apiKey = "1998f089c42cdaf9692da3e8ce61f14a";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTk4ZjA4OWM0MmNkYWY5NjkyZGEzZThjZTYxZjE0YSIsIm5iZiI6MTcyMTgxODQxNC43NTU5MzMsInN1YiI6IjY2YTBkOWFhM2VhYWU0YTFlM2JmNjQwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cynkAFPkqqxGQysvR1774tlCu8wQmhBxQcTXc-hDY6k",
  },
};

export const getTrendMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`,
    options
  );
  return response.data;
};
