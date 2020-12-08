import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { ItemsModule } from './feature/items/items.module';
import { ExampleModule } from './feature/example/example.module';
import { NotFoundModule } from './feature/not-found/not-found.module';

const COMPONENTS = [
  MainComponent,
  MyNavbarComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [...COMPONENTS]
})
export class ComponentModule { }
