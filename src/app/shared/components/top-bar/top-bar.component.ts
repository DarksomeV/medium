import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ICurrentUser } from '../../types/current-user.interface';
import { currentUserSelector, isAnonymousSelector, isLoggedInSelector } from '../../../auth/store/selectors';

@Component({
  selector: 'mc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  public isLoggedIn$: Observable<boolean>;
  public isAnonymous$: Observable<boolean>;
  public currentUser$: Observable<ICurrentUser>;

  constructor(
    private _store: Store,
  ) {}

  public ngOnInit(): void {
    this.isLoggedIn$ = this._store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this._store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this._store.pipe(select(currentUserSelector));
  }

}
