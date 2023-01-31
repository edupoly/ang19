import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-togglestring',
  templateUrl: './togglestring.component.html',
  styleUrls: ['./togglestring.component.css']
})
export class TogglestringComponent implements OnInit {

  constructor() { }
  flag:boolean=false;
  ngOnInit(): void {
  }
  toggle(){
    this.flag=!this.flag;
  }
}
