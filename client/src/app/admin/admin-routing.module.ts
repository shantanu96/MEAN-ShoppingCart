import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [{
      path: 'add_product', component: AddProductsComponent
    }, {
      path: 'product', component: ProductComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
