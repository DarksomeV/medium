import { IProfile } from './profile.interface';

export interface IComment {
  author: IProfile;
  body: string;
  createdAt: string;
  id: number;
  updatedAt: string;
}
