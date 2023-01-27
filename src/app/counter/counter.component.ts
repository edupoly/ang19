import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  count:number=120;

  ngOnInit(): void {
  }
  increment(){
    this.count=this.count+1
  }
  decrement(){
    this.count--;
  }
}
