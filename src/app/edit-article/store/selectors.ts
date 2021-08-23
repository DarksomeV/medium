import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IAppState } from '../../shared/types/app-state.interface';
import { IEditArticleState } from '../types/edit-article-state.interface';

export const editArticleFeatureSelector = createFeatureSelector<IAppState, IEditArticleState>('editArticle');

export const isSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: IEditArticleState) => editArticleState.isSubmitting)

export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: IEditArticleState) => editArticleState.isLoading)

export const validationErrorsSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: IEditArticleState) => editArticleState.validationErrors
)

export const articleSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: IEditArticleState) => editArticleState.article
)
