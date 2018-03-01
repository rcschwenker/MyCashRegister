import { Component, OnInit } from '@angular/core';
import { Product } from '../product'; // data model
import { PRODUCTS } from '../mock-products'; // database
import { InventoryService } from '../inventory.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})


export class ProductsComponent implements OnInit {

  Products: Product[] = this.inventoryService.get();  // merging the database with it's subsequent data types layed out in the data model
  selectedProduct: Product = { // putting something here since something isn't always selected, like a starting point
    id: 2,
    productName: 'oranges',
    cost: 1.05,
    price: 2.67,
    description: '4lb bag of oranges',
    img: './assets/icons/bagoranges.png',
    stock: 2,
    quantity: 1
  };

  constructor(private inventoryService: InventoryService) {
  }

  ngOnInit() {
    console.log('this.Products', this.Products);
    if (!this.Products) {
      this.Products = PRODUCTS;
    }
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  close() {
    const modal = document.getElementById('inventoryModal');
    modal.style.display = 'none';
  }

  manageInventory(product: Product) { //  'save changes' button should kick off a function
    // which utilizes the InventoryService to 'set' the new stock/overwrite/think arrow function on cartItemComponent.
    // Need to set mock-products to this localStorage, this is the data that will be manipulated, this is ultimately the data
    // that needs to be displayed.
    // PROBLEM WITH CSS tooltip:hover covering up with gear button.
    this.selectedProduct = product;
    const span = document.getElementsByClassName('close');
    const modal = document.getElementById('inventoryModal');
    modal.style.display = 'block';

    window.onclick = function(event) {
      if (event.target === modal) { // (1 === '1') > is false ......  (1 == '1') > is true
        // !== same as === (equal); != same as == (not equal)
        modal.style.display = 'none';
      }
    };
  }
  deleteFromInventory(selectedProduct) {
    this.selectedProduct.stock -= 1;
  }

  addToInventory(selectedProduct) {
    this.selectedProduct.stock += 1;
  }
  confirmCartAdd(product: Product) { /*pulls up modal 2*/
    this.selectedProduct = product;
    const span = document.getElementsByClassName('closeThis')[0];
    const modal = document.getElementById('confirmCartPopUp');
    modal.style.display = 'block';

    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };


  }
}
