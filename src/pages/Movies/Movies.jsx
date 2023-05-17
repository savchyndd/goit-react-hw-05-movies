import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/getMovies';
import {
  FilmsItem,
  FilmsList,
  InputSearch,
  ButtonSearch,
} from './Movies.module';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) return;

    const fetchMovieByQuery = async () => {
      try {
        const movieByQuery = await getMovieByQuery(currentQuery);
        setMovies(movieByQuery);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieByQuery();
  }, [searchParams]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputSearch
          type="text"
          placeholder="Name movie"
          autoFocus
          value={query}
          onChange={handleSearchParams}
        />
        <ButtonSearch type="submit">Search</ButtonSearch>
      </form>
      {movies.length > 0 && (
        <FilmsList>
          {movies.map(({ id, original_title }) => (
            <FilmsItem key={id}>
              <Link state={{ from: location }} to={`/movies/${id}`}>
                {original_title}
              </Link>
            </FilmsItem>
          ))}
        </FilmsList>
      )}
    </>
  );
};

export default Movies;
