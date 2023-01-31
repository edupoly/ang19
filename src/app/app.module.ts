import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImggalrotationComponent } from './imggalrotation/imggalrotation.component';
import { LikedislikesComponent } from './likedislikes/likedislikes.component';

@NgModule({
  declarations: [
    AppComponent,
    ImggalrotationComponent,
    LikedislikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
