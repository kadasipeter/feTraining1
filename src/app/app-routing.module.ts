import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componets/home/home/home.component';
import { AboutComponent } from './componets/about/about/about.component';
import { ExampleComponent } from './componets/example/example/example.component';
import { NotFoundComponent } from './componets/not-found/not-found/not-found.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'about-component', component: AboutComponent },
  { path: 'example-component', component: ExampleComponent },
  { path: '', redirectTo: '/home-component', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
