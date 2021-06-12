import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../action-types';
import { IRegisterRequest } from '../../types/register-request.interface';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: IRegisterRequest}>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{currentUser: ICurrentUser}>()
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{errors: IBackendErrors}>()
);

