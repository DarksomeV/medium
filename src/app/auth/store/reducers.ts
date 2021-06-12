import { IAuthState } from '../types/auth-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { registerAction, registerFailureAction, registerSuccessAction } from './actions/register.action';
import { ICurrentUser } from '../../shared/types/current-user.interface';

const initialState: IAuthState = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
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
  })
)

export function reducer(state: IAuthState, action: Action) {
  return authReducer(state, action)
}
