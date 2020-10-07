import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { StorefrontComponent } from './storefront.component';

const routes: Routes = [
  { path: '', component: StorefrontComponent },
  { path: 'product_details/:productId', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorefrontRoutingModule { }
