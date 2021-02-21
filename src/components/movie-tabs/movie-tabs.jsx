import React from 'react';
import PropTypes from 'prop-types';
import MovieDetails from '../movie-details/movie-details';
// import MovieOverview from '../movie-overview/movie-overview';
// import MovieReview from '../movie-review/movie-review';
import {MOVIES_PROP} from '../../utils/validate';

const MovieTabs = ({film}) => {

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className="movie-nav__item movie-nav__item--active">
            <a href="#" className="movie-nav__link">Overview</a>
          </li>
          <li className="movie-nav__item">
            <a href="#" className="movie-nav__link">Details</a>
          </li>
          <li className="movie-nav__item">
            <a href="#" className="movie-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>
      <MovieDetails film={film} />
    </React.Fragment>
  );
};

MovieTabs.propTypes = {
  film: PropTypes.shape(MOVIES_PROP).isRequired,
};

export default MovieTabs;
