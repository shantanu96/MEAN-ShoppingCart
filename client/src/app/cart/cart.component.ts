import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any;
  totalPrice: number;
  totalQty: number;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getItemsInCart();
  }

  getItemsInCart() {
    const userId = '5f92883942605d0cbcd8aa42';
    this.productService.getProductsInCart(userId).subscribe((data) => {
      console.log(data);
      this.cart = data;
      this.totalPrice = this.cart.totalPrice;
      this.totalQty = this.cart.totalQty;
    });
  }
}
