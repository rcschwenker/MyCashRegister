import { Injectable } from '@angular/core';
import { Product } from './product'; // data model
import { PRODUCTS } from './mock-products'; // database +
import { CartItemComponent } from './cart-item/cart-item.component';


@Injectable()
export class CartService {
  constructor() { }

  set(shoppingCart: Product[]) {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));

  }
  get() {
    return JSON.parse(localStorage.getItem('shoppingCart'));
  }


}
