import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../action-types';
import { IArticle } from '../../../../types/article.interface';

export const addToFavoritesAction = createAction(
  ActionTypes.ADD_TO_FAVORITES,
  props<{isFavorited: boolean; slug: string}>()
)

export const addToFavoritesSuccessAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_SUCCESS,
  props<{article: IArticle}>()
)

export const addToFavoritesFailureAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_FAILURE,
)
