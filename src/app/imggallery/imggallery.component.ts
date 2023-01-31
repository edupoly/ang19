import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imggallery',
  templateUrl: './imggallery.component.html',
  styleUrls: ['./imggallery.component.css']
})
export class ImggalleryComponent implements OnInit {

  constructor() { }
  imgs:Array<string>=[];
  newimg:string=''
  ngOnInit(): void {
  }
  addImage(){
    this.imgs.push(this.newimg)
  }
}
