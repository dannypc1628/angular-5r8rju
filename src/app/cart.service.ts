import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';

//StackBlitz預設會在在 app.module.ts 中提供購物車服務。
//你也可以像文件中改以@Injectable({ providedIn: 'root'})的打包優化的相依性注入方式。
@Injectable()
export class CartService {
  items = [];
  constructor(private http:HttpClient) { }
  
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

}