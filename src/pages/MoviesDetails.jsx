import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MoviesDetails = () => {
  return (
    <>
      <div>MoviesDetails hey</div>
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
