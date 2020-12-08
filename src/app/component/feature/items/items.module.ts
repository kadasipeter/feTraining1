import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsRoutingModule } from './items-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkItemComponent } from './sidebar/sidebar-items/work-item/work-item.component';
import { WorkItemDetailComponent } from './work-items/work-item-detail/work-item-detail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarFilterComponent } from './sidebar/sidebar-filter/sidebar-filter.component';
import { SidebarItemsComponent } from './sidebar/sidebar-items/sidebar-items.component';
import { SidebarFooterComponent } from './sidebar/sidebar-footer/sidebar-footer.component';
import { WorkItemCreateComponent } from './work-items/work-item-create/work-item-create.component';
import { WorkItemDashboardComponent } from './work-items/work-item-dashboard/work-item-dashboard.component';
import { WorkItemsComponent } from './work-items/work-items.component';

const COMPONENTS = [
  WorkItemComponent,
  WorkItemDetailComponent,
  SidebarComponent,
  SidebarFilterComponent,
  SidebarItemsComponent,
  SidebarFooterComponent,
  WorkItemCreateComponent,
  WorkItemDashboardComponent,
  WorkItemsComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ItemsRoutingModule,
    SharedModule
  ],
  exports: [...COMPONENTS]
})
export class ItemsModule { }
