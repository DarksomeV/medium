import { IBackendErrors } from '../../shared/types/backend-errors.interface';
import { IArticle } from '../../shared/types/article.interface';

export interface IEditArticleState {
  isLoading: boolean;
  article: IArticle;
  isSubmitting: boolean;
  validationErrors: IBackendErrors;
}
