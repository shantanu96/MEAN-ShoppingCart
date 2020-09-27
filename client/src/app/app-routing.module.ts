import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { StorefrontComponent } from './storefront/storefront.component';


const routes: Routes = [
  { path: 'storefront/product_details', component: ProductDetailsComponent },
  { path: 'storefront', component: StorefrontComponent },
  { path: '', redirectTo: '/storefront', pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
