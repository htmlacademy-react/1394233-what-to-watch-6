import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionType, ActionCreator} from '../../store/action';
import {FiltersType} from '../../consts';

const GenresList = ({genre, onChangeGenres}) => {
  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${genre === FiltersType.ALL ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          evt.preventDefault();
          onChangeGenres(ActionType.ALL);
        }}>All genres</a>
      </li>
      <li className={`catalog__genres-item ${genre === FiltersType.COMEDIES ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          evt.preventDefault();
          onChangeGenres(ActionType.COMEDIES);
        }}>Comedies</a>
      </li>
      <li className={`catalog__genres-item ${genre === FiltersType.CRIME ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          evt.preventDefault();
          onChangeGenres(ActionType.CRIME);
        }}>Crime</a>
      </li>
      <li className={`catalog__genres-item ${genre === FiltersType.DOCUMENTARY ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          evt.preventDefault();
          onChangeGenres(ActionType.DOCUMENTARY);
        }}>Documentary</a>
      </li>
      <li className={`catalog__genres-item ${genre === FiltersType.DRAMAS ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          evt.preventDefault();
          onChangeGenres(ActionType.DRAMAS);
        }}>Dramas</a>
      </li>
      <li className={`catalog__genres-item ${genre === FiltersType.HORROR ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          evt.preventDefault();
          onChangeGenres(ActionType.HORROR);
        }}>Horror</a>
      </li>
      <li className={`catalog__genres-item ${genre === FiltersType.KIDS_FAMILY ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          evt.preventDefault();
          onChangeGenres(ActionType.KIDS_FAMILY);
        }}>Kids &amp; Family</a>
      </li>
      <li className={`catalog__genres-item ${genre === FiltersType.ROMANCE ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          evt.preventDefault();
          onChangeGenres(ActionType.ROMANCE);
        }}>Romance</a>
      </li>
      <li className={`catalog__genres-item ${genre === FiltersType.SCI_FI ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          evt.preventDefault();
          onChangeGenres(ActionType.SCI_FI);
        }}>Sci-Fi</a>
      </li>
      <li className={`catalog__genres-item ${genre === FiltersType.THRILLERS ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          evt.preventDefault();
          onChangeGenres(ActionType.THRILLERS);
        }}>Thrillers</a>
      </li>
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
