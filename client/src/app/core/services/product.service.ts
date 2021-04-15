import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product, ProductAdapter } from '../models/product.model';
import { Category, CategoryAdapter } from '../models/category.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  addProductUrl = 'http://localhost:3000/admin/product/add';
  getProductsUrl = 'http://localhost:3000/api/product/';
  getCategoriesUrl = 'http://localhost:3000/admin/category/';

  constructor(
    private http: HttpClient,
    private categroyAdapter: CategoryAdapter,
    private productAdapter: ProductAdapter
  ) { }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.addProductUrl, product);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.getCategoriesUrl).pipe(
      map((data: Category[]) => data.map(item => this.categroyAdapter.adapt(item))),
      catchError(error => {
        return throwError('Something went wrong');
      })
    );
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.getProductsUrl).pipe(
      map((data: Product[]) => data.map(item => this.productAdapter.adapt(item))),
      catchError(error => {
        return throwError('Something went wrong');
      })
    );
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(this.getProductsUrl + id).pipe(
      map((data: Product) => this.productAdapter.adapt(data)),
      catchError(error => {
        return throwError('Something went wrong');
      })
    );
  }

  addProductToCart(customerId: string, productId: string, qty: number, price: number) {
    return this.http.post('/api/cart/add/' + customerId, { productId, qty, price });
  }

  getProductsInCart(customerId: string) {
    return this.http.get('/api/cart/' + customerId);
  }

  removeItemFromCart(customerId: string, productId) {
    return this.http.get('/api/cart/delete/' + customerId + '/' + productId);
  }
}
