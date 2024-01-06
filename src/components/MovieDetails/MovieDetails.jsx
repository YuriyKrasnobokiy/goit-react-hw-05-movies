/* eslint-disable react-hooks/exhaustive-deps */
import { fetchMovie } from 'components/api';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { defaultImg } from '../../pages/Home';
import {
  MovieWrap,
  DetailsTextWrapper,
  DetailsWrapper,
  Wrapper,
} from 'components/MovieDetails/MovieDetails.Styled';
import { Loader } from 'components/Loader/Loader';
import MovieTrailer from 'components/Trailer/Trailer';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(0);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  // console.log(location);
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
    <Wrapper>
      <Link to={backLinkLocationRef.current}>Back</Link>
      <MovieWrap>
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

        <DetailsWrapper>
          <DetailsTextWrapper>
            <h1>{movie.original_title}</h1>
            <h2>{movie.tagline}</h2>
            <h3>Release date: {movie.release_date}</h3>
            <h3>Genres: </h3>
            {movie.genres && Array.isArray(movie.genres) ? (
              <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
            ) : (
              <p>No genres available</p>
            )}
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </DetailsTextWrapper>
          <MovieTrailer movieId={movieId} />
        </DetailsWrapper>
      </MovieWrap>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
export default MovieDetails;
