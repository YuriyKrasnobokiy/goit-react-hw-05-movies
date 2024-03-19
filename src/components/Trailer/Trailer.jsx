import { fetchTrailer } from 'components/api';
import React, { useState, useEffect } from 'react';
import { TrailerWrapper } from './Trailer.Style';

const MovieTrailer = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState('');
  const [isMobile, setIsMobile] = useState(false);

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
    //// Перевірка розміру вікна браузера для визначення мобільного пристрою ////
    const handleResize = () => {
      //// Встановлюю межу для моб пристроїв ////
      setIsMobile(window.innerWidth <= 767);
    };

    //// Перевірка розмір вікна під час монтажу компонента ////
    handleResize();

    //// Додаю слухача подій для зміни розміру вікна ////
    window.addEventListener('resize', handleResize);

    //// Прибираю слухача подій під час розмонтажу компонента ////
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [movieId]);

  return (
    <TrailerWrapper>
      {trailerKey && (
        <iframe
          title="movie-trailer"
          width={isMobile ? '280' : '560'}
          height={isMobile ? '158' : '315'}
          src={`https://www.youtube.com/embed/${trailerKey}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </TrailerWrapper>
  );
};

export default MovieTrailer;
