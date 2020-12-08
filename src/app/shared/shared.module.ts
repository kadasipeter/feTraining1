import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetPriorityPipe } from './get-priority.pipe';
import { GetSummaryItemsPipe } from './get-summary-items.pipe';

const COMPONENTS = [GetPriorityPipe, GetSummaryItemsPipe];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule { }
