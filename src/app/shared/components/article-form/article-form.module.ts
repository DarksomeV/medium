import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleFormComponent } from './article-form.component';
import { BackendErrorsModule } from '../backend-errors/backend-errors.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArticleFormComponent,
  ],
  imports: [
    CommonModule,
    BackendErrorsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ArticleFormComponent,
  ]
})
export class ArticleFormModule {}
