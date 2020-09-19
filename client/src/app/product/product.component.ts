import { Component, OnInit } from '@angular/core';
import { Product } from '../core/models/product.model';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'description', 'price', 'stock', 'discount', 'category'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    }, error => {
      console.error('Error!', error);
    });
  }

}
