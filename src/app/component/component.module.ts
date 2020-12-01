import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkItemComponent } from './sidebar/sidebar-items/work-item/work-item.component';
import { WorkItemDetailComponent } from './work-items/work-item-detail/work-item-detail.component';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarFilterComponent } from './sidebar/sidebar-filter/sidebar-filter.component';
import { SidebarItemsComponent } from './sidebar/sidebar-items/sidebar-items.component';
import { SidebarFooterComponent } from './sidebar/sidebar-footer/sidebar-footer.component';
import { WorkItemCreateComponent } from './work-items/work-item-create/work-item-create.component';
import { WorkItemDashboardComponent } from './work-items/work-item-dashboard/work-item-dashboard.component';
import { WorkItemsComponent } from './work-items/work-items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [
  WorkItemComponent,
  WorkItemDetailComponent,
  MyNavbarComponent,
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
    AppRoutingModule,
    SharedModule
  ],
  exports: [...COMPONENTS]
})
export class ComponentModule { }
