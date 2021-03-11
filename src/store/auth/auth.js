import {ActionType} from '../action';
import {AuthorizationErrorMessage, AuthorizationStatuses} from '../../consts';

const initialState = {
  authorizationStatus: AuthorizationStatuses.NO_AUTH,
  isAuthorisationFailed: false,
  errorMessage: AuthorizationErrorMessage.DEFAULT,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
        isAuthorisationFailed: false,
        errorMessage: AuthorizationErrorMessage.DEFAULT,
      };
    case ActionType.AUTHORIZATION_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
        isAuthorisationFailed: true
      };
  }

  return state;
};

export {auth};
