import { IUserProfileState } from '../types/user-profile-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction
} from './actions/get-user-profile.action';

const initialState: IUserProfileState = {
  isLoading: false,
  data: null,
  error: null
}

const userProfileReducer = createReducer(
  initialState,
  on(
    getUserProfileAction,
    (state): IUserProfileState => {
      return {
        ...state,
        isLoading: true,
      }
    }
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): IUserProfileState => {
      return {
        ...state,
        data: action.userProfile,
        isLoading: false,
      }
    }
  ),
  on(
    getUserProfileFailureAction,
    (state): IUserProfileState => {
      return {
        ...state,
        isLoading: false,
      }
    }
  )
);

export function reducers(state: IUserProfileState, action: Action) {
  return userProfileReducer(state, action);
}
