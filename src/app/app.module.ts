import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './componets/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkItemService } from './shared/work-item.service';
import { WorkItemApiService } from './shared/work-item-api.service';
import { GetPriorityPipe } from './shared/get-priority.pipe';
import { WorkItemsComponent } from './componets/work-items/work-items.component';
import { GetSummaryItemsPipe } from './shared/get-summary-items.pipe';
import { SidebarItemsComponent } from './componets/sidebar/sidebar-items/sidebar-items.component';
import { SidebarFilterComponent } from './componets/sidebar/sidebar-filter/sidebar-filter.component';
import { WorkItemDetailComponent } from './componets/work-items/work-item-detail/work-item-detail.component';
import { WorkItemCreateComponent } from './componets/work-items/work-item-create/work-item-create.component';
import { SidebarFooterComponent } from './componets/sidebar/sidebar-footer/sidebar-footer.component';
import { MyNavbarComponent } from './componets/my-navbar/my-navbar.component';
import { WorkItemComponent } from './componets/sidebar/sidebar-items/work-item/work-item.component';
import { WorkItemDashboardComponent } from './componets/work-items/work-item-dashboard/work-item-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GetPriorityPipe,
    GetSummaryItemsPipe,
    WorkItemComponent,
    WorkItemDetailComponent,
    MyNavbarComponent,
    SidebarComponent,
    SidebarFilterComponent,
    SidebarItemsComponent,
    SidebarFooterComponent,
    WorkItemCreateComponent,
    WorkItemDashboardComponent,
    WorkItemsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  exports: [
    GetPriorityPipe,
    GetSummaryItemsPipe
  ],
  providers: [
    WorkItemApiService,
    WorkItemService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
