import { useEffect, useState } from 'react';

import { useLocation, Link } from 'react-router-dom';
import { getTrendingMovies } from 'services/getMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies('').then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
