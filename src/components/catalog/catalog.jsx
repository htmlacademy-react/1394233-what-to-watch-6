import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeGenres} from '../../store/action';
import GenresList from '../genres-list/genres-list';
import MoviesList from '../movies-list/movies-list';
import LoadingScreen from '../loading-screen/loading-screen';
import ShowMoreButton from '../show-more-button/show-more-button';
import {MOVIES_PROP} from '../../utils/validate';
import {getActiveGenre} from '../../store/genre/selectors';
import {getAmountShowFilms, getFilmsWithGenre, renderShowMoreButton} from '../../store/films/selectors';
import {fetchFilmsList} from '../../store/api-actions';

const Catalog = ({genre, films, renderButton, amountShowFilms, loadFilms}) => {
  useEffect(() => {
    if (films.length === 0) {
      loadFilms();
    }
  }, [films]);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      {films.length !== 0 ? <GenresList
        genre={genre}
      /> : ``}
      {films.length !== 0 ? <MoviesList
        films={films}
        maxFilms={amountShowFilms}
      /> : <LoadingScreen />}
      {renderButton ? <ShowMoreButton /> : ``}
    </section>
  );
};

Catalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP).isRequired),
  genre: PropTypes.string.isRequired,
  amountShowFilms: PropTypes.number.isRequired,
  loadFilms: PropTypes.func.isRequired,
  renderButton: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onChangeGenres(type) {
    dispatch(changeGenres(type));
  },
  loadFilms() {
    dispatch(fetchFilmsList());
  },
});

const mapStateToProps = (state) => ({
  genre: getActiveGenre(state),
  films: getFilmsWithGenre(state),
  amountShowFilms: getAmountShowFilms(state),
  renderButton: renderShowMoreButton(state)
});

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
