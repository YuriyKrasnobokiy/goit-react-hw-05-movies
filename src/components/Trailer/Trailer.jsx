import { fetchTrailer } from 'components/api';
import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const MovieTrailer = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState('');

  useEffect(() => {
    const getTrailer = async () => {
      try {
        const fetchedTrailer = await fetchTrailer(movieId);
        if (fetchedTrailer.length > 0) {
          setTrailerKey(fetchedTrailer[0].key);
        }
      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    };

    getTrailer();
  }, [movieId]);

  return (
    <div>
      {trailerKey && (
        <iframe
          title="movie-trailer"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default MovieTrailer;
