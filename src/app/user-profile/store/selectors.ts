import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IAppState } from '../../shared/types/app-state.interface';
import { IUserProfileState } from '../types/user-profile-state.interface';

export const userProfileFeatureSelector = createFeatureSelector<IAppState, IUserProfileState>('userProfile');

export const isLoadingSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: IUserProfileState) => userProfileState.isLoading)

export const errorSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: IUserProfileState) => userProfileState.error
)

export const userProfileSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: IUserProfileState) => userProfileState.data
)
