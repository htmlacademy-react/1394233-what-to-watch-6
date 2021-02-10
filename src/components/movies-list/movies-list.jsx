import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';


const MoviesList = ({films}) => {
  const [activeIdFilm, setActiveIdFilm] = useState(0);

  return (
    <div className="catalog__movies-list">
      {films.map((film) => <MovieCard
        key={film.id}
        film={film}
        setActiveIdFilm = {setActiveIdFilm}
      />)}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MoviesList;
