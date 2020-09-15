import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';

export interface Category {
    id: string;
    name: string;
}

@Injectable({
    providedIn: 'root'
})
export class CategoryAdapter implements Adapter<Category>{
    adapt(item: any): Category {
       return new class implements Category {
        id = item._id;
        name = item.name;
      }();
    }

}