import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatagoriesComponent } from './catagories/catagories.component';
import { ImagesComponent } from './images/images.component';
import { Information1Component } from './information1/information1.component';
import { Information2Component } from './information2/information2.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatagoriesComponent,
    ImagesComponent,
    Information1Component,
    Information2Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
