import { NgModule } from '@angular/core';
import { BackendErrorsComponent } from './backend-errors.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BackendErrorsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackendErrorsComponent
  ]
})
export class BackendErrorsModule {}
