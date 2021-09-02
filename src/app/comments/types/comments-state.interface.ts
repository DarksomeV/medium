import { IComment } from '../../shared/types/comment.interface';

export interface ICommentsState {
  isLoading: boolean;
  error: string;
  data: IComment[];
}
