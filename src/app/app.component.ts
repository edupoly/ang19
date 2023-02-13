import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang19';
  countries:any=[]
  constructor(public http:HttpClient){}
  
  ngOnInit(){
    this.http.get("https://restcountries.com/v3.1/all").subscribe((data)=>{
      console.log(data)
      this.countries=data;
    })
  }
}
