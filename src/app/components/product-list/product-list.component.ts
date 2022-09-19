import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  constructor(private prodSer:ProductsService) { }

  ngOnInit(): void {
    this.prodSer.getProducts().subscribe(
      data  => {this.productList = data;},
      error => {console.log(error)}
    )
  }

}
