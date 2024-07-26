import React, { useEffect, useState } from "react";
import { getMovieCast } from "../../services/api";
import { useParams } from "react-router-dom";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async (id) => {
      try {
        const response = await getMovieCast(id);
        setCast(response.cast);
        console.log(response.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast(movieId);
  }, [movieId]);
  //   console.log(cast);
  if (!cast || Object.keys(cast).length === 0) return;
  //   const { profile_path, character } = cast;
  //   console.log(character);
  return (
    <div>
      <ul>
        {cast.map((item) => (
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt=""
            />
            <p>{item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
