import { Link, useLocation } from "react-router-dom";
import { list, item, link, text } from "./MovieList.module.css";

export const MovieList = ({ movieList }) => {
  const location = useLocation();
  console.log(movieList);
  return (
    <ul className={list}>
      {movieList.map(({ backdrop_path, id, original_title }) => (
        <li key={id} className={item}>
          <Link to={`/movies/${id}`} state={location} className={link}>
            <img
              src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              alt=""
            />
            <p className={text}>{original_title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
