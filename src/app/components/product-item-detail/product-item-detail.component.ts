import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/_models/product';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  prodId:string | any;
  arrowIcon:string|any = faArrowLeft;
  productDetail:Product = new Product();
  itemsCount:number[]=[1,2,3,4,5,6,7,8,9,10];
  constructor(private activatedrouter:ActivatedRoute,
              private prodSer:ProductsService,
              private cartSer:CartService) { }

  ngOnInit(): void {
    this.prodId = this.activatedrouter.snapshot.paramMap.get('id');
    this.prodSer.getProducts().subscribe(
      next => {this.productDetail = next[this.prodId-1];},
      error => console.log(error)
    )
    console.log(this.prodId);
  }
  addtocart(data:any):void{
    data.amount = parseInt(data.amount);
    this.cartSer.addToCart(data);
  }

}
