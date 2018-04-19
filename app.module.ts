import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { FEMININOComponent } from './feminino/feminino.component';
import { HeaderComponent } from './header/header.component';
import { MasculinoComponent } from './masculino/masculino.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component'


@NgModule({
  declarations: [
    AppComponent,
    FEMININOComponent,
    HeaderComponent,
    MasculinoComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
