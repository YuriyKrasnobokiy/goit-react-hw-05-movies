import React, { useEffect, useState } from 'react';
import { fetchTrendingMov } from '../components/api';
import { MovieListMarkup } from '../components/MovieList/MovieList';
import { HomeText } from './Home.Styled';

export const defaultImg =
  'https://img.freepik.com/free-photo/image-icon-front-side_187299-39480.jpg?t=st=1710668854~exp=1710672454~hmac=d3a111eb521149c8bf1548d1ba9c4df4fdfccc7483865c11965ed188d2ee8b7b&w=200';

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
      <HomeText>Today's trending movies</HomeText>
      <MovieListMarkup movieItems={trendingsItems} />
    </div>
  );
};
export default Home;
