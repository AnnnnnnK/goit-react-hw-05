import { Link } from "react-router-dom";

export const MovieList = ({ movieList }) => {
  console.log(movieList);
  return (
    <ul>
      {movieList.map((el) => (
        <li key={el.id}>
          <Link to={`${el.id}`}>{el.original_title}</Link>
        </li>
      ))}
    </ul>
  );
};
