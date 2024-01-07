import { SearchBar } from 'components/SearchBar/SearchBar';
import toast, { Toaster } from 'react-hot-toast';

import { searchMovie } from 'components/api';
import React, { useEffect, useState } from 'react';

import { MovieListMarkup } from '../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';

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
    if (form.elements.movieName.value === '') {
      toast.error('Type movie name');
      return;
    }
    setSearchParams({ movieName: form.elements.movieName.value });

    form.reset();
  };

  return (
    <>
      <SearchBar handlerSubmit={handlerSubmit} />
      <MovieListMarkup movieItems={gallarySearch} />
      <Toaster />
    </>
  );
};
export default Movies;
