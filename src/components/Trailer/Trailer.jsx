import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieTrailer = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState('');

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        // Замість 'YOUR_API_KEY' вставте свій API-ключ TMDB
        const apiKey =
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGRiMzc1OTU2OTc0MzQxMDAxMWYwODQ2NDE2MjM1ZiIsInN1YiI6IjY1MzZjN2Y2N2ZjYWIzMDBlYWIzNWM0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QifJaFBfyRNeHIxkyBSq7u6hLriMTe30UhxSyJcvOFE';
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
        );

        const results = response.data.results;

        if (results.length > 0) {
          setTrailerKey(results[0].key);
        } else {
          console.error('Trailer not found');
        }
      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    };

    fetchTrailer();
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
