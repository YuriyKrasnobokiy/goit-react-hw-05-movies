import React, { useEffect, useState } from 'react';
import { fetchTrendingMov } from '../components/api';
import { MovieListMarkup } from '../components/MovieList';

export const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=200x300';

const Home = () => {
  const [trendingsItems, setTrendingItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTrendingMov();
        setTrendingItems(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello!</h1>
      <h2>Tranding movies today:</h2>
      <MovieListMarkup movieItems={trendingsItems} />
    </div>
  );
};
export default Home;
