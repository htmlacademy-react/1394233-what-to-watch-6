import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import UserBlock from '../user-block/user-block';
import {resetAmountShowFilms} from '../../store/action';
import {getPromoMovieLoadStatus} from '../../store/films/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import PromoMovie from '../promo-movie/promo-movie';

const Header = ({backgroundImage, title, isPromoMovieLoaded}) => {
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        {isPromoMovieLoaded ? <img src={backgroundImage} alt={title} /> : ``}
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <UserBlock />
      </header>
      {isPromoMovieLoaded ? <PromoMovie /> : <LoadingScreen />}
    </section>
  );
};

Header.propTypes = {
  isPromoMovieLoaded: PropTypes.bool.isRequired,
  backgroundImage: PropTypes.string,
  title: PropTypes.string
};


const mapStateToProps = (state) => ({
  isPromoMovieLoaded: getPromoMovieLoadStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  resetShowFilmsAmount() {
    dispatch(resetAmountShowFilms());
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
