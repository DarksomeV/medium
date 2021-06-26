import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { getArticleAction } from './store/actions/get-article.action';
import { IArticle } from '../shared/types/article.interface';
import { articleSelector, errorSelector, isLoadingSelector } from './store/selectors';
import { currentUserSelector } from '../auth/store/selectors';
import { ICurrentUser } from '../shared/types/current-user.interface';
import { deleteArticleAction } from './store/actions/delete-article.action';

@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public article$: Observable<IArticle>;
  public isLoading$: Observable<boolean>;
  public error$: Observable<string>;
  public isAuthor$: Observable<boolean>;

  private _slug: string;

  constructor(
    private _store: Store,
    private _route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.initValues();
    this.fetchData();
  }

  public deleteArticle(): void {
    this._store.dispatch(deleteArticleAction({ slug: this._slug }))
  }

  private fetchData(): void {
    this._store.dispatch(getArticleAction({slug: this._slug}))
  }

  private initValues(): void {
    this._slug = this._route.snapshot.paramMap.get('slug');
    this.article$ = this._store.pipe(select(articleSelector));
    this.isLoading$ = this._store.pipe(select(isLoadingSelector));
    this.error$ = this._store.pipe(select(errorSelector));
    this.isAuthor$ = combineLatest([
      this.article$,
      this._store.pipe(select(currentUserSelector)),
    ]).pipe(
      map(([article, currentUser]: [IArticle, ICurrentUser]) => {
        if (!article || !currentUser) {
          return false;
        }

        return currentUser.username === article.author.username;
      })
    )
  }
}
