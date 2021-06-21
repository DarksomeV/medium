import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { FeedModule } from '../shared/components/feed/feed.module';

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
];

@NgModule({
  declarations: [
    GlobalFeedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
  ]
})
export class GlobalFeedModule {}