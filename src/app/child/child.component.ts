import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  
  @Input() x:string='';

  ngOnInit(): void {
  }

  @Output() y = new EventEmitter();

  phi(){
    this.y.emit("gubbala");
  }
}
