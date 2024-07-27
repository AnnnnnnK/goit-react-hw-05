import React, { useEffect, useState } from "react";
import { getMovieCast } from "../../services/api";
import { useParams } from "react-router-dom";
import { container } from "./MovieCast.module.css";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCast = async (id) => {
      try {
        setLoading(true);
        setError(false);
        const response = await getMovieCast(id);
        setCast(response.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getCast(movieId);
  }, [movieId]);
  //   console.log(cast);
  if (!cast || Object.keys(cast).length === 0) return;

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  return (
    <div>
      {error && <Error />}
      {loading && <Loader />}
      <ul className={container}>
        {cast.map((item) => (
          <li key={item.id} className={item}>
            <img
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                  : defaultImg
              }
              alt="Actor's picture"
            />
            <p>{item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
