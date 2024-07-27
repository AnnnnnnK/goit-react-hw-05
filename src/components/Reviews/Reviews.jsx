import { useEffect, useState } from "react";
import { getMovieReviews } from "../../services/api";
import { useParams } from "react-router-dom";
import styles from "./Reviews.module.css";
import Loader from "../Loader/Loader";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getReview = async (id) => {
      try {
        setLoading(true);
        setError(false);
        const { results } = await getMovieReviews(id);
        setReviews(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getReview(movieId);
  }, [movieId]);

  return (
    <>
      {error && <Error />}
      {loading && <Loader />}

      {reviews.length <= 0 ? (
        <p className={styles.author}>There is no reviews yet</p>
      ) : (
        <div className={styles.container}>
          <ul className={styles.list}>
            {reviews.map((review) => (
              <li key={review.id} className={styles.listItem}>
                <p className={styles.author}>{review.author}</p>
                <p className={styles.content}>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Reviews;
