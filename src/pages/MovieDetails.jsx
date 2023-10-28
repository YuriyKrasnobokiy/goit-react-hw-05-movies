/* eslint-disable react-hooks/exhaustive-deps */
import { fetchMovie } from 'components/api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { defaultImg } from './Home';
import { FirstWrap, Wrap } from 'components/MovieDetails.Styled';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(0);

  useEffect(() => {
    if (!movieId) return;
    const getMovieId = async () => {
      try {
        const getMovie = await fetchMovie(movieId);
        setMovie(getMovie);
      } catch (error) {
        console.error(error);
      }
    };

    getMovieId();
  }, [movieId]);

  return (
    <FirstWrap>
      <Wrap>
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
                : defaultImg
            }
            alt={movie.title}
          />
        </div>
        <div>
          <h1>{movie.original_title}</h1>
          <h2>{movie.tagline}</h2>
          <h3>Release date: {movie.release_date}</h3>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          {/* <p>{movieId}</p> */}
        </div>
      </Wrap>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </FirstWrap>
  );
};
