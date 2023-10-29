import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const fetchedReviews = await fetchReviews(movieId);
        setReviews(fetchedReviews);
      } catch (error) {
        console.error(error);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews:</h2>

      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <h3>Review by {item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        'Reviews not found ☹'
      )}
    </div>
  );
};
export default Reviews;
