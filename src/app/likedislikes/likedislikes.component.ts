import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likedislikes',
  templateUrl: './likedislikes.component.html',
  styleUrls: ['./likedislikes.component.css']
})
export class LikedislikesComponent implements OnInit {

  constructor() { }
  likes:number=0;
  dislikes:number=0;
  ngOnInit(): void {
  }
  like(){
    this.likes++;
  }
  dislike(){
    this.dislikes++
  }
}
