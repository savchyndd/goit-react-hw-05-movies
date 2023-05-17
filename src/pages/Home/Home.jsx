import { useEffect, useState } from 'react';

import { useLocation, Link } from 'react-router-dom';
import { getTrendingMovies } from 'services/getMovies';
import { FilmsItem, FilmsList } from './Home.module';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies('').then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
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

export default Home;
