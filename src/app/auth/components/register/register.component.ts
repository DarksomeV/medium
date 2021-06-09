import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { registerAction } from '../../store/actions/register.action';
import { Observable } from 'rxjs';
import { isSubmittingSelector } from '../../store/selectors';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public isSubmitting$: Observable<boolean>;

  constructor(
    private _fb: FormBuilder,
    private _store: Store,
  ) {}

  public ngOnInit(): void {
    this.initGroup();
    this.initObservables();
  }

  public onSubmit(): void {
    this._store.dispatch(
      registerAction(this.registerForm.value)
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
  }
}
