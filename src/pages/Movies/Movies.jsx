import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovieByQuery } from 'services/getMovies';
import { FilmsItem, FilmsList, InputSearch } from './Movies.module';

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
      <InputSearch
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleSearchParams}
      />
      <FilmsList>
        {movies.map(({ id, original_title }) => (
          <FilmsItem key={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
              {original_title}
            </Link>
          </FilmsItem>
        ))}
      </FilmsList>
    </>
  );
};

export default Movies;
