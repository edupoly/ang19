import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactfromComponent } from './contactfrom/contactfrom.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CountriesComponent } from './countries/countries.component';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';
import { EdupolymapComponent } from './edupolymap/edupolymap.component';
import { HomeComponent } from './home/home.component';
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
        component:EdupolymapComponent
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
    component:ProductsComponent
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
