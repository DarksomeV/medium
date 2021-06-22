import { Component, Input, OnInit } from '@angular/core';

import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { getFeedAction } from "./store/actions/get-feed.action";
import { IGetFeedResponse } from "./types/get-feed-response.interface";
import { errorSelector, feedSelector, isLoadingSelector } from "./store/selectors";

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input() public apiUrl: string;

  public isLoading$: Observable<boolean>;
  public error$: Observable<string>;
  public feed$: Observable<IGetFeedResponse>;

  constructor(
    private _store: Store,
  ) {}

  public ngOnInit(): void {
    this.initObservables();
    this.fetchFeed();
  }

  private initObservables(): void {
    this.isLoading$ = this._store.pipe(select(isLoadingSelector));
    this.error$ = this._store.pipe(select(errorSelector));
    this.feed$ = this._store.pipe(select(feedSelector));
  }

  private fetchFeed(): void {
    this._store.dispatch(getFeedAction({url: this.apiUrl}));
  }

}
