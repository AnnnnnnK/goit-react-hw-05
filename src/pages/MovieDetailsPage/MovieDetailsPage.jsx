import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovieDetails } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  const location = useLocation();
  const goBackRef = useRef(location?.state || "/");
  console.log(movieId);

  useEffect(() => {
    if (!movieId) return;

    const getDetailedInf = async (id) => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };

    getDetailedInf(movieId);
    if (!movieId) return;
  }, [movieId]);
  if (!movie || Object.keys(movie).length === 0) return;
  console.log(movie);
  const { vote_average, title, overview, genres, backdrop_path } = movie;
  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";
  return (
    <div>
      <NavLink to={goBackRef.current}>Go back</NavLink>
      <img
        src={
          backdrop_path
            ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
            : defaultImg
        }
        alt="poster"
      />
      <h2>{title}</h2>

      <p>Overview: {overview}</p>
      <h3>Average vote: {vote_average}</h3>
      <ul>
        {genres.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
      <div>
        <h2>Additional information</h2>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
