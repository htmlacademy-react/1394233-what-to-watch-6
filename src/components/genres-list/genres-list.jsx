import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ActionCreator from '../../store/action';

const GenresList = ({onChangeComedies, onChangeCrime}) => {
  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">All genres</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          evt.preventDefault();
          onChangeComedies();
        }}>Comedies</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          evt.preventDefault();
          onChangeCrime();
        }}>Crime</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Documentary</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Dramas</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Horror</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Kids &amp; Family</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Romance</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Sci-Fi</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Thrillers</a>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onChangeComedies() {
    dispatch(ActionCreator.changeComedies());
  },
  onChangeCrime() {
    dispatch(ActionCreator.changeCrime());
  },
  onChangeDramas() {
    dispatch(ActionCreator.changeDramas());
  },
  onChangeDocumentary() {
    dispatch(ActionCreator.changeDocumentary());
  },
  onChangeHorror() {
    dispatch(ActionCreator.changeHorror());
  },
  onChangeKidsFamily() {
    dispatch(ActionCreator.changeKidsFamily());
  },
  onChangeRomance() {
    dispatch(ActionCreator.changeRomance());
  },
  onChangeSciFi() {
    dispatch(ActionCreator.changeSciFi());
  },
  onChangeThrillers() {
    dispatch(ActionCreator.changeThrillers());
  },
  onChangeAll() {
    dispatch(ActionCreator.changeAll());
  },
});

export {GenresList};
export default connect(null, mapDispatchToProps)(GenresList);
