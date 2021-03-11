import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import GenresList from '../genres-list/genres-list';
import MoviesList from '../movies-list/movies-list';
import LoadingScreen from '../loading-screen/loading-screen';
import ShowMoreButton from '../show-more-button/show-more-button';
import {MOVIES_PROP} from '../../utils/validate';
import {getActiveGenre} from '../../store/genre/selectors';
import {getAmountFilms, getAmountShowFilms, getFilmsLoadedStatus, getFilmsWithGenre} from '../../store/films/selectors';

const Catalog = ({genre, films, amountFilms, amountShowFilms, isFilmsLoaded}) => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList
        genre={genre}
      />
      {isFilmsLoaded ? <MoviesList
        films={films}
        maxFilms={amountShowFilms}
      /> : <LoadingScreen />}
      {amountShowFilms < amountFilms ? <ShowMoreButton /> : ``}
    </section>
  );
};

Catalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP).isRequired).isRequired,
  genre: PropTypes.string.isRequired,
  amountShowFilms: PropTypes.number.isRequired,
  amountFilms: PropTypes.number.isRequired,
  isFilmsLoaded: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onChangeGenres(type) {
    dispatch(ActionCreator.changeGenres(type));
  },
});

const mapStateToProps = (state) => ({
  genre: getActiveGenre(state),
  films: getFilmsWithGenre(state),
  amountFilms: getAmountFilms(state),
  amountShowFilms: getAmountShowFilms(state),
  isFilmsLoaded: getFilmsLoadedStatus(state)
});

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
