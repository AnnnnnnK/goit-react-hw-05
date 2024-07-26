import { Route, Routes } from "react-router-dom";
import { getTrendMovies } from "../services/api";
import { HomePage } from "../pages/HomePage/HomePage";
import { Navigtaion } from "./Navigation/Navigtaion";
import { MoviesPage } from "../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";

const App = () => {
  return (
    <div>
      <Navigtaion />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
