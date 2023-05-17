import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovieByQuery } from 'services/getMovies';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };
  useEffect(() => {
    getMovieByQuery(query).then(setMovies);
  }, [query]);

  return (
    <>
      <input type="text" value={query} onChange={handleSearchParams} />
      <ul>
        {movies.map(({ id, original_title }) => (
          <Link key={id} state={{ from: location }} to={`/movies/${id}`}>
            {original_title}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Movies;
