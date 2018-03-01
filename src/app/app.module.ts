import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartService } from './cart.service';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryService } from './inventory.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartItemComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CartService, InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
