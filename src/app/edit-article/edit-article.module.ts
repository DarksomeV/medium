import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { EditArticleComponent } from './edit-article.component';
import { ArticleFormModule } from '../shared/components/article-form/article-form.module';
import { EditArticleService } from './services/edit-article.service';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { UpdateArticleEffect } from './store/effects/update-article.effect';
import { reducers } from './store/reducers';
import { LoadingModule } from '../shared/components/loading/loading.module';

const routes: Routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  }
]

@NgModule({
  declarations: [
    EditArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleFormModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetArticleEffect, UpdateArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    LoadingModule
  ],
  providers: [
    SharedArticleService,
    EditArticleService,
  ]
})
export class EditArticleModule {}
