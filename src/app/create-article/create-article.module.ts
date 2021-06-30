import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './create-article.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleFormModule } from '../shared/components/article-form/article-form.module';

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
  ]
})
export class CreateArticleModule { }
