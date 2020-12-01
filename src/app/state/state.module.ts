import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addWorkItemsReducer } from './work-items.reducer';
import { StoreModule } from '@ngrx/store';
import { WorkItemSelectorsService } from './work-items-selectors.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({items: addWorkItemsReducer})
  ],
  providers: [WorkItemSelectorsService]
})
export class StateModule { }
