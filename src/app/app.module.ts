import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorchangeComponent } from './colorchange/colorchange.component';
import { TogglestringComponent } from './togglestring/togglestring.component';
import { ColorchangedivComponent } from './colorchangediv/colorchangediv.component';
import { ColorchangeToggleComponent } from './colorchangetoggle/colorchangetoggle.component';
import { LightonofimagesComponent } from './lightonofimages/lightonofimages.component';
import { ImggalleryComponent } from './imggallery/imggallery.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ColorchangeComponent,
    TogglestringComponent,
    ColorchangedivComponent,
    ColorchangeToggleComponent,
    LightonofimagesComponent,
    ImggalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
