export class ProductInCartDetails {
  productname: string;
  productprice: number;
  producturl: string;
  amount: number;
  constructor(){
    this.productname = '';
    this.productprice = 0.0;
    this.producturl = '';
    this.amount = 0.0;
  }
}
