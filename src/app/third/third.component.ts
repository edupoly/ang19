import { Component, OnInit } from '@angular/core';
import { ArthService } from '../arth.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(public as:ArthService) { }

  ngOnInit(): void {
    //observable
    this.as.div(12,2).subscribe((res)=>{console.log(res)})

    //subject
    this.as.mysub.subscribe((res)=>{console.log("mysubject subscribed in Third:",res)})

  }

}
