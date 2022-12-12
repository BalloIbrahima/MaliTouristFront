import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardRoutingModule } from './dasboard-routing.module';
import { DasboardComponent } from './dasboard.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    DashboardRoutingModule
  ],
  providers: [],
  bootstrap: [DasboardComponent]
})
export class AppModule { }
