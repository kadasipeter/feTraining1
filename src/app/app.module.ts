import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppStateModule } from './state/app-state.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    AppStateModule
  ],
  exports: [AppRoutingModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
