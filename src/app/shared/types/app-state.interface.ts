import { IAuthState } from '../../auth/types/auth-state.interface';
import { IFeedState } from "../modules/feed/types/feed-state.interface";
import { ITagsState } from "../modules/tags/types/tags-state.interface";
import { IArticleState } from '../../article/types/article-state.interface';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
  tags: ITagsState;
  article: IArticleState;
}
