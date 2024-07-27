import { Link, useLocation } from "react-router-dom";
import { list, item, link, text, img } from "./MovieList.module.css";

export const MovieList = ({ movieList }) => {
  const location = useLocation();

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  return (
    <ul className={list}>
      {movieList.map(({ backdrop_path, id, original_title }) => (
        <li key={id} className={item}>
          <Link to={`/movies/${id}`} state={location} className={link}>
            <img
              className={img}
              src={
                backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
                  : defaultImg
              }
              alt="poster"
            />
            <p className={text}>{original_title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
