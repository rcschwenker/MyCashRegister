import { Injectable } from '@angular/core';
import { Product } from './product'; // data model
import { PRODUCTS } from './mock-products'; // database +
import { CartItemComponent } from './cart-item/cart-item.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductsComponent } from './products/products.component';

@Injectable()
export class InventoryService {

  constructor() { }
  set(inventory: Product[]) {
    localStorage.setItem('inventory', JSON.stringify(inventory));

  }
  get() {
    return JSON.parse(localStorage.getItem('inventory'));
  }
}
