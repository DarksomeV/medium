import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { ArticleComponent } from './article.component';
import { reducers } from "./store/reducers";
import { ErrorMessageModule } from '../shared/components/error-message/error-message.module';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { ArticleService } from '../shared/services/article.service';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { TagListModule } from '../shared/components/tag-list/tag-list.module';

const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  }
];

@NgModule({
  declarations: [
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    RouterModule.forChild(routes),
    TagListModule,
  ],
  providers: [
    ArticleService,
  ]
})
export class ArticleModule {}
