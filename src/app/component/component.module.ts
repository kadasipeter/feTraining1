import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { ItemsModule } from './feature/items/items.module';
import { ExampleModule } from './feature/example/example.module';
import { NotFoundModule } from './feature/not-found/not-found.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  MyNavbarComponent, MainComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    AppRoutingModule,
    CommonModule,
    ItemsModule,
    ExampleModule,
    NotFoundModule,
    SharedModule
  ],
  exports: [...COMPONENTS]
})
export class ComponentModule { }
