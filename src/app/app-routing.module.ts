import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkItemsComponent } from './componets/work-items/work-items.component';
import { WorkItemDetailComponent } from './componets/work-items/work-item-detail/work-item-detail.component';
import { WorkItemCreateComponent as WorkItemCreate } from './componets/work-items/work-item-create/work-item-create.component';
import { ExampleComponent } from './componets/example/example.component';
import { NotFoundComponent } from './componets/not-found/not-found.component';
import { WorkItemDashboardComponent } from './componets/work-items/work-item-dashboard/work-item-dashboard.component';

const routes: Routes = [
  {
    path: 'items', component: WorkItemsComponent,
    children: [
      {
        path: 'dashboard',
        component: WorkItemDashboardComponent,
      },
      {
        path: 'detail/:id',
        component: WorkItemDetailComponent,
      },
      {
        path: 'create',
        component: WorkItemCreate,
      }]
  },
  { path: 'example', component: ExampleComponent },
  { path: '', redirectTo: 'items/dashboard', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
