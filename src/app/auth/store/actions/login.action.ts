import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import { ILoginRequest } from '../../types/login-request.interface';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: ILoginRequest}>()
)

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{currentUser: ICurrentUser}>()
)

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{errors: IBackendErrors}>()
)
