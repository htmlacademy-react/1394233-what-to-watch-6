import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {FiltersTabName} from '../../consts';
import GenreTab from '../genre-tab/genre-tab';

const GenresList = ({onChangeGenres}) => {
  return (
    <ul className="catalog__genres-list">
      {Object.keys(FiltersTabName).map((tab) => <GenreTab
        tab={tab}
        key={tab}
        onChangeGenres={onChangeGenres}
      />)}
    </ul>
  );
};

GenresList.propTypes = {
  onChangeGenres: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onChangeGenres(type) {
    dispatch(ActionCreator.changeGenres(type));
  },
});

export {GenresList};
export default connect(null, mapDispatchToProps)(GenresList);
