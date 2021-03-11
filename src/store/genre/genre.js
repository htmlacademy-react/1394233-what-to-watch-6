import {ActionType} from '../action';
import {ALL_GENRES_NAME_TAB} from '../../consts';

const initialState = {
  genre: ALL_GENRES_NAME_TAB,
};

const genre = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
  }

  return state;
};

export {genre};
