import { Component, OnInit } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  cartItem = faCartShopping;
  countOfItems:number=0;
  constructor(private cartSer:CartService) { }

  ngOnInit(): void {
    this.cartSer.getCartItemsCount().subscribe(
      next => {this.countOfItems = next;console.log(this.countOfItems)},
      error => console.log(error)
    )

  }

}
