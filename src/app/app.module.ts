import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNavbarComponent } from './componets/my-navbar/my-navbar/my-navbar.component';
import { SidebarComponent } from './componets/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './componets/home/home/home.component';
import { InvoiceItemComponent } from './componets/invoice-item/invoice-item/invoice-item.component';
import { WorkItemService } from './shared/work-item.service';
import { AboutComponent } from './componets/about/about/about.component';
import { WorkItemApiService } from './shared/work-item-api.service';
import { SidebarFilterComponent } from './componets/sidebar-filter/sidebar-filter.component';
import { SidebarItemsComponent } from './componets/sidebar-items/sidebar-items.component';
import { SidebarFooterComponent } from './componets/sidebar-footer/sidebar-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceItemComponent,
    AboutComponent,
    MyNavbarComponent,
    SidebarComponent,
    SidebarFilterComponent,
    SidebarItemsComponent,
    SidebarFooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    WorkItemApiService,
    WorkItemService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
