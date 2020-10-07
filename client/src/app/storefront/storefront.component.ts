import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../core/models/product.model';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css']
})
export class StorefrontComponent implements OnInit {

  products: Product[];
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    }, error => {
      console.error('Error!', error);
    });
  }

  onProudctCardClick(productId: string): void {
    this.router.navigate(['/product_details', productId]);
  }

}
