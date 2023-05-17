import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  // useNavigate,
  useParams,
} from 'react-router-dom';
import { getMovieById } from 'services/getMovies';
import { BASE_POSTER_URL } from 'utils/constants';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();
  // const navigate = useNavigate();

  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHref}>Go back</Link>
      <div>
        <img src={`${BASE_POSTER_URL}${movie.poster_path}`} alt="get" />
        <h2>{movie.original_title}</h2>
        <p>User Score</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genre_ids}</p>
      </div>

      <h2>Additional information</h2>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">rReviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
