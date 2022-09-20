import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/_models/product';
import { ProductInCartDetails } from 'src/app/_models/product-in-cart-details';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem:Product | any;
  itemsCount:number[]=[1,2,3,4,5,6,7,8,9,10];
  productToBeAddedToCart:ProductInCartDetails= new ProductInCartDetails;
  constructor(private cartSer:CartService) { }

  ngOnInit(): void {
  }
  addtocart(data:any){
    data.amount = parseInt(data.amount);
    this.productToBeAddedToCart = data;
    this.cartSer.addToCart(this.productToBeAddedToCart);
  }
  onChange(e:any){
    console.log(e);
  }

}
