import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const MovieCard = (props) => {
  const {film, setActiveIdFilm} = props;
  const {name, id, previeImage} = film;
  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={() => setActiveIdFilm(id)}>
      <div className="small-movie-card__image">
        <img src={previeImage} alt={name} width={280} height={175} />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  previeImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  setActiveIdFilm: PropTypes.func.isRequired
};

export default MovieCard;
