import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.queryParams.subscribe((qp:any)=>{
      console.log("qp::",JSON.parse(qp.product))
    })
  }

}