import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'services/getMovies';
import { BASE_POSTER_URL } from 'utils/constants';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCastMovie(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <>
      {
        <ul>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              <img
                src={`${BASE_POSTER_URL}${profile_path}`}
                alt={original_name}
              />
              <p>Actor: {original_name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default Cast;
