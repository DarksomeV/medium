import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommentComponent } from './comment.component';

@NgModule({
  declarations: [
    CommentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CommentComponent,
  ]
})
export class CommentModule {}
