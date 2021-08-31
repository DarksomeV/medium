import { IProfile } from '../../shared/types/profile.interface';

export interface IUserProfileState {
  data: IProfile;
  isLoading: boolean;
  error: string;
}
