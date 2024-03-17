import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../api';
import { CastLi, CastList, CastTitle, CastWrap } from './Cast.Styled';
import { defaultImg } from 'pages/Home';

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
                    : defaultImg
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
