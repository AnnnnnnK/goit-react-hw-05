import { useEffect, useState } from "react";
import { getMovieReviews } from "../../services/api";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReview = async (id) => {
      try {
        const { results } = await getMovieReviews(id);
        console.log(results);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };
    getReview(movieId);
  }, [movieId]);
  if (reviews.length <= 0) {
    return;
  }

  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
