import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TagFeedComponent } from './components/tag-feed/tag-feed.component';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from "../shared/components/banner/banner.module";
import { TagsModule } from "../shared/modules/tags/tags.module";
import { FeedTogglerModule } from '../shared/components/feed-toggler/feed-toggler.module';

const routes: Routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
  },
];

@NgModule({
  declarations: [
    TagFeedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    TagsModule,
    FeedTogglerModule,
  ]
})
export class TagFeedModule {}
