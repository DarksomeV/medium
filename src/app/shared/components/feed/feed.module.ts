import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { FeedComponent } from './feed.component';
import { GetFeedEffect } from "./store/effects/get-feed.effect";
import { reducers } from "./reducers";
import { FeedService } from "./services/feed.service";

@NgModule({
  declarations: [
    FeedComponent,
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers)
  ],
  exports: [
    FeedComponent,
  ],
  providers: [
    FeedService,
  ]
})
export class FeedModule {}
