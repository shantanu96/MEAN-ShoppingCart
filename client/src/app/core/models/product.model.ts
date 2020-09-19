import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    discount: number;
    category: string;
    image: string;
}

@Injectable({
    providedIn: 'root'
})

export class ProductAdapter implements Adapter<Product>{
    adapt(item: any): Product {
        return new class implements Product {
            id = item._id;
            name = item.name;
            description = item.description;
            price = item.price;
            stock = item.stock;
            discount = item.discount;
            category = item.category;
            image = item.image;
        }();
    }
}