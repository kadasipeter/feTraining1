import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetPriorityPipe } from './get-priority.pipe';
import { GetSummaryItemsPipe } from './get-summary-items.pipe';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [GetPriorityPipe, GetSummaryItemsPipe, MyNavbarComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    RouterModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule { }
