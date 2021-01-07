import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkItemCreateComponent } from './work-items/work-item-create/work-item-create.component';
import { WorkItemDashboardComponent } from './work-items/work-item-dashboard/work-item-dashboard.component';
import { WorkItemDetailComponent } from './work-items/work-item-detail/work-item-detail.component';
import { WorkItemsComponent } from './work-items/work-items.component';

const routes: Routes = [
  {
    path: '', component: WorkItemsComponent,
    children: [
      {
        path: '',
        component: WorkItemDashboardComponent,
      },
      {
        path: 'detail/:id',
        component: WorkItemDetailComponent,
      },
      {
        path: 'create',
        component: WorkItemCreateComponent,
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
