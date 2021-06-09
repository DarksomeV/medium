import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../action-types';
import { IRegisterRequest } from '../../types/register-request.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<IRegisterRequest>()
);
