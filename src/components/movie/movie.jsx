import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import UserBlock from '../user-block/user-block';
import MoviesList from '../movies-list/movies-list';
import MovieTabs from '../movie-tabs/movie-tabs';
import {AuthorizationStatuses, MoviesAmmount, Url} from '../../consts';
import {MOVIES_PROP, REVIEW_PROP} from '../../utils/validate';
import {getSimmilarMoviesWithGenre} from '../../store/films/selectors';
import {getAuthorizationStatus} from '../../store/auth/selectors';
import {ActionCreator} from '../../store/action';


const Movie = ({film, reviews, films, onPlayMovie, onAddFavoriteMovie, authorizationStatus, getFilmGenre, getFilmName}) => {
  const {
    backgroundImage,
    name,
    genre,
    released,
    posterImage,
    id
  } = film;

  getFilmName(name);
  getFilmGenre(genre);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to={Url.MAIN} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>
            <UserBlock />
          </header>
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayMovie()}>
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button" onClick={() => onAddFavoriteMovie()}>
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
                {authorizationStatus === AuthorizationStatuses.AUTH
                  ? <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
                  : ``
                }
              </div>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width={218} height={327} />
            </div>
            <div className="movie-card__desc">
              <MovieTabs
                film={film}
                reviews={reviews}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList
            films={films}
            maxFilms={MoviesAmmount.MOVIE_PAGE}
          />
        </section>
        <footer className="page-footer">
          <div className="logo">
            <Link to={Url.MAIN} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Movie.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP)).isRequired,
  film: PropTypes.shape(MOVIES_PROP).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(REVIEW_PROP)).isRequired,
  onPlayMovie: PropTypes.func.isRequired,
  getFilmGenre: PropTypes.func.isRequired,
  getFilmName: PropTypes.func.isRequired,
  onAddFavoriteMovie: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  films: getSimmilarMoviesWithGenre(state),
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  getFilmGenre(genre) {
    dispatch(ActionCreator.getFilmGenre(genre));
  },
  getFilmName(name) {
    dispatch(ActionCreator.getFilmName(name));
  },
});

export {Movie};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
