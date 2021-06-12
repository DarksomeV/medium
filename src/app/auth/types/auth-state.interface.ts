import { ICurrentUser } from '../../shared/types/current-user.interface';
import { IBackendErrors } from '../../shared/types/backend-errors.interface';

export interface IAuthState {
  isSubmitting: boolean;
  currentUser: ICurrentUser,
  isLoggedIn: boolean;
  validationErrors: IBackendErrors;
}
