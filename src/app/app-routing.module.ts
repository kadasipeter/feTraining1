import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componets/home/home/home.component';
import { ExampleComponent } from './componets/example/example/example.component';
import { NotFoundComponent } from './componets/not-found/not-found/not-found.component';
import { DetailComponent } from './componets/detail/detail/detail.component';
import { MasterComponent } from './componets/master/master.component';

const routes: Routes = [
  {
    path: '', component: MasterComponent,
    children: [
      {
        path: 'detail/:id',
        component: DetailComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      }]
  },
  { path: 'example', component: ExampleComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
