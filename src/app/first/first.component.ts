import { Component, OnInit } from '@angular/core';
import { ArthService } from '../arth.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(public as:ArthService) { }

  ngOnInit(): void {
    this.as.div(12,2).subscribe((res)=>{console.log(res)})

    this.as.mysub.subscribe((res)=>{console.log("mysubject subscribed in First:",res)})
  }
  cdiv(){
    this.as.div(85,2).subscribe((res)=>{console.log(res)})
  }
  cmul(){
    this.as.mul(12,3);
  }
}
