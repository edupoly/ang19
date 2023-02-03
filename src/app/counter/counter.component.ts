import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }
  @Input() i:number=0;
  @Input() step:number=1;
  ngOnInit(): void {
  }
  increment(){
    this.i=this.i+this.step;
  }
  decrement(){
    this.i=this.i-this.step;
  }
}
