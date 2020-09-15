import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


const routes: Routes = [
  {
    path: 'admin', component: AdminPanelComponent,
    children: [{
      path: 'products', component: AddProductsComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
