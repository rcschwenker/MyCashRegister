import { Injectable, NgZone } from '@angular/core';
import { Product } from './product'; // data model
import { PRODUCTS } from './mock-products'; // database +
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';

@Injectable()
export class CartService {
// shoppingCart: Subject<Object> = new ReplaySubject<Object>(1);
  constructor() { }

  set(shoppingCart: Product[]) {
  //  this.shoppingCart.next(shoppingCart);
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    // console.log('shoppingCart=', shoppingCart);
  //  console.log('this.shoppingCart.next(shoppingCart)', this.shoppingCart.next(shoppingCart));
    // console.log('this.shoppingCart=', this.shoppingCart);

  }
  get() {
    return JSON.parse(localStorage.getItem('shoppingCart'));
  }


}
