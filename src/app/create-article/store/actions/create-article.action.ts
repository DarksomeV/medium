import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../action-types';
import { IArticleInput } from '../../../shared/types/article-input.interface';
import { IArticle } from '../../../shared/types/article.interface';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{articleInput: IArticleInput}>()
)

export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{article: IArticle}>()
)

export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{errors: IBackendErrors}>()
)
