import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/_models/product';
import { ProductInCartDetails } from 'src/app/_models/product-in-cart-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts:ProductInCartDetails[]=[];
  total:number=0;
  @Output() countOfItems:EventEmitter<number>=new EventEmitter;

  constructor(private router:Router,private cartSer:CartService) { }

  ngOnInit(): void {
    this.cartProducts = this.cartSer.getCartItems();
    this.total = Number(this.cartSer.getTotal().toFixed(2));
    //this.countOfItems = this.cartSer.getCountOfItemsInCart();
  }
  doCheckOut(data:any){
    console.log(data);
    this.router.navigate(['confirmation'],{queryParams:{userfullname:data.userfullname,
                                                        ordertotal:this.total}
                                          });
    this.cartSer.setCartItemsCount(0);

  }


}
