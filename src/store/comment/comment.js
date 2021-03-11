import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';
import reviews from '../../mocks/reviews';

const initialState = {
  reviews,
  isActiveAddCommentForm: false,
};

const comment = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.POST_COMMENT, (state) => {
    state.isActiveAddCommentForm = true;
  });
  builder.addCase(ActionType.ACTIVE_FORM, (state, action) => {
    state.isActiveAddCommentForm = action.payload;
  });
});

export {comment};
