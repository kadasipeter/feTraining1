import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './component/component.module';
import { CoreModule } from './core/core.module';
import { StateModule } from './state/state.module';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    ComponentModule,
    StateModule
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
