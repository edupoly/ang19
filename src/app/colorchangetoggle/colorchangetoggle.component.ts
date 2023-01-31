import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorchangetoggle',
  templateUrl: './colorchangetoggle.component.html',
  styleUrls: ['./colorchangetoggle.component.css']
})
export class ColorchangeToggleComponent implements OnInit {

  constructor() { }
  flag:boolean=false;
  ngOnInit(): void {
  }
  togglelight(){
    this.flag=!this.flag
  }
  
}
