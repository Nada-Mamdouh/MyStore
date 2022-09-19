import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url:string = "../../assets/data.json";
  constructor(private httpclient: HttpClient) { }
  getProducts(): Observable<Product[]|any>{
    return this.httpclient.get(this.url);
  }
}
