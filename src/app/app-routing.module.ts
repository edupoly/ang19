import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { Auth2Guard } from './auth2.guard';
import { ContactfromComponent } from './contactfrom/contactfrom.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CountriesComponent } from './countries/countries.component';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';
import { EdupolymapComponent } from './edupolymap/edupolymap.component';
import { HomeComponent } from './home/home.component';
import { MyauthGuard } from './myauth.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"aboutus",
    component:AboutusComponent
  },
  {
    path:"contactus",
    component:ContactusComponent,
    children:[
      {
        path:"map",
        component:EdupolymapComponent,
        canActivate:[MyauthGuard]
      },
      {
        path:'myform',
        component:ContactfromComponent
      }      
    ]
  },
  {
    path:"edupolymap",
    component:EdupolymapComponent
  },
  {
    path:"countries",
    component:CountriesComponent,
    children:[
      {
        path:"countrydetails/:code",
        component:CountrydetailsComponent
      }
    ]
  },
  {
    path:'products',
    component:ProductsComponent,
    canActivate:[MyauthGuard,Auth2Guard]
  },
  {
    path:'productDetails',
    component:ProductdetailsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
