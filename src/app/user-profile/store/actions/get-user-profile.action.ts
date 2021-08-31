import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../action-types';
import { IProfile } from '../../../shared/types/profile.interface';

export const getUserProfileAction = createAction(
  ActionTypes.GET_USER_PROFILE,
  props<{slug: string}>()
)

export const getUserProfileSuccessAction = createAction(
  ActionTypes.GET_USER_PROFILE_SUCCESS,
  props<{userProfile: IProfile}>()
)

export const getUserProfileFailureAction = createAction(
  ActionTypes.GET_USER_PROFILE_FAILURE,
)
