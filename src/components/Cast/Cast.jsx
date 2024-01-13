import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../api';
import { CastLi, CastList, CastTitle, CastWrap } from './Cast.Styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const fetchedMovieCast = await fetchCast(movieId);
        setCast(fetchedMovieCast);
      } catch (error) {
        console.error(error);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <CastWrap>
      <CastTitle>Cast:</CastTitle>
      {cast && cast.length > 0 ? (
        <CastList>
          {cast.map(actor => (
            <CastLi key={actor.id}>
              <h3>{actor.original_name}</h3>

              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=200x300'
                }
                alt={actor.original_name}
              />
            </CastLi>
          ))}
        </CastList>
      ) : (
        'Cast not found ☹'
      )}
    </CastWrap>
  );
};
export default Cast;
