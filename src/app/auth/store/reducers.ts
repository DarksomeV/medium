import { IAuthState } from '../types/auth-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { registerAction, registerFailureAction, registerSuccessAction } from './actions/register.action';
import { loginAction, loginFailureAction, loginSuccessAction } from './actions/login.action';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from './actions/get-current-user.action';
import { updateCurrentUserSuccessAction } from './actions/update-current-user.action';

const initialState: IAuthState = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
  isLoading: false,
}

const authReducer = createReducer(
  initialState,
  on(registerAction, (state): IAuthState => {
    return {
      ...state,
      isSubmitting: true,
      validationErrors: null,
    }
  }),

  on(registerSuccessAction, (state, action): IAuthState => {
    return {
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    }
  }),

  on(registerFailureAction, (state, action): IAuthState => {
    return {
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    }
  }),

  on(loginAction, (state): IAuthState => {
    return {
      ...state,
      isSubmitting: true,
      validationErrors: null,
    }
  }),

  on(loginSuccessAction, (state, action): IAuthState => {
    return {
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    }
  }),

  on(loginFailureAction, (state, action): IAuthState => {
    return {
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    }
  }),

  on(getCurrentUserAction, (state): IAuthState => {
    return {
      ...state,
      isLoading: true,
    }
  }),

  on(getCurrentUserSuccessAction, (state, action): IAuthState => {
    return {
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    }
  }),

  on(getCurrentUserFailureAction, (state): IAuthState => {
    return {
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null,
    }
  }),

  on(updateCurrentUserSuccessAction, (state, action): IAuthState => {
    return {
      ...state,
      currentUser: action.currentUser,
    }
  })
)

export function reducer(state: IAuthState, action: Action) {
  return authReducer(state, action)
}
