import { IComment } from '../../shared/types/comment.interface';

export interface IGetMultipleCommentsResponse {
  comments: IComment[];
}

export interface IGetSingleCommentsResponse {
  comment: IComment;
}
