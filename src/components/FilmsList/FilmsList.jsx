import { useLocation, Link } from 'react-router-dom';
import { ListFilms, ItemFilms } from './FilmsList.module';

const FilmsList = ({ movies }) => {
  const location = useLocation();
  return (
    <ListFilms>
      {movies.map(({ id, original_title }) => (
        <ItemFilms key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {original_title}
          </Link>
        </ItemFilms>
      ))}
    </ListFilms>
  );
};

export default FilmsList;
