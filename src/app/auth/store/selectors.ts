import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../../shared/types/app-state.interface';
import { IAuthState } from '../types/auth-state.interface';

export const authFeatureSelector = createFeatureSelector<IAppState, IAuthState>('auth');

export const isSubmittingSelector = createSelector(authFeatureSelector, (authState: IAuthState) => authState.isSubmitting)
