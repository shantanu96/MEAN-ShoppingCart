import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ProductComponent } from './product/product.component';
import { StorefrontComponent } from './storefront/storefront.component';


const routes: Routes = [
  {
    path: 'admin', component: AdminPanelComponent,
    children: [{
      path: 'add_product', component: AddProductsComponent
    }, {
      path: 'product', component: ProductComponent
    }]
  },
  { path: 'storefront', component: StorefrontComponent },
  { path: '', redirectTo: '/storefront', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
