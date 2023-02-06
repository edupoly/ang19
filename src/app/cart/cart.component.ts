import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }
  @Input() cartItems:Array<any>=[];
  ngOnInit(): void {
  }
  getTotal(){
    return this.cartItems.reduce((a,b)=>{
      return (b.price*b.count)+a
    },0)
  }
}
