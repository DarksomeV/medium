import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CreateArticleComponent } from './create-article.component';
import { ArticleFormModule } from '../shared/components/article-form/article-form.module';
import { CreateArticleService } from './services/create-article.service';
import { CreateArticleEffect } from './store/effects/create-article.effect';
import { reducers } from './store/reducers';

const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  }
]

@NgModule({
  declarations: [
    CreateArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleFormModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducers)
  ],
  providers: [
    CreateArticleService,
  ]
})
export class CreateArticleModule { }
