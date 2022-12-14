import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './visiteur/home/home.component';
import { LoginComponent } from './Admin/login/login.component';
import { DasboardComponent } from './Admin/dasboard/dasboard.component';
import { AcceuilComponent } from './Admin/dasboard/acceuil/acceuil.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './visiteur/navbar/navbar.component';
import { VisiteurComponent } from './visiteur/visiteur.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DasboardComponent,
    AcceuilComponent,
    NavbarComponent,
    VisiteurComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
