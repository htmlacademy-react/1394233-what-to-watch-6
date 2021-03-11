import {ActionType} from '../action';
import reviews from '../../mocks/reviews';

const initialState = {
  reviews,
  isActiveAddCommentForm: false,
};

const comment = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.POST_COMMENT:
      return {
        ...state,
        isActiveAddCommentForm: true,
      };
    case ActionType.ACTIVE_FORM:
      return {
        ...state,
        isActiveAddCommentForm: action.payload,
      };
  }

  return state;
};

export {comment};
