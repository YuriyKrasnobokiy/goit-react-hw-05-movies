import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TrendLi, TrendList } from './Trending.Styled';
import { optionsTrending } from './api';

const Trending = () => {
  const [trendingsItems, setTrendingItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(optionsTrending);
        setTrendingItems(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Tranding movies today:</h1>
      <TrendList>
        {trendingsItems &&
          trendingsItems.map(
            ({
              id,
              title,
              original_title,
              overview,
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
                      src={`https://image.tmdb.org/t/p/w200${poster_path}`}
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

export default Trending;
