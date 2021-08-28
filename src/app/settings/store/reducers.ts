import { Action, createReducer, on } from '@ngrx/store';

import { ISettingsState } from '../types/settings-state.interface';
import {
  updateCurrentUserAction, updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction
} from '../../auth/store/actions/update-current-user.action';

const initialState: ISettingsState = {
  isSubmitting: false,
  validationErrors: null,
}

const settingsReducer = createReducer(
  initialState,
  on(
    updateCurrentUserAction,
    (state): ISettingsState => {
      return {
        ...state,
        isSubmitting: true
      }
    }
  ),
  on(
    updateCurrentUserSuccessAction,
    (state): ISettingsState => {
      return {
        ...state,
        isSubmitting: false
      }
    }
  ),
  on(
    updateCurrentUserFailureAction,
    (state, action): ISettingsState => {
      return {
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
      }
    }
  )
);

export function reducers(state: ISettingsState, action: Action) {
  return settingsReducer(state, action);
}
