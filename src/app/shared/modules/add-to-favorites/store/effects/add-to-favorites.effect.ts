import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AddToFavoritesService } from '../../services/add-to-favorites.service';
import {
  addToFavoritesAction,
  addToFavoritesFailureAction,
  addToFavoritesSuccessAction
} from '../actions/add-to-favorites.action';
import { IArticle } from '../../../../types/article.interface';

@Injectable()
export class AddToFavoritesEffect {
  constructor(
    private _actions$: Actions,
    private _addToFavoritesService: AddToFavoritesService,
  ) {
  }

  addToFavorites$ = createEffect(() => this._actions$.pipe(
      ofType(addToFavoritesAction),
      switchMap(({isFavorited, slug}) => {
        const article$ = isFavorited
          ? this._addToFavoritesService.removeFromFavorites(slug)
          : this._addToFavoritesService.addToFavorites(slug)

        return article$.pipe(
          map((article: IArticle) => {
            return addToFavoritesSuccessAction({article});
          }),
          catchError(() => {
            return of(addToFavoritesFailureAction())
          })
        )
      })
    )
  )
}


