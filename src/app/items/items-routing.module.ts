import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkItemCreateComponent } from './create/work-item-create.component';
import { WorkItemDashboardComponent } from './dashboard/work-item-dashboard.component';
import { WorkItemDetailComponent } from './detail/work-item-detail.component';
import { WorkItemsComponent } from './work-items.component';

const routes: Routes = [
  {
    path: '', component: WorkItemsComponent,
    children: [
      {
        path: '',
        component: WorkItemDashboardComponent,
      },
      {
        path: ':id',
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
