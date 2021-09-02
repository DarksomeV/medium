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
import { getCommentsAction } from '../comments/store/actions/get-comments.action';
import {
  commentsSelector,
  isLoadingSelector as isLoadingCommentsSelector,
  errorSelector as errorCommentsSelector
} from '../comments/store/selectors';
import { FormControl } from '@angular/forms';
import { IComment } from '../shared/types/comment.interface';
import { addCommentAction } from '../comments/store/actions/add-comment.action';

@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public article$: Observable<IArticle>;
  public comments$: Observable<IComment[]>;
  public isLoading$: Observable<boolean>;
  public error$: Observable<string>;
  public isAuthor$: Observable<boolean>;
  public commentControl = new FormControl();

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

  public addComment(): void {
    if (!this.commentControl.value) {
      return;
    }

    this._store.dispatch(addCommentAction({ articleSlug: this._slug, body: this.commentControl.value }))
  }

  private fetchData(): void {
    this._store.dispatch(getArticleAction({ slug: this._slug }))
    this._store.dispatch(getCommentsAction({ articleSlug: this._slug }))
  }

  private initValues(): void {
    this._slug = this._route.snapshot.paramMap.get('slug');
    this.article$ = this._store.pipe(select(articleSelector));
    this.comments$ = this._store.pipe(select(commentsSelector))
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
