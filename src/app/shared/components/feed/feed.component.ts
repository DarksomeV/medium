import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { getFeedAction } from "./store/actions/get-feed.action";
import { IGetFeedResponse } from "./types/get-feed-response.interface";
import { errorSelector, feedSelector, isLoadingSelector } from "./store/selectors";
import { environment } from "../../../../environments/environment";

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
  public limit: number = environment.limit;
  public baseUrl: string;
  public currentPage$: Observable<number>;

  constructor(
    private _store: Store,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.initObservables();
    this.fetchFeed();
  }

  private initObservables(): void {
    this.isLoading$ = this._store.pipe(select(isLoadingSelector));
    this.error$ = this._store.pipe(select(errorSelector));
    this.feed$ = this._store.pipe(select(feedSelector));
    this.baseUrl = this._router.url.split('?')[0];
    this.currentPage$ = this._route.queryParams.pipe(
      map((params: Params) => Number(params.page || 1))
    )
  }

  private fetchFeed(): void {
    this._store.dispatch(getFeedAction({url: this.apiUrl}));
  }

}
