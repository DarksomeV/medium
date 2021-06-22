import { IAuthState } from '../../auth/types/auth-state.interface';
import { IFeedState } from "../components/feed/types/feed-state.interface";

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
}
