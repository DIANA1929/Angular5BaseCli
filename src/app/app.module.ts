import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent, routes } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatProgressBarModule } from '@angular/material'; //todos los componentes
      

import { APP_PROVIDERS } from './app.providers';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { GitHubCardComponent } from "./git-hub-card/git-hub-card.component";
import { ContactComponent } from './contact/contact.component';


export const MATERIAL_COMPONENTS = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatSelectModule
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    GitHubCardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MATERIAL_COMPONENTS,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]//APLICACION CON LA QUE DEBE DE INICIAR
})
export class AppModule { }
