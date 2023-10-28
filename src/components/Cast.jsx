/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const id = Number(movieId);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const optionsCast = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/credits`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGRiMzc1OTU2OTc0MzQxMDAxMWYwODQ2NDE2MjM1ZiIsInN1YiI6IjY1MzZjN2Y2N2ZjYWIzMDBlYWIzNWM0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QifJaFBfyRNeHIxkyBSq7u6hLriMTe30UhxSyJcvOFE',
    },
  };

  useEffect(() => {
    const getCast = async () => {
      try {
        const fetchedMovieCast = await axios(optionsCast);
        setCast(fetchedMovieCast.data.cast);
      } catch (error) {
        console.error(error);
      }
    };
    getCast();
  }, [movieId]);

  // console.log(cast);
  return (
    <div>
      <h2>Cast:</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <h3>{actor.original_name}</h3>
            {actor.profile_path && (
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.original_name}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
