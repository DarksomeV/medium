import { ICurrentUser } from './current-user.interface';

export interface ICurrentUserInput extends ICurrentUser {
  password: string;
}
