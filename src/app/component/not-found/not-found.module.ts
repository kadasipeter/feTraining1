import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';

const COMPONENTS = [
  NotFoundComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
  ],
  exports: [...COMPONENTS]
})
export class NotFoundModule { }
