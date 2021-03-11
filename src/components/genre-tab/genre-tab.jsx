import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {getFilteredMovies, getGenresName} from '../../utils/common';
import {MOVIES_PROP} from '../../utils/validate';
import {getActiveGenre} from '../../store/genre/selectors';
import {getFilms, getGenres} from '../../store/films/selectors';


const GenreTab = ({tab, genre, onChangeGenres, resetAmountShowFilms, changeAmountFilms, films}) => {
  const FiltersType = Object.fromEntries(getGenresName(films));
  return (
    <li className={`catalog__genres-item ${genre === FiltersType[tab] ? `catalog__genres-item--active` : ``}`}>
      <a href="#" className="catalog__genres-link" onClick={(evt) => {
        evt.preventDefault();
        resetAmountShowFilms();
        onChangeGenres(FiltersType[tab]);
        changeAmountFilms(getFilteredMovies(films, FiltersType[tab]).length);
      }}>{FiltersType[tab]}</a>
    </li>
  );
};

GenreTab.propTypes = {
  onChangeGenres: PropTypes.func.isRequired,
  resetAmountShowFilms: PropTypes.func.isRequired,
  changeAmountFilms: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP).isRequired).isRequired,
  genre: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  genre: getActiveGenre(state),
  films: getFilms(state),
  genres: getGenres(state)
});

const mapDispatchToProps = (dispatch) => ({
  resetAmountShowFilms() {
    dispatch(ActionCreator.resetAmountShowFilms());
  },
  changeAmountFilms(amount) {
    dispatch(ActionCreator.changeAmountFilms(amount));
  }
});

export {GenreTab};
export default connect(mapStateToProps, mapDispatchToProps)(GenreTab);
