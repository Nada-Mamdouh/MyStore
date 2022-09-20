import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/_models/product';
import { ProductInCartDetails } from 'src/app/_models/product-in-cart-details';
import { Router } from '@angular/router';
import { CheckOutInfo } from 'src/app/_models/check-out-info';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts:ProductInCartDetails[]=[];
  checkoutInfo:CheckOutInfo = new CheckOutInfo();
  total:number=0;
  @Output() countOfItems:EventEmitter<number>=new EventEmitter;

  constructor(private router:Router,private cartSer:CartService) { }

  ngOnInit(): void {
    this.cartProducts = this.cartSer.getCartItems();
    this.total = Number(this.cartSer.getTotal().toFixed(2));
  }
  removeFromCart(prod:ProductInCartDetails){
    this.cartSer.removeFromCart(prod);
    this.total = Number(this.cartSer.getTotal().toFixed(2));
  }
  doCheckOut(data:CheckOutInfo){
    console.log(data);
    this.router.navigate(['confirmation'],{queryParams:{userfullname:data.fullname,
                                                        ordertotal:this.total}
                                          });
    this.cartSer.setCartItemsCount(0);

  }
  onChange(e:any){
    console.log(`your entered ${e}`);
  }


}
