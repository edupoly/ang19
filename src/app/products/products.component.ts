import { Component, OnInit } from '@angular/core';
import { products } from '../products'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Array<any>=[];
  cart:Array<any>=[]
  constructor(){
    this.products=products;
  }
  addToCart(product:any){
    this.cart.push({...product,count:1})
  }
  ngOnInit(): void {
  }
  isProductInCart(p:any){
    var x = this.cart.find(function(cp){
        if(cp.title===p.title){
          return true
        }
        else{
          return false
        }
    })
    return x
  }
  incCartProductCount(p:any){
    this.cart= this.cart.map((cp)=>{
      console.log("cp::",cp)
      console.log("p::",p)
      if(cp.title===p.title){
        cp.count++;
      }
      return cp
    })
  }
  productCount(p:any){
    var prod = this.cart.find((cp)=>{
      if(cp.title===p.title){
        return true
      }
      else{
        return false
      }
    })
    return prod?prod.count:false
  }
}
