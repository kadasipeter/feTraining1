import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { WorkItemSelectorsService } from './items/work-items-selectors.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({})
  ],
  providers: [WorkItemSelectorsService]
})
export class AppStateModule { }
