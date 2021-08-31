import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routerReducer, StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { environment } from '@env/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TopBarModule } from './shared/components/top-bar/top-bar.module';
import { PersistenceService } from './shared/services/persistence.service';
import { AuthInterceptor } from './shared/services/auth-interceptor.service';
import { GlobalFeedModule } from './global-feed/global-feed.module';
import { YourFeedModule } from './your-feed/your-feed.module';
import { TagFeedModule } from './tag-feed/tag-feed.module';
import { ArticleModule } from './article/article.module';
import { CreateArticleModule } from './create-article/create-article.module';
import { EditArticleModule } from './edit-article/edit-article.module';
import { SettingsModule } from './settings/settings.module';
import { UserProfileModule } from './user-profile/user-profile.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CreateArticleModule,
    EditArticleModule,
    ArticleModule,
    SettingsModule,
    UserProfileModule,

    // todo: move to one container module and handle route changing. Not copy-paste modules
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,

    StoreModule.forRoot({router: routerReducer}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StoreRouterConnectingModule.forRoot(),
    TopBarModule,
  ],
  providers: [
    PersistenceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
