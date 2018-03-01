import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product'; // MASTER data model
import { PRODUCTS } from '../mock-products'; // database -- added
import { CartService } from '../cart.service';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() newItem: Product; // assigning data types from above data model
  rerender = false;
  cartTotal: number;
  shoppingCart: Product[] = this.cartService.get();
  @Input() PRODUCTS: Product;

  constructor(private cartService: CartService) { } // making cartService available

  ngOnInit() { this.estimateTotal(); }

  doReRender() {
    this.rerender = true;
    this.rerender = false;
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

      const sansDuplicates = currentCart // removes currentCart item if id matches that of newItem
        .filter((c) => c.id !== this.newItem.id);

      sansDuplicates.push(this.newItem); // pushes newItem to sansDuplicates

      this.cartService.set(sansDuplicates); // sets sansDuplicates to cartService
      this.shoppingCart = sansDuplicates;

    } else { // if localStorage IS empty
      newCart.push(this.newItem); // pushes this.newItem;
      this.cartService.set(newCart);
      this.shoppingCart = newCart; // sets newCart (Which simply houses newItem) to cartService
    }
    this.doReRender(); // test later to see if still necessary
    this.estimateTotal();
  }

  DecQuan(quantity) {
    this.newItem.quantity -= 1;
  }

  IncQuan(quantity) {
    this.newItem.quantity += 1;
  }

  // PREVIOUSLY SEPARATED COMPONENT INFO BELOW
  close() {
    const modal = document.getElementById('shoppingCart');
    modal.style.display = 'none';
  }

  checkOut() {
    const modal = document.getElementById('shoppingCart'); // pulls up modal
    modal.style.display = 'block';
  }

  deleteItem(id, shoppingCart) {

    const newCart = shoppingCart.filter((sc) => sc.id !== id);
    /*const newCart = [];
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].id !== id) { // if id selected is != to id of item in shoppingCart (shoppingCart[i])...
        newCart.push(shoppingCart[i]); // push said items to newCart[]
      }
    } */
    this.cartService.set(newCart); // overwrite 'shoppingCart' in localStorage with these items
    this.shoppingCart = newCart;
    this.estimateTotal();
  }


  estimateTotal() {
    const totals = [];
    for (let i = 0; i < this.shoppingCart.length; i++) { // looping through cart
      if (this.shoppingCart != null && this.shoppingCart.length > 0) {
        totals.push(this.shoppingCart[i].price * this.shoppingCart[i].quantity);
        this.cartTotal = totals.reduce((total, amount) => total + amount);
      } else {
        this.cartTotal = 0;
      }
    }

  }

}
