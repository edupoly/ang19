import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  myfirstname:string='praveen';
  mylastname:string=''
  ngOnInit(): void {
  }

  sayHi(e:Event){
    this.mylastname = e.toString(); 
  }

}
