import { Injectable } from "@angular/core";

import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { TagsService } from "../../services/tags.service";
import { getTagsAction, getTagsFailureAction, getTagsSuccessAction } from "../actions/get-tags.action";
import { IGetTagsResponse } from "../../types/get-tags-response.interface";

@Injectable()
export class GetTagsEffect {
  constructor(
    private _actions$: Actions,
    private _tagsService: TagsService,
  ) {}

  getTags$ = createEffect(() => this._actions$.pipe(
    ofType(getTagsAction),
    switchMap(() => {
      return this._tagsService.getPopularTags().pipe(
        map((tags: IGetTagsResponse) => {
          return getTagsSuccessAction({ tags });
        }),
        catchError(() => {
          return of(getTagsFailureAction())
        })
      )
    })
  ))
}
