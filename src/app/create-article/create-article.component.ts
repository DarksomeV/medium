import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { IArticleInput } from '../shared/types/article-input.interface';
import { IBackendErrors } from '../shared/types/backend-errors.interface';
import { isSubmittingSelector, validationErrorsSelector } from './store/selectors';
import { createArticleAction } from './store/actions/create-article.action';

@Component({
  selector: 'mc-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  public initialValues: IArticleInput = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  }
  public isSubmitting$: Observable<boolean>;
  public backendErrors$: Observable<IBackendErrors>;

  constructor(
    private _store: Store,
  ) {}

  public ngOnInit(): void {
    this.initObservables();
  }

  public onSubmit(articleInput: IArticleInput) {
    this._store.dispatch(createArticleAction({ articleInput }))
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
