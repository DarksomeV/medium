import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { getFeedAction } from "./store/actions/get-feed.action";
import { IGetFeedResponse } from "./types/get-feed-response.interface";
import { errorSelector, feedSelector, isLoadingSelector } from "./store/selectors";
import { environment } from "../../../../environments/environment";
import {ParsedUrl, parseUrl, stringify} from "query-string";

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
  public currentPage: number;

  constructor(
    private _store: Store,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.initObservables();
  }

  private initObservables(): void {
    this.isLoading$ = this._store.pipe(select(isLoadingSelector));
    this.error$ = this._store.pipe(select(errorSelector));
    this.feed$ = this._store.pipe(select(feedSelector));
    this.baseUrl = this._router.url.split('?')[0];
    this._route.queryParams
      .subscribe((params: Params) => {
        this.currentPage = Number(params.page || 1);
        this.fetchFeed()
      })
  }

  private fetchFeed(): void {
    const offset: number = this.currentPage * this.limit - this.limit;
    const parsedUrl: ParsedUrl = parseUrl(this.apiUrl);
    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;

    this._store.dispatch(getFeedAction({url: apiUrlWithParams}));
  }

}
