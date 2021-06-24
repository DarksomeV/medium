import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { FeedService } from "../../services/feed.service";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "../actions/get-feed.action";
import { IGetFeedResponse } from "../../types/get-feed-response.interface";

@Injectable()
export class GetFeedEffect {
  constructor(
    private _actions$: Actions,
    private _feedService: FeedService,
  ) {}

  getFeed$ = createEffect(() => this._actions$.pipe(
    ofType(getFeedAction),
    switchMap(({ url }: { url: string }) => {
      return this._feedService.getFeed(url).pipe(
        map((feed: IGetFeedResponse) => {
          return getFeedSuccessAction({ feed });
        }),
        catchError(() => {
          return of(getFeedFailureAction())
        })
      )
    })
  ))
}
