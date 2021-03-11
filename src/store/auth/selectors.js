import {NameSpace} from '../main-reducer';

export const getAuthorizationStatus = (state) => state[NameSpace.AUTH].authorizationStatus;
