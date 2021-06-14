import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';
import { ILoginRequest } from '../../types/login-request.interface';
import { loginAction } from '../../store/actions/login.action';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isSubmitting$: Observable<boolean>;
  public backendErrors$: Observable<IBackendErrors>;

  constructor(
    private _fb: FormBuilder,
    private _store: Store,
  ) {}

  public ngOnInit(): void {
    this.initGroup();
    this.initObservables();
  }

  public onSubmit(): void {
    const registerData: ILoginRequest = {
      user: this.loginForm.value,
    }
    this._store.dispatch(
      loginAction({ request: registerData })
    );
  }

  private initGroup(): void {
    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  private initObservables(): void {
    this.isSubmitting$ = this._store
      .pipe(
        select(isSubmittingSelector)
      )

    this.backendErrors$ = this._store
      .pipe(
        select(validationErrorsSelector)
      )
  }
}
