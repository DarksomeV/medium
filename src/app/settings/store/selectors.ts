import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IAppState } from '../../shared/types/app-state.interface';
import { ISettingsState } from '../types/settings-state.interface';

export const settingsFeatureSelector = createFeatureSelector<IAppState, ISettingsState>('auth');

export const isSubmittingSelector = createSelector(settingsFeatureSelector, (settingsState: ISettingsState) => settingsState.isSubmitting)

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: ISettingsState) => settingsState.validationErrors
)
