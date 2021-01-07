import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addWorkItemsReducer } from './work-items.reducer';
import { StoreModule } from '@ngrx/store';
import { WorkItemSelectorsService } from './work-items-selectors.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('items', {items: addWorkItemsReducer})
  ],
  providers: [WorkItemSelectorsService]
})
export class WorkItemsStateModule { }
