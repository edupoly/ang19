import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorchange',
  templateUrl: './colorchange.component.html',
  styleUrls: ['./colorchange.component.css']
})
export class ColorchangeComponent implements OnInit {

  constructor() { }
  flag:boolean=false;
  ngOnInit(): void {
  }
  toggle(){
    this.flag=!this.flag;
  }
}
