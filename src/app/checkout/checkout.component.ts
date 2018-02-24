import { Component, OnInit, Input, NgZone, ChangeDetectorRef } from '@angular/core';
import { Product } from '../product'; // data types
import { PRODUCTS } from '../mock-products'; // database
import { CartService } from '../cart.service'; // service
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})


export class CheckoutComponent implements OnInit {
  // shoppingCart: Product[]; // shoppingCart is an array of type 'Product'
  /* get shoppingCart(): Product[] {
    const result = this.cartService.get();
    console.log('get cart');
    return result;
  }*/
  shoppingCart: Product[] = this.cartService.get();
  cartTotal: number;
  @Input() PRODUCTS: Product; // database data type pairing
  reRender = false;

  constructor(private cartService: CartService, private zone: NgZone, private changeDetectionRef: ChangeDetectorRef) {
  /* this.cartService.shoppingCart.subscribe((nextValue) => {
      // this.changeDetectionRef.detectChanges();
      console.log(nextValue);
      this.estimatedTotal();
    });*/
// MAY NOT BE WORKING BECAUSE THERE IS NO INITIAL VALUE SET TO SUBSCRIBE TO. MAYBE CHANGE TO BEHAVIORSUBJECT AND SET
// INITIAL VALUE

  }


  ngOnInit() {
    this.estimatedTotal();
  }

  close() {
    const modal = document.getElementById('shoppingCart');
    modal.style.display = 'none';
  }

  checkOut() {
    const modal = document.getElementById('shoppingCart'); // pulls up modal
    modal.style.display = 'block';
  }

  deleteItem(id, shoppingCart) {
    console.log('id to be deleted ' + id.toString());

    // write as an arrow function
    // const newCart=shoppingCart.filter((sc)=>sc.id !== id);
// this.changeDetectionRef.detectChanges();

    const newCart = [];
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].id !== id) { // if id selected is != to id of item in shoppingCart (shoppingCart[i])...
        newCart.push(shoppingCart[i]); // push said items to newCart[]
      }
    }
    this.shoppingCart = this.cartService.get();
    this.cartService.set(newCart); // overwrite 'shoppingCart' in localStorage with these items
    this.reRender = true;
    this.changeDetectionRef.detectChanges();
    this.reRender = false;
    this.changeDetectionRef.detectChanges();
  }

  estimatedTotal() {
    const totals = [];
    for (let i = 0; i < this.shoppingCart.length; i++) { // looping through cart
      if (this.shoppingCart != null && this.shoppingCart.length > 0) {
        console.log('shoppingCart not empty');
        totals.push(this.shoppingCart[i].price * this.shoppingCart[i].quantity);
        this.cartTotal = totals.reduce((total, amount) => total + amount);
      } else {
        console.log('shoppingCart empty');
        this.cartTotal = 0;
      }
    }

  }

}
