import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { Product } from '../_models/product';
import { ProductInCartDetails } from '../_models/product-in-cart-details';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts:ProductInCartDetails[] = [];
  total:number = 0;
  countOfItemsInCart:number = 0;

  _cartItemsCount = new BehaviorSubject<number>(this.countOfItemsInCart);
  _cartItemsCount$ = this._cartItemsCount.asObservable();


  constructor() { }
  addToCart(prod: ProductInCartDetails):ProductInCartDetails[]{
    this.cartProducts.push(prod);
    //console.log(this.cartProducts);
    this.setCartItemsCount(this.calculateCountOfItemsInCart());
    return this.cartProducts;
  }
  getCartItems():ProductInCartDetails[]{
    return this.cartProducts;
  }
  clearCartItems():void{
    this.cartProducts = [];
  }
  getTotal():number{
    for(let i=0;i<this.cartProducts.length;i++){
      this.total += (this.cartProducts[i].productprice * this.cartProducts[i].amount);
    }
    return this.total;
  }

  /*methods to get the updated value of items in cart using BehaviorSubject from RxJs */

  /**1- The method that calculate the number of items in the array */
  calculateCountOfItemsInCart(){
    this.countOfItemsInCart = 0;
    for(let i=0;i<this.cartProducts.length;i++){
      this.countOfItemsInCart += this.cartProducts[i].amount;
    }
    return this.countOfItemsInCart;
  }

  /**2- The method that we will subscribe to in components that want to get the updated value*/
  getCartItemsCount():Observable<number>{
    return this._cartItemsCount$;
  }

  /**3- The method that will take the updated value and notify subscribers with it*/
  setCartItemsCount(updatedvalue:number){
    return this._cartItemsCount.next(updatedvalue);
  }




}
