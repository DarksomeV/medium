import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';
import { ICurrentUserInput } from '../../../shared/types/current-user-input.interface';

export const updateCurrentUserAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER,
  props<{currentUserInput: ICurrentUserInput}>()
)

export const updateCurrentUserSuccessAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_SUCCESS,
  props<{currentUser: ICurrentUser}>()
)

export const updateCurrentUserFailureAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_FAILURE,
  props<{errors: IBackendErrors}>()
)
