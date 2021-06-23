import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import { select, Store } from "@ngrx/store";

import { IGetTagsResponse } from "./types/get-tags-response.interface";
import { errorSelector, isLoadingSelector, tagsSelector } from "./store/selectors";
import { getTagsAction } from "./store/actions/get-tags.action";
import { TPopularTag}  from "../../types/popular-tag.type";

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public error$: Observable<string>;
  public tags$: Observable<TPopularTag[]>;

  constructor(
    private _store: Store,
  ) {}

  public ngOnInit(): void {
    this.initObservables();
    this.fetchTags();
  }

  private initObservables(): void {
    this.isLoading$ = this._store.pipe(select(isLoadingSelector));
    this.error$ = this._store.pipe(select(errorSelector));
    this.tags$ = this._store.pipe(
      select(tagsSelector),
      filter(Boolean),
      map(({ tags }: IGetTagsResponse) => tags),
      tap((res) => {
        console.log(res)
      })
    );
  }

  private fetchTags(): void {
    this._store.dispatch(getTagsAction());
  }
}
