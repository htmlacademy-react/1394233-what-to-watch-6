import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const ShowMoreButton = ({showMoreFilms}) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => {
        showMoreFilms();
      }}>Show more</button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  showMoreFilms: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  showMoreFilms() {
    dispatch(ActionCreator.showMoreFilms());
  },
});

export {ShowMoreButton};
export default connect(null, mapDispatchToProps)(ShowMoreButton);
