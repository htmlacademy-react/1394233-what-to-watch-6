import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Catalog from '../catalog/catalog';
import {connect} from 'react-redux';
import {fetchFilmsList, fetchPromoFilm} from "../../store/api-actions";
import {getFilmsLoadedStatus, getPromoMovie, getPromoMovieLoadStatus} from '../../store/films/selectors';
import {MOVIES_NOT_REQUIRE_PROP} from '../../utils/validate';

const Main = ({isFilmsLoaded, loadFilms, isPromoFilmLoaded, loadPromoFilm, promoMovie}) => {
  useEffect(() => {
    if (!isFilmsLoaded) {
      loadFilms();
    }
  }, [isFilmsLoaded]);

  useEffect(() => {
    if (!isPromoFilmLoaded) {
      loadPromoFilm();
    }
  }, [isPromoFilmLoaded]);

  return (
    <React.Fragment>
      <Header
        backgroundImage={promoMovie.backgroundImage}
        title={promoMovie.name}
      />
      <div className="page-content">
        <Catalog />
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
  promoMovie: PropTypes.shape(MOVIES_NOT_REQUIRE_PROP),
  isFilmsLoaded: PropTypes.bool.isRequired,
  isPromoFilmLoaded: PropTypes.bool.isRequired,
  loadFilms: PropTypes.func.isRequired,
  loadPromoFilm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isFilmsLoaded: getFilmsLoadedStatus(state),
  isPromoFilmLoaded: getPromoMovieLoadStatus(state),
  promoMovie: getPromoMovie(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFilms() {
    dispatch(fetchFilmsList());
  },
  loadPromoFilm() {
    dispatch(fetchPromoFilm());
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
