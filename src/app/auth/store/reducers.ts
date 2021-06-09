import { IAuthState } from '../types/auth-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { registerAction } from './actions/register.action';

const initialState: IAuthState = {
  isSubmitting: false,
}

const authReducer = createReducer(
  initialState,
  on(registerAction, (state): IAuthState => {
    return {...state, isSubmitting: true}
  })
)

export function reducer(state: IAuthState, action: Action) {
  return authReducer(state, action)
}
