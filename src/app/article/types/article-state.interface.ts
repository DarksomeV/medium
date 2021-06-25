import { IArticle } from '../../shared/types/article.interface';

export interface IArticleState {
  isLoading: boolean;
  error: string;
  data: IArticle;
}
