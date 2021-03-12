import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import GenreTab from '../genre-tab/genre-tab';
import {getGenres} from '../../store/films/selectors';
import {changeGenres} from '../../store/action';

const GenresList = ({onChangeGenres, genres}) => {
  const GENRES = Array.from(genres.values());
  return (
    <ul className="catalog__genres-list">
      {GENRES.map((tab) => <GenreTab
        tab={tab}
        key={tab}
        onChangeGenres={onChangeGenres}
      />)}
    </ul>
  );
};

GenresList.propTypes = {
  onChangeGenres: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onChangeGenres(type) {
    dispatch(changeGenres(type));
  },
});

const mapStateToProps = (state) => ({
  genres: getGenres(state),
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
