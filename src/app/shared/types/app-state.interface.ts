import { IAuthState } from '../../auth/types/auth-state.interface';
import { IFeedState } from "../modules/feed/types/feed-state.interface";
import { ITagsState } from "../modules/tags/types/tags-state.interface";
import { IArticleState } from '../../article/types/article-state.interface';
import { ICreateArticleState } from '../../create-article/types/create-article-state.interface';
import { IEditArticleState } from '../../edit-article/types/edit-article-state.interface';
import { IUserProfileState } from '../../user-profile/types/user-profile-state.interface';
import { ICommentsState } from '../../comments/types/comments-state.interface';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
  tags: ITagsState;
  article: IArticleState;
  createArticle: ICreateArticleState;
  editArticle: IEditArticleState;
  userProfile: IUserProfileState;
  comments: ICommentsState;
}
