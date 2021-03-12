import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';
import {ALL_GENRES_NAME_TAB} from '../../consts';

const initialState = {
  genre: ALL_GENRES_NAME_TAB,
};

const genre = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.CHANGE_GENRE, (state, action) => {
    state.genre = action.payload;
  });
});

export {genre};
