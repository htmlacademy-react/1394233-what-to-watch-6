import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RatingStar from '../rating-star/rating-star';
import {postComment} from '../../store/api-actions';
import {ActionCreator} from '../../store/action';

const RATING_STARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const AddReviewForm = ({id, onSubmit, active, isActiveAddCommentForm}) => {
  const [userReview, setUserReview] = useState({rating: 10, text: ``});

  useEffect(() => {
    if (userReview.text.length >= 50 && userReview.text.length <= 400) {
      active(true);
    } else {
      active(false);
    }
  }, [userReview]);

  return (
    <form action="#" className="add-review__form" onSubmit={(evt) => {
      evt.preventDefault();

      onSubmit(id, userReview);
    }}>
      <div className="rating">
        <div className="rating__stars">
          {RATING_STARS.map((element) => <RatingStar
            key={element}
            rating={element}
            userReview={userReview}
            setUserReview={setUserReview}
          />)}
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" defaultValue={``} onInput={(evt) => {
          setUserReview({
            ...userReview,
            text: evt.target.value
          });
        }} />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isActiveAddCommentForm ? `` : `disabled`}>Post</button>
        </div>
      </div>
    </form>
  );
};


AddReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  active: PropTypes.func.isRequired,
  isActiveAddCommentForm: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(filmID, comment) {
    dispatch(postComment(filmID, comment));
  },
  active(boolean) {
    dispatch(ActionCreator.activeForm(boolean));
  }
});

const mapStateToProps = ({isActiveAddCommentForm}) => ({
  isActiveAddCommentForm,
});

export {AddReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewForm);
