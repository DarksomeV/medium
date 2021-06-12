import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { registerAction } from '../../store/actions/register.action';
import { Observable } from 'rxjs';
import { isSubmittingSelector, validationErrors } from '../../store/selectors';
import { IRegisterRequest } from '../../types/register-request.interface';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
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
    const registerData: IRegisterRequest = {
      user: this.registerForm.value,
    }
    this._store.dispatch(
      registerAction({request: registerData})
    );
  }

  private initGroup(): void {
    this.registerForm = this._fb.group({
      username: ['', Validators.required],
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
        select(validationErrors)
      )
  }
}
