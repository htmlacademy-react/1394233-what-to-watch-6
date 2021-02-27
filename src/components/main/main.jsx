import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import PromoMovie from '../promo-movie/promo-movie';
import MoviesList from '../movies-list/movies-list';
import GenresList from '../genres-list/genres-list';
import {MOVIES_PROP} from '../../utils/validate';
import {connect} from 'react-redux';
import ShowMoreButton from '../show-more-button/show-more-button';
import {getFilteredMovies} from '../../utils/common';
import {fetchFilmsList} from "../../store/api-actions";
import LoadingScreen from '../loading-screen/loading-screen';
import {ActionCreator} from '../../store/action';

const Main = ({films, genre, amountShowFilms, amountFilms, isFilmsLoaded, onLoadFilms}) => {
  useEffect(() => {
    if (!isFilmsLoaded) {
      onLoadFilms();
    }
  }, [isFilmsLoaded]);

  return (
    <React.Fragment>
      <PromoMovie />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList
            genre={genre}
          />
          {isFilmsLoaded ? <MoviesList
            films={getFilteredMovies(films, genre)}
            maxFilms={amountShowFilms}
          /> : <LoadingScreen />}
          {amountShowFilms < amountFilms ? <ShowMoreButton /> : ``}
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP).isRequired).isRequired,
  genre: PropTypes.string.isRequired,
  amountShowFilms: PropTypes.number.isRequired,
  amountFilms: PropTypes.number.isRequired,
  isFilmsLoaded: PropTypes.bool.isRequired,
  onLoadFilms: PropTypes.func.isRequired,
  changeAmountFilms: PropTypes.func.isRequired,
};

const mapStateToProps = ({genre, films, amountFilms, amountShowFilms, isFilmsLoaded}) => ({
  genre,
  films,
  amountFilms,
  amountShowFilms,
  isFilmsLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilms() {
    dispatch(fetchFilmsList());
  },
  changeAmountFilms(filmsAmount) {
    dispatch(ActionCreator.changeAmountFilms(filmsAmount));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
