import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../api';
import { ReviewTitle, ReviewsLi, ReviewsWrapper } from './Reviews.Styled';

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
    <ReviewsWrapper>
      <ReviewTitle>Reviews:</ReviewTitle>

      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(item => (
            <ReviewsLi key={item.id}>
              <h3>Review by {item.author}</h3>
              <p>{item.content}</p>
            </ReviewsLi>
          ))}
        </ul>
      ) : (
        'Reviews not found ☹'
      )}
    </ReviewsWrapper>
  );
};
export default Reviews;
