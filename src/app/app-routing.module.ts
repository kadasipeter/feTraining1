import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [

    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent},
    {
      path: 'items',
      loadChildren: () => import('./component/items/items.module').then(m => m.ItemsModule)
    },
    {
      path: 'example',
      loadChildren: () => import('./component/example/example.module').then(m => m.ExampleModule)
    },
    {
      path: '**',
      loadChildren: () => import('./component/not-found/not-found.module').then(m => m.NotFoundModule)
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
