import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { EdupolymapComponent } from './edupolymap/edupolymap.component';
import { EdupolycontactformComponent } from './edupolycontactform/edupolycontactform.component';
import { CountriesComponent } from './countries/countries.component';
import {HttpClientModule} from '@angular/common/http';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    ServicesComponent,
    EdupolymapComponent,
    EdupolycontactformComponent,
    CountriesComponent,
    CountrydetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
