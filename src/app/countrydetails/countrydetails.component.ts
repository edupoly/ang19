import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countrydetails',
  templateUrl: './countrydetails.component.html',
  styleUrls: ['./countrydetails.component.css']
})
export class CountrydetailsComponent implements OnInit {

  constructor(public ar:ActivatedRoute,public http:HttpClient) { }
  details:any;
  ngOnInit(): void {
    this.ar.params.subscribe((p:any)=>{
      this.http.get(`https://restcountries.com/v2/alpha/${p.code}`).subscribe((details)=>{
        this.details=details;
      })
    })
  }

}
