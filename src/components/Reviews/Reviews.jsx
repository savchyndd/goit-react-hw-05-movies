import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from 'services/getMovies';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsMovie(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
