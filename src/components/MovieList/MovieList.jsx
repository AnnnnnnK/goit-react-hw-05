import { Link, useLocation } from "react-router-dom";

export const MovieList = ({ movieList }) => {
  const location = useLocation();
  console.log(movieList);
  return (
    <ul>
      {movieList.map((el) => (
        <li key={el.id}>
          <Link to={`/movies/${el.id}`} state={location}>
            {el.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
