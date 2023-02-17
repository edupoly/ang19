import { Component, OnInit } from '@angular/core';
import { ArthService } from '../arth.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(public as:ArthService) { }

  ngOnInit(): void {
    this.as.div(12,2).subscribe((res)=>{console.log(res)})
    this.as.mysub.subscribe((res)=>{console.log("mysubject  subscribed in Second:",res)})

  }

}
