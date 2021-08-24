import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import { IArticleInput } from '../shared/types/article-input.interface';
import { IBackendErrors } from '../shared/types/backend-errors.interface';
import { articleSelector, isLoadingSelector, isSubmittingSelector, validationErrorsSelector } from './store/selectors';
import { getArticleAction } from './store/actions/get-article.action';
import { IArticle } from '../shared/types/article.interface';
import { updateArticleAction } from './store/actions/update-article.action';

@Component({
  selector: 'mc-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  public isSubmitting$: Observable<boolean>;
  public isLoading$: Observable<boolean>;
  public backendErrors$: Observable<IBackendErrors>;
  public initialValues$: Observable<IArticleInput>;

  constructor(
    private _store: Store,
    private _route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.initObservables();
    this.getArticle();
  }

  public onSubmit(articleInput: IArticleInput) {
    this._store.dispatch(updateArticleAction({ articleInput, slug: this._route.snapshot.paramMap.get('slug') }))
  }

  private getArticle(): void {
    const slug = this._route.snapshot.paramMap.get('slug');

    this._store.dispatch(getArticleAction({ slug }))
  }

  private initObservables(): void {
    this.isSubmitting$ = this._store
      .pipe(
        select(isSubmittingSelector)
      )
    this.isSubmitting$ = this._store
      .pipe(
        select(isLoadingSelector)
      )
    this.backendErrors$ = this._store
      .pipe(
        select(validationErrorsSelector)
      )
    this.initialValues$ = this._store
      .pipe(
        select(articleSelector),
        filter(Boolean),
        map(({title, description, body, tagList}: IArticle) => ({ title, description, body, tagList }))
      )
  }
}
