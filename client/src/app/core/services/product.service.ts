import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from '../models/product.model';
import { Category, CategoryAdapter } from '../models/category.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  addProductUrl = 'http://localhost:3000/admin/product/add';
  getCategoriesUrl = 'http://localhost:3000/admin/category/';

  constructor(
    private http: HttpClient,
    private categroyAdapter: CategoryAdapter
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
}
