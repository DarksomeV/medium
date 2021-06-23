import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { FeedComponent } from './feed.component';
import { GetFeedEffect } from "./store/effects/get-feed.effect";
import { FeedService } from "./services/feed.service";
import { reducers } from "./store/reducers";
import { ErrorMessageModule } from "../../components/error-message/error-message.module";
import { LoadingModule } from "../../components/loading/loading.module";
import { PaginationModule } from "../../components/pagination/pagination.module";
import { TagListModule } from "../../components/tag-list/tag-list.module";


@NgModule({
  declarations: [
    FeedComponent,
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule
  ],
  exports: [
    FeedComponent,
  ],
  providers: [
    FeedService,
  ]
})
export class FeedModule {}
