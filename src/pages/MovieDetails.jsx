/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const id = Number(movieId);
  const [movie, setMovie] = useState(0);

  const optionsMovieDetails = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGRiMzc1OTU2OTc0MzQxMDAxMWYwODQ2NDE2MjM1ZiIsInN1YiI6IjY1MzZjN2Y2N2ZjYWIzMDBlYWIzNWM0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QifJaFBfyRNeHIxkyBSq7u6hLriMTe30UhxSyJcvOFE',
    },
  };

  useEffect(() => {
    if (!movieId) return;
    const getMovie = async () => {
      try {
        const fetchedMovie = await axios(optionsMovieDetails, id);
        setMovie(fetchedMovie.data);
      } catch (error) {
        // console.error(error);
      }
    };

    getMovie();
  }, [movieId]);

  return (
    <div>
      <h1>{movie.original_title}</h1>
      <h2>{movie.tagline}</h2>
      <p>{movieId}</p>

      <img
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
