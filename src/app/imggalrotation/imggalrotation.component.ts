import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imggalrotation',
  templateUrl: './imggalrotation.component.html',
  styleUrls: ['./imggalrotation.component.css']
})
export class ImggalrotationComponent implements OnInit {

  constructor() { }
  images:Array<string>=[
    "https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/10/31/18/14/dessert-1786311_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/02/12/15/00/biryani-7009110_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg"
  ]
  i:number=0;
  cimg:string=this.images[this.i];
  ngOnInit(): void {
  }
  prev(){
    if(this.i>0){
      this.i--;
    }
    else{
      this.i=this.images.length-1
    }
    this.cimg=this.images[this.i];
  }
  next(){
    if(this.i<this.images.length-1){
      this.i++;
    }
    else{
      this.i=0
    }
    this.cimg=this.images[this.i];
  }
}
