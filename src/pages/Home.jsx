import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { TrendLi, TrendList } from '../components/Trending.Styled';
import { fetchTrendingMov } from '../components/api';
export const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=200x300';

export const Home = () => {
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
      <TrendList>
        {trendingsItems &&
          trendingsItems.map(
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
                  <Link to={`/movies/${id}`}>
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
    </div>
  );
};
