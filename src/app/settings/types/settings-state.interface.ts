import { IBackendErrors } from '../../shared/types/backend-errors.interface';

export interface ISettingsState {
  isSubmitting: boolean;
  validationErrors: IBackendErrors;
}
