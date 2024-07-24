import { Link } from "react-router-dom";

export const MovieList = ({ arr }) => {
  return (
    <ul>
      {arr.map((el) => (
        <li key={el.id}>
          <Link>{el.original_title}</Link>
        </li>
      ))}
    </ul>
  );
};
