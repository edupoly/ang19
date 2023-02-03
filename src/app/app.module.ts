import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImggalrotationComponent } from './imggalrotation/imggalrotation.component';
import { LikedislikesComponent } from './likedislikes/likedislikes.component';
import { StudentCardsComponent } from './student-cards/student-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    ImggalrotationComponent,
    LikedislikesComponent,
    StudentCardsComponent
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
