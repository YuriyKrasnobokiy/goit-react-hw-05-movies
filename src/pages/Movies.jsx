import { SearchBar } from 'components/SearchBar';
import { TrendLi, TrendList } from 'components/Trending.Styled';
import { searchMovie } from 'components/api';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { defaultImg } from './Home';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const location = useLocation();
  const [gallarySearch, setGallarySearch] = useState([]);

  useEffect(() => {
    const getSearch = async () => {
      try {
        const fetchedSearch = await searchMovie(movieName);
        setGallarySearch(fetchedSearch);
      } catch (error) {
        console.error(error);
      }
    };
    getSearch();
  }, [movieName]);

  const handlerSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ movieName: form.elements.movieName.value });
    form.reset();
  };

  return (
    <main>
      <SearchBar handlerSubmit={handlerSubmit} />

      <TrendList>
        {gallarySearch &&
          gallarySearch.map(
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
                <TrendLi key={id}>
                  <Link to={`/movies/${id}`} state={{ from: location }}>
                    {viewTitle}
                    <img
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w200${poster_path}`
                          : defaultImg
                      }
                      alt={original_title}
                    />
                  </Link>
                </TrendLi>
              );
            }
          )}
      </TrendList>
    </main>
  );
};
export default Movies;
