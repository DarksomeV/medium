import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from "../shared/components/banner/banner.module";
import { TagsModule } from "../shared/modules/tags/tags.module";

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
    BannerModule,
    TagsModule,
  ]
})
export class GlobalFeedModule {}
