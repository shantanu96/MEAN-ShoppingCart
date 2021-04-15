import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-cart-item-card',
  templateUrl: './cart-item-card.component.html',
  styleUrls: ['./cart-item-card.component.css']
})
export class CartItemCardComponent implements OnInit {

  @Input()
  product: Product;
  @Input()
  name: string;
  @Input()
  price: number;
  @Input()
  qty: number;

  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    console.log(this.product);
  }

  removeItem() {
    const userId = '5f92883942605d0cbcd8aa42';
    const productId = this.name;
    this.productService.removeItemFromCart(userId, productId).subscribe((data) => {
      this.snackBar.open(data.toString(), 'close');
    });
    location.reload();
  }

  onQtyChange(qty: number) {
    const userId = '5f92883942605d0cbcd8aa42';
    console.log(qty - this.qty);
    this.productService.addProductToCart(userId, this.name, qty - this.qty, this.price / this.qty).subscribe((data) => {
      console.log(data);
      location.reload();
    });
  }

}
