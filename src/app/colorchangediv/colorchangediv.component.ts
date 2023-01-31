import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorchangediv',
  templateUrl: './colorchangediv.component.html',
  styleUrls: ['./colorchangediv.component.css']
})
export class ColorchangedivComponent implements OnInit {

  constructor() { }
  flag:boolean=false;
  ngOnInit(): void {
  }
  lighton(){
    this.flag=true
  }
  lightoff(){
    this.flag=false
  }
}
