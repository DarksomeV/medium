import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { TagsComponent } from './tags.component';
import { GetTagsEffect } from "./store/effects/get-tags.effect";
import { reducers } from "./store/reducers";
import { TagsService } from "./services/tags.service";
import { ErrorMessageModule } from "../../components/error-message/error-message.module";
import { LoadingModule } from "../../components/loading/loading.module";

@NgModule({
  declarations: [
    TagsComponent
  ],
  exports: [
    TagsComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetTagsEffect]),
    StoreModule.forFeature('tags', reducers),
    ErrorMessageModule,
    LoadingModule,
    RouterModule,
  ],
  providers: [
    TagsService,
  ]
})
export class TagsModule {}
