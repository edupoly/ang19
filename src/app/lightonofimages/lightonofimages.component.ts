import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightonofimages',
  templateUrl: './lightonofimages.component.html',
  styleUrls: ['./lightonofimages.component.css']
})
export class LightonofimagesComponent implements OnInit {

  constructor() { }
  flag:boolean=true;
  onimg:string="https://cdn.pixabay.com/photo/2019/09/29/22/06/light-bulb-4514505__340.jpg";
  offimg:string="https://cdn.pixabay.com/photo/2023/01/13/10/40/lightbulb-7715768__340.jpg";
  ngOnInit(): void {
  }
  toggle(){
    this.flag=!this.flag;
  }
}
