import { Suspense, useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../../services/api";
import {
  button,
  container,
  genreItem,
  genresList,
  vote,
  film,
  overviewText,
  img,
  containerInf,
  text,
  btnContainer,
} from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  // console.log(location);
  const goBackRef = useRef(location?.state || "/");
  // console.log(movieId);

  useEffect(() => {
    if (!movieId) return;

    const getDetailedInf = async (id) => {
      try {
        setLoading(true);
        setError(false);
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getDetailedInf(movieId);
  }, [movieId]);

  const { vote_average, title, overview, genres, backdrop_path } = movie;
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  return (
    <>
      {loading && <Loader />}
      <div className={container}>
        <NavLink to={goBackRef.current} className={button}>
          Go back
        </NavLink>
        {Object.keys(movie).length === 0 && (
          <div>No details available for this movie.</div>
        )}
        {Object.keys(movie).length > 0 && (
          <div className={containerInf}>
            <img
              src={
                backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
                  : defaultImg
              }
              alt="poster"
              className={img}
            />
            <h2 className={film}>{title}</h2>
            <p className={overviewText}>
              <span className={text}>Overview:</span> {overview}
            </p>
            <h3 className={vote}>Average vote: {vote_average}</h3>
            <p className={text}>Genres</p>
            <ul className={genresList}>
              {genres.map((el) => (
                <li key={el.id} className={genreItem}>
                  {el.name}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <h2 className={text}>Additional information</h2>
          <div className={btnContainer}>
            <NavLink to="cast" className={button}>
              Cast
            </NavLink>
            <NavLink to="reviews" className={button}>
              Reviews
            </NavLink>
          </div>
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetailsPage;
