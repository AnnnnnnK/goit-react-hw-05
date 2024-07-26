import { Link } from "react-router-dom";

export const MovieList = ({ movieList, location }) => {
  console.log(movieList);
  return (
    <ul>
      {movieList.map((el) => (
        <li key={el.id}>
          <Link to={`/movies/${el.id}`} state={{ from: location }}>
            {el.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
