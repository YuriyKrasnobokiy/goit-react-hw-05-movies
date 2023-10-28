/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const id = Number(movieId);

  const optionsReviews = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGRiMzc1OTU2OTc0MzQxMDAxMWYwODQ2NDE2MjM1ZiIsInN1YiI6IjY1MzZjN2Y2N2ZjYWIzMDBlYWIzNWM0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QifJaFBfyRNeHIxkyBSq7u6hLriMTe30UhxSyJcvOFE',
    },
  };

  useEffect(() => {
    const getReviews = async () => {
      try {
        const fetchedReviews = await axios(optionsReviews);
        setReviews(fetchedReviews.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getReviews();
  }, [movieId]);

  // console.log(reviews);

  return (
    <div>
      <h2>Reviews:</h2>

      {reviews.length > 0 ? (
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
