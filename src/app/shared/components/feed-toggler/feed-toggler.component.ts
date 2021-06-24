import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { isLoggedInSelector } from '../../../auth/store/selectors';

@Component({
  selector: 'mc-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss']
})
export class FeedTogglerComponent implements OnInit {
  @Input() public tagName: string;

  public isLoggedIn$: Observable<boolean>;

  constructor(
    private _store: Store,
  ) {}

  public ngOnInit(): void {
    this.initObservables();
  }

  private initObservables(): void {
    this.isLoggedIn$ = this._store.pipe(select(isLoggedInSelector))
  }
}
