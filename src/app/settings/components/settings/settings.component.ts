import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { currentUserSelector } from '../../../auth/store/selectors';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { updateCurrentUserAction } from '../../../auth/store/actions/update-current-user.action';
import { ICurrentUserInput } from '../../../shared/types/current-user-input.interface';
import { logoutAction } from '../../../auth/store/actions/sync.action';

@Component({
  selector: 'mc-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public isSubmitting$: Observable<boolean>;
  public backendErrors$: Observable<IBackendErrors>;
  public currentUser: ICurrentUser;

  private _currentUserSubscription: Subscription;

  constructor(
    private _fb: FormBuilder,
    private _store: Store
  ) {}

  public ngOnInit(): void {
    this._initListeners();
    this._initObservables();
  }

  public ngOnDestroy(): void {
    this._currentUserSubscription.unsubscribe();
  }

  public onSubmit(): void {
    const currentUserInput: ICurrentUserInput = {
      ...this.currentUser,
      ...this.form.value
    }

    this._store.dispatch(updateCurrentUserAction({ currentUserInput }))
  }

  public onLogout(): void {
    this._store.dispatch(logoutAction())
  }

  private _initObservables(): void {
    this.isSubmitting$ = this._store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this._store.pipe(select(validationErrorsSelector))
  }

  private _initListeners(): void {
    this._currentUserSubscription = this._store
      .pipe(
        select(currentUserSelector),
        filter(Boolean)
      ).subscribe((currentUser: ICurrentUser) => {
        this.currentUser = currentUser;
        this.initForm();
      })
  }

  private initForm(): void {
    this.form = this._fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: '',
    })
  }
}
