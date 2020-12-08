import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './component/feature/example/example.component';
import { NotFoundComponent } from './component/feature/not-found/not-found.component';
import { MainComponent } from './component/main/main.component';

const routes: Routes = [

    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent},
    {
      path: 'items',
      loadChildren: () => import('./component/feature/items/items.module').then(m => m.ItemsModule)
    },
    {
      path: 'example',
      loadChildren: () => import('./component/feature/example/example.module').then(m => m.ExampleModule)
    },
    {
      path: '**',
      loadChildren: () => import('./component/feature/not-found/not-found.module').then(m => m.NotFoundModule)
    },
  { path: 'example', component: ExampleComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
