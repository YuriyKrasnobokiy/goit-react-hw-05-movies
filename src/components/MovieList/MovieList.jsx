import { useLocation } from 'react-router-dom';
import {
  MovieList,
  MovieListLi,
  MovieListLink,
  MovieListWrapper,
} from './MovieList.Styled';

export const MovieListMarkup = ({ movieItems }) => {
  const location = useLocation();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=200x300';

  return (
    <MovieListWrapper>
      <MovieList>
        {movieItems &&
          movieItems.map(
            ({
              id,
              title,
              original_title,
              original_name,
              name,
              poster_path,
            }) => {
              const viewTitle =
                title || name || original_title || original_name;
              return (
                <MovieListLi key={id}>
                  <MovieListLink
                    to={`/movies/${id}`}
                    state={{ from: location }}
                  >
                    {viewTitle}
                    <img
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w200${poster_path}`
                          : defaultImg
                      }
                      alt={original_title}
                    />
                  </MovieListLink>
                </MovieListLi>
              );
            }
          )}
      </MovieList>
    </MovieListWrapper>
  );
};
