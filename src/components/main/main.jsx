import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import PromoMovie from '../promo-movie/promo-movie';
import Catalog from '../catalog/catalog';
import {connect} from 'react-redux';
import {fetchFilmsList} from "../../store/api-actions";
import {getFilmsLoadedStatus} from '../../store/films/selectors';

const Main = ({isFilmsLoaded, loadFilms}) => {
  useEffect(() => {
    if (!isFilmsLoaded) {
      loadFilms();
    }
  }, [isFilmsLoaded]);

  return (
    <React.Fragment>
      <PromoMovie />
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
  isFilmsLoaded: PropTypes.bool.isRequired,
  loadFilms: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isFilmsLoaded: getFilmsLoadedStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFilms() {
    dispatch(fetchFilmsList());
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
