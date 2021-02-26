import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {Urls} from '../../consts';
import {MOVIES_PROP} from '../../utils/validate';
import {connect} from 'react-redux';

const PromoMovie = ({promoMovie}) => {
  const history = useHistory();
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promoMovie.backgroundImage} alt={promoMovie.name} />
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
        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
          </div>
        </div>
      </header>
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={promoMovie.posterImage} alt={promoMovie.name} width={218} height={327} />
          </div>
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoMovie.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoMovie.genre}</span>
              <span className="movie-card__year">{promoMovie.released}</span>
            </p>
            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={() => history.push(`/player/${promoMovie.id}`)}>
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button" onClick={() => history.push(Urls.MY_LIST)}>
                <svg viewBox="0 0 19 20" width={19} height={20}>
                  <use xlinkHref="#add" />
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PromoMovie.propTypes = {
  promoMovie: PropTypes.shape(MOVIES_PROP).isRequired,
};


const mapStateToProps = ({promoMovie}) => ({
  promoMovie,
});

export {PromoMovie};
export default connect(mapStateToProps)(PromoMovie);
