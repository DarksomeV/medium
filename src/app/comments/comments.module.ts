import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CommentsService } from './services/comments.service';
import { GetCommentsEffect } from './store/effects/get-comments.effect';
import { reducers } from './store/reducers';
import { AddCommentEffect } from './store/effects/add-comment.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetCommentsEffect, AddCommentEffect]),
    StoreModule.forFeature('comments', reducers),
  ],
  providers: [
    CommentsService,
  ]
})
export class CommentsModule {}
