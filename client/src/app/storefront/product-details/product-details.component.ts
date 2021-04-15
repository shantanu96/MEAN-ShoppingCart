import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  productQuantity: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private snakeBar: MatSnackBar,
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      let productId = params.get('productId');
      this.getProductDetails(productId);
    });
    this.productQuantity = 1;

  }

  getProductDetails(productId: string): void {
    this.productService.getProductById(productId).subscribe((data: Product) => {
      this.product = data;
    });
  }

  addToCart() {
    const userId = '5f92883942605d0cbcd8aa42';
    const price = this.product.price.toString().match(/\d+/)[0];
    this.productService.addProductToCart(userId, this.product.id, this.productQuantity, parseInt(price)).subscribe((data) => {
      if (data == 'success') {
        this.snakeBar.open('Product Added to Cart', 'Close');
      }
    });
  }

  onQtyChange(qty) {
    if (qty > 0) {
      this.productQuantity = qty;
    }
  }

}
