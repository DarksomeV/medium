import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { YourFeedComponent } from './components/global-feed/your-feed.component';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from "../shared/components/banner/banner.module";
import { TagsModule } from "../shared/modules/tags/tags.module";
import { FeedTogglerModule } from '../shared/components/feed-toggler/feed-toggler.module';

const routes: Routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  },
];

@NgModule({
  declarations: [
    YourFeedComponent,
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
export class YourFeedModule {}
