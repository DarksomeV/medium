import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';

import { AddToFavoritesComponent } from './add-to-favorites.component';
import { AddToFavoritesService } from './services/add-to-favorites.service';
import { AddToFavoritesEffect } from './store/effects/add-to-favorites.effect';

@NgModule({
  declarations: [
    AddToFavoritesComponent,
  ],
  exports: [
    AddToFavoritesComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([AddToFavoritesEffect])
  ],
  providers: [
    AddToFavoritesService,
  ]
})
export class AddToFavoritesModule {}
