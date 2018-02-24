import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
// import { newItem } from '../cart-item';
import { Product } from '../product'; // MASTER data model
import { PRODUCTS } from '../mock-products'; // database -- added
import { CartService } from '../cart.service'; // service

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() newItem: Product; // assigning data types from above data model
  reRender = false;
  constructor(private cartService: CartService, private changeDetectionRef: ChangeDetectorRef) { } // making cartService available

  ngOnInit() {

  }
  closeModal() {
    const modal = document.getElementById('confirmCartPopUp');
    modal.style.display = 'none';
  }


  addToCart() {  // runs when user clicks 'yes' to add to cart...
    const newCart = [];
    const currentCart = this.cartService.get();

    this.closeModal();
    alert('item(s) successfully added to cart');


    if (currentCart != null && currentCart.length > 0) {
      console.log('currentCart NOT empty, filter!', 'currentCart:', currentCart);

      const sansDuplicates = currentCart // removes currentCart item if id matches that of newItem
      .filter((c) => c.id !== this.newItem.id);

      console.log('this.currentCart=', currentCart, 'sansDuplicates', sansDuplicates);
      sansDuplicates.push(this.newItem); // pushes newItem to sansDuplicates

      console.log('sansDuplicates after newItem push=', sansDuplicates);
      this.cartService.set(sansDuplicates); // sets sansDuplicates to cartService

    } else { // if localStorage IS empty
      newCart.push(this.newItem); // pushes this.newItem;
      console.log('currentCart EMPTY, add this.newItem:', this.newItem);
      this.cartService.set(newCart); // sets newCart (Which simply houses newItem) to cartService
    }
    this.shoppingCart = this.cartService.get();
    // this.cartService.get(); // acts as a 'refresher'
    this.changeDetectionRef.detectChanges();
  }

  DecQuan(quantity) {
    this.newItem.quantity -= 1;
  }

  IncQuan(quantity) {
    this.newItem.quantity += 1;
  }



}
