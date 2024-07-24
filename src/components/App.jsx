import { Route, Routes } from "react-router-dom";
import { getTrendMovies } from "../services/api";
import { HomePage } from "../pages/HomePage/HomePage";
import { Navigtaion } from "./Navigation/Navigtaion";
import { MoviesPage } from "../pages/MoviesPage/MoviesPage";

const App = () => {
  return (
    <div>
      <Navigtaion />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
};

export default App;
