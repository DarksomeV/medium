import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

import { IProfile } from '../../../shared/types/profile.interface';
import { getUserProfileAction } from '../../store/actions/get-user-profile.action';
import { errorSelector, isLoadingSelector, userProfileSelector } from '../../store/selectors';
import { currentUserSelector } from '../../../auth/store/selectors';
import { ICurrentUser } from '../../../shared/types/current-user.interface';

@Component({
  selector: 'mc-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public userProfile$: Observable<IProfile>;
  public error$: Observable<string>;
  public isCurrentUser$: Observable<boolean>;
  public apiUrl$: Observable<string>;

  private _apiUrlSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private _store: Store,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {}

  public ngOnInit(): void {
    this.initValues();
    this.initListeners();
  }

  private initValues(): void {
    this.isLoading$ = this._store.pipe(select(isLoadingSelector));
    this.error$ = this._store.pipe(select(errorSelector));
    this.userProfile$ = this._store.pipe(select(userProfileSelector));
    this.apiUrl$ = this._apiUrlSubject.asObservable().pipe(
      tap((slug: string) => console.log(slug, 'in tap')),
      map((slug: string) => this.getApiUrl(slug))
    );

    this.isCurrentUser$ = combineLatest([
      this._store.pipe(
        select(currentUserSelector),
        filter(Boolean),
      ),
      this._store
        .pipe(
          select(userProfileSelector),
          filter(Boolean),
        )
    ]).pipe(
      map(([currentUser, userProfile]: [ICurrentUser, IProfile]) => {
        return currentUser.username === userProfile.username;
      })
    )
  }

  private initListeners(): void {
    this._route.params
      .pipe(
        filter(Boolean),
      )
      .subscribe((params: Params) => {
        this._apiUrlSubject.next(params.slug)
        this.fetchUserProfile(params.slug)
      })
  }

  private fetchUserProfile(slug: string): void {
    this._store.dispatch(getUserProfileAction({ slug }))
  }

  private getApiUrl(slug: string): string {
    const isFavorites: boolean = this._router.url.includes('favorites');

    return  isFavorites
      ? `/articles?favorited=${slug}`
      : `/articles?author=${slug}`;
  }
}
