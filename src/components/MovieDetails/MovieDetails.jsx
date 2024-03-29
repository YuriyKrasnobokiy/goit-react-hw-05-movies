/* eslint-disable react-hooks/exhaustive-deps */
import { fetchMovie } from 'components/api';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { defaultImg } from '../../pages/Home';
import {
  MovieWrap,
  DetailsTextWrapper,
  DetailsWrapper,
  Wrapper,
  BackLinkStyled,
  DetailsLinkStyled,
  DetailsUlStyled,
  DetailsLiStyled,
  MovieGenresWrap,
  MovieTitleStyled,
  MovieTaglineStyled,
  MovieReleaseDateStyled,
  MoviePoster,
} from 'components/MovieDetails/MovieDetails.Styled';
import { Loader } from 'components/Loader/Loader';
import MovieTrailer from 'components/Trailer/Trailer';
import { FaArrowLeft } from 'react-icons/fa';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(0);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
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
      <BackLinkStyled to={backLinkLocationRef.current}>
        <FaArrowLeft />
        Back
      </BackLinkStyled>
      <MovieWrap>
        <div>
          <MoviePoster
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
            <MovieTitleStyled>{movie.original_title}</MovieTitleStyled>
            <MovieTaglineStyled>
              <i>{movie.tagline}</i>
            </MovieTaglineStyled>
            <MovieReleaseDateStyled>
              Release date: {movie.release_date}
            </MovieReleaseDateStyled>
            <MovieGenresWrap>
              <h3>Genres: </h3>
              {movie.genres && Array.isArray(movie.genres) ? (
                <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
              ) : (
                <p>No genres available</p>
              )}
            </MovieGenresWrap>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </DetailsTextWrapper>
          <MovieTrailer movieId={movieId} />
        </DetailsWrapper>
      </MovieWrap>
      <DetailsUlStyled>
        <DetailsLiStyled>
          <DetailsLinkStyled to="cast">Cast</DetailsLinkStyled>
        </DetailsLiStyled>
        <DetailsLiStyled>
          <DetailsLinkStyled to="reviews">Reviews</DetailsLinkStyled>
        </DetailsLiStyled>
      </DetailsUlStyled>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
export default MovieDetails;
